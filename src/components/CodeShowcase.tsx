'use client';

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState("game-loop");

  const gameLoopCode = `// Game initialization logic
basketo.init({
  width: 800,
  height: 600,
  background: '#000',
  physics: 'arcade',
});

// Create a player sprite
const player = basketo.sprite({
  x: 400,
  y: 300,
  texture: 'player',
  controller: 'platformer',
});

// Game loop
basketo.update(() => {
  // Check for collisions
  basketo.physics.collide(player, enemies);
  
  // Update game state
  world.update();
  
  // Render the scene
  basketo.render();
});`;

  const aiPromptCode = `// Generate a platformer with a wizard character
basketo.generateFromPrompt({
  type: "platformer",
  description: "A wizard that can shoot fireballs and teleport",
  levels: 3,
  enemies: ["goblins", "flying eyes", "boss wizard"],
  theme: "dark fantasy",
  perspective: "2D side-scrolling"
});

// The AI will generate all necessary game code, assets, and mechanics
// based on the description above`;

  const renderingCode = `// Set up the rendering pipeline
const renderer = new basketo.WebGLRenderer({
  antialias: true,
  shadows: true,
});

// Create a scene
const scene = new basketo.Scene('Level 1');

// Add a lighting setup
scene.add(new basketo.AmbientLight('#ffffff', 0.4));
scene.add(new basketo.DirectionalLight('#ffeecc', 0.6));

// Add post-processing effects
renderer.postProcessing.add(
  new basketo.BloomEffect({
    intensity: 0.4,
    threshold: 0.8,
  })
);

// Render the scene
renderer.render(scene, mainCamera);`;

  return (
    <section className="py-20 bg-basketo-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engine Code Showcase</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Clean, intuitive API designed for game developers. Write less, create more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Tabs defaultValue="game-loop" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-4 bg-basketo-dark/50 border border-white/10">
                  <TabsTrigger value="game-loop" className="data-[state=active]:bg-basketo-purple/20 data-[state=active]:text-white">Game Loop</TabsTrigger>
                  <TabsTrigger value="ai-prompt" className="data-[state=active]:bg-basketo-purple/20 data-[state=active]:text-white">AI Prompt</TabsTrigger>
                  <TabsTrigger value="rendering" className="data-[state=active]:bg-basketo-purple/20 data-[state=active]:text-white">Rendering</TabsTrigger>
                </TabsList>
                
                <TabsContent value="game-loop">
                  <Card className="bg-basketo-dark border border-white/10 overflow-hidden">
                    <CardContent className="p-0">
                      <pre className="text-sm p-4 overflow-x-auto text-gray-300">
                        <code>{gameLoopCode}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="ai-prompt">
                  <Card className="bg-basketo-dark border border-white/10 overflow-hidden">
                    <CardContent className="p-0">
                      <pre className="text-sm p-4 overflow-x-auto text-gray-300">
                        <code>{aiPromptCode}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="rendering">
                  <Card className="bg-basketo-dark border border-white/10 overflow-hidden">
                    <CardContent className="p-0">
                      <pre className="text-sm p-4 overflow-x-auto text-gray-300">
                        <code>{renderingCode}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="bg-basketo-dark border border-white/10 rounded-lg overflow-hidden">
              <div className="w-full h-full min-h-[300px] p-4 flex items-center justify-center bg-basketo-darker/50">
                {activeTab === "game-loop" && (
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      <div className="w-full h-full bg-basketo-purple/20 rounded-lg animate-pulse"></div>
                      <div className="absolute inset-4 bg-basketo-purple/40 rounded-md"></div>
                    </div>
                    <p className="text-gray-400">Game Loop Visualization</p>
                  </div>
                )}
                
                {activeTab === "ai-prompt" && (
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-lg bg-basketo-blue/30 flex items-center justify-center text-2xl">🧙</div>
                      <div className="text-basketo-blue text-4xl">→</div>
                      <div className="w-32 h-16 rounded-lg bg-basketo-purple/20 flex items-center justify-center text-xl">🎮 Game</div>
                    </div>
                    <p className="text-gray-400">AI Prompt to Game Conversion</p>
                  </div>
                )}
                
                {activeTab === "rendering" && (
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-lg bg-gradient-to-br from-basketo-blue/30 to-basketo-purple/30 flex items-center justify-center">
                      <div className="w-24 h-24 rounded bg-basketo-teal/20 animate-pulse"></div>
                    </div>
                    <p className="text-gray-400">WebGL Rendering Preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
