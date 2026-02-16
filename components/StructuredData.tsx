import { author, siteDescription, siteName, siteUrl } from '@/lib/site';
import { profile } from '@/lib/profile';

// Project data for structured data (duplicated from ProjectsSection for SEO)
const projects = [
  {
    title: 'AQ Sentinel',
    description: 'A low-cost, real-time air quality monitoring system powered by ESP32 microcontroller. Provides real-time data visualization and alerts.',
    techStack: ['IoT', 'ESP32', 'React', 'Node.js'],
    image: '/projects/aqsentinel.png',
    githubUrl: 'https://github.com/rahatpaudel/aqsentinel',
    category: 'IoT Project',
  },
  {
    title: 'Sherlock Scramble Solver',
    description: 'A Python-based solver for 15x15 grid word games. Uses advanced pattern matching algorithms to find all hidden words efficiently.',
    techStack: ['Python', 'Algorithm', 'Grid Search'],
    githubUrl: 'https://github.com/MrTrotid/Sherlock-Scramble-Solver',
    category: 'Software Project',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and TailwindCSS. Features terminal aesthetic, smooth animations, and optimal performance.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    image: '/projects/portfolio.png',
    githubUrl: 'https://github.com/MrTrotid/portfolio-website',
    category: 'Web Development',
  },
  {
    title: 'MeroAushadhi',
    description: 'A medicine information platform for Nepali-speaking users with searchable drug data and AI-assisted explanations. Earned third place in a hackathon.',
    techStack: ['React', 'Supabase', 'Flowise', 'Google Generative AI', 'Framer Motion'],
    githubUrl: 'https://github.com/MrTrotid/meroaushadhi',
    category: 'Web Application',
  },
];

// Experience data from profile
const professionalExperiences = profile.experiences.professional;
const organizationExperiences = profile.experiences.organization;

/**
 * Generates JSON-LD structured data for SEO and Google Search Console
 * Includes Person, Website, and Organization schemas for rich search results
 */
export function generateStructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    alternateName: 'MrTrotid',
    url: siteUrl,
    email: author.email,
    jobTitle: 'Cybersecurity Enthusiast & Full Stack Developer',
    description: siteDescription,
    sameAs: [
      author.github,
      author.linkedin,
      author.youtube,
      author.instagram,
    ],
    knowsAbout: [
      'Cybersecurity',
      'Web Development',
      'IoT',
      'Next.js',
      'React',
      'TypeScript',
      'Python',
      'Node.js',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Various Educational Institutions',
    },
    workExperience: [
      ...professionalExperiences.map(exp => ({
        '@type': 'OrganizationRole',
        role: exp.role,
        organization: exp.company,
        description: exp.description,
      })),
      ...organizationExperiences.map(exp => ({
        '@type': 'OrganizationRole',
        role: exp.role,
        organization: exp.company,
        description: exp.description,
      })),
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: author.name,
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2026-01-18T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: author.name,
      alternateName: 'MrTrotid',
      description: siteDescription,
      image: `${siteUrl}/logo.svg`,
      sameAs: [
        author.github,
        author.linkedin,
        author.youtube,
        author.instagram,
      ],
    },
  };

  // Project schemas for SEO - makes projects discoverable by search engines
  const projectSchemas = projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: project.category,
    operatingSystem: 'Web',
    author: {
      '@type': 'Person',
      name: author.name,
      url: siteUrl,
    },
    ...(project.image ? { image: `${siteUrl}${project.image}` } : {}),
    url: project.githubUrl,
    keywords: project.techStack.join(', '),
  }));

  // ItemList schema for projects section
  const projectsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Projects by Baman Prasad Guragain',
    description: 'A collection of IoT projects, web applications, and software tools developed by Baman Prasad Guragain.',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        url: project.githubUrl,
      },
    })),
  };

  // Professional experience schemas
  const professionalExperienceSchemas = professionalExperiences.map((exp) => ({
    '@context': 'https://schema.org',
    '@type': 'WorkExperience',
    description: exp.description,
    employer: {
      '@type': 'Organization',
      name: exp.company,
    },
    jobTitle: exp.role,
    dateRange: exp.period,
    achievements: exp.achievements,
    author: {
      '@type': 'Person',
      name: author.name,
    },
  }));

  // Organization/Volunteer experience schemas
  const organizationExperienceSchemas = organizationExperiences.map((exp) => ({
    '@context': 'https://schema.org',
    '@type': 'VolunteerRole',
    description: exp.description,
    organization: {
      '@type': 'Organization',
      name: exp.company,
    },
    role: exp.role,
    dateRange: exp.period,
    achievements: exp.achievements,
    volunteer: {
      '@type': 'Person',
      name: author.name,
    },
  }));

  // ItemList schema for experience section
  const experienceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Professional and Organization Experience',
    description: 'Work history, internships, and organization involvement of Baman Prasad Guragain.',
    itemListElement: [
      ...professionalExperiences.map((exp, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'WorkExperience',
          jobTitle: exp.role,
          employer: exp.company,
          dateRange: exp.period,
        },
      })),
      ...organizationExperiences.map((exp, index) => ({
        '@type': 'ListItem',
        position: index + professionalExperiences.length + 1,
        item: {
          '@type': 'VolunteerRole',
          role: exp.role,
          organization: exp.company,
          dateRange: exp.period,
        },
      })),
    ],
  };

  return {
    personSchema,
    websiteSchema,
    profilePageSchema,
    projectSchemas,
    projectsListSchema,
    professionalExperienceSchemas,
    organizationExperienceSchemas,
    experienceListSchema,
  };
}

/**
 * StructuredData Component
 * Injects JSON-LD structured data into the page for better SEO
 */
type StructuredDataProps = {
  nonce?: string | null;
};

export default function StructuredData({ nonce }: StructuredDataProps) {
  const { 
    personSchema, 
    websiteSchema, 
    profilePageSchema, 
    projectSchemas, 
    projectsListSchema,
    professionalExperienceSchemas,
    organizationExperienceSchemas,
    experienceListSchema,
  } = generateStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsListSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceListSchema) }}
      />
      {projectSchemas.map((schema, index) => (
        <script
          key={`project-${index}`}
          type="application/ld+json"
          nonce={nonce ?? undefined}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {professionalExperienceSchemas.map((schema, index) => (
        <script
          key={`professional-${index}`}
          type="application/ld+json"
          nonce={nonce ?? undefined}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {organizationExperienceSchemas.map((schema, index) => (
        <script
          key={`organization-${index}`}
          type="application/ld+json"
          nonce={nonce ?? undefined}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
