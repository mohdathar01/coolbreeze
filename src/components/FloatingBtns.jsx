import { PHONE, WHATSAPP } from "../data/siteData";

export default function FloatingBtns() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hello, AC service book karni hai`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebc59] text-white px-5 py-3 font-bold text-sm shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1"
      >
        WhatsApp
      </a>
      <a
        href={`tel:${PHONE}`}
        className="flex items-center gap-2 bg-[#ffd45a] hover:bg-[#f0bd32] text-[#26333b] px-5 py-3 font-black text-sm shadow-xl shadow-yellow-500/20 transition-all hover:-translate-y-1"
      >
        Call Now
      </a>
    </div>
  );
}

