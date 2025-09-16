"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LucideIcon, Search, Package, Sparkles, BookOpen, Users, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
  authRequired?: boolean;
}

interface AnimatedNavBarProps {
  className?: string;
}

export function AnimatedNavBar({ className }: AnimatedNavBarProps) {
  const [activeTab, setActiveTab] = useState("Browse");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const navItems: NavItem[] = [
    { name: "Browse", url: "/browse", icon: Search },
    { name: "Create", url: "/create", icon: Sparkles },
    { name: "Packages", url: "/packages", icon: Package },
    { name: "Docs", url: "/docs", icon: BookOpen },
    { name: "Community", url: "/community", icon: Users },
  ];

  const authNavItems: NavItem[] = [
    { name: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isScrollingUp ? 0 : -100,
          opacity: isScrollingUp ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-4 pt-4",
          className
        )}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            animate={{
              scale: isScrolled ? 0.95 : 1,
              borderRadius: isScrolled ? "24px" : "16px",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="flex items-center justify-between bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg px-6 py-3"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                MCP Directory
              </motion.div>
            </Link>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                
                if (item.authRequired) {
                  return (
                    <SignedIn key={item.name}>
                      <Link
                        href={item.url}
                        onClick={() => setActiveTab(item.name)}
                        className={cn(
                          "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-200",
                          "text-foreground/70 hover:text-foreground hover:bg-muted/50",
                          isActive && "text-primary bg-primary/10"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <Icon size={16} />
                          {item.name}
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full -z-10"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </SignedIn>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-200",
                      "text-foreground/70 hover:text-foreground hover:bg-muted/50",
                      isActive && "text-primary bg-primary/10"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} />
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Auth-only items */}
              <SignedIn>
                {authNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={() => setActiveTab(item.name)}
                      className={cn(
                        "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-200",
                        "text-foreground/70 hover:text-foreground hover:bg-muted/50",
                        isActive && "text-primary bg-primary/10"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <Icon size={16} />
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </SignedIn>
            </div>

            {/* Auth & Theme Controls */}
            <div className="flex items-center gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Sign In
                  </motion.button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 h-9 px-6 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Sign Up
                  </motion.button>
                </SignUpButton>
              </SignedOut>
              
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8 hover:scale-105 transition-transform"
                    }
                  }}
                />
              </SignedIn>
              
              <ThemeSwitcher />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}