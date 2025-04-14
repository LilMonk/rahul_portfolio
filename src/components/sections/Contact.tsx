import { useState } from 'react';
import { personalInfo } from '../../utils/mockData';
import { useThemeColors } from '../../hooks/useThemeColors';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const colors = useThemeColors();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };
  
  const { contact } = personalInfo;

  return (
    <section id="contact" className={`py-16 ${colors.bgSecondary}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${colors.textPrimary} mb-4`}>Get In Touch</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-500 rounded"></div>
          <p className={`mt-4 text-lg ${colors.textAccent} max-w-2xl mx-auto`}>
            Have a question or want to work together? Feel free to contact me.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`${colors.bgPrimary} p-8 rounded-lg shadow-md`}>
            <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6`}>Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full ${colors.getThemeClass('bg-indigo-100 text-indigo-600', 'bg-indigo-900 text-indigo-300')}`}>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className={`text-lg font-medium ${colors.textPrimary}`}>Email</h4>
                  <p className={`mt-1 ${colors.textAccent}`}>
                    <a href={`mailto:${contact.email}`} className={`hover:${colors.brandPrimary}`}>
                      {contact.email}
                    </a>
                  </p>
                </div>
              </div>
              
              {contact.phone && (
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full ${colors.getThemeClass('bg-indigo-100 text-indigo-600', 'bg-indigo-900 text-indigo-300')}`}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-medium ${colors.textPrimary}`}>Phone</h4>
                    <p className={`mt-1 ${colors.textAccent}`}>
                      <a href={`tel:${contact.phone}`} className={`hover:${colors.brandPrimary}`}>
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </div>
              )}
              
              {contact.location && (
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full ${colors.getThemeClass('bg-indigo-100 text-indigo-600', 'bg-indigo-900 text-indigo-300')}`}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-medium ${colors.textPrimary}`}>Location</h4>
                    <p className={`mt-1 ${colors.textAccent}`}>{contact.location}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <h4 className={`text-lg font-medium ${colors.textPrimary} mb-4`}>Connect with me</h4>
              <div className="flex space-x-4">
                {contact.github && (
                  <a 
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.textAccent} hover:${colors.brandPrimary}`}
                    aria-label="GitHub"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                
                {contact.linkedin && (
                  <a 
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.textAccent} hover:${colors.brandPrimary}`}
                    aria-label="LinkedIn"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                
                {contact.twitter && (
                  <a 
                    href={contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.textAccent} hover:${colors.brandPrimary}`}
                    aria-label="Twitter"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`${colors.bgPrimary} p-8 rounded-lg shadow-md`}>
            <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6`}>Send me a message</h3>
            
            {submitMessage ? (
              <div className={`p-4 mb-6 rounded ${
                submitMessage.type === 'success' 
                  ? 'bg-green-100 text-green-700 border-green-400' 
                  : 'bg-red-100 text-red-700 border-red-400'
              }`}>
                {submitMessage.text}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${colors.textSecondary} mb-1`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border ${colors.borderPrimary} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${colors.getThemeClass('bg-white', 'bg-gray-600')} ${colors.textPrimary}`}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${colors.textSecondary} mb-1`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border ${colors.borderPrimary} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${colors.getThemeClass('bg-white', 'bg-gray-600')} ${colors.textPrimary}`}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${colors.textSecondary} mb-1`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border ${colors.borderPrimary} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${colors.getThemeClass('bg-white', 'bg-gray-600')} ${colors.textPrimary}`}
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      isSubmitting
                        ? 'bg-indigo-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}