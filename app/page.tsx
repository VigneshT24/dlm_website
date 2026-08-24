import Image from "next/image";
import { GitBranch, Zap, Shield, Package } from "lucide-react";
import { Space_Grotesk, JetBrains_Mono, Outfit, Rajdhani, Fira_Code, Syne } from 'next/font/google';
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import ArchitectureExperiment from "@/components/ArchitectureExperiment";
import ScrollJourney from "@/components/ScrollJourney";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: '700' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: '700' });
const outfit = Outfit({ subsets: ['latin'], weight: '700' });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: '700' });
const firaCode = Fira_Code({ subsets: ['latin'], weight: '700' });
const syne = Syne({ subsets: ['latin'], weight: 'variable' });

export default function Home() {
  return (
    // 1. Changed outer wrapper to a div with flex-col
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[#38827a]/30 flex flex-col">
      
      {/* 2. Added <main flex-grow> to push the footer down */}
      <main className="flex-grow">
        {/* Navigation */}
        <nav className="border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 border border-white/10 flex items-center justify-center p-0.5">
                  <Image 
                    src="/dlm_logo.png" 
                    alt="DLM Logo" 
                    width={32} 
                    height={32} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className={`text-lg tracking-tight ${syne.className}`}>
                  Dynamic Learning Model
                </span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Architecture</a>
                <a href="#installation-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Installation Guide</a>
                <a 
                  href="https://github.com/VigneshT24/Dynamic_Learning_Model" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-24 pb-32 min-h-[80vh] flex items-center justify-center">
          <NeuralNetworkBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-balance mb-6">
              Build your own local <br className="hidden sm:block" />
              <span className="text-[#38827a]">intelligence engine.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              A completely free, local routing architecture powered by SpaCy, LangGraph & Ollama. 
              Train domain-specific knowledge into local memory, dynamically handle heavy computation, 
              and deploy DLM as your custom backend engine for any chatbot interface. No cloud dependency.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#architecture"
                className="inline-flex justify-center items-center h-12 px-8 rounded-md bg-[#38827a] text-white font-medium hover:bg-[#2c6b64] transition-colors shadow-lg shadow-[#38827a]/20"
              >
                <Zap className="w-4 h-4 mr-2" />
                Explore the Architecture
              </a>

              <a 
                href="https://pypi.org/project/your-dlm-package-name/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 w-full sm:w-auto justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2"
              >
                <Package className="w-4 h-4" />
                Install via PyPI
              </a>
            </div>
          </div>
        </section>
      
        <ScrollJourney />
      </main>

      {/* 3. The Footer sits outside <main> but inside the master <div> */}
      <Footer />
      
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}