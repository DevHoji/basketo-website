
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Donate from "@/components/Donate";
import CodeShowcase from "@/components/CodeShowcase";
import EngineFunctions from "@/components/EngineFunctions";
import Platforms from "@/components/Platforms";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-basketo-darker text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <CodeShowcase />
        <EngineFunctions />
        <Platforms />
        <Testimonials />
        <Donate />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
