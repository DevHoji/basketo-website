'use client';

import React from "react";
import { Globe, Gamepad, Laptop, Smartphone, Layout, Code } from "lucide-react";

const Platforms = () => {
  const platforms = [
    { name: "WebGL", icon: <Globe className="h-8 w-8 text-basketo-purple" /> },
    { name: "Pixi.js", icon: <Code className="h-8 w-8 text-basketo-blue" /> },
    { name: "Babylon.js", icon: <Globe className="h-8 w-8 text-basketo-teal" /> },
    { name: "Unity Export", icon: <Gamepad className="h-8 w-8 text-basketo-purple" /> },
    { name: "HTML5", icon: <Layout className="h-8 w-8 text-basketo-blue" /> },
    { name: "Cocos2d", icon: <Code className="h-8 w-8 text-basketo-teal" /> },
    { name: "Mobile", icon: <Smartphone className="h-8 w-8 text-basketo-purple" /> },
    { name: "Desktop", icon: <Laptop className="h-8 w-8 text-basketo-blue" /> },
  ];

  return (
    <section className="py-20 bg-basketo-darker relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <div className="w-full h-full bg-gradient-to-r from-basketo-purple/5 via-basketo-blue/5 to-basketo-teal/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Framework & Platform Support</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Basketo Engine integrates with popular frameworks and exports to all major platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="bg-basketo-dark/50 border border-white/10 rounded-lg p-6 flex flex-col items-center hover:bg-basketo-dark transition-colors duration-300"
            >
              <div className="mb-3">{platform.icon}</div>
              <h3 className="font-medium">{platform.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
