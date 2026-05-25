"use client";

import { Moon, Sun, User, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

export function TopNavbar() {
  const { theme, setTheme } = useTheme();
  // Avoid hydration mismatch by waiting for mount
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dummy state

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="hidden md:flex w-full h-16 border-b items-center justify-between px-6 sticky top-0 bg-[hsl(var(--background))]/80 backdrop-blur z-50">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
          SI
        </div>
        <span className="font-semibold text-lg">Studio Irham</span>
      </Link>
      
      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/artikel" className="hover:text-primary transition-colors">Artikel</Link>
        <Link href="/album" className="hover:text-primary transition-colors">Album</Link>
        <Link href="/karya" className="hover:text-primary transition-colors">Karya</Link>
      </nav>

      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
        
        {isLoggedIn ? (
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-muted transition-colors text-sm font-medium"
          >
            <LogOut size={16} /> Logout
          </button>
        ) : (
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <User size={16} /> Login
          </button>
        )}
      </div>
    </header>
  );
}
