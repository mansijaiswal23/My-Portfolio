
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl
}: ProjectCardProps) => {
  return (
    <div className="card overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech) => (
            <span key={tech} className="text-xs font-medium bg-portfolio-blue/10 text-portfolio-blue px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex space-x-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-gray-700 hover:text-portfolio-blue transition-colors"
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-portfolio-blue transition-colors hover:text-portfolio-darkBlue"
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
