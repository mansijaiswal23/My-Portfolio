
import { FileText, Github, Linkedin, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Resume</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          View my professional experience and download my full resume.
        </p>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in">
            <div className="p-6 md:p-8 border-b">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h3 className="text-2xl font-bold text-gray-800">Mansi Jaiswal</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/mansi-jaiswal-24b79421a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-portfolio-blue hover:text-portfolio-darkBlue transition-colors"
                  >
                    <Linkedin size={20} className="mr-2" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/mansijaiswal23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="mb-8 bg-white rounded-lg shadow-sm border p-8">
                {/* Resume Content based on the uploaded image */}
                <div className="space-y-8">
                  {/* Header Section */}
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Mansi Jaiswal</h2>
                    <p className="text-gray-600">Greater Noida, India</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                      <p className="flex items-center gap-1">
                        <span>+91-8409291902</span>
                      </p>
                      <p className="flex items-center gap-1">
                        <span>jaiswalmansi582@gmail.com</span>
                      </p>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">Professional Summary</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Full Stack Developer with expertise in React.js, Node.js, Express.js, MongoDB (MERN Stack)</li>
                      <li>Focused on performance, security, and scalability across front and back ends</li>
                      <li>Builds scalable, high-performance web applications with clean, maintainable code</li>
                    </ul>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">Technical Skills</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Languages: JavaScript, Python, Java, C, SQL</li>
                      <li>Frontend: React.js, Next.js, TypeScript, HTML5, CSS3, TailwindCSS, Bootstrap, Redux</li>
                      <li>Tools: Git, GitHub, IntelliJ IDEA</li>
                      <li>Backend: Node.js, Express.js, .NET, RESTful APIs</li>
                      <li>Databases: MongoDB, PostgreSQL</li>
                      <li>Concepts: OOPs, Data Structures, DBMS, Software Design</li>
                    </ul>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">EDUCATION</h3>
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-bold">IIMT College of Engineering, Greater Noida</h4>
                          <p>B.Tech - Computer Science and Engineering - CGPA - 8.0</p>
                        </div>
                        <p>2021 – 2025</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-bold">Asian School, Muzaffarpur, Bihar</h4>
                          <p>PCM- Percentage - 80</p>
                        </div>
                        <p>2019 – 2021</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-bold">BS Public School, Muzaffarpur, Bihar</h4>
                          <p>Percentage - 86.6</p>
                        </div>
                        <p>2018 – 2019</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">EXPERIENCE</h3>
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-bold">Frontend Developer Intern</h4>
                        <p>September 2024 – Dec 2024</p>
                      </div>
                      <p className="italic mb-2">Suven Consultants and Technology Pvt Ltd, Mumbai</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Worked as a Frontend Developer Intern, developing responsive and visually appealing web interfaces using React.js and Tailwind CSS.</li>
                        <li>Assisted in UI/UX improvements, implemented reusable components, and ensured cross-browser compatibility.</li>
                        <li>Collaborated with the team to integrate REST APIs and optimize performance for a seamless user experience.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">PROJECTS</h3>
                    <div className="mb-4">
                      <h4 className="font-bold">E-Commerce — Dry Fruits Website | HTML, CSS, JavaScript, Bootstrap, Razorpay</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Developed a modern e-commerce website for dry fruits using HTML, CSS, JavaScript, and Bootstrap for a responsive UI.</li>
                        <li>Implemented cart system, product filtering, and Razorpay payment gateway for secure online transactions.</li>
                        <li>Focused on clean design, mobile responsiveness, and modular code for easy scalability and maintenance.</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold">Movie Browser | React.js, CSS, OMDb API</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Developed a sleek movie search app using React.js and the OMDb API, allowing users to search and explore movies by title.</li>
                        <li>Implemented real-time search, movie details view, and error handling for smooth user interaction.</li>
                        <li>Focused on clean UI, responsive design, and efficient state management with React hooks.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">Supplements Store | HTML, CSS, JavaScript, Bootstrap</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Created a modern supplement store website with HTML, CSS, JavaScript, and Bootstrap, showcasing products in a clean, responsive layout.</li>
                        <li>Implemented features like product catalog, category filtering, and cart interface to enhance user interaction.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">CERTIFICATIONS</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>DSA + Full Stack Development + Aptitude — Apna College (Mar 2024 – Aug 2025)</li>
                      <li>Java and Javacript - Hackerrank</li>
                      <li>Secured 3rd rank in the Codeclash coding competition 2023 at IIMT College of Engineering, Greater Noida.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href="/lovable-uploads/9a5a0ffd-2c0e-4ca1-a21b-15f3400ae480.png" 
                  download="Mansi_Jaiswal_Resume.png"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
