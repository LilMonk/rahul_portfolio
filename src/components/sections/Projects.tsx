import { useState } from "react";
import { projects } from "../../utils/mockData";
import { Project } from "../../types/portfolio";
import { useThemeColors } from "../../hooks/useThemeColors";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const colors = useThemeColors();

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className={`py-16 ${colors.bgPrimary}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${colors.textPrimary} mb-4`}>
            My Projects
          </h2>
          <div className="w-20 h-1 mx-auto bg-indigo-500 rounded"></div>
          <p className={`mt-4 text-lg ${colors.textAccent} max-w-2xl mx-auto`}>
            Here are some of my recent projects. Click on a project to learn
            more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${colors.bgSecondary} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
              onClick={() => handleProjectClick(project)}
            >
              <div
                className={`h-48 ${colors.getThemeClass("bg-gray-200", "bg-gray-700")} relative`}
              >
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center ${colors.getThemeClass("bg-indigo-100", "bg-indigo-900")}`}
                  >
                    <span
                      className={`text-xl font-semibold ${colors.getThemeClass("text-indigo-600", "text-indigo-300")}`}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className={`font-bold text-xl ${colors.textPrimary} mb-2`}>
                  {project.title}
                </h3>
                <p className={`${colors.textAccent} mb-4`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs font-medium ${colors.getThemeClass("bg-indigo-100 text-indigo-800", "bg-indigo-900 text-indigo-200")} rounded`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  className={`mt-2 ${colors.brandPrimary} ${colors.getThemeClass("hover:text-indigo-800", "hover:text-indigo-300")} font-medium flex items-center`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project);
                  }}
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for project details */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className={`${colors.bgPrimary} rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${colors.textPrimary}`}>
                  {activeProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className={`${colors.textAccent} ${colors.getThemeClass("hover:text-gray-700", "hover:text-gray-200")}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {activeProject.imageUrl && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <p className={`${colors.textAccent} mb-4`}>
                {activeProject.details || activeProject.description}
              </p>

              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold ${colors.textPrimary} mb-2`}
                >
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm font-medium ${colors.getThemeClass("bg-indigo-100 text-indigo-800", "bg-indigo-900 text-indigo-200")} rounded`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 ${colors.getThemeClass("bg-gray-900 text-white", "bg-gray-700 text-white")} rounded-md ${colors.getThemeClass("hover:bg-gray-800", "hover:bg-gray-600")}`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View Code
                  </a>
                )}

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
