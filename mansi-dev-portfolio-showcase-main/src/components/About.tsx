
const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Here's a quick introduction about myself and my background.
        </p>
        
        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 md:p-10 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4">🎓</span>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-gray-700">B.Tech, 2025 | CGPA 8.0</p>
                  <p className="text-gray-600">IIMT College of Engineering, Greater Noida (AKTU)</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4">👩‍💻</span>
                <div>
                  <h3 className="font-semibold text-lg">Expertise</h3>
                  <p className="text-gray-700">Full Stack Dev with MERN, TypeScript, Java, AWS</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-6">
                <span className="text-3xl mr-4">🎨</span>
                <div>
                  <h3 className="font-semibold text-lg">Hobbies</h3>
                  <p className="text-gray-700">Painting, Singing, and Exploring Tech</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-3xl mr-4">🚀</span>
                <div>
                  <h3 className="font-semibold text-lg">Passion</h3>
                  <p className="text-gray-700">Building user-centric applications and solving complex problems</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-700 italic">
              "I'm a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. 
              I enjoy creating elegant solutions to complex problems and am constantly learning and adapting to new technologies."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
