
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-basketo-purple/20 rounded-full filter blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-basketo-blue/20 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-basketo-purple via-basketo-blue to-basketo-teal bg-clip-text text-transparent animate-glow">
            Basketo Game
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Your free, open-source game engine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-basketo-purple hover:bg-basketo-purple/90 text-white px-6 py-2">
              Try Live Demo
            </Button>
            <Button variant="outline" className="border-basketo-blue text-basketo-blue hover:bg-basketo-blue/10 px-6 py-2">
              Get Started
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2">
              GitHub
            </Button>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-basketo-dark/50 backdrop-blur animate-float">
            <div className="w-full h-full bg-basketo-darker flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 mb-2">Interactive Game Preview</p>
                <div className="w-12 h-12 rounded-full bg-basketo-purple/20 mx-auto flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-basketo-purple flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
