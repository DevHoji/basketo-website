
import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Basketo Engine has completely transformed how I develop games. What used to take weeks now takes hours.",
      author: "Sarah Johnson",
      role: "Indie Game Developer",
      avatar: "👩‍💻",
    },
    {
      quote: "The AI-powered code generation is mind-blowing. I described a complex mechanic and it wrote flawless code instantly.",
      author: "Marcus Chen",
      role: "Lead Developer, GameCraft Studios",
      avatar: "👨‍💻",
    },
    {
      quote: "As someone new to game development, Basketo made it possible for me to create my first game without getting lost in complex code.",
      author: "Emma Rodriguez",
      role: "Student Developer",
      avatar: "👩‍🎓",
    },
    {
      quote: "Our studio switched to Basketo for prototyping and we've increased our production speed by 300%. It's revolutionary.",
      author: "James Wilson",
      role: "Creative Director, PixelPulse Games",
      avatar: "🧔",
    },
  ];

  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set up the auto-scroll interval
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change testimonial every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-basketo-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Indie Devs & Studios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the growing community of developers who've accelerated their game creation process with Basketo Engine.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-basketo-darker/50 border border-white/10 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="w-12 h-12 rounded-full bg-basketo-purple/20 flex items-center justify-center text-2xl">
                            {testimonial.avatar}
                          </div>
                        </div>
                        <blockquote className="text-gray-300 mb-4">"{testimonial.quote}"</blockquote>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
