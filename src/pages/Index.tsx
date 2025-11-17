import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { FeatureCard } from "@/components/FeatureCard";
import { TechBadge } from "@/components/TechBadge";
import { CodePreview } from "@/components/CodePreview";
import { Github, AlertTriangle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Status Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-warning/30 bg-warning/10">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <span className="text-sm text-warning font-medium">
                Pre-Alpha • Concept Stage • Not Functional
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-6">
            <h1 className="text-7xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-primary to-purple-500 bg-clip-text text-transparent inline-block">
                Lavendel
              </span>
              <br />
              <span className="text-foreground">Engine</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            A vision for a high-performance C++ game engine with Vulkan rendering, C# scripting, 
            and modern ECS architecture. This represents what we're working towards.
          </p>

          {/* Alert Box */}
          <Alert className="max-w-3xl mx-auto mb-10 border-warning/30 bg-warning/5">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <AlertDescription className="text-warning-foreground ml-2">
              <span className="font-semibold">Development Notice:</span> Lavendel Engine is in very 
              early development. Most features shown on this page are not yet implemented. This website 
              demonstrates the planned capabilities and vision for the engine.
            </AlertDescription>
          </Alert>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-primary hover:from-purple-600 hover:to-primary/90 text-white shadow-lg shadow-primary/25"
            >
              <Github className="mr-2 h-5 w-5" />
              View Progress on GitHub
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              Follow Development
            </Button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <StatusBadge status="planned">C# Scripting</StatusBadge>
            <StatusBadge status="in-progress">Vulkan Renderer</StatusBadge>
            <StatusBadge status="planned">ECS Architecture</StatusBadge>
            <StatusBadge status="planned">2D & 3D Physics</StatusBadge>
          </div>

          {/* Code Preview */}
          <CodePreview />
        </div>
      </section>

      {/* Planned Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Planned Features</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Our roadmap for what Lavendel Engine aims to become
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-warning/30 bg-warning/10">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <span className="text-sm text-warning">
                These features represent our development goals and are not currently implemented
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              status="planned"
              title="C# Scripting"
              description="Write game logic in familiar C# with hot-reload support. Full IDE integration and debugging capabilities."
            />
            <FeatureCard
              status="in-progress"
              title="Vulkan Renderer"
              description="High-performance 2D and 3D rendering powered by modern Vulkan API. Optimized for both desktop and mobile."
            />
            <FeatureCard
              status="planned"
              title="ECS Architecture"
              description="Lightning-fast Entity Component System using EnTT. Data-oriented design for maximum performance."
            />
            <FeatureCard
              status="planned"
              title="Physics System"
              description="Comprehensive 2D and 3D physics with collision detection, rigid bodies, and constraint solvers."
            />
            <FeatureCard
              status="planned"
              title="SDL3 Integration"
              description="Cross-platform window management and input handling powered by the latest SDL3."
            />
            <FeatureCard
              status="concept"
              title="Modular Design"
              description="Pick and choose the features you need. Lightweight core with optional modules for flexibility."
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Planned Technology Stack</h2>
            <p className="text-muted-foreground text-lg mb-4">
              The technologies we plan to use for building Lavendel Engine
            </p>
            <p className="text-sm text-warning">Note: Technology choices may change during development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Engine */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Core Engine</h3>
              <div className="space-y-3">
                <TechBadge name="C++20" status="planned" description="Modern C++ with latest features" />
                <TechBadge name="EnTT" status="planned" description="Fast ECS framework" />
                <TechBadge name="SDL3" status="planned" description="Cross-platform windowing" />
              </div>
            </div>

            {/* Graphics */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Graphics</h3>
              <div className="space-y-3">
                <TechBadge name="Vulkan" status="in-progress" description="Modern graphics API" />
                <TechBadge name="SPIR-V" status="planned" description="Shader compilation" />
                <TechBadge name="glm" status="planned" description="Mathematics library" />
              </div>
            </div>

            {/* Scripting */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Scripting</h3>
              <div className="space-y-3">
                <TechBadge name="C#" status="planned" description="Primary scripting language" />
                <TechBadge name="Mono" status="planned" description="Runtime environment" />
                <TechBadge name=".NET" status="planned" description="Framework support" />
              </div>
            </div>

            {/* Physics */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Physics</h3>
              <div className="space-y-3">
                <TechBadge name="Box2D" status="planned" description="2D physics simulation" />
                <TechBadge name="Jolt" status="planned" description="3D physics engine" />
                <TechBadge name="Custom" status="concept" description="Optimized collision" />
              </div>
            </div>
          </div>

          {/* Platform Support */}
          <div className="mt-12 p-6 rounded-xl border border-border bg-card">
            <h3 className="text-xl font-bold mb-4">Target Platforms:</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium">Windows</span>
              <span className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium">Linux</span>
              <span className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium">macOS</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Platform support to be implemented</p>
          </div>
        </div>
      </section>

      {/* Building from Source Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Building from Source</h2>
            <p className="text-muted-foreground text-lg mb-4">
              Compile Lavendel Engine on your platform
            </p>
            <Alert className="border-warning/30 bg-warning/5">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <AlertDescription className="text-warning-foreground ml-2">
                <span className="font-semibold">Important:</span> The engine is in very early development. 
                Many features are not yet implemented. Build at your own risk.
              </AlertDescription>
            </Alert>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                  01
                </span>
                <h3 className="text-xl font-bold">Clone Repository</h3>
              </div>
              <p className="text-muted-foreground mb-4">Download the source code from GitHub</p>
              <div className="p-4 rounded-lg bg-code-bg border border-border font-mono text-sm overflow-x-auto">
                <code className="text-foreground">
                  git clone https://github.com/the0hdDev/lavendel.git<br />
                  cd lavendel
                </code>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                  02
                </span>
                <h3 className="text-xl font-bold">Generate Visual Studio Solution</h3>
              </div>
              <p className="text-muted-foreground mb-4">Create Visual Studio 2022 project files</p>
              <div className="p-4 rounded-lg bg-code-bg border border-border font-mono text-sm overflow-x-auto">
                <code className="text-foreground">
                  cmake . -G "Visual Studio 2022"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">Or run: generate_project_files.bat</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                  03
                </span>
                <h3 className="text-xl font-bold">Build Project</h3>
              </div>
              <p className="text-muted-foreground mb-4">Compile the engine</p>
              <div className="p-4 rounded-lg bg-code-bg border border-border font-mono text-sm overflow-x-auto">
                <code className="text-foreground">
                  cmake --build . --config Release
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Lavendel Engine is an open-source project in early development
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
