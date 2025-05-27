'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-basketo-purple/20 rounded-full filter blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-basketo-blue/20 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative h-20 md:h-24 w-32 md:w-40 animate-float">
              <Image
                src="/images/EngineLogo-min.png"
                alt="Basketo Engine Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
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
              Source Code
            </Button>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-basketo-dark/50 backdrop-blur animate-float">
            <div className="w-full h-full bg-basketo-darker flex items-center justify-center relative">
              <div className="relative w-full h-full">
                <Image
                  src="/images/Basketo.png"
                  alt="Basketo Game Preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
