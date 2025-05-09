
import React from "react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  return (
    <section className="py-20 bg-basketo-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Basketo in Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Watch how easily you can create games with Basketo Engine's AI-powered tools.</p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-basketo-dark/50">
            <div className="w-full h-full bg-basketo-darker flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Interactive Demo Video</p>
                <Button className="bg-basketo-purple hover:bg-basketo-purple/90 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Play Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
