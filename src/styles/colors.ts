export type ThemeMode = 'light' | 'dark';

// Color palette definitions for our design system
export const palette = {
  light: {
    primary: 'indigo-600',
    secondary: 'indigo-400',
    accent: 'purple-600',
    text: {
      primary: 'gray-900',
      secondary: 'gray-700',
      accent: 'gray-600',
    },
    background: {
      primary: 'white',
      secondary: 'gray-50',
      accent: 'gray-100',
    }
  },
  dark: {
    primary: 'indigo-400',
    secondary: 'indigo-500',
    accent: 'purple-400',
    text: {
      primary: 'white',
      secondary: 'gray-200',
      accent: 'gray-300',
    },
    background: {
      primary: 'gray-900',
      secondary: 'gray-800',
      accent: 'gray-700',
    }
  }
};

// Helper function to get color value based on theme
export const getThemeColor = (theme: ThemeMode, path: string): string => {
  const parts = path.split('.');
  let value: any = theme === 'light' ? palette.light : palette.dark;
  
  for (const part of parts) {
    if (value[part] === undefined) return '';
    value = value[part];
  }
  
  return value as string;
};