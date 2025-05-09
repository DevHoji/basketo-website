
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Monitor, Smartphone, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Downloads = () => {
  const [activeTab, setActiveTab] = useState<string>("desktop");
  const { toast } = useToast();
  
  const handleDownload = (platform: string) => {
    toast({
      title: `Downloading for ${platform}`,
      description: "Your download will begin shortly.",
      duration: 5000,
    });
  };
  
  return (
    <div className="min-h-screen bg-basketo-darker text-white">
      <Header />
      <main className="pt-16">
        {/* Hero section */}
        <section className="relative py-20 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-basketo-purple/20 via-transparent to-basketo-teal/20 z-0 opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Download <span className="bg-gradient-to-r from-basketo-purple via-basketo-blue to-basketo-teal bg-clip-text text-transparent">BasketoEngine</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create amazing games for mobile and desktop platforms with our powerful, easy-to-use game engine
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-basketo-purple hover:bg-basketo-purple/90"
                  onClick={() => handleDownload("desktop")}
                >
                  <Download className="mr-2" />
                  Download for Desktop
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-basketo-teal text-basketo-teal hover:bg-basketo-teal/10"
                  onClick={() => handleDownload("mobile")}
                >
                  <Download className="mr-2" />
                  Download for Mobile
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Device preview section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Tabs 
                defaultValue="desktop" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="desktop" className="flex items-center gap-2">
                      <Monitor size={18} /> Desktop
                    </TabsTrigger>
                    <TabsTrigger value="mobile" className="flex items-center gap-2">
                      <Smartphone size={18} /> Mobile
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="desktop" className="mt-0">
                  <div className="relative mx-auto max-w-4xl aspect-video">
                    {/* Desktop frame */}
                    <div className="absolute inset-0 bg-basketo-dark border-2 border-gray-700 rounded-lg overflow-hidden shadow-2xl">
                      {/* Monitor frame */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-black/50 flex items-center px-2">
                        <div className="flex space-x-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      {/* Video content */}
                      <div className="absolute top-6 left-0 right-0 bottom-0">
                        <AspectRatio ratio={16 / 9} className="h-full">
                          <div className="w-full h-full bg-basketo-dark/80 flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-gray-400 mb-4">Engine Demo Video</p>
                              <Button className="bg-basketo-purple hover:bg-basketo-purple/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                  <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                                Play Video
                              </Button>
                            </div>
                          </div>
                        </AspectRatio>
                      </div>
                    </div>
                    {/* Desktop stand */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-700 rounded"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-800 rounded"></div>
                  </div>
                </TabsContent>
                
                <TabsContent value="mobile" className="mt-0">
                  <div className="relative mx-auto max-w-xs h-[600px]">
                    {/* Mobile frame */}
                    <div className="absolute inset-0 bg-black rounded-[36px] overflow-hidden shadow-2xl border-4 border-gray-800">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-10"></div>
                      {/* Video content */}
                      <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                        <div className="w-full h-full bg-basketo-dark/80 flex items-center justify-center">
                          <div className="text-center px-4">
                            <p className="text-gray-400 mb-4">Mobile Engine Demo</p>
                            <Button size="sm" className="bg-basketo-purple hover:bg-basketo-purple/90">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              Play Video
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-20 bg-basketo-dark border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BasketoEngine?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our engine provides all the tools you need to bring your game ideas to life on any platform</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Cross-Platform",
                  description: "Develop once and deploy to mobile, desktop, and web platforms with minimal adjustments",
                  icon: "🌐"
                },
                {
                  title: "Powerful Tools",
                  description: "From AI assisted design to powerful rendering capabilities, we've got you covered",
                  icon: "⚒️"
                },
                {
                  title: "Community Support",
                  description: "Join thousands of developers who share knowledge, assets and support",
                  icon: "👥"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-basketo-darker border border-white/10 hover:border-basketo-purple/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Download section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-basketo-dark to-basketo-darker border border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Monitor size={32} className="mr-3 text-basketo-blue" />
                      <h3 className="text-2xl font-bold">Desktop Version</h3>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        High-performance rendering
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Full set of development tools
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Available for Windows, macOS & Linux
                      </li>
                    </ul>
                    <div className="space-x-3">
                      <Button 
                        className="bg-basketo-blue hover:bg-basketo-blue/90"
                        onClick={() => handleDownload("windows")}
                      >
                        <Download className="mr-2" size={16} />
                        Windows
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-basketo-blue text-basketo-blue hover:bg-basketo-blue/10"
                        onClick={() => handleDownload("macos")}
                      >
                        <Download className="mr-2" size={16} />
                        macOS
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-basketo-blue text-basketo-blue hover:bg-basketo-blue/10"
                        onClick={() => handleDownload("linux")}
                      >
                        <Download className="mr-2" size={16} />
                        Linux
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-basketo-dark to-basketo-darker border border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Smartphone size={32} className="mr-3 text-basketo-teal" />
                      <h3 className="text-2xl font-bold">Mobile Version</h3>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Optimized for mobile development
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Touch controls & mobile-specific features
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        iOS and Android support
                      </li>
                    </ul>
                    <div className="space-x-3">
                      <Button 
                        className="bg-basketo-teal hover:bg-basketo-teal/90"
                        onClick={() => handleDownload("android")}
                      >
                        <Download className="mr-2" size={16} />
                        Android
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-basketo-teal text-basketo-teal hover:bg-basketo-teal/10"
                        onClick={() => handleDownload("ios")}
                      >
                        <Download className="mr-2" size={16} />
                        iOS
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* System Requirements */}
        <section className="py-20 bg-basketo-dark border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">System Requirements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Monitor size={20} className="mr-2" /> Desktop Requirements
                  </h3>
                  <Card className="bg-basketo-darker border border-white/10">
                    <CardContent className="p-6">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 font-medium text-gray-400">OS</td>
                            <td className="py-2">Windows 10+, macOS 10.14+, Linux (Ubuntu 18.04+)</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 font-medium text-gray-400">Processor</td>
                            <td className="py-2">64-bit Intel or AMD, 2.0 GHz or faster</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 font-medium text-gray-400">Memory</td>
                            <td className="py-2">8 GB RAM minimum, 16 GB recommended</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 font-medium text-gray-400">Graphics</td>
                            <td className="py-2">DirectX 11 / OpenGL 4.3 compatible</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium text-gray-400">Storage</td>
                            <td className="py-2">4 GB available space</td>
                          </tr>
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Smartphone size={20} className="mr-2" /> Mobile Requirements
                  </h3>
                  <Card className="bg-basketo-darker border border-white/10">
                    <CardContent className="p-6">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 font-medium text-gray-400">Android</td>
                            <td className="py-2">Android 7.0 or later</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 font-medium text-gray-400">iOS</td>
                            <td className="py-2">iOS 13.0 or later</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 font-medium text-gray-400">Memory</td>
                            <td className="py-2">3 GB RAM minimum</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 font-medium text-gray-400">Storage</td>
                            <td className="py-2">1 GB available space</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium text-gray-400">Development</td>
                            <td className="py-2">Computer with desktop version installed</td>
                          </tr>
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Creating?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Download BasketoEngine today and join thousands of developers creating amazing games
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-basketo-purple to-basketo-blue hover:opacity-90 text-white px-8"
                onClick={() => handleDownload("latest")}
              >
                <Download className="mr-2" />
                Download Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;
