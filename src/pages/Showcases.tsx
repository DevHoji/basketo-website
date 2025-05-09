
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Gamepad, Info, Link, Play, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Game data (in a real app, this would come from an API)
const showcaseGames = [
  {
    id: 1,
    title: "Stellar Odyssey",
    description: "A space exploration adventure with realistic physics and planetary discovery.",
    image: "/placeholder.svg",
    completedDate: "2024-04-15",
    category: "adventure",
    rating: 4.8,
    features: ["3D Graphics", "Procedural Generation", "Physics Based", "Open World"],
    platforms: ["Windows", "MacOS", "Linux"],
    developer: "Cosmic Games",
    playUrl: "#play-now",
    infoUrl: "#more-info",
  },
  {
    id: 2,
    title: "Mystic Realms",
    description: "Fantasy RPG with dynamic character progression and expansive world building.",
    image: "/placeholder.svg",
    completedDate: "2023-11-22",
    category: "rpg",
    rating: 4.5,
    features: ["Character Creation", "Quest System", "Day/Night Cycle", "Magic System"],
    platforms: ["Windows", "PlayStation", "Xbox"],
    developer: "Arcane Studios",
    playUrl: "#play-now",
    infoUrl: "#more-info",
  },
  {
    id: 3,
    title: "Speed Dash",
    description: "Fast-paced runner with challenging obstacles and power-ups.",
    image: "/placeholder.svg",
    completedDate: "2024-01-08",
    category: "arcade",
    rating: 4.2,
    features: ["High Speed", "Level Editor", "Multiplayer", "Leaderboards"],
    platforms: ["Mobile", "Web"],
    developer: "Rush Games",
    playUrl: "#play-now",
    infoUrl: "#more-info",
  },
  {
    id: 4,
    title: "Block Fortress",
    description: "Build and defend your fortress against waves of enemies in this strategic game.",
    image: "/placeholder.svg",
    completedDate: "2023-09-05",
    category: "strategy",
    rating: 4.6,
    features: ["Base Building", "Resource Management", "Enemy AI", "Campaign Mode"],
    platforms: ["Windows", "Mobile"],
    developer: "Fortress Interactive",
    playUrl: "#play-now",
    infoUrl: "#more-info",
  },
  {
    id: 5,
    title: "Pixel Dungeon",
    description: "Retro-styled roguelike dungeon crawler with procedurally generated levels.",
    image: "/placeholder.svg",
    completedDate: "2024-03-21",
    category: "rpg",
    rating: 4.4,
    features: ["Pixel Art", "Permadeath", "Item Crafting", "Hidden Secrets"],
    platforms: ["Windows", "MacOS", "Linux", "Mobile"],
    developer: "Retro Pixels",
    playUrl: "#play-now",
    infoUrl: "#more-info",
  },
  {
    id: 6,
    title: "Astral Combat",
    description: "Space combat simulator with realistic physics and strategic gameplay.",
    image: "/placeholder.svg",
    completedDate: "2024-02-14",
    category: "simulation",
    rating: 4.7,
    features: ["Ship Customization", "Dynamic Damage", "Strategic Combat", "Multiplayer"],
    platforms: ["Windows", "PlayStation"],
    developer: "Nova Interactive",
    playUrl: "#play-now",
    infoUrl: "#more-info",
  },
];

const categories = ["all", "adventure", "rpg", "arcade", "strategy", "simulation"];
const platforms = ["all", "Windows", "MacOS", "Linux", "Mobile", "PlayStation", "Xbox", "Web"];

const Showcases: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const filteredGames = showcaseGames.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || game.category === selectedCategory;
    const matchesPlatform = selectedPlatform === "all" || game.platforms.includes(selectedPlatform);
    
    return matchesSearch && matchesCategory && matchesPlatform;
  });

  return (
    <div className="min-h-screen bg-basketo-darker text-white">
      <Header />
      
      <main className="container mx-auto pt-24 px-4 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Game Showcases
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our collection of completed games built with BasketoEngine. 
            Ready to play and inspire your next creation.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-10 bg-basketo-dark rounded-lg p-6 border border-white/10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
            <Input
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md bg-transparent border-white/20"
            />
            
            <div className="flex gap-4 flex-wrap">
              <Tabs 
                value={selectedCategory} 
                onValueChange={setSelectedCategory}
                className="w-full md:w-auto"
              >
                <TabsList className="bg-basketo-darker border border-white/20">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="data-[state=active]:bg-basketo-purple"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              
              <Tabs 
                value={selectedPlatform} 
                onValueChange={setSelectedPlatform}
                className="w-full md:w-auto"
              >
                <TabsList className="bg-basketo-darker border border-white/20">
                  {platforms.map((platform) => (
                    <TabsTrigger 
                      key={platform} 
                      value={platform}
                      className="data-[state=active]:bg-basketo-blue"
                    >
                      {platform}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            {filteredGames.length} games found
          </div>
        </div>
        
        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <Card key={game.id} className="bg-basketo-dark border-white/10 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-basketo-purple/20">
              <div className="h-48 bg-gray-800 relative">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-basketo-teal">{game.category}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{game.title}</CardTitle>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 mr-1 fill-current" /> 
                    <span>{game.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-gray-400">
                  {game.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Completed on {new Date(game.completedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {game.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="bg-transparent border-white/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <Separator className="border-white/10" />
                
                <div>
                  <p className="text-sm text-gray-400 mb-2">Available on:</p>
                  <div className="flex flex-wrap gap-2">
                    {game.platforms.map((platform, index) => (
                      <Badge key={index} className="bg-basketo-blue bg-opacity-20 text-white">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button size="sm" variant="ghost" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <Link href={game.infoUrl} className="text-sm">Info</Link>
                </Button>
                
                <Button size="sm" className="bg-basketo-purple hover:bg-basketo-purple/80 flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  <Link href={game.playUrl} className="text-sm">Play Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredGames.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <Gamepad className="h-16 w-16 text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No games found</h3>
            <p className="text-gray-400 text-center">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
        
        {/* Featured Game Section */}
        <div className="mt-16 bg-gradient-to-r from-basketo-purple/20 via-basketo-blue/20 to-basketo-teal/20 rounded-lg p-8 border border-white/10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Featured Game of the Month</h2>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-basketo-purple via-basketo-blue to-basketo-teal bg-clip-text text-transparent">
                Stellar Odyssey
              </h3>
              <p className="text-gray-300 mb-4">
                An immersive space exploration adventure with realistic physics and planetary discovery.
                Navigate through procedurally generated galaxies, discover new species, and build your own space empire.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400">Winner of Excellence in Game Design</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Button className="bg-basketo-purple hover:bg-basketo-purple/80">
                  <Play className="h-4 w-4 mr-2" />
                  Play Now
                </Button>
                <Button variant="outline" className="border-white/20">
                  <Info className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-800 rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Featured Game" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Showcases;
