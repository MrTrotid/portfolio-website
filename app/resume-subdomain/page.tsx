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
