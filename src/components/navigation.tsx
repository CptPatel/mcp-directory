"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">MCP Directory</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/browse" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Browse
            </Link>
            <SignedIn>
              <Link href="/create" className="transition-colors hover:text-foreground/80 text-foreground/60 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                Create
              </Link>
              <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Dashboard
              </Link>
            </SignedIn>
            <Link href="/packages" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Packages
            </Link>
            <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Docs
            </Link>
            <Link href="/community" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Community
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8"
                  }
                }}
              />
            </SignedIn>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </nav>
  );
}