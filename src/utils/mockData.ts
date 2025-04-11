import { 
  PersonalInfo, 
  Project, 
  Experience, 
  Education, 
  Skill 
} from '../types/portfolio';
import logoImage from '../assets/images/RahulSahooLogo.png'; // Using existing logo as a fallback for missing images

export const personalInfo: PersonalInfo = {
  name: 'Rahul Kumar Sahoo',
  title: 'Software Consultant',
  bio: 'I am a passionate software consultant with a strong background in designing, developing, and deploying innovative tech solutions for diverse business needs. Over the years, I have honed my expertise in areas such as big data, devops, and data science. I believe in my ability to solve complex problems and deliver high-quality solutions. My goal is to collaborate with forward-thinking teams and clients, delivering products that drive measurable impact.',
  avatar: logoImage, // Using logo image as fallback
  contact: {
    email: 'rahulsahoo66@gmai.com',
    linkedin: 'https://www.linkedin.com/in/rahulkumar-sahoo/',
    github: 'https://github.com/LilMonk',
    twitter: 'https://medium.com/@lilmonk',
    location: 'Khopoli, Maharashtra, India'
  }
};

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Big Data Analytics For IOT',
    description: 'Developed a data pipeline to process and analyze IoT data streams, providing real-time insights and alerts.',
    imageUrl: logoImage, // Using logo image as fallback
    technologies: ['Apache Kafka', 'Apache Spark', 'BigQuery'],
    githubUrl: 'https://medium.com/@lilmonk/a-journey-from-raw-data-to-actionable-insights-edb03a8f9c36',
    details: 'Created a comprehensive data pipeline solution for processing and analyzing large volumes of IoT data. Implemented real-time data processing for immediate insights and alerts, enabling swift response to critical events.'
  },
  {
    id: 'project-2',
    title: 'Stream Processing For CDC Data',
    description: 'Implemented a stream processing solution to handle Change Data Capture (CDC) events, ensuring real-time data synchronization across systems.',
    imageUrl: logoImage, // Using logo image as fallback
    technologies: ['Apache Flink', 'MySQL', 'Iceberg'],
    githubUrl: 'https://github.com/LilMonk/flink-iceberg-cdc',
    details: 'Designed and developed a robust stream processing system for Change Data Capture (CDC) events. This solution ensures real-time data synchronization between multiple systems, maintaining data consistency and integrity across the entire data ecosystem.'
  }
];

export const experiences: Experience[] = [
  {
    title: 'Software Consultant',
    company: 'Self-Employed / Freelance',
    location: 'India',
    startDate: 'July 2023',
    endDate: 'Present',
    description: [
      'Consult with clients to understand business requirements and propose technical solutions',
      'Design and implement software architectures that meet client needs',
      'Oversee project lifecycles, from initial planning to deployment and maintenance',
      'Delivered data-driven solutions for clients',
      'Deployed scalable applications on Kubernetes clusters'
    ],
    technologies: ['Python', 'Pyspark', 'Kubernetes', 'AWS', 'Terraform']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Persistent Systems',
    location: 'India',
    startDate: 'January 2021',
    endDate: 'July 2023',
    description: [
      'Developed data pipelines and ETL processes for big data analytics',
      'Collaborated with cross-functional teams to deliver large-scale projects',
      'Processed over 20GB of data daily, to create metrics and reports for clients',
      'Improved data processing time by 30% through optimization techniques'
    ],
    technologies: ['Scala', 'Apache Spark', 'AWS EMR', 'Apache Hive']
  }
];

export const education: Education[] = [
  {
    institution: 'Maharashtra Institute of Technology',
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    startDate: '2017',
    endDate: '2021',
    location: 'Maharashtra, India'
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 90, category: 'frontend' },
  { name: 'Java', level: 85, category: 'frontend' },
  { name: 'Scala', level: 80, category: 'frontend' },
  { name: 'Go', level: 75, category: 'frontend' },
  
  // Frameworks & Libraries
  { name: 'Apache Spark', level: 90, category: 'backend' },
  { name: 'Kafka', level: 85, category: 'backend' },
  { name: 'FastAPI', level: 80, category: 'backend' },
  { name: 'Gin', level: 75, category: 'backend' },
  
  // Databases
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'Hive', level: 80, category: 'backend' },
  
  // Cloud & DevOps
  { name: 'AWS', level: 90, category: 'other' },
  { name: 'GCP', level: 85, category: 'other' },
  { name: 'Docker', level: 90, category: 'other' },
  { name: 'Kubernetes', level: 85, category: 'other' },
  { name: 'CI/CD (GitHub Actions)', level: 80, category: 'other' }
];