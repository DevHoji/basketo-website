
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Book, 
  ChevronDown, 
  ChevronRight, 
  Code, 
  FileText,
  List, 
  Search 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

const DocSidebar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "getting-started": true,
    "engine-api": false,
    "graphics": false,
    "input": false,
    "physics": false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (isMobile && !isOpen) {
    return (
      <div className="bg-sidebar fixed left-0 top-16 z-40 h-10 w-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-10 w-10" 
          onClick={() => setIsOpen(true)}
        >
          <List />
        </Button>
      </div>
    );
  }

  return (
    <aside className={cn(
      "bg-sidebar border-r border-sidebar-border fixed top-16 bottom-0 z-40 w-64",
      "transition-all duration-300 ease-in-out",
      isMobile && !isOpen && "-translate-x-full"
    )}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            <h2 className="font-semibold tracking-tight">Documentation</h2>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        <div className="p-4 border-b border-sidebar-border">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-background pl-8"
            />
          </div>
        </div>
        
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-4">
            {/* Getting Started Section */}
            <Collapsible 
              open={openSections["getting-started"]} 
              onOpenChange={() => toggleSection("getting-started")}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 hover:text-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="font-medium">Getting Started</span>
                </div>
                {openSections["getting-started"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 pt-2 space-y-2">
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Introduction</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Installation</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">First Project</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Editor Interface</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Your First Game</Link>
              </CollapsibleContent>
            </Collapsible>
            
            {/* Engine API Section */}
            <Collapsible 
              open={openSections["engine-api"]} 
              onOpenChange={() => toggleSection("engine-api")}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 hover:text-foreground">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span className="font-medium">Engine API</span>
                </div>
                {openSections["engine-api"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 pt-2 space-y-2">
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Core</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Scene Tree</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Nodes</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Resources</Link>
              </CollapsibleContent>
            </Collapsible>
            
            {/* Graphics Section */}
            <Collapsible 
              open={openSections["graphics"]} 
              onOpenChange={() => toggleSection("graphics")}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 hover:text-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="font-medium">Graphics</span>
                </div>
                {openSections["graphics"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 pt-2 space-y-2">
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">2D Graphics</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">3D Graphics</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Materials</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Shaders</Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Input Section */}
            <Collapsible 
              open={openSections["input"]} 
              onOpenChange={() => toggleSection("input")}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 hover:text-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="font-medium">Input</span>
                </div>
                {openSections["input"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 pt-2 space-y-2">
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Keyboard</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Mouse</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Touch</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Gamepads</Link>
              </CollapsibleContent>
            </Collapsible>
            
            {/* Physics Section */}
            <Collapsible 
              open={openSections["physics"]} 
              onOpenChange={() => toggleSection("physics")}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 hover:text-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="font-medium">Physics</span>
                </div>
                {openSections["physics"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 pt-2 space-y-2">
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">2D Physics</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">3D Physics</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Collisions</Link>
                <Link to="/docs" className="block py-1 text-sm hover:text-foreground">Raycasting</Link>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default DocSidebar;
