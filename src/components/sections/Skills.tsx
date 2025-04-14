import { useState } from 'react';
import { skills } from '../../utils/mockData';
import { useThemeColors } from '../../hooks/useThemeColors';

type CategoryType = 'all' | 'frontend' | 'backend' | 'other';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const colors = useThemeColors();
  
  const categories: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'other', label: 'Other' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={`py-16 ${colors.bgPrimary}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${colors.textPrimary} mb-4`}>Technical Skills</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-500 rounded"></div>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {categories.map(category => (
              <button
                key={category.value}
                type="button"
                className={`px-5 py-2 text-sm font-medium ${
                  activeCategory === category.value
                    ? 'bg-indigo-600 text-white'
                    : `${colors.bgPrimary} ${colors.textSecondary} ${colors.getThemeClass('hover:bg-gray-100', 'hover:bg-gray-700')}`
                } border ${colors.borderPrimary} focus:z-10 focus:outline-none first:rounded-l-lg last:rounded-r-lg`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className={`${colors.bgSecondary} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-semibold text-lg ${colors.textPrimary}`}>{skill.name}</h3>
                <span className={`text-sm font-medium ${colors.brandPrimary}`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className={`w-full ${colors.getThemeClass('bg-gray-200', 'bg-gray-700')} rounded-full h-2.5 mb-1`}>
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                >
                </div>
              </div>
              
              <div className={`text-right text-xs ${colors.textAccent}`}>
                {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}