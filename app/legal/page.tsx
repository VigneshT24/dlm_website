import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function LegalNotice() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-300 selection:bg-[#38827a]/30 py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      <div className="max-w-3xl w-full">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" /> Back to main page
        </Link>

        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Legal Notice
        </h1>
        <p className="text-gray-500 mb-12 border-b border-white/10 pb-8">
        </p>

        {/* Content Sections */}
        <div className="space-y-12 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. MIT License</h2>
            <p className="mb-4">
              The Dynamic Learning Model (DLM) is open-source software licensed under the MIT License. 
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
              to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
              provided that the author is credited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Privacy & Offline Operation</h2>
            <p className="mb-4">
              DLM is designed as a strict local-execution environment. By default, the core routing logic, LangGraph state management, SpaCy natural language parsing, and SQLite database storage operate 100% offline. Zero telemetry, user data, or query logs are transmitted to external cloud servers during standard operation. 
            </p>
            <p>
              Please note that downloading the initial dependencies via pip, fetching SpaCy models, or pulling LLM weights via Ollama does require an internet connection and is subject to the privacy policies of those respective hosts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Third-Party Dependencies</h2>
            <p className="mb-4">
              This architecture relies on several third-party tools and frameworks to function, including but not limited to <strong>LangGraph</strong>, <strong>SpaCy</strong>, <strong>SymPy</strong>, and <strong>Ollama</strong>. The use of these dependencies is governed by their own respective licenses and terms of service. Users are responsible for ensuring their specific usage of DLM complies with the licensing terms of any locally hosted LLMs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. No Warranty / Limitation of Liability</h2>
            <p className="mb-4">
              The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
            </p>
          </section>
          
        </div>
      </div>
    </main>
  );
}