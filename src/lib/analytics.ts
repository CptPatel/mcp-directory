// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for common actions
export const trackMCPAdd = (mcpName: string) => {
  event({
    action: 'add_mcp_to_package',
    category: 'MCP',
    label: mcpName,
  });
};

export const trackPackageSave = (packageName: string) => {
  event({
    action: 'save_package',
    category: 'Package',
    label: packageName,
  });
};

export const trackAIGeneration = (model: string) => {
  event({
    action: 'generate_mcp_with_ai',
    category: 'AI',
    label: model,
  });
};

export const trackSearch = (query: string) => {
  event({
    action: 'search',
    category: 'Browse',
    label: query,
  });
};

export const trackInstallScript = (scriptType: 'bash' | 'powershell') => {
  event({
    action: 'generate_install_script',
    category: 'Package',
    label: scriptType,
  });
};