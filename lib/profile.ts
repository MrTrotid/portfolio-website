export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const profile = {
  links: {
    email: 'contact@bamanguragain.com.np',
    github: 'https://github.com/MrTrotid',
    linkedin: 'https://www.linkedin.com/in/mrtrotid/',
    youtube: 'https://www.youtube.com/@MrTrotid',
    instagram: 'https://www.instagram.com/mrtrotid/',
  },
  about: {
    whoIAm:
      "I'm a cybersecurity enthusiast and somewhat of a developer focused on building web applications (for fun). I enjoy blending modern frontend engineering with strong security practices (that I know of).",
    whatIDo: [
      'Make random websites when I am bored',
      'Try to identify security vulnerabilities',
      'Explore cool and innovative technologies',
      'Learn about cybersec',
      'Collaborate on innovative projects',
    ],
  },
  skills: [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Security', skills: ['Network Security', 'OSINT', 'Web Security'] },
    { category: 'Tools & Others', skills: ['Git', 'Linux', 'Python'] },
  ] as SkillCategory[],
  experiences: {
    professional: [
      {
        role: 'SEO Content Writer',
        company: 'Gadgetbyte Nepal',
        period: 'Aug 2025 – Dec 2025',
        description:
          'Wrote and optimized technology content with an SEO focus for Gadgetbyte Nepal. Collaborated with the developer team to identify and resolve frontend and backend bugs, optimized website performance, and helped team members understand the newly built website architecture and features.',
        achievements: [
          'Produced SEO-optimized articles and reviews',
          'Identified and documented bugs in frontend and backend',
          'Collaborated with developer team to optimize website performance',
          'Helped team members understand new website features and architecture',
        ],
        logo: '/logos/gadgetbyte.png',
      },
    ] as ExperienceItem[],
    organization: [
      {
        role: 'Information Technology Officer',
        company: 'Interact Club of Matribhumi Baluwatar',
        period: 'Jul 2025 – Present',
        description:
          "Responsible for designing digital materials and contributing to the development and maintenance of the club's website to strengthen its online presence. Works closely with the executive team to implement technical solutions for events, registrations, and announcements, while supporting digital initiatives that enhance communication, streamline workflows, and improve overall member engagement.",
        achievements: [
          'Designed digital materials to strengthen online presence',
          'Developed and maintained the club website',
          'Implemented technical solutions for events and registrations',
          'Enhanced communication and streamlined workflows',
        ],
      },
      {
        role: 'Executive',
        company: 'SXC A Level Alumni Club',
        period: 'Jan 2024 – Jan 2026',
        description:
          "Organized two national-level mathematics competitions, managing logistics, coordinating participants, and ensuring smooth execution. Led planning and implementation of alumni meet and homecoming events, alongside smaller alumni programs, fostering community engagement and networking opportunities. Associated with St. Xavier's College, Maitighar.",
        achievements: [
          'Organized two national-level mathematics competitions',
          'Managed logistics and participant coordination',
          'Led alumni meet and homecoming implementation',
          'Fostered community engagement and networking',
        ],
        logo: '/logos/stxaviers.png',
      },
      {
        role: 'Member',
        company: 'SXC A level Computer Club',
        period: 'Jan 2024 – Jan 2025',
        description:
          'Contributed to the development of a game featured in the college magazine, applying creativity and technical skills in a collaborative setting. Actively participated in various club events, supporting team efforts and gaining experience in event-based collaboration.',
        achievements: [
          'Contributed to game development featured in college magazine',
          'Applied creativity and technical skills collaboratively',
          'Participated in various club events',
          'Gained experience in event-based collaboration',
        ],
        logo: '/logos/stxaviers.png',
      },
      {
        role: 'Event Manager & Deputy Manager of Information Technology',
        company: 'Junior Jaycees Budhanilkantha',
        period: 'Feb 2024 – Jan 2025',
        description:
          'Organized and led community service programs focused on supporting orphanages and animal welfare. Coordinated event logistics, facilitated teamwork, and ensured successful execution of initiatives. Applied technical skills to support program operations and enhance community engagement.',
        achievements: [
          'Organized community service programs for orphanages and animal welfare',
          'Coordinated event logistics and facilitated teamwork',
          'Supported program operations with IT skills',
        ],
        logo: '/logos/JCI_logo.jpeg',
      },
      {
        role: 'Patrol Leader',
        company: 'Nepal Scouts',
        period: 'Apr 2019 – Apr 2021',
        description:
          "Guided a group of peers during various scouting activities, including organizing and participating in scout camps. Coordinated tasks, ensured team collaboration, and contributed to a positive group experience. Developed skills in leadership, communication, and outdoor skills while fostering responsibility and teamwork.",
        achievements: [
          'Guided peers during scouting activities and camps',
          'Coordinated tasks and ensured team collaboration',
          'Developed leadership, communication, and outdoor skills',
        ],
        logo: '/logos/Nepal_scout.png',
      },
    ] as ExperienceItem[],
  },
};
