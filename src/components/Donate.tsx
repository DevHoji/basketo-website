
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub Sponsors
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
