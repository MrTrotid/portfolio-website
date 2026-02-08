import { author, siteDescription, siteName, siteUrl } from '@/lib/site';

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

  return {
    personSchema,
    websiteSchema,
    profilePageSchema,
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
  const { personSchema, websiteSchema, profilePageSchema } = generateStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
