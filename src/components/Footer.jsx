import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Branding */}
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="text-blue-600 mr-2" size={20} />
            <span className="font-medium text-gray-800">UI Throne</span>
          </div>
          
          {/* Center - Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              Crafted with care by <span className="text-blue-600">Yaseen</span> © {new Date().getFullYear()}
            </p>
          </div>
          
          {/* Right side - Socials */}
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/mohd-yaseen-/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-gray-700 hover:text-blue-600" size={18} />
            </a>
            <a 
              href="https://github.com/mohdyaseen-ind" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 transition-all"
              aria-label="GitHub"
            >
              <Github className="text-gray-700 hover:text-gray-900" size={18} />
            </a>
          </div>
        </div>
        
        {/* Subtle tagline */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Elevating design skills through friendly competition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;