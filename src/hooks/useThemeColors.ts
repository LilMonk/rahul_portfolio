import { useTheme } from "../context/ThemeContext";

/**
 * A hook that provides tailwind class strings based on the current theme
 *
 * @param lightClass - The class to use in light mode
 * @param darkClass - The class to use in dark mode
 * @returns A string with the appropriate class based on current theme
 */
export const useThemeColors = () => {
  const { theme } = useTheme();

  const getThemeClass = (lightClass: string, darkClass: string): string => {
    return theme === "light" ? lightClass : darkClass;
  };

  return {
    // Common theme classes
    theme,

    // Text colors
    textPrimary: getThemeClass("text-gray-900", "text-white"),
    textSecondary: getThemeClass("text-gray-700", "text-gray-200"),
    textAccent: getThemeClass("text-gray-600", "text-gray-300"),

    // Background colors
    bgPrimary: getThemeClass("bg-white", "bg-gray-900"),
    bgSecondary: getThemeClass("bg-gray-50", "bg-gray-800"),
    bgAccent: getThemeClass("bg-gray-100", "bg-gray-700"),

    // Brand colors
    brandPrimary: getThemeClass("text-indigo-600", "text-indigo-400"),
    brandSecondary: getThemeClass("text-indigo-500", "text-indigo-500"),
    bgBrandPrimary: getThemeClass("bg-indigo-600", "bg-indigo-600"),
    bgBrandSecondary: getThemeClass("bg-indigo-100", "bg-indigo-900"),

    // Button styles
    buttonPrimary: getThemeClass(
      "bg-indigo-600 text-white hover:bg-indigo-700",
      "bg-indigo-600 text-white hover:bg-indigo-500",
    ),
    buttonSecondary: getThemeClass(
      "bg-white text-indigo-600 border border-indigo-600 hover:bg-gray-100",
      "bg-gray-700 text-gray-200 border border-indigo-500 hover:bg-gray-600",
    ),

    // Border colors
    borderPrimary: getThemeClass("border-gray-200", "border-gray-700"),
    borderAccent: getThemeClass("border-indigo-500", "border-indigo-500"),

    // Helper function for component-specific classes
    getThemeClass,
  };
};
