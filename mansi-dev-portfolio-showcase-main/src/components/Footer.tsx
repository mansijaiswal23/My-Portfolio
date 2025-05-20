
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-6">
            Mansi<span className="text-portfolio-blue">.dev</span>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/mansi-jaiswal-24b79421a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/mansijaiswal23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://twitter.com/mansi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-blue transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">&copy; {currentYear} Mansi Jaiswal. Built with ❤️ using React + Tailwind</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
