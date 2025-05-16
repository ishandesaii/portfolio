import { Github, Linkedin, Mail} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2"></h3>
            <p className="text-gray-400">Crafted with ❤️ by Ishan Desai</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/ishandesaii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ishandesaii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a
              href="mailto:ishanmd2@illinois.edu"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


{/* <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
{/* <p>© {new Date().getFullYear()} Ishan Desai. All rights reserved.</p> */}
<p className="mt-2">Crafted with ❤️ by Ishan Desai</p>
