import type { Metadata } from 'next';
import { author, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Resume',
  description: `View ${author.name}'s professional resume - Cybersecurity enthusiast and full-stack developer with experience in web development, IoT, and security tools.`,
  alternates: {
    canonical: `${siteUrl}/resume-subdomain`,
  },
  openGraph: {
    title: `Resume | ${author.name}`,
    description: `View ${author.name}'s professional resume - Cybersecurity enthusiast and full-stack developer.`,
    url: `${siteUrl}/resume-subdomain`,
  },
};

export default function ResumePage() {
  return (
    <div className="w-full h-screen bg-[#0a0a0a]">
      <iframe
        src="/resume.pdf"
        className="w-full h-full border-0"
        title="Resume - Baman Prasad Guragain"
        style={{ display: 'block' }}
      />
    </div>
  );
}
