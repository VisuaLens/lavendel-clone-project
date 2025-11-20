import React from "react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { FeatureCard } from "@/components/FeatureCard";
import { TechBadge } from "@/components/TechBadge";
import { CodePreview } from "@/components/CodePreview";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github, AlertTriangle, Eye } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index: React.FC = () => {
  const featuresSection = useScrollAnimation();
  const techSection = useScrollAnimation();
  const buildSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ scrollBehavior: "smooth" }}
    >
      <ThemeToggle />
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
            <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-purple via-primary to-cyan bg-clip-text text-transparent inline-block">
                Lavendel
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple via-primary to-cyan bg-clip-text text-transparent">
                Engine
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            <span className="bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
              Lavendel Engine is being built in the open. Star the repository,
              report bugs, or contribute to the codebase as we build this
              together.
            </span>
          </p>

          {/* Alert Box */}
          <Alert className="max-w-3xl mx-auto mb-10 border-warning/30 bg-warning/5">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <AlertDescription className="text-warning-foreground ml-2">
              <span className="font-semibold">Development Notice:</span> Lavendel
              Engine is in very early development. Most features shown on this
              page are not yet implemented. This website demonstrates the
              planned capabilities and vision for the engine.
            </AlertDescription>
          </Alert>

          {/* Current Development Status */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Current Development Status
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warning"></div>
                <span className="text-muted-foreground">
                  Core Architecture: Planning
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan"></div>
                <span className="text-muted-foreground">
                  Vulkan Renderer: In Progress
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                <span className="text-muted-foreground">
                  Features: Not Implemented
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 mt-8">
          <StatusBadge status="planned">C# Scripting</StatusBadge>
          <StatusBadge status="in-progress">Vulkan Renderer</StatusBadge>
          <StatusBadge status="planned">ECS Architecture</StatusBadge>
          <StatusBadge status="planned">2D & 3D Physics</StatusBadge>
        </div>

        {/* Code Preview */}
        <div className="max-w-6xl mx-auto px-6">
          <CodePreview />
        </div>
      </section>

      {/* Planned Features Section */}
      <section
        ref={featuresSection.ref}
        className={`py-20 px-6 bg-gradient-to-b from-transparent to-card/30 transition-all duration-1000 ${
          featuresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple via-primary to-cyan bg-clip-text text-transparent animate-fade-in">
              Planned Features
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Our roadmap for what Lavendel Engine aims to become
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-warning/30 bg-warning/10">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <span className="text-sm text-warning">
                These features represent our development goals and are not
                currently implemented
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
      <section
        ref={techSection.ref}
        className={`py-20 px-6 transition-all duration-1000 delay-200 ${
          techSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple via-primary to-cyan bg-clip-text text-transparent animate-fade-in">
              Planned Technology Stack
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              The technologies we plan to use for building Lavendel Engine
            </p>
            <p className="text-sm text-warning">Note: Technology choices may change during development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Engine */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
                Core Engine
              </h3>
              <div className="space-y-3">
                <TechBadge name="C++20" status="planned" description="Modern C++ with latest features" />
                <TechBadge name="EnTT" status="planned" description="Fast ECS framework" />
                <TechBadge name="SDL3" status="planned" description="Cross-platform windowing" />
              </div>
            </div>

            {/* Graphics */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
                Graphics
              </h3>
              <div className="space-y-3">
                <TechBadge name="Vulkan" status="in-progress" description="Modern graphics API" />
                <TechBadge name="SPIR-V" status="planned" description="Shader compilation" />
                <TechBadge name="glm" status="planned" description="Mathematics library" />
              </div>
            </div>

            {/* Scripting */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
                Scripting
              </h3>
              <div className="space-y-3">
                <TechBadge name="C#" status="planned" description="Primary scripting language" />
                <TechBadge name="Mono" status="planned" description="Runtime environment" />
                <TechBadge name=".NET" status="planned" description="Framework support" />
              </div>
            </div>

            {/* Physics */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
                Physics
              </h3>
              <div className="space-y-3">
                <TechBadge name="Box2D" status="planned" description="2D physics simulation" />
                <TechBadge name="Jolt" status="planned" description="3D physics engine" />
                <TechBadge name="Custom" status="concept" description="Optimized collision" />
              </div>
            </div>
          </div>

          {/* Platform Support */}
          <div className="mt-12 p-6 rounded-xl border border-border bg-card">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
              Target Platforms:
            </h3>
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
      <section
        ref={buildSection.ref}
        className={`py-20 px-6 bg-gradient-to-b from-card/30 to-transparent transition-all duration-1000 delay-300 ${
          buildSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple via-primary to-cyan bg-clip-text text-transparent animate-fade-in">
              Building from Source
            </h2>
            <p className="text-muted-foreground text-lg mb-4">Compile Lavendel Engine on your platform</p>
            <Alert className="border-warning/30 bg-warning/5">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <AlertDescription className="text-warning-foreground ml-2">
                <span className="font-semibold">Important:</span> The engine is in very early development. Many features are not yet implemented. Build at your own risk.
              </AlertDescription>
            </Alert>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                  01
                </span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Clone Repository</h3>
              </div>
              <p className="text-muted-foreground mb-4">Download the source code from GitHub</p>
              <div className="p-4 rounded-lg bg-code-bg border border-border font-mono text-sm overflow-x-auto">
                <code className="text-foreground">
                  git clone https://github.com/the0hdDev/lavendel.git
                  <br />
                  cd lavendel
                </code>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                  02
                </span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Generate Visual Studio Solution</h3>
              </div>
              <p className="text-muted-foreground mb-4">Create Visual Studio 2022 project files</p>
              <div className="p-4 rounded-lg bg-code-bg border border-border font-mono text-sm overflow-x-auto">
                <code className="text-foreground">cmake . -G "Visual Studio 2022"</code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">Or run: generate_project_files.bat</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                  03
                </span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Build Project</h3>
              </div>
              <p className="text-muted-foreground mb-4">Compile the engine</p>
              <div className="p-4 rounded-lg bg-code-bg border border-border font-mono text-sm overflow-x-auto">
                <code className="text-foreground">cmake --build . --config Release</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div
        ref={ctaSection.ref}
        className={`transition-all duration-700 ${
          ctaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-muted-foreground">
          Lavendel Engine is being built in the open. Star the repository, report bugs, or contribute to the codebase as we build this together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white shadow-lg shadow-purple/25 transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://github.com/the0hdDev/lavendel", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary/50 backdrop-blur transition-all duration-300 hover:scale-105"
          >
            <Eye className="mr-2 h-5 w-5" />
            Watch Progress
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-primary"></div>
                <h1 className="text-[] font-bold bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Lavendel Engine</h1>
              </div>
              <p className="text-muted-foreground text-sm mb-4">An ambitious game engine project in early development.</p>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-warning/30 bg-warning/10">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="text-xl text-warning font-medium">Pre-Alpha - Most features not yet implemented</span>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Documentation (Coming Soon)</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">API Reference (Coming Soon)</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Tutorials (Coming Soon)</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Examples (Coming Soon)</a>
                </li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Community</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">GitHub</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Discord (Coming Soon)</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Forum (Coming Soon)</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter (Coming Soon)</a>
                </li>
              </ul>
            </div>

            {/* Project Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">Project</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Roadmap</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Development Blog</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contributing</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">BSD 3-Clause License</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Lavendel Engine. Licensed under BSD 3-Clause.</p>
            <a
              href="https://github.com/the0hdDev/lavendel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
