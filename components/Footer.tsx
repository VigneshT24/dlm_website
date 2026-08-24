export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-24 pb-8 mt-20 relative z-20">
      
      {/* Main Credits Section - Minimalist & Centered */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Built by Vignesh Thondikulam
        </h2>
        
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
          I am a Robotics Engineering major at UC Riverside specializing in artificial intelligence and natural language processing. The Dynamic Learning Model was built to give developers a secure, offline, and highly customizable alternative to expensive cloud inference APIs.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://github.com/VigneshT24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            {/* Raw GitHub SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
            </svg>
            Follow on GitHub
          </a>
          <a 
            href="https://linkedin.com/in/vignesh-thondikulam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            {/* Raw LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom Sub-Footer (Legal & Links) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          
          {/* Product Name (Left) */}
          <div className="text-white font-bold tracking-tight flex items-center gap-3 z-10 w-full md:w-auto justify-center md:justify-start">
            {/* If you have a logo here, it goes inside this flex container */}
            Dynamic Learning Model
          </div>

          {/* Navigation Links (Perfectly Centered) */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500 z-10">
            <a href="#" className="hover:text-white transition-colors">Launch Page</a>
            <a href="/legal" className="hover:text-white transition-colors">Legal Notice</a>
            <a href="https://github.com/VigneshT24/Dynamic_Learning_Model" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://pypi.org/project/dynamic-learning-model/" className="hover:text-white transition-colors">PyPI</a>
          </div>

          {/* Copyright & License (Right) */}
          <div className="text-sm text-gray-500 z-10 w-full md:w-auto text-center md:text-right">
            © 2026 Dynamic Learning Model. MIT License.
          </div>

        </div>
      </div>
    </footer>
  );
}