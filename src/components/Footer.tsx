
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const footerLinks = {
    "Supported Stacks": ["WebGL", "Pixi.js", "Babylon.js", "HTML5", "Cocos2d"],
    "Resources": ["Documentation", "Tutorials", "Blog", "API Reference", "Community"],
    "Projects": ["GitHub Repo", "Examples", "Showcases", "Contribute"],
    "Company": ["About", "Team", "Contact", "Open Source"],
  };

  const socialLinks = [
    { name: "GitHub", href: "#" },
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
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <a href="/" className="text-white font-bold text-xl mr-6">
              <span className="bg-gradient-to-r from-basketo-purple via-basketo-blue to-basketo-teal bg-clip-text text-transparent">
                Basketo
              </span>
              <span>Engine</span>
            </a>
            <p className="text-gray-500 text-sm">© 2025 Basketo Foundation. Open Source.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex space-x-4 mr-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
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
