import { 
  BrainCircuit, 
  Cpu, 
  Calculator, 
  Database, 
  ArrowRight, 
  ArrowDown,
  Terminal,
  Sparkles,
  Network
} from "lucide-react";

export default function ArchitectureExperiment() {
  return (
    <div id="architecture" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40">
      
      {/* ==========================================
          OPTION 1: THE BENTO BOX
          Best for: Modern, sleek, feature-highlighting 
          ========================================== */}
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Option 1: The Bento Box</h2>
          <p className="text-muted-foreground">Apple/Vercel style asymmetrical grid.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* LangGraph Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors group">
            <Network className="w-10 h-10 text-[#38827a] mb-4 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold mb-2">Dynamic Logic Routing</h3>
              <p className="text-sm text-muted-foreground">LangGraph orchestrates the neural pathways, analyzing query intent and dynamically directing traffic to the most efficient processing engine.</p>
            </div>
          </div>
          
          {/* SymPy Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors group">
            <Calculator className="w-10 h-10 text-[#38827a] mb-4 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold mb-2">SymPy Engine</h3>
              <p className="text-sm text-muted-foreground">Flawless algebraic and calculus computation.</p>
            </div>
          </div>
          
          {/* Local LLM Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors group">
            <Cpu className="w-10 h-10 text-[#38827a] mb-4 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold mb-2">Local Compute</h3>
              <p className="text-sm text-muted-foreground">Powered entirely by Ollama for zero-latency, private inference.</p>
            </div>
          </div>

          {/* NLP & Memory Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors group">
            <Database className="w-10 h-10 text-[#38827a] mb-4 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-bold mb-2">NLP Parsing & SQLite Storage</h3>
              <p className="text-sm text-muted-foreground">Queries are pre-processed via SpaCy for vector-based semantic understanding, with conversation state seamlessly persisting in a lightweight SQLite database.</p>
            </div>
          </div>
        </div>
      </div>


      {/* ==========================================
          OPTION 2: THE FLOWCHART
          Best for: Explaining the exact data pipeline
          ========================================== */}
      <div className="space-y-8 pt-12 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Option 2: The Flowchart</h2>
          <p className="text-muted-foreground">Visualizing the step-by-step query resolution.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="bg-white/5 border border-[#38827a]/30 rounded-lg p-6 text-center w-full md:w-48 shadow-[0_0_15px_rgba(56,130,122,0.1)]">
            <Terminal className="w-8 h-8 mx-auto mb-3 text-gray-400" />
            <span className="font-semibold text-sm">User Query</span>
          </div>
          
          <ArrowRight className="hidden md:block w-6 h-6 text-[#38827a]" />
          <ArrowDown className="md:hidden w-6 h-6 text-[#38827a]" />

          <div className="bg-white/5 border border-[#38827a]/30 rounded-lg p-6 text-center w-full md:w-48 shadow-[0_0_15px_rgba(56,130,122,0.1)]">
            <BrainCircuit className="w-8 h-8 mx-auto mb-3 text-[#38827a]" />
            <span className="font-semibold text-sm">SpaCy + LangGraph Router</span>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <ArrowRight className="hidden md:block w-6 h-6 text-[#38827a]" />
            <ArrowDown className="md:hidden w-6 h-6 text-[#38827a]" />
          </div>

          <div className="flex flex-col gap-4 w-full md:w-48">
            <div className="bg-[#38827a]/10 border border-[#38827a] rounded-lg p-4 text-center">
              <Calculator className="w-5 h-5 mx-auto mb-2 text-[#38827a]" />
              <span className="text-xs font-bold text-[#38827a]">SymPy Math Tool</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <Cpu className="w-5 h-5 mx-auto mb-2 text-gray-400" />
              <span className="text-xs font-medium text-gray-300">Ollama Text Tool</span>
            </div>
          </div>
          
          <ArrowRight className="hidden md:block w-6 h-6 text-[#38827a]" />
          <ArrowDown className="md:hidden w-6 h-6 text-[#38827a]" />

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center w-full md:w-48">
            <Sparkles className="w-8 h-8 mx-auto mb-3 text-gray-400" />
            <span className="font-semibold text-sm">Synthesized Response</span>
          </div>
        </div>
      </div>


      {/* ==========================================
          OPTION 3: THE TERMINAL UI
          Best for: Showing off raw developer capability
          ========================================== */}
      <div className="space-y-8 pt-12 border-t border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Option 3: The Terminal</h2>
          <p className="text-muted-foreground">A live-action mockup of the logic engine.</p>
        </div>

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
          {/* MacOS Terminal Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-white/10 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-gray-500 font-mono">dlm-router-v1.0 ~ bash</div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm leading-relaxed space-y-4 text-gray-300">
            <div className="flex gap-4">
              <span className="text-[#38827a] font-bold">user@local:~$</span>
              <span className="text-white">Evaluate the integral of x^2 * sin(x)</span>
            </div>
            
            <div className="flex gap-4 opacity-70">
              <span className="text-blue-400">system:</span>
              <span>[SpaCy] Parsing entities... Subject: Mathematics.</span>
            </div>

            <div className="flex gap-4 opacity-70">
              <span className="text-purple-400">langgraph:</span>
              <span>Routing intent {"->"} [TOOL: SYMPY_CALCULUS]</span>
            </div>

            <div className="flex gap-4 opacity-70">
              <span className="text-yellow-400">sympy:</span>
              <span>Executing: integrate(x**2 * sin(x), x)</span>
            </div>

            <div className="flex gap-4 mt-4">
              <span className="text-green-400 font-bold">dlm-out:~$</span>
              <span className="text-white">The integral is: <span className="text-[#38827a]">2*x*sin(x) - (x^2 - 2)*cos(x)</span></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}