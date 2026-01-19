export default function ResumePage() {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col">
      <iframe
        src="/resume.pdf"
        className="w-full h-full border-0"
        title="Resume - Baman Prasad Guragain"
      />
    </div>
  );
}
