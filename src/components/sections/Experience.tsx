import { experiences, education } from '../../utils/mockData';
import { useThemeColors } from '../../hooks/useThemeColors';

export default function Experience() {
  const colors = useThemeColors();

  return (
    <section id="experience" className={`py-16 ${colors.bgSecondary}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${colors.textPrimary} mb-4`}>Experience & Education</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-500 rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6`}>Work Experience</h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`${colors.bgPrimary} rounded-lg shadow-md p-6 border-l-4 border-indigo-500`}
                >
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className={`text-xl font-semibold ${colors.textPrimary}`}>{exp.title}</h4>
                    <span className={`text-sm ${colors.textAccent} ${colors.getThemeClass('bg-gray-100', 'bg-gray-600')} px-3 py-1 rounded-full`}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className={`text-lg font-medium ${colors.brandPrimary}`}>{exp.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className={colors.textAccent}>{exp.location}</span>
                  </div>
                  
                  <ul className={`list-disc list-inside ${colors.textAccent} mb-4 space-y-2`}>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className={`px-2 py-1 text-xs font-medium ${colors.getThemeClass('bg-indigo-100 text-indigo-800', 'bg-indigo-900 text-indigo-200')} rounded`}
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
            <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6`}>Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`${colors.bgPrimary} rounded-lg shadow-md p-6 border-l-4 border-indigo-500`}
                >
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className={`text-xl font-semibold ${colors.textPrimary}`}>{edu.degree} in {edu.field}</h4>
                    <span className={`text-sm ${colors.textAccent} ${colors.getThemeClass('bg-gray-100', 'bg-gray-600')} px-3 py-1 rounded-full`}>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className={`text-lg font-medium ${colors.brandPrimary}`}>{edu.institution}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className={colors.textAccent}>{edu.location}</span>
                  </div>
                  
                  {edu.description && (
                    <p className={colors.textAccent}>
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