"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

export interface MCP {
  id: number;
  name: string;
  description: string;
  rating: number;
  downloads: string;
  category: string;
  tags: string[];
  verified: boolean;
  author: string;
  lastUpdated: string;
  size?: string;
  installCommand?: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  mcps: MCP[];
  createdAt: string;
  lastModified: string;
}

interface PackageContextType {
  currentPackage: Package;
  savedPackages: Package[];
  addMCPToPackage: (mcp: MCP) => void;
  removeMCPFromPackage: (mcpId: number) => void;
  updatePackageInfo: (name: string, description: string) => void;
  savePackage: () => void;
  loadPackage: (packageId: string) => void;
  deletePackage: (packageId: string) => void;
  clearCurrentPackage: () => void;
  generateInstallScript: () => string;
  generateInstallScriptPS: () => string;
  isInPackage: (mcpId: number) => boolean;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export const usePackage = () => {
  const context = useContext(PackageContext);
  if (!context) {
    throw new Error('usePackage must be used within a PackageProvider');
  }
  return context;
};

export const PackageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isSignedIn } = useUser();
  const [currentPackage, setCurrentPackage] = useState<Package>({
    id: 'current',
    name: 'My MCP Package',
    description: 'Custom MCP bundle',
    mcps: [],
    createdAt: new Date().toISOString(),
    lastModified: new Date().toISOString()
  });

  const [savedPackages, setSavedPackages] = useState<Package[]>([]);

  // Load saved packages from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mcp-saved-packages');
      if (saved) {
        setSavedPackages(JSON.parse(saved));
      }
    }
  }, []);

  // Save packages to localStorage whenever savedPackages changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mcp-saved-packages', JSON.stringify(savedPackages));
    }
  }, [savedPackages]);

  const addMCPToPackage = (mcp: MCP) => {
    setCurrentPackage(prev => ({
      ...prev,
      mcps: [...prev.mcps.filter(m => m.id !== mcp.id), mcp],
      lastModified: new Date().toISOString()
    }));
  };

  const removeMCPFromPackage = (mcpId: number) => {
    setCurrentPackage(prev => ({
      ...prev,
      mcps: prev.mcps.filter(m => m.id !== mcpId),
      lastModified: new Date().toISOString()
    }));
  };

  const updatePackageInfo = async (name: string, description: string) => {
    setCurrentPackage(prev => ({ ...prev, name, description, lastModified: new Date().toISOString() }));
    // If signed in and a saved package is selected (by UX later), you could persist here.
    // For now, info is saved when user clicks Save Package, or if loaded from server and then saved again.
  };

  const savePackage = async () => {
    // If signed in, save to server; else fallback to localStorage
    if (isSignedIn) {
      try {
        const res = await fetch('/api/packages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: currentPackage.name,
            description: currentPackage.description,
            mcps: currentPackage.mcps.map((m, idx) => ({ id: m.id, position: idx })),
          }),
        });
        if (!res.ok) throw new Error('Failed to save package');
        const data = await res.json();
        // Refresh list from server
        const list = await fetch('/api/packages', { cache: 'no-store' });
        if (list.ok) {
          const j = await list.json();
          setSavedPackages(
            (j.packages || []).map((p: any) => ({ id: p.id, name: p.name, description: p.description, mcps: [], createdAt: '', lastModified: p.lastModified }))
          );
        }
        // Update currentPackage id to reflect server package? Keep 'current' locally.
      } catch (err) {
        console.error('savePackage', err);
      }
      return;
    }

    const packageToSave = {
      ...currentPackage,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };
    setSavedPackages(prev => [...prev, packageToSave]);
  };

  const loadPackage = async (packageId: string) => {
    if (isSignedIn) {
      try {
        const res = await fetch(`/api/packages/${packageId}`, { cache: 'no-store' });
        if (res.ok) {
          const pkg = await res.json();
          setCurrentPackage({
            id: 'current',
            name: pkg.name,
            description: pkg.description,
            mcps: pkg.mcps || [],
            createdAt: new Date().toISOString(),
            lastModified: pkg.lastModified || new Date().toISOString(),
          });
          return;
        }
      } catch (err) {
        console.error('loadPackage', err);
      }
    }

    const packageToLoad = savedPackages.find(pkg => pkg.id === packageId);
    if (packageToLoad) {
      setCurrentPackage({
        ...packageToLoad,
        id: 'current'
      });
    }
  };

  const deletePackage = async (packageId: string) => {
    if (isSignedIn) {
      try {
        await fetch(`/api/packages/${packageId}`, { method: 'DELETE' });
        const list = await fetch('/api/packages', { cache: 'no-store' });
        if (list.ok) {
          const j = await list.json();
          setSavedPackages((j.packages || []).map((p: any) => ({ id: p.id, name: p.name, description: p.description, mcps: [], createdAt: '', lastModified: p.lastModified })));
        }
      } catch (err) {
        console.error('deletePackage', err);
      }
      return;
    }
    setSavedPackages(prev => prev.filter(pkg => pkg.id !== packageId));
  };

  const clearCurrentPackage = () => {
    setCurrentPackage({
      id: 'current',
      name: 'My MCP Package',
      description: 'Custom MCP bundle',
      mcps: [],
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    });
  };

  const generateInstallScript = () => {
    const mcpCommands = currentPackage.mcps.map(mcp => {
      if (mcp.installCommand && mcp.installCommand.trim().length > 0) {
        return `# Install ${mcp.name}\n${mcp.installCommand}`;
      }
      // Generate install commands based on MCP type
      switch (mcp.category.toLowerCase()) {
        case 'development':
          return `# Install ${mcp.name}\nnpm install -g ${mcp.name.toLowerCase().replace(/\s+/g, '-')}-mcp`;
        case 'database':
          return `# Install ${mcp.name}\npip install ${mcp.name.toLowerCase().replace(/\s+/g, '-')}-mcp`;
        case 'communication':
          return `# Install ${mcp.name}\ncurl -sSL https://install.${mcp.name.toLowerCase().replace(/\s+/g, '')}.com | bash`;
        case 'cloud':
          return `# Install ${mcp.name}\npip install ${mcp.name.toLowerCase().replace(/\s+/g, '-')}-mcp || npm i -g ${mcp.name.toLowerCase().replace(/\s+/g, '-')}-mcp`;
        default:
          return `# Install ${mcp.name}\necho "Installing ${mcp.name}..."`;
      }
    }).join('\n\n');

    return `#!/bin/bash
# MCP Package Installation Script
# Package: ${currentPackage.name}
# Description: ${currentPackage.description}
# Generated: ${new Date().toISOString()}

echo "Installing MCP Package: ${currentPackage.name}"
echo "Description: ${currentPackage.description}"
echo "MCPs to install: ${currentPackage.mcps.length}"
echo ""

${mcpCommands}

echo ""
echo "Installation complete! 🎉"
echo "All ${currentPackage.mcps.length} MCPs have been installed successfully."
`;
  };

  const generateInstallScriptPS = () => {
    const mcpCommands = currentPackage.mcps.map(mcp => {
      const name = mcp.name;
      if (mcp.installCommand && mcp.installCommand.trim().length > 0) {
        return `# Install ${name}\n${mcp.installCommand}`;
      }
      switch (mcp.category.toLowerCase()) {
        case 'development':
          return `# Install ${name}\nnpm install -g ${name.toLowerCase().replace(/\s+/g, '-')}-mcp`;
        case 'database':
          return `# Install ${name}\npip install ${name.toLowerCase().replace(/\s+/g, '-')}-mcp`;
        case 'communication':
          return `# Install ${name}\n# Run vendor installer in PowerShell\nInvoke-WebRequest -UseBasicParsing https://install.${name.toLowerCase().replace(/\s+/g, '')}.com -OutFile install_${name.toLowerCase().replace(/\s+/g, '-')}.ps1\nPowerShell -ExecutionPolicy Bypass -File .\\install_${name.toLowerCase().replace(/\s+/g, '-')}.ps1`;
        default:
          return `# Install ${name}\nWrite-Output "Installing ${name}..."`;
      }
    }).join('\n\n');

    return `# MCP Package Installation Script (PowerShell)\n# Package: ${currentPackage.name}\n# Description: ${currentPackage.description}\n# Generated: ${new Date().toISOString()}\n\n$ErrorActionPreference = 'Stop'\nWrite-Output "Installing MCP Package: ${currentPackage.name}"\nWrite-Output "Description: ${currentPackage.description}"\nWrite-Output "MCPs to install: ${currentPackage.mcps.length}"\nWrite-Output ""\n\n${mcpCommands}\n\nWrite-Output ""\nWrite-Output "Installation complete!"\nWrite-Output "All ${currentPackage.mcps.length} MCPs have been installed successfully."\n`;
  };

  const isInPackage = (mcpId: number) => {
    return currentPackage.mcps.some(mcp => mcp.id === mcpId);
  };

  return (
    <PackageContext.Provider value={{
      currentPackage,
      savedPackages,
      addMCPToPackage,
      removeMCPFromPackage,
      updatePackageInfo,
      savePackage,
      loadPackage,
      deletePackage,
      clearCurrentPackage,
      generateInstallScript,
      generateInstallScriptPS,
      isInPackage
    }}>
      {children}
    </PackageContext.Provider>
  );
};
