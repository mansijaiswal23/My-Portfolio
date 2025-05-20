
const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "HTML/CSS"],
      color: "bg-blue-500"
    },
    {
      category: "Frontend",
      skills: ["React", "Vite", "Tailwind CSS", "Redux", "Material UI"],
      color: "bg-purple-500"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs"],
      color: "bg-green-500"
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      color: "bg-yellow-500"
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Jira"],
      color: "bg-red-500"
    },
    {
      category: "Cloud",
      skills: ["AWS", "Vercel", "Netlify", "Heroku"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Skills</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          I have experience working with various technologies across the full stack.
        </p>

        <div className="max-w-4xl mx-auto mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="mb-8 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-3">
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3`}></div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
