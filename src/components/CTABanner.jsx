export default function CTABanner({ title, sub }) {
  return (
    <div className="bg-[#12aeb5] py-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-2 bg-[#ffd45a]" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{title}</h2>
        <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto">{sub}</p>
      </div>
    </div>
  );
}

