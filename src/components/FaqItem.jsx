import { useState } from "react";

export default function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#e7eef0] overflow-hidden hover:border-[#bfecef] transition-colors bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#f4f8f9] transition-colors">
        <span className="font-bold text-[#26333b] pr-6">{q}</span>
        <span className={`text-[#12aeb5] font-black text-xl flex-shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-6 pb-6 bg-[#f4f8f9] text-[#687882] leading-relaxed text-sm border-t border-[#e7eef0]">{a}</div>}
    </div>
  );
}

