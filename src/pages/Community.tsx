import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, MessageSquare, Github, Twitter, Disc as Discord, Globe, TrendingUp, Star, Heart, Award, Code, Coffee } from "lucide-react";

const Community = () => {
  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Discord Members", value: "25K+", icon: MessageSquare },
    { label: "GitHub Stars", value: "15K+", icon: Star },
    { label: "Contributors", value: "500+", icon: Code },
  ];

  const platforms = [
    {
      name: "Discord",
      description: "Join our vibrant community chat",
      icon: Discord,
      color: "bg-[#5865F2]",
      url: "#discord",
      members: "25,000+"
    },
    {
      name: "GitHub",
      description: "Contribute to the engine",
      icon: Github,
      color: "bg-[#333]",
      url: "#github",
      members: "15,000+"
    },
    {
      name: "Twitter",
      description: "Follow for updates",
      icon: Twitter,
      color: "bg-[#1DA1F2]",
      url: "#twitter",
      members: "10,000+"
    },
    {
      name: "Forums",
      description: "Discuss and share knowledge",
      icon: Globe,
      color: "bg-basketo-purple",
      url: "#forums",
      members: "30,000+"
    }
  ];

  const contributors = [
    {
      name: "Sarah Chen",
      role: "Core Contributor",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      contributions: 342
    },
    {
      name: "James Wilson",
      role: "Graphics Lead",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      contributions: 256
    },
    {
      name: "Emily Rodriguez",
      role: "Documentation",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      contributions: 198
    }
  ];

  const events = [
    {
      title: "BasketoEngine Hackathon 2025",
      date: "June 15-17, 2025",
      type: "Virtual Event",
      description: "48-hour game development challenge"
    },
    {
      title: "Community Meetup",
      date: "Monthly",
      type: "Online",
      description: "Share projects and network"
    },
    {
      title: "Game Dev Workshop",
      date: "Weekly",
      type: "Tutorial",
      description: "Learn engine fundamentals"
    }
  ];

  return (
    <div className="min-h-screen bg-basketo-darker text-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-basketo-purple/20 via-transparent to-basketo-teal/20 z-0"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-basketo-purple/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-basketo-blue/20 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Growing Community
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Connect with developers, share your creations, and help shape the future of game development
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-basketo-purple hover:bg-basketo-purple/90">
                  <Discord className="mr-2 h-5 w-5" />
                  Join Discord
                </Button>
                <Button size="lg" variant="outline" className="border-basketo-blue text-basketo-blue hover:bg-basketo-blue/10">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-basketo-dark relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-basketo-darker border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-basketo-purple/20">
                        <stat.icon className="h-6 w-6 text-basketo-purple" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
              <p className="text-gray-400">Join our community across different platforms</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="bg-basketo-dark border-white/10 hover:-translate-y-1 transition-transform">
                  <CardContent className="p-6">
                    <div className={`${platform.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                    <p className="text-gray-400 mb-4">{platform.description}</p>
                    <div className="text-sm text-gray-500">{platform.members} members</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="py-20 bg-basketo-dark border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Contributors</h2>
              <p className="text-gray-400">Meet the people who make BasketoEngine better every day</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contributors.map((contributor, index) => (
                <Card key={index} className="bg-basketo-darker border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={contributor.avatar} 
                        alt={contributor.name} 
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="font-bold">{contributor.name}</h3>
                        <p className="text-gray-400 text-sm">{contributor.role}</p>
                        <div className="flex items-center gap-2 mt-1 text-sm text-basketo-purple">
                          <Code className="h-4 w-4" />
                          {contributor.contributions} contributions
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-gray-400">Join our events and connect with the community</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {events.map((event, index) => (
                <Card key={index} className="bg-basketo-dark border-white/10">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-400">{event.description}</div>
                    <Button className="mt-4 w-full bg-basketo-purple hover:bg-basketo-purple/90">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-basketo-dark border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Support the Project</h2>
              <p className="text-gray-400 mb-8">
                Help us keep BasketoEngine free and open source for everyone
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90">
                  <Coffee className="mr-2 h-5 w-5" />
                  Buy us a coffee
                </Button>
                <Button variant="outline" className="border-white/20">
                  <Heart className="mr-2 h-5 w-5" />
                  Become a sponsor
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;