
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-xl md:text-2xl font-poppins font-bold text-portfolio-blue">
          Mansi<span className="text-gray-800">.dev</span>
        </a>

        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('resume')} className="nav-link">Resume</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>

        <button className="md:hidden text-gray-800" onClick={() => {
          const menu = document.getElementById('mobile-menu');
          if (menu) menu.classList.toggle('hidden');
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 w-full bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button onClick={() => {
            scrollToSection('about');
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('hidden');
          }} className="nav-link">About</button>
          <button onClick={() => {
            scrollToSection('projects');
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('hidden');
          }} className="nav-link">Projects</button>
          <button onClick={() => {
            scrollToSection('skills');
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('hidden');
          }} className="nav-link">Skills</button>
          <button onClick={() => {
            scrollToSection('resume');
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('hidden');
          }} className="nav-link">Resume</button>
          <button onClick={() => {
            scrollToSection('contact');
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('hidden');
          }} className="nav-link">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
