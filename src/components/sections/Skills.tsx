import { useState } from 'react';
import { skills } from '../../utils/mockData';

type CategoryType = 'all' | 'frontend' | 'backend' | 'other';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  
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
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
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
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                } border border-gray-200 dark:border-gray-700 focus:z-10 focus:outline-none first:rounded-l-lg last:rounded-r-lg`}
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
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                >
                </div>
              </div>
              
              <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}