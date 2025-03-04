// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">SheekoChat</h3>
            <p className="text-gray-400">
              Empowering meaningful connections through innovative chat solutions
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-200">DEVELOPED BY</h4>
            <a 
              href="https://engaweis.netlify.app/" 
              className="flex items-center text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text text-transparent font-bold">
                @EngAweis
              </span>
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-200">CONNECT</h4>
            <div className="flex space-x-4">
              {[
                ['M2.75 7.75a7 7 0 0 1 7-7h2.5a7 7 0 0 1 7 7v8.5a7 7 0 0 1-7 7h-2.5a7 7 0 0 1-7-7v-8.5z', 'https://twitter.com'],
                ['M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3z', 'https://facebook.com'],
                ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z', 'https://linkedin.com']
              ].map(([d, href], idx) => (
                <a
                  key={idx}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2025 SheekoChat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;