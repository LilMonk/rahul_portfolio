import { 
  PersonalInfo, 
  Project, 
  Experience, 
  Education, 
  Skill 
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with 5+ years of experience building web and mobile applications. Specialized in React, TypeScript, and Node.js. I love creating elegant solutions to complex problems.',
  avatar: '/avatar.jpg', // Will need to add this image to public folder
  contact: {
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    location: 'San Francisco, CA'
  }
};

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
    imageUrl: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    githubUrl: 'https://github.com/johndoe/ecommerce',
    liveUrl: 'https://ecommerce-demo.example.com',
    details: 'Built from scratch using the MERN stack. Implemented features like user authentication, product search, shopping cart, and secure payment processing with Stripe.'
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team workspaces.',
    imageUrl: '/projects/taskapp.jpg',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/johndoe/taskapp',
    liveUrl: 'https://taskapp-demo.example.com',
    details: 'Designed and implemented a responsive UI with Tailwind CSS. Used Firebase for real-time database and authentication. Implemented drag-and-drop functionality for task management.'
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather conditions for multiple locations.',
    imageUrl: '/projects/weather.jpg',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation API'],
    githubUrl: 'https://github.com/johndoe/weather-dashboard',
    liveUrl: 'https://weather-demo.example.com'
  }
];

export const experiences: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: 'January 2022',
    endDate: 'Present',
    description: [
      'Lead a team of 5 developers in building a new customer portal using React and TypeScript',
      'Implemented CI/CD pipelines that reduced deployment time by 50%',
      'Optimized application performance resulting in a 30% improvement in load times'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Jest', 'Cypress', 'AWS']
  },
  {
    title: 'Full Stack Developer',
    company: 'WebSolutions Co.',
    location: 'Austin, TX',
    startDate: 'June 2019',
    endDate: 'December 2021',
    description: [
      'Developed and maintained multiple client websites using React and Node.js',
      'Designed and implemented RESTful APIs for various client projects',
      'Collaborated with the design team to implement responsive and accessible UI components'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Junior Web Developer',
    company: 'Digital Creations',
    location: 'Boston, MA',
    startDate: 'August 2017',
    endDate: 'May 2019',
    description: [
      'Assisted in the development of web applications using JavaScript and jQuery',
      'Implemented responsive designs from Figma mockups',
      'Participated in code reviews and testing procedures'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap']
  }
];

export const education: Education[] = [
  {
    institution: 'Massachusetts Institute of Technology',
    degree: 'Master of Science',
    field: 'Computer Science',
    startDate: '2015',
    endDate: '2017',
    location: 'Cambridge, MA',
    description: 'Specialized in Human-Computer Interaction and Software Engineering'
  },
  {
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2011',
    endDate: '2015',
    location: 'Berkeley, CA',
    description: 'Graduated with honors. Minor in Mathematics.'
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Redux', level: 80, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },
  { name: 'AWS', level: 65, category: 'backend' },
  { name: 'Git', level: 85, category: 'other' },
  { name: 'Docker', level: 65, category: 'other' },
  { name: 'Agile/Scrum', level: 80, category: 'other' },
  { name: 'Jest', level: 75, category: 'other' }
];