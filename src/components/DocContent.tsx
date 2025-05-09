
import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocContent = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "Code has been copied to your clipboard.",
      duration: 2000,
    });
  };

  return (
    <main className="flex-1 overflow-auto px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Introduction to BasketoEngine</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Last updated: May 3, 2025</span>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <span>BasketoEngine v1.2.0</span>
          </div>
        </div>

        <Tabs defaultValue="introduction" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="firstproject">First Project</TabsTrigger>
          </TabsList>
          <TabsContent value="introduction" className="pt-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-4">
                BasketoEngine is a powerful, flexible, and user-friendly 2D and 3D game engine designed for both beginners and experienced developers.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">What is BasketoEngine?</h2>
              <p className="mb-4">
                BasketoEngine is an open-source game development platform that provides a comprehensive set of common tools, so you can focus on making games without reinventing the wheel.
              </p>
              <p className="mb-4">
                It offers an integrated editor with a friendly user interface that runs on Windows, macOS, and Linux. The engine is designed to be easy to pick up for beginners while being powerful enough for professional developers.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Dedicated 2D and 3D engines</li>
                <li>Easy to learn scripting language with Python-like syntax</li>
                <li>Visual editor with live editing capabilities</li>
                <li>Cross-platform deployment (desktop, mobile, web)</li>
                <li>Extensive documentation and community support</li>
                <li>Completely free and open-source under MIT license</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">System Requirements</h2>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-sidebar-border">
                  <thead>
                    <tr className="bg-sidebar-accent">
                      <th className="py-2 px-4 text-left">Component</th>
                      <th className="py-2 px-4 text-left">Minimum</th>
                      <th className="py-2 px-4 text-left">Recommended</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-sidebar-border">
                      <td className="py-2 px-4">CPU</td>
                      <td className="py-2 px-4">64-bit dual-core</td>
                      <td className="py-2 px-4">64-bit quad-core</td>
                    </tr>
                    <tr className="border-t border-sidebar-border">
                      <td className="py-2 px-4">Memory</td>
                      <td className="py-2 px-4">4 GB RAM</td>
                      <td className="py-2 px-4">8 GB RAM</td>
                    </tr>
                    <tr className="border-t border-sidebar-border">
                      <td className="py-2 px-4">Storage</td>
                      <td className="py-2 px-4">500 MB</td>
                      <td className="py-2 px-4">2 GB</td>
                    </tr>
                    <tr className="border-t border-sidebar-border">
                      <td className="py-2 px-4">Graphics</td>
                      <td className="py-2 px-4">OpenGL 3.3 / OpenGL ES 3.0</td>
                      <td className="py-2 px-4">OpenGL 4.5 / Vulkan 1.1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Example Code</h2>
              <div className="bg-sidebar rounded-md p-4 mb-6 relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                  onClick={() => copyCode(`import basketo

# Create a new scene node
var node = basketo.Node.new()
node.set_name("MyFirstNode")

# Add the node to the current scene
get_tree().get_root().add_child(node)

# Print confirmation
print("Hello BasketoEngine World!")
`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="text-sm overflow-x-auto">
                  <code>{`import basketo

# Create a new scene node
var node = basketo.Node.new()
node.set_name("MyFirstNode")

# Add the node to the current scene
get_tree().get_root().add_child(node)

# Print confirmation
print("Hello BasketoEngine World!")
`}</code>
                </pre>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Community & Support</h2>
              <p className="mb-4">
                Join our thriving community to get help, share your creations, and collaborate with other developers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="#" className="text-basketo-blue hover:underline inline-flex items-center">Forums <ExternalLink className="ml-1 h-3 w-3" /></a></li>
                <li><a href="#" className="text-basketo-blue hover:underline inline-flex items-center">Discord <ExternalLink className="ml-1 h-3 w-3" /></a></li>
                <li><a href="#" className="text-basketo-blue hover:underline inline-flex items-center">GitHub <ExternalLink className="ml-1 h-3 w-3" /></a></li>
                <li><a href="#" className="text-basketo-blue hover:underline inline-flex items-center">Reddit <ExternalLink className="ml-1 h-3 w-3" /></a></li>
              </ul>
              
              <div className="mt-8 p-6 bg-basketo-dark/50 rounded-lg border border-sidebar-border">
                <h3 className="text-xl font-semibold mb-2">Ready to start your journey?</h3>
                <p className="mb-4">Continue to the next section to learn how to install BasketoEngine on your system.</p>
                <Button 
                  onClick={() => setActiveTab("installation")}
                  className="bg-basketo-blue hover:bg-basketo-blue/90"
                >
                  Next: Installation Guide
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="installation" className="pt-6">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-3xl font-bold tracking-tight mb-4">Installation Guide</h1>
              <p className="text-lg mb-6">
                Follow these steps to install BasketoEngine on your preferred platform.
              </p>

              <div className="bg-sidebar-accent p-4 rounded-md mb-6 border-l-4 border-basketo-blue">
                <h3 className="text-lg font-medium mb-2">Download Options</h3>
                <p>BasketoEngine is available for Windows, macOS, and Linux. Choose your platform below to get started.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Windows Installation</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li>Download the Windows installer from the <Link to="/downloads" className="text-basketo-blue hover:underline">downloads page</Link>.</li>
                <li>Run the installer and follow the on-screen instructions.</li>
                <li>Choose your preferred installation location.</li>
                <li>Select additional components (examples, templates).</li>
                <li>Wait for the installation to complete.</li>
                <li>Launch BasketoEngine from the Start menu or desktop shortcut.</li>
              </ol>
              
              {/* Installation content continues... */}
              <p className="mb-6">
                For more detailed instructions, including troubleshooting common installation issues, refer to our <a href="#" className="text-basketo-blue hover:underline">extended installation guide</a>.
              </p>

              <div className="mt-8 p-6 bg-basketo-dark/50 rounded-lg border border-sidebar-border">
                <h3 className="text-xl font-semibold mb-2">Ready to create your first project?</h3>
                <p className="mb-4">Now that you've installed BasketoEngine, let's create your first project!</p>
                <Button 
                  onClick={() => setActiveTab("firstproject")}
                  className="bg-basketo-blue hover:bg-basketo-blue/90"
                >
                  Next: Your First Project
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="firstproject" className="pt-6">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-3xl font-bold tracking-tight mb-4">Your First Project</h1>
              <p className="text-lg mb-6">
                Learn how to create and set up your first BasketoEngine project.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Creating a New Project</h2>
              <p className="mb-4">
                When you first open BasketoEngine, you'll be presented with the Project Manager. Here's how to create a new project:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li>Click on the <strong>New Project</strong> button in the Project Manager.</li>
                <li>Choose a project name and location on your file system.</li>
                <li>Select a renderer (2D or 3D) based on your project needs.</li>
                <li>Pick a template (optional) to get started quickly.</li>
                <li>Click <strong>Create & Edit</strong> to generate your project.</li>
              </ol>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Exploring the Editor Interface</h2>
              <p className="mb-4">
                Once your project is created, you'll see the BasketoEngine editor interface. Let's explore its main components:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Scene Panel:</strong> Displays the hierarchy of nodes in your current scene.</li>
                <li><strong>Viewport:</strong> Shows the visual representation of your scene.</li>
                <li><strong>Inspector:</strong> Allows you to view and modify the properties of selected nodes.</li>
                <li><strong>FileSystem:</strong> Provides access to all files and resources in your project.</li>
                <li><strong>Output/Debug Panel:</strong> Displays console output and debugging information.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Creating Your First Scene</h2>
              <p className="mb-4">
                Let's create a simple scene with a sprite:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li>Click on the <strong>+</strong> icon in the Scene panel.</li>
                <li>Choose <strong>2D Scene</strong> as your root node.</li>
                <li>Right-click on the root node and select <strong>Add Child Node</strong>.</li>
                <li>Search for and select <strong>Sprite</strong>.</li>
                <li>In the Inspector, click on the <strong>Texture</strong> property and select <strong>Load</strong>.</li>
                <li>Choose one of the included textures or import your own.</li>
                <li>Save your scene by pressing <strong>Ctrl+S</strong> (or <strong>Cmd+S</strong> on macOS).</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Running Your Project</h2>
              <p className="mb-4">
                To see your scene in action:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li>Click the <strong>Play</strong> button in the top-right corner of the editor.</li>
                <li>Your game will launch in a separate window.</li>
                <li>To stop the game, close the window or click the <strong>Stop</strong> button.</li>
              </ol>
              
              <div className="bg-sidebar-accent p-4 rounded-md mb-6 border-l-4 border-basketo-purple">
                <h3 className="text-lg font-medium mb-2">Pro Tip</h3>
                <p>You can press <strong>F5</strong> to run the current scene or <strong>F6</strong> to run the last scene you edited.</p>
              </div>

              <p className="mb-4">
                Congratulations! You've created your first BasketoEngine project. From here, you can continue to add more nodes, write scripts, and build your game.
              </p>

              <div className="mt-8 p-6 bg-basketo-dark/50 rounded-lg border border-sidebar-border">
                <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
                <p className="mb-4">Continue exploring the documentation to learn more about BasketoEngine's features and capabilities.</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">
                    <Link to="/docs">Editor Interface</Link>
                  </Button>
                  <Button variant="outline">
                    <Link to="/docs">Scripting Basics</Link>
                  </Button>
                  <Button variant="outline">
                    <Link to="/docs">2D Graphics</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 border-t border-sidebar-border pt-6">
          <div className="flex items-center justify-between">
            <Button variant="outline" disabled>
              Previous: Getting Started
            </Button>
            <Button variant="outline">
              Next: Installation
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sidebar-border text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <p>Was this page helpful?</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">Yes</Button>
                <Button variant="outline" size="sm">No</Button>
              </div>
            </div>
            <div>
              <p>Found an issue with this page?</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Edit className="h-3 w-3" />
                  Edit this page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DocContent;
