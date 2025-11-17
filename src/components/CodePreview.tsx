export const CodePreview = () => {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-border bg-code-bg shadow-2xl">
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-2 text-sm text-muted-foreground font-mono">PlayerController.cs</span>
        <div className="ml-auto">
          <span className="text-xs px-2 py-1 rounded bg-warning/20 text-warning border border-warning/30">
            Concept Preview
          </span>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm overflow-x-auto">
        <pre className="text-foreground">
          <code>
            <span className="text-primary">public</span>{" "}
            <span className="text-primary">class</span>{" "}
            <span className="text-cyan-400">PlayerController</span> :{" "}
            <span className="text-cyan-400">Component</span>
            {"\n"}
            <span className="text-foreground">{"{"}</span>
            {"\n"}
            {"    "}
            <span className="text-primary">private</span>{" "}
            <span className="text-cyan-400">Transform</span>{" "}
            <span className="text-foreground">transform</span>;
            {"\n"}
            {"    "}
            <span className="text-primary">private</span>{" "}
            <span className="text-cyan-400">Rigidbody2D</span>{" "}
            <span className="text-foreground">rigidbody</span>;
            {"\n"}
            {"\n"}
            {"    "}
            <span className="text-primary">void</span>{" "}
            <span className="text-yellow-400">OnStart</span>()
            {"\n"}
            {"    "}
            <span className="text-foreground">{"{"}</span>
            {"\n"}
            {"        "}
            <span className="text-foreground">transform</span> ={" "}
            <span className="text-yellow-400">GetComponent</span>
            {"<"}
            <span className="text-cyan-400">Transform</span>
            {">();"}
            {"\n"}
            {"        "}
            <span className="text-foreground">rigidbody</span> ={" "}
            <span className="text-yellow-400">GetComponent</span>
            {"<"}
            <span className="text-cyan-400">Rigidbody2D</span>
            {">();"}
            {"\n"}
            {"    "}
            <span className="text-foreground">{"}"}</span>
            {"\n"}
            {"\n"}
            {"    "}
            <span className="text-primary">void</span>{" "}
            <span className="text-yellow-400">OnUpdate</span>(
            <span className="text-primary">float</span>{" "}
            <span className="text-foreground">deltaTime</span>)
            {"\n"}
            {"    "}
            <span className="text-foreground">{"{"}</span>
            {"\n"}
            {"        "}
            <span className="text-primary">float</span>{" "}
            <span className="text-foreground">moveX</span> ={" "}
            <span className="text-cyan-400">Input</span>.
            <span className="text-yellow-400">GetAxis</span>(
            <span className="text-green-400">"Horizontal"</span>);
            {"\n"}
            {"        "}
            <span className="text-foreground">rigidbody</span>.
            <span className="text-yellow-400">ApplyForce</span>(
            <span className="text-foreground">moveX</span> *{" "}
            <span className="text-orange-400">500f</span>,{" "}
            <span className="text-orange-400">0</span>);
            {"\n"}
            {"    "}
            <span className="text-foreground">{"}"}</span>
            {"\n"}
            <span className="text-foreground">{"}"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};
