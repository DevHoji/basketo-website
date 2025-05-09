
import React from "react";

const EngineFunctions = () => {
  const engineFeatures = [
    {
      title: "Prompt-to-Game System",
      description: "Convert natural language descriptions into complete game codebases",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-basketo-purple">
          <path d="M12 3a6 6 0 0 0-6 6v7.5a3.5 3.5 0 0 0 7 0V9a2.5 2.5 0 0 0-5 0v6.5a1.5 1.5 0 0 0 3 0V9"></path>
        </svg>
      )
    },
    {
      title: "Export Anywhere",
      description: "Deploy to HTML5, desktop, or mobile platforms with one click",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-basketo-blue">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      )
    },
    {
      title: "Modular Codebase",
      description: "Use only what you need with a plug-and-play architecture",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-basketo-teal">
          <rect x="4" y="4" width="6" height="6" rx="1"></rect>
          <rect x="14" y="4" width="6" height="6" rx="1"></rect>
          <rect x="4" y="14" width="6" height="6" rx="1"></rect>
          <rect x="14" y="14" width="6" height="6" rx="1"></rect>
        </svg>
      )
    },
    {
      title: "Visual Scripting",
      description: "Create game logic with drag-and-drop nodes or write code directly",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-basketo-purple">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M9 21V9"></path>
        </svg>
      )
    },
  ];

  return (
    <section className="py-20 bg-basketo-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What the Engine Does</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Basketo Engine combines cutting-edge AI with traditional game development tools to streamline your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {engineFeatures.map((feature, index) => (
            <div key={index} className="flex items-start hover:translate-x-1 transition-transform duration-300">
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-basketo-darker/50 border border-white/10 rounded-lg p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Prompt to Playable Game</h3>
                <p className="text-gray-400 mb-4">
                  Describe your game idea, and Basketo's AI will generate all necessary assets, code, and mechanics. It's like having a team of developers working for you.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="bg-basketo-dark/50 p-3 rounded">
                    <p className="text-sm text-gray-300">1. Write a prompt describing your game</p>
                  </div>
                  <div className="bg-basketo-dark/50 p-3 rounded">
                    <p className="text-sm text-gray-300">2. AI generates game code and assets</p>
                  </div>
                  <div className="bg-basketo-dark/50 p-3 rounded">
                    <p className="text-sm text-gray-300">3. Customize and extend as needed</p>
                  </div>
                  <div className="bg-basketo-dark/50 p-3 rounded">
                    <p className="text-sm text-gray-300">4. Export to your desired platform</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-xs">
                  <div className="bg-basketo-dark border border-white/10 rounded-lg p-4">
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-basketo-purple mr-2"></div>
                        <p className="text-sm text-gray-400">AI Game Generator</p>
                      </div>
                      <div className="bg-basketo-darker rounded p-3">
                        <p className="text-xs text-gray-300">
                          "Create a 2D platformer with a wizard character who can shoot fireballs and teleport between platforms."
                        </p>
                      </div>
                    </div>
                    <div className="h-32 bg-basketo-darker rounded flex items-center justify-center">
                      <div className="animate-pulse text-center">
                        <div className="w-16 h-16 mx-auto bg-basketo-purple/20 rounded-md flex items-center justify-center">
                          <span className="text-xl">🧙</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Generating game...</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-basketo-purple text-white text-xs py-1 px-3 rounded">
                    Ready in seconds
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

export default EngineFunctions;
