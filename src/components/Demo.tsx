'use client';

import React from "react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  return (
    <section className="py-16 bg-basketo-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-basketo-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-basketo-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Basketo in Action</h2>
          <p className="text-gray-400 mb-8">
            Watch how easily you can create games with Basketo Engine's AI-powered tools.
          </p>
          
          <div className="bg-basketo-darker p-8 rounded-xl border border-white/10 shadow-lg">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/04poegAQjos" 
                title="Basketo Engine Demo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-8">
              <Button className="bg-basketo-purple hover:bg-basketo-purple/80">
                Try Interactive Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
