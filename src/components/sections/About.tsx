import { personalInfo } from "../../utils/mockData";
import { useThemeColors } from "../../hooks/useThemeColors";
import { useTheme } from "../../context/ThemeContext";
import darkProfileImage from "../../assets/images/rahul_kumar_sahoo_profile-dark-bg.jpg";
import lightProfileImage from "../../assets/images/rahul_kumar_sahoo_profile.jpeg";


export default function About() {
  const { name, title, bio, contact } = personalInfo;
  const colors = useThemeColors();
  const { theme } = useTheme();

  // Conditionally set profile image based on theme
  // Import profile images
  
  // Conditionally set profile image based on theme
  const profileImage = theme === "dark" ? darkProfileImage : lightProfileImage;

  return (
    <section id="about" className={`py-16 ${colors.bgSecondary}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${colors.textPrimary} mb-4`}>
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto bg-indigo-500 rounded"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl flex items-center justify-center max-w-[500px] max-h-[600px]">
            <div className="w-full h-full">
              <img
                src={profileImage}
                alt="Rahul Kumar Sahoo Profile"
                className="w-full h-auto max-w-[500px] max-h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-4`}>
              {name}
            </h3>
            <h4 className={`text-xl ${colors.brandPrimary} mb-6`}>{title}</h4>

            <p className={`${colors.textAccent} mb-6 leading-relaxed`}>{bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-indigo-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className={colors.textSecondary}>{contact.email}</span>
              </div>

              {contact.location && (
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className={colors.textSecondary}>
                    {contact.location}
                  </span>
                </div>
              )}

              {contact.phone && (
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className={colors.textSecondary}>{contact.phone}</span>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className={`inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${colors.buttonPrimary}`}
            >
              Get In Touch
              <svg
                className="w-4 h-4 ml-2"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
