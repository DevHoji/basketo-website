'use client';

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Features = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation config
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Convert mouse position to normalized coordinates (-1 to 1)
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
    <section className="py-20 bg-basketo-dark relative overflow-hidden">
      {/* Interactive background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-basketo-purple/20 via-transparent to-basketo-teal/20 opacity-50"
        style={{
          scale: useTransform(smoothX, [-1, 1], [1.1, 0.9]),
          rotate: useTransform(smoothX, [-1, 1], [-5, 5]),
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              x: useTransform(smoothX, [-1, 1], [-20, 20]),
              y: useTransform(smoothY, [-1, 1], [-10, 10]),
            }}
          >
            Develop your 2D games effortlessly
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            style={{
              x: useTransform(smoothX, [-1, 1], [-10, 10]),
              y: useTransform(smoothY, [-1, 1], [-5, 5]),
            }}
          >
            BasketoEngine combines the power of AI with professional game development tools to streamline your workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                x: useTransform(smoothX, [-1, 1], [-10 * (index + 1), 10 * (index + 1)]),
                y: useTransform(smoothY, [-1, 1], [-5 * (index + 1), 5 * (index + 1)]),
              }}
            >
              <Card className="bg-basketo-darker/50 border border-white/10 backdrop-blur hover:-translate-y-1 transition-transform duration-300 overflow-hidden group">
                <CardContent className="p-6 relative">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-basketo-purple via-basketo-blue to-basketo-teal opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-basketo-purple transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Interactive particle effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-basketo-purple via-basketo-blue to-basketo-teal opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"
                    style={{
                      scale: useTransform(smoothX, [-1, 1], [0.8, 1.2]),
                      rotate: useTransform(smoothY, [-1, 1], [-15, 15]),
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </section>
  );
};

export default Features;
