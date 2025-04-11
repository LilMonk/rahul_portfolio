import { experiences, education } from '../../utils/mockData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-500 rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 border-l-4 border-indigo-500"
                >
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{exp.location}</span>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 border-l-4 border-indigo-500"
                >
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree} in {edu.field}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{edu.institution}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{edu.location}</span>
                  </div>
                  
                  {edu.description && (
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}