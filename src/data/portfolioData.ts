import {
  PersonalInfo,
  Skill,
  Experience,
  Project,
  Education,
  SocialLink,
} from '../types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Nitishkumar Gidde',
  title: 'Senior System Engineer',
  summary:
    'Highly motivated IT professional with 4 years of experience in delivering exceptional support and management across diverse technical domains. Skilled in Identity Access Management, Cybersecurity, and Web Development, with a proven ability to tackle complex challenges and implement solutions.',
  location: 'Maharashtra, India',
  email: 'nitishgidde44@gmail.com',
  phone: '+91 9975087573',
  avatar: '/images/picofme.png',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/nitishnk',
      icon: 'Github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nitishkumar-gidde-0175a9135/',
      icon: 'Linkedin',
    },
    {
      platform: 'Email',
      url: 'mailto:nitishgidde44@gmail.com',
      icon: 'Mail',
    },
  ],
};

// Skills
export const skills: Skill[] = [
  { name: 'Identity Access Management', category: 'IAM' },
  { name: 'Active Directory', category: 'IAM' },
  { name: 'Role Management', category: 'Coding' },
  { name: 'Sailpoint', category: 'Tools' },
  { name: 'Service Now', category: 'Tools' },
  { name: 'Mainframe', category: 'Coding' },
  { name: 'CyberSecurity', category: 'Coding' },
  { name: 'Web Development', category: 'frontend' },
  { name: 'C/C++', category: 'Coding' },
  { name: 'Java', category: 'Coding' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
];

// Experience
export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Infosys Ltd.',
    position: 'Senior System Engineer',
    startDate: '2022',
    endDate: 'Present',
    description:
      'Part of Central Security Service team of Client, managing IAM for various banking application along with Role management.',
    technologies: [
      'IAM',
      'Active Directory',
      'Sailpoint',
      'ServiceNow',
      'Mainframe',
      'RACF',
    ],
    achievements: [
      'Hands-on Experience on industry standard tools like ServiceNow, Sailpoint, ISAMS, ISIM and RSA',
      'Mainframe and RACF access management',
      'Working on Active Directory and Mainframe for managing access and Roles',
      'Exceptional knowledge and experience in processing Termination and Role requests',
      'Hands-On experience on tools like RSA remote access management, Cyberark, CA-PAM, etc.',
    ],
  },
  {
    id: 'exp2',
    company: 'Infosys Ltd.',
    position: 'System Engineer',
    startDate: '2021',
    endDate: '2022',
    description:
      'Mainframe team member managing Mainframe access in IAM for client central security team.',
    technologies: ['Mainframe', 'RACF', 'IAM'],
    achievements: [
      'RACF User access and Dataset management',
      'Termination processing via scripts in RACF',
    ],
  },
];

// Projects
export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Standard Operating Procedure',
    description:
      'Created and Maintained SOPs for various applications and process like JML (Joiner, Mover, Leaver). Created SOPs for various application access processes along with Sailpoint automated and manual handling a structured, process-oriented approach.',
    imageUrl:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Documentation', 'Process Management', 'IAM'],
    featured: true,
  },
  {
    id: 'proj2',
    title: 'Portfolio Website',
    description:
      'Developed Portfolio website using HTML, CSS and Javascript with advanced CSS and Canvas effects implemented using jQuery.',
    imageUrl:
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    demoUrl: 'https://nitishnk.github.io',
    githubUrl: 'https://github.com/nitishnk/nitishnk.github.io',
    featured: true,
  },
];

// Education
export const education: Education[] = [
  {
    institution: 'Sanjay Ghodawat Institute',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science',
    startDate: '2016',
    endDate: '2020',
    achievements: ['Computer Science and Engineering'],
  },
  {
    institution: 'Dr. Bapuji Salunkhe College, Miraj',
    degree: 'Higher Secondary Certificate',
    field: 'Science',
    startDate: '2014',
    endDate: '2015',
  },
  {
    institution: 'New English School Miraj',
    degree: 'Secondary School Certificate',
    field: 'General',
    startDate: '2013',
    endDate: '2013',
  },
];
