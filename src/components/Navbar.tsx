import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 740);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent backdrop-blur-md'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`transition-all duration-200 transform font-bold hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-white'}`}>About</a>
            <a href="#skills" className={`transition-all duration-200 transform font-bold hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-white'}`}>Skills</a>
            <a href="#experience" className={`transition-all duration-200 transform font-bold hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-white'}`}>Experience</a>
            <a href="#projects" className={`transition-all duration-200 transform font-bold hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-white'}`}>Projects</a>
            <a href="#contact" className={`transition-all duration-200 transform font-bold hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-white'}`}>Contact</a>

            <div className="flex items-center space-x-4">
              <a href="https://github.com/ishandesaii" target="_blank" rel="noopener noreferrer" className={`transition-all duration-200 transform font-bold hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-white'}`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ishandesaii/" target="_blank" rel="noopener noreferrer" className={`transition-all duration-200 transform font-bold hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-white'}`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ishanmd2@illinois.edu" className={`transition-all duration-200 transform font-bold hover:scale-110 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-white'}`}>
                <Mail className="w-5 h-5" />
              </a>
              <a href="/Ishan Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="transition-colors duration-300">
              {isOpen ? (
      <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
    ) : (
      <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
    )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
              <a href="#about" className="text-gray-500 hover:text-white" onClick={() => setIsOpen(false)}>About</a>
              <a href="#skills" className="text-gray-500 hover:text-white" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" className="text-gray-500 hover:text-white" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" className="text-gray-500 hover:text-white" onClick={() => setIsOpen(false)}>Contact</a>
              <a href="/Ishan Resume.pdf" target="_blank" rel="noopener noreferrer"className="text-gray-500 hover:text-white font-semibold">Resume</a>
              <div className="flex space-x-4 py-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-white">
                  <Mail className="w-5 h-5" />
                  
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

