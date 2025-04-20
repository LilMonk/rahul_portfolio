import React, { useState } from "react";
import { skills } from "../../utils/mockData";
import { useThemeColors } from "../../hooks/useThemeColors";

// Import icons from React Icons library
import {
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiApachespark,
  SiScala,
  SiGo,
  SiFastapi,
  SiGin,
  SiPostgresql,
  SiApachehive,
  SiGooglecloud,
  SiKubernetes,
} from "react-icons/si";

type CategoryType = "all" | "frontend" | "backend" | "other";

// Map skills to their corresponding icons
const skillIconMap: Record<string, React.ReactElement> = {
  Python: <FaPython size={28} className="text-blue-500" />,
  Java: <FaJava size={28} className="text-red-500" />,
  Scala: <SiScala size={28} className="text-red-600" />,
  Go: <SiGo size={28} className="text-blue-400" />,
  "Apache Spark": <SiApachespark size={28} className="text-orange-500" />,
  Kafka: <SiApachekafka size={28} className="text-black" />,
  FastAPI: <SiFastapi size={28} className="text-teal-500" />,
  Gin: <SiGin size={28} className="text-purple-500" />,
  PostgreSQL: <SiPostgresql size={28} className="text-blue-600" />,
  Hive: <SiApachehive size={28} className="text-yellow-600" />,
  AWS: <FaAws size={28} className="text-orange-400" />,
  GCP: <SiGooglecloud size={28} className="text-blue-500" />,
  Docker: <FaDocker size={28} className="text-blue-500" />,
  Kubernetes: <SiKubernetes size={28} className="text-blue-600" />,
  "CI/CD (GitHub Actions)": (
    <FaGithub size={28} className="text-gray-700 dark:text-gray-300" />
  ),
};

// Default icon for skills without a specific icon
const DefaultIcon = <FaCode size={28} className="text-gray-600" />;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const colors = useThemeColors();

  const categories: { value: CategoryType; label: string }[] = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "other", label: "Other" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className={`py-16 ${colors.bgPrimary}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${colors.textPrimary} mb-4`}>
            Technical Skills
          </h2>
          <div className="w-20 h-1 mx-auto bg-indigo-500 rounded"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={`px-5 py-2 text-sm font-medium ${
                  activeCategory === category.value
                    ? "bg-indigo-600 text-white"
                    : `${colors.bgPrimary} ${colors.textSecondary} ${colors.getThemeClass("hover:bg-gray-100", "hover:bg-gray-700")}`
                } border ${colors.borderPrimary} focus:z-10 focus:outline-none first:rounded-l-lg last:rounded-r-lg`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`${colors.bgSecondary} rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-indigo-500`}
            >
              <div className="flex items-center mb-3">
                <div className="mr-3">
                  {skillIconMap[skill.name] || DefaultIcon}
                </div>
                <h3 className={`font-bold text-xl ${colors.textPrimary}`}>
                  {skill.name}
                </h3>
              </div>

              <div className={`text-xs ${colors.textAccent} mt-2 opacity-70`}>
                {skill.category.charAt(0).toUpperCase() +
                  skill.category.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
