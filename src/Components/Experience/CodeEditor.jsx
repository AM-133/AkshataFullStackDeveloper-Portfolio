import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
    </>
  );
}

export default App;`;

export default function CodeEditor() {
  return (
    <div className="h-full overflow-hidden bg-[#1E1E1E]">
      {/* VS Code Header */}

      <div className="flex items-center gap-3 border-b border-[#2D2D2D] bg-[#252526] px-4 py-2">
        <span className="rounded bg-[#333333] px-3 py-1 text-xs text-zinc-300">
          App.jsx
        </span>
      </div>

      {/* Code */}

      <div className="h-[calc(100%-45px)] overflow-hidden">
        <div className="animate-code-scroll">
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            showLineNumbers
            wrapLongLines
            customStyle={{
              margin: 0,
              background: "#1E1E1E",
              fontSize: "14px",
              minHeight: "100%",
              padding: "20px",
            }}
            lineNumberStyle={{
              color: "#6B7280",
              minWidth: "2.5em",
            }}
          >
            {`${code}\n\n${code}\n\n${code}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}