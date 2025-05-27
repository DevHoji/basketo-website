'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Land_", href: "/" },
    { name: "Docs", href: "/docs" },
    { name: "Play", href: "/play" },
    { name: "Showcases", href: "/showcases" },
    { name: "Studio", href: "/studio" },
    { name: "Mobile/Desktop", href: "/downloads" },
    { name: "Community", href: "/community" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-basketo-darker/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-white font-bold text-xl mr-8">
            <img 
              src="/images/BasketoLogo.png" 
              alt="BasketoEngine Logo" 
              className="h-8 mr-2" 
            />
            <span className="text-white">Engine</span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu />
            </Button>
            {isMenuOpen && (
              <nav className="absolute top-16 left-0 right-0 bg-basketo-darker/95 backdrop-blur-lg border-b border-white/10 py-4 flex flex-col items-center space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-gray-300 hover:text-white transition-colors ${
                      pathname === item.href ? "text-white font-medium" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <ThemeToggle />
              </nav>
            )}
          </>
        ) : (
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm ${
                  pathname === item.href || 
                  (item.name === "Land_" && pathname === "/") 
                    ? "text-white font-bold" 
                    : "text-gray-300 hover:text-white"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
