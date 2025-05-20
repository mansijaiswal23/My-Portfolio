
import { useState } from 'react';
import { Send, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Contact Me</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 animate-fade-in">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <a href="mailto:mansi.jaiswal@example.com" className="text-gray-800 hover:text-portfolio-blue transition-colors">
                      mansi.jaiswal@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <p className="text-gray-800">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                    <MessageSquare size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Social Media</h4>
                    <div className="flex items-center mt-1 space-x-4">
                      <a href="https://linkedin.com/in/mansi-jaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                        LinkedIn
                      </a>
                      <a href="https://github.com/mansi-jaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-portfolio-blue transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-portfolio-blue transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-portfolio-blue transition-colors"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full btn-primary justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-md text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitError && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-md text-center">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
