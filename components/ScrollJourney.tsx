"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  BrainCircuit, 
  Network, 
  Cpu, 
  UserCheck, 
  Database,
  Download,
  Calculator,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";

type Mode = "factual" | "math";

export default function ScrollJourney() {
  const [mode, setMode] = useState<Mode>("factual");
  const [installStep, setInstallStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    const queryText = mode === "factual" ? 'Define FAFSA for me.' : 'Area of triangle: base 5, height 10';
    const codeString = `from dlm import DLM

    # 1. Initialize in apply, train_memory, or train_compute mode
    dlm_bot = DLM("train_memory")

    # 2. Query the dynamic router
    response = dlm_bot.ask(
        "${queryText}",
        display_thought=True
    )

    # 3. Access routing status, thoughts, and answers
    print("Status:", response['status'])
    print("Thought:", response['thought'])
    print("Answer:", response['answer'])
    print("Category:", response['category'])`;

    try {
      // Primary Method: Modern Clipboard API (Requires HTTPS or localhost)
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback Method: For non-secure contexts (like local network testing)
        const textArea = document.createElement("textarea");
        textArea.value = codeString;
        
        // Hide the textarea off-screen
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
        document.body.prepend(textArea);
        
        textArea.select();
        
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (fallbackError) {
          console.error("Fallback copy failed:", fallbackError);
        } finally {
          textArea.remove(); // Clean up the hidden textarea
        }
      }
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  const getSteps = (currentMode: Mode) => {
    if (currentMode === "factual") {
      return [
        {
          id: 1,
          icon: <Terminal className="w-6 h-6" />,
          title: "1. The Factual Query",
          desc: 'User inputs: "What is the definition of FAFSA in college?"'
        },
        {
          id: 2,
          icon: <BrainCircuit className="w-6 h-6" />,
          title: "2. NLP & Intent Parsing",
          desc: "SpaCy intercepts the input. It analyzes the semantic vectors, detects zero mathematical operators or numerical entities, and flags the intent as strictly conversational."
        },
        {
          id: 3,
          icon: <Network className="w-6 h-6" />,
          title: "3. LangGraph Routing",
          desc: "The router receives the conversational flag. It bypasses the calculation engines entirely and opens a direct node connection to the local memory/inference pipeline."
        },
        {
          id: 4,
          icon: <MessageSquare className="w-6 h-6" />,
          title: "4. Local LLM Inference",
          desc: "Ollama receives the query. The local language model synthesizes its internal knowledge base to generate a concise, accurate definition of the federal student aid program with zero cloud latency."
        },
        {
          id: 5,
          icon: <UserCheck className="w-6 h-6" />,
          title: "5. Human-In-The-Loop (HITL)",
          desc: "In training mode, execution pauses. The implementor verifies that the LLM didn't hallucinate the definition before allowing the system to proceed."
        },
        {
          id: 6,
          icon: <Database className="w-6 h-6" />,
          title: "6. SQLite Persistence",
          desc: "The verified factual response and conversational context window are committed to the local SQLite database."
        }
      ];
    } else {
      return [
        {
          id: 1,
          icon: <Terminal className="w-6 h-6" />,
          title: "1. The Compute Query",
          desc: 'User inputs: "What is the area of a triangle with height 10 and base 5?"'
        },
        {
          id: 2,
          icon: <BrainCircuit className="w-6 h-6" />,
          title: "2. NLP & Intent Parsing",
          desc: "SpaCy processes the vector space. It immediately isolates 'area', 'triangle', 'height 10', and 'base 5', flagging the query as highly mathematical and extracting the target variables."
        },
        {
          id: 3,
          icon: <Network className="w-6 h-6" />,
          title: "3. LangGraph Routing",
          desc: "The router catches the math flag. It halts the standard conversational pipeline and strictly routes the extracted variables into the heavy computation node."
        },
        {
          id: 4,
          icon: <Calculator className="w-6 h-6" />,
          title: "4. SymPy Engine",
          desc: "SymPy constructs the algebraic formula (0.5 * base * height). It safely and flawlessly computes the exact answer (25.0) without relying on unreliable LLM token prediction."
        },
        {
          id: 5,
          icon: <UserCheck className="w-6 h-6" />,
          title: "5. Human-In-The-Loop (HITL)",
          desc: "Execution pauses. The developer checks the terminal to ensure LangGraph routed to SymPy correctly and that the equation logic is sound."
        },
        {
          id: 6,
          icon: <Database className="w-6 h-6" />,
          title: "6. SQLite Persistence",
          desc: "The raw equation and calculated result are saved to SQLite, allowing the conversational memory to reference this exact math later for a similar query."
        }
      ];
    }
  };

  const steps = getSteps(mode);

  return (
    <div id="architecture" className="py-32 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Live Architecture Trace</h2>
        <p className="text-muted-foreground text-lg mb-8">Select a query type to see how the DLM engine dynamically routes the logic.</p>
        
        {/* Interactive Query Selector */}
        <div className="inline-flex flex-col sm:flex-row p-1.5 bg-white/5 border border-white/10 rounded-2xl md:rounded-full gap-2 relative z-30">
          <button
            onClick={() => setMode("factual")}
            className={`px-6 py-3 rounded-xl md:rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              mode === "factual" 
                ? "bg-[#38827a] text-white shadow-lg shadow-[#38827a]/25" 
                : "text-muted-foreground hover:text-white hover:bg-white/5"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            "Define FAFSA for me."
          </button>
          <button
            onClick={() => setMode("math")}
            className={`px-6 py-3 rounded-xl md:rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              mode === "math" 
                ? "bg-[#38827a] text-white shadow-lg shadow-[#38827a]/25" 
                : "text-muted-foreground hover:text-white hover:bg-white/5"
            }`}
          >
            <Calculator className="w-4 h-4" />
            "Area of triangle: base 5, height 10"
          </button>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mt-16">
        
        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] relative z-10">
          
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#38827a]/50 to-transparent -translate-x-1/2 z-0" />

          <AnimatePresence mode="wait">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <React.Fragment key={`${mode}-${step.id}`}>
                  {/* Left Column */}
                  <div className={`relative flex items-center ${isEven ? 'justify-end pr-12' : ''} py-16`}>
                    {isEven && (
                      <>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl hover:border-[#38827a]/60 transition-all max-w-lg w-full z-10 relative"
                        >
                          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        </motion.div>
                        <motion.div 
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: "3rem", opacity: 1 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="absolute right-0 top-1/2 h-0.5 bg-gradient-to-l from-[#38827a] to-transparent -translate-y-1/2 z-0 origin-right"
                        />
                      </>
                    )}
                  </div>

                  {/* Center Column */}
                  <div className="flex flex-col items-center justify-center relative z-20">
                    <motion.div 
                      initial={{ scale: 0.8, borderColor: "#333", backgroundColor: "#0a0a0a" }}
                      whileInView={{ scale: 1, borderColor: "#38827a", backgroundColor: "#0a0a0a" }}
                      viewport={{ once: true, margin: "-15%" }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-[#38827a] shadow-[0_0_20px_rgba(56,130,122,0.4)]"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Right Column */}
                  <div className={`relative flex items-center ${!isEven ? 'justify-start pl-12' : ''} py-16`}>
                    {!isEven && (
                      <>
                        <motion.div 
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: "3rem", opacity: 1 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="absolute left-0 top-1/2 h-0.5 bg-gradient-to-r from-[#38827a] to-transparent -translate-y-1/2 z-0 origin-left"
                        />
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-15%" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl hover:border-[#38827a]/60 transition-all max-w-lg w-full z-10 relative"
                        >
                          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        </motion.div>
                      </>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </AnimatePresence>
        </div>

        {/* MOBILE GRID */}
        <div className="md:hidden flex flex-col space-y-12 relative z-10 mt-8">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-[#38827a]/30 z-0" />
          <AnimatePresence mode="wait">
            {steps.map((step) => (
              <div key={`${mode}-mobile-${step.id}`} className="relative flex items-start gap-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-14 h-14 shrink-0 rounded-full border-2 border-[#38827a] flex items-center justify-center bg-[#0a0a0a] text-[#38827a] shadow-[0_0_15px_rgba(56,130,122,0.3)] z-10 mt-1"
                >
                  {step.icon}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a0a]/90 border border-white/10 p-6 rounded-2xl shadow-xl w-full"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* ==========================================
          LIVE TERMINAL DEMO SECTION
          ========================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="mt-32 max-w-4xl mx-auto relative z-20"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">See it in action.</h2>
          <p className="text-muted-foreground">
            Watch the DLM handle the <span className="text-[#38827a] font-semibold">{mode === "factual" ? "conversational" : "compute"}</span> pipeline in real-time.
          </p>
        </div>

        {/* Terminal Video Wrapper */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
          
          {/* MacOS Style Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            {/* <div className="text-xs text-gray-500 font-mono">
              {mode}-demo-2.mp4
            </div> */}
            <div className="w-12"></div> {/* Spacer to keep title centered */}
          </div>
          
          {/* Dynamic Video Player */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            {/* The 'key' forces React to fully reload the video element when the mode changes, ensuring it plays from the beginning */}
            <video 
              key={`video-${mode}`}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src={mode === "factual" ? "/factual-demo-2.mp4" : "/compute-demo-2.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Fallback UI if the video files haven't been added to the public folder yet */}
            <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-gray-500 font-mono text-sm">
              <Terminal className="w-8 h-8 mb-2 opacity-50" />
              Waiting for /{mode}-demo-2.mp4 in public folder...
            </div>
          </div>
        </div>

        {/* Transparency & Disclosure Disclaimer */}
        <div className="mt-4 text-sm text-gray-400 leading-relaxed text-left px-2">
          <span className="font-semibold text-gray-300">Transparency & Full Disclosure: </span> 
          Recorded running a local Llama 3 instance on an integrated Intel Arc GPU. 
          SpaCy intent parsing utilizes the "en_core_web_lg" pipeline for high accuracy, therefore, processing speed may vary. 
          Video footage during LLM inference has been sped up by 2x for brevity (real-world generation averaged ~15 tokens/sec). 
          Real-time processing speeds will vary based on your local VRAM and hardware capabilities. 
          All routing, computation, and SQLite memory storage occur completely offline with zero cloud telemetry.
          However, initial install does require internet connection to download all necessary models.
        </div>
      </motion.div>

      {/* Interactive Installation Carousel */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="mt-40 pt-24 border-t border-white/10 max-w-3xl mx-auto relative z-20"
      >
        <div id="installation-guide" className="text-center mb-12">
          <Download className="w-12 h-12 text-[#38827a] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to initialize?</h2>
          <p className="text-muted-foreground">Get the DLM running in 4 simple steps.</p>
        </div>

        {/* Carousel Container */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative min-h-[400px] flex flex-col">
          
          {/* MacOS Header / Progress Indicator */}
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-2 w-20">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            {/* Step Dots */}
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step} 
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${installStep === step ? 'bg-[#38827a]' : 'bg-gray-700'}`}
                />
              ))}
            </div>
            
            <div className="w-20 text-right text-xs text-gray-500 font-mono">
              Step {installStep}/4
            </div>
          </div>
          
          {/* Slider Content */}
          <div className="flex-grow relative overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: OLLAMA */}
              {installStep === 1 && (
                <motion.div 
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center"
                >
                  <Cpu className="w-16 h-16 text-gray-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Install Local Inference</h3>
                  <p className="text-gray-400 mb-8 max-w-md">
                    DLM requires Ollama to run the reasoning and auto-routing engine completely offline with zero latency. Download Ollama at no cost and start a local model first.
                  </p>
                  <a 
                    href="https://ollama.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Get Ollama <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="mt-6 font-mono text-sm text-gray-500">
                    Once installed, run: <span className="text-white">ollama run llama3</span>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: PIP INSTALL */}
              {installStep === 2 && (
                <motion.div 
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center"
                >
                  <Terminal className="w-16 h-16 text-[#38827a] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Install the Engine</h3>
                  <p className="text-gray-400 mb-8 max-w-md">
                    Grab the official Dynamic Learning Model package from PyPI. This includes the LangGraph router, SpaCy pipelines, and SQLite tools.
                  </p>
                  <div className="bg-[#111] border border-white/10 p-4 rounded-lg font-mono text-white text-lg w-full max-w-md shadow-inner">
                    <span className="text-[#38827a]">pip</span> install dynamic-learning-model
                  </div>
                </motion.div>
              )}
              {/* STEP 3: DB Browser */}
              {installStep === 3 && (
                <motion.div 
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center"
                >
                  <Database className="w-16 h-16 text-[#38827a] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Database Inspection (Recommended)</h3>
                  <p className="text-gray-400 mb-8 max-w-md">
                    To visually view and debug your DLM's live SQLite memory database in real-time, it is highly recommended to install DB Browser.
                  </p>
                  <a 
                    href="https://sqlitebrowser.org/dl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Download DB Browser <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              )}
              {/* STEP 4: STARTER CODE */}
              {installStep === 4 && (
                <motion.div 
                  key="step-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  // 1. THE FIX: Removed justify-center and added pt-6 to anchor it to the top safely
                  className="absolute inset-0 p-6 flex flex-col pt-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4 text-center shrink-0">Starter Code</h3>
                  
                  {/* Relative wrapper for the copy button positioning */}
                  <div className="relative w-full max-w-2xl mx-auto">
                    
                    {/* 2. THE FIX: Reduced max-h-[280px] to max-h-[250px] so it doesn't overflow the carousel */}
                    <div className="bg-[#111] border border-white/10 p-5 pb-20 rounded-lg font-mono text-sm md:text-base leading-relaxed text-gray-300 overflow-y-auto max-h-[180px] shadow-inner [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      <div className="text-blue-400">from <span className="text-white">dlm</span> import <span className="text-yellow-200">DLM</span></div>
                      <br/>
                      
                      <div className="text-gray-500 mb-1"># 1. Initialize in apply, train_memory, or train_compute mode</div>
                      <div className="text-white">dlm_bot = <span className="text-yellow-200">DLM</span>(<span className="text-green-400">"train_memory"</span>)</div>
                      <br/>
                      
                      <div className="text-gray-500 mb-1"># 2. Query the dynamic router</div>
                      <div className="text-white">
                        response = dlm_bot.<span className="text-blue-400">ask</span>(
                        <br/>
                        <span className="pl-4 text-green-400">
                          {mode === "factual" ? '"Define FAFSA for me."' : '"Area of triangle: base 5, height 10"'}
                        </span>,
                        <br/>
                        <span className="pl-4 text-white">display_thought=<span className="text-purple-400">True</span></span>
                        <br/>
                        )
                      </div>
                      <br/>
                      
                      <div className="text-gray-500 mb-1"># 3. Access routing status, thought, answer, and category</div>
                      <div className="text-white"><span className="text-blue-400">print</span>(<span className="text-green-400">"Status:"</span>, response[<span className="text-green-400">'status'</span>])</div>
                      <div className="text-white"><span className="text-blue-400">print</span>(<span className="text-green-400">"Thought:"</span>, response[<span className="text-green-400">'thought'</span>])</div>
                      <div className="text-white"><span className="text-blue-400">print</span>(<span className="text-green-400">"Answer:"</span>, response[<span className="text-green-400">'answer'</span>])</div>
                      <div className="text-white"><span className="text-blue-400">print</span>(<span className="text-green-400">"Category:"</span>, response[<span className="text-green-400">'category'</span>])</div>
                    </div>

                    {/* 3. THE FIX: Changed bottom-4 to bottom-6 to lift it away from the edge */}
                    <button
                      onClick={handleCopy}
                      className="absolute bottom-6 right-6 bg-[#222] hover:bg-[#333] border border-white/10 text-gray-400 hover:text-white px-3 py-1.5 rounded-md transition-colors flex items-center gap-2 text-xs font-sans shadow-lg"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="border-t border-white/10 p-4 flex justify-between items-center bg-[#111]">
            <button 
              onClick={() => setInstallStep(Math.max(1, installStep - 1))}
              disabled={installStep === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${installStep === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-white hover:bg-white/10'}`}
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            
            <button 
              onClick={() => installStep === 4 ? setInstallStep(1) : setInstallStep(installStep + 1)}
              className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-colors bg-[#38827a] text-white hover:bg-[#2d6b64]"
            >
              {installStep === 4 ? 'Restart' : 'Next Step'} 
              <ChevronRight className={`w-4 h-4 ${installStep === 4 ? 'hidden' : 'block'}`} />
            </button>
          </div>

        </div>
      </motion.div>

    </div>
  );
}