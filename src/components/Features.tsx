
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const featureItems = [
    {
      title: "Built for Serious Devs",
      description: "Professional-grade tools with the simplicity AI brings to your workflow",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-basketo-purple">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      )
    },
    {
      title: "AI-Powered Game Creation",
      description: "Turn your ideas into playable games with natural language prompts",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-basketo-blue">
          <path d="M12 2a10 10 0 1 0 10 10"></path>
          <path d="M12 12v-2"></path>
          <path d="M12 8V6"></path>
          <path d="m15.6 8.6-1.2-1.2"></path>
          <path d="m8.4 15.8-1.2-1.2"></path>
          <path d="M8 12H6"></path>
          <path d="M17.3 10a2 2 0 0 0-2.1-1.9c-1 0-1.9.8-2 1.9"></path>
          <path d="M21.7 14a2 2 0 0 0-2.1-1.9c-1 0-1.9.8-2 1.9"></path>
          <path d="M17.7 18c-.4.8-1.2 1.3-2.1 1.3-1.1 0-2.1-.9-2.1-2"></path>
          <path d="M18.2 16.2c-.5.6-1.3 1.1-2.1 1.1-1.1 0-2.1-.9-2.1-2"></path>
        </svg>
      )
    },
    {
      title: "Open-Source & Fast",
      description: "Lightweight, performant, and fully open-source for maximum flexibility",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-basketo-teal">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    },
    {
      title: "Prompt-to-Game Pipeline",
      description: "Describe your game and watch as code, assets, and mechanics are generated",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-basketo-purple">
          <path d="M12 3a6 6 0 0 0-6 6v7.5a3.5 3.5 0 0 0 7 0V9a2.5 2.5 0 0 0-5 0v6.5a1.5 1.5 0 0 0 3 0V9"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-basketo-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Develop your 2D & 3D games effortlessly</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Basketo Engine combines the power of AI with professional game development tools to streamline your workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((feature, index) => (
            <Card key={index} className="bg-basketo-darker/50 border border-white/10 backdrop-blur hover:-translate-y-1 transition-transform duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
