'use client';

import React from "react";
import { Button } from "@/components/ui/button";

const Donate = () => {
  return (
    <section className="py-16 bg-basketo-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-basketo-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-basketo-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support the Engine</h2>
          <p className="text-gray-400 mb-8">
            Basketo Engine is 100% open-source and free to use. Your donations help us continue development and keep the project alive.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-[#333] hover:bg-[#222] text-white px-6 py-5 h-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 2v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Become a Sponsor
            </Button>
            
            <Button className="bg-[#3385FF] hover:bg-[#1D74F5] text-white px-6 py-5 h-auto">
              OpenCollective
            </Button>
            
            <Button className="bg-[#FF5E5B] hover:bg-[#E83D3A] text-white px-6 py-5 h-auto">
              Ko-fi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
