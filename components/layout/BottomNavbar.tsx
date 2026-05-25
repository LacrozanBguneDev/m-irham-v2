"use client";

import { Home, Info, BookOpen, Image as ImageIcon, Briefcase } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function BottomNavbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/artikel", label: "Artikel", icon: BookOpen },
    { href: "/album", label: "Album", icon: ImageIcon },
    { href: "/karya", label: "Karya", icon: Briefcase },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 border-t bg-[hsl(var(--background))] flex items-center justify-around px-2 z-50 pb-safe">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground transition-colors",
              isActive && "text-primary"
            )}
          >
            <item.icon size={20} className={cn(isActive && "stroke-[2.5px]")} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
