'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const footerLinks = {
    "Supported Stacks": ["WebGL", "Pixi.js", "Babylon.js", "HTML5", "Cocos2d"],
    "Resources": ["Documentation", "Tutorials", "Blog", "API Reference", "Community"],
    "Projects": ["Repository", "Examples", "Showcases", "Contribute"],
    "Company": ["About", "Team", "Contact", "Open Source"],
  };

  const socialLinks = [
    { name: "Repository", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Reddit", href: "#" },
  ];

  return (
    <footer className="bg-basketo-darker pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center mr-6">
              <div className="relative h-8 w-8 mr-2">
                <Image 
                  src="/images/BasketoLogo.png" 
                  alt="BasketoEngine Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl">Engine</span>
            </Link>
            <p className="text-gray-500 text-sm">© 2025 Basketo Foundation. Open Source.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex space-x-4 mr-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
