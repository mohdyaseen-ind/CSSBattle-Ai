import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-2">
            <Code className="text-blue-600" size={22} />
            <span className="text-lg font-semibold text-gray-800">UI Throne</span>
          </div>
          <div className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-medium text-blue-600">Yaseen</span>. All rights reserved.
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/mohd-yaseen-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-blue-700 hover:text-blue-800" size={18} />
            </a>
            <a
              href="https://github.com/mohdyaseen-ind"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="text-gray-700 hover:text-black" size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          Built with ❤️ to blend creativity and code.
        </div>
      </div>
    </footer>
  );
};

export default Footer;