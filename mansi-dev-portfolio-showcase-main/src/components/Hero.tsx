
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 animate-fade-in">
            <p className="text-portfolio-blue font-medium mb-2">Hi, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Mansi Jaiswal <span className="inline-block animate-fade-in" style={{animationDelay: '0.3s'}}>👋</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              Full Stack Developer | Java Dev | AWS Certified
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Crafting clean code & beautiful UIs
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FileText size={18} />
                View Resume
              </a>
              <button onClick={scrollToContact} className="btn-outline">
                Contact Me
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-blue/20 rounded-full blur-2xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                <img 
                  src="/lovable-uploads/51b15a2e-6431-4ea9-824c-d2ef44463675.png" 
                  alt="Mansi Jaiswal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-screen bg-portfolio-blue/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;
