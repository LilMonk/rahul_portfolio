import { personalInfo } from "../../utils/mockData";
import { useThemeColors } from "../../hooks/useThemeColors";
import { useState, useEffect } from "react";

export default function Hero() {
  const { name, bio } = personalInfo;
  const colors = useThemeColors();

  // Define items to cycle through with typing animation
  const items = [
    name,
    "Software Consultant",
    "Data Engineer",
    "DevOps Engineer",
  ];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typing animation effect
  useEffect(() => {
    const currentItem = items[currentItemIndex];

    // Handle typing animation
    if (isTyping && !isDeleting) {
      if (displayText.length < currentItem.length) {
        // Still typing the current item
        const timeout = setTimeout(() => {
          setDisplayText(currentItem.substring(0, displayText.length + 1));
          setTypingSpeed(150); // Normal typing speed
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100); // Faster when deleting
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }

    // Handle deleting animation
    if (isDeleting) {
      if (displayText.length > 0) {
        // Still deleting text
        const timeout = setTimeout(() => {
          setDisplayText(currentItem.substring(0, displayText.length - 1));
        }, typingSpeed / 2); // Delete faster than typing
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next item
        setIsDeleting(false);
        const nextIndex = (currentItemIndex + 1) % items.length;
        setCurrentItemIndex(nextIndex);
      }
    }
  }, [displayText, isTyping, isDeleting, currentItemIndex, items, typingSpeed]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center py-16 relative ${colors.bgPrimary}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600" />
        <div className="absolute inset-0 bg-grid-white/[0.2]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="max-w-3xl">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 whitespace-nowrap ${colors.textPrimary}`}
            >
              Hi, I'm{" "}
              <span className={colors.brandPrimary}>
                {displayText}
                <span
                  className={`inline-block h-12 w-1.5 ml-1 bg-current cursor-blink align-middle`}
                ></span>
              </span>
            </h1>

            <p className={`text-xl mb-8 leading-relaxed ${colors.textAccent}`}>
              {bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`px-6 py-3 font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${colors.buttonPrimary}`}
              >
                View My Work
              </a>

              <a
                href="#contact"
                className={`px-6 py-3 font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${colors.buttonSecondary}`}
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12">
              <div className="flex space-x-4">
                {personalInfo.contact.github && (
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.textAccent} hover:${colors.brandPrimary}`}
                    aria-label="GitHub"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}

                {personalInfo.contact.linkedin && (
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.textAccent} hover:${colors.brandPrimary}`}
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Code snippet on the right side - with theme-based styling */}
          <div
            className={`mt-12 lg:mt-0 lg:ml-10 p-8 rounded-lg relative overflow-hidden lg:flex-1 max-w-lg ${colors.bgAccent} bg-opacity-10`}
          >
            <pre className="font-['Fira_Code',_'Cascadia_Code',_'JetBrains_Mono',_monospace] relative z-10 text-xl lg:text-2xl xl:text-3xl">
              <code className="leading-relaxed">
                <span
                  className={colors.getThemeClass(
                    "text-purple-500",
                    "text-purple-400",
                  )}
                >
                  while
                </span>{" "}
                <span
                  className={colors.getThemeClass(
                    "text-gray-800",
                    "text-white",
                  )}
                >
                  ({colors.getThemeClass("problem", "problem")}{" "}
                </span>
                <span
                  className={colors.getThemeClass(
                    "text-yellow-500",
                    "text-yellow-400",
                  )}
                >
                  ==
                </span>{" "}
                <span
                  className={colors.getThemeClass(
                    "text-green-500",
                    "text-green-400",
                  )}
                >
                  HARD
                </span>
                <span
                  className={colors.getThemeClass(
                    "text-gray-800",
                    "text-white",
                  )}
                >
                  ) {"{"}
                </span>
              </code>
              <br />
              <code className="pl-8 leading-relaxed">
                <span
                  className={colors.getThemeClass(
                    "text-indigo-500",
                    "text-indigo-400",
                  )}
                >
                  problem
                </span>{" "}
                <span
                  className={colors.getThemeClass(
                    "text-yellow-500",
                    "text-yellow-400",
                  )}
                >
                  =
                </span>{" "}
                <span
                  className={colors.getThemeClass(
                    "text-blue-500",
                    "text-blue-400",
                  )}
                >
                  break
                </span>
                <span
                  className={colors.getThemeClass(
                    "text-gray-800",
                    "text-white",
                  )}
                >
                  ({colors.getThemeClass("problem", "problem")})
                </span>
              </code>
              <br />
              <code className="leading-relaxed">
                <span
                  className={colors.getThemeClass(
                    "text-gray-800",
                    "text-white",
                  )}
                >
                  {"}"}
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className={`text-sm mb-2 ${colors.textAccent}`}>Scroll Down</span>
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center border-gray-400`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 animate-bounce bg-gray-400 `}
          ></div>
        </div>
      </div>
    </section>
  );
}
