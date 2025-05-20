
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Resume Parsing App",
      description: "An AI-powered application that extracts key information from resumes and provides structured data.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
      technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
      githubUrl: "https://github.com/username/resume-parser",
      liveUrl: "https://resume-parser.demo.com"
    },
    {
      title: "Quick Ration (Blinkit Clone)",
      description: "A grocery delivery application with real-time tracking and inventory management.",
      image: "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=800&auto=format&fit=crop",
      technologies: ["React", "Express", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/username/quick-ration",
      liveUrl: "https://quick-ration.demo.com"
    },
    {
      title: "HelpKart (Urban Company Clone)",
      description: "An on-demand service platform connecting users with local service providers.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "Express"],
      githubUrl: "https://github.com/username/helpkart",
      liveUrl: "https://helpkart.demo.com"
    },
    {
      title: "Netflix Clone",
      description: "A streaming platform clone with user authentication, movie browsing, and video playback.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop",
      technologies: ["React", "Firebase", "TMDB API", "CSS"],
      githubUrl: "https://github.com/username/netflix-clone",
      liveUrl: "https://netflix-clone.demo.com"
    },
    {
      title: "Dry Fruit E-Commerce",
      description: "A full-featured e-commerce platform for dry fruits with payment integration.",
      image: "https://images.unsplash.com/photo-1565789180447-5a0eab382cd7?q=80&w=800&auto=format&fit=crop",
      technologies: ["MERN Stack", "Redux", "Stripe", "AWS"],
      githubUrl: "https://github.com/username/dryfruit-store",
      liveUrl: "https://dryfruit-store.demo.com"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
