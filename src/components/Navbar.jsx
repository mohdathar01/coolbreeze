import { useEffect, useState } from "react";
import { PHONE, WHATSAPP, NAV_LINKS } from "../data/siteData";

export default function Navbar({ activePage, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg shadow-slate-900/5" : ""}`}>
      <div className="hidden md:block bg-white border-b border-[#e7eef0]">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-[12px] text-[#687882]">
          {/* <div className="flex items-center gap-2">
            {["t", "f", "in", "g+"].map((item) => (
              <a key={item} href="#" className="w-6 h-6 rounded-full bg-[#f4f8f9] hover:bg-[#12aeb5] hover:text-white flex items-center justify-center font-bold transition-colors">
                {item}
              </a>
            ))}
          </div> */}
          <div className="flex items-center gap-8">
            <span><span className="text-[#12aeb5] font-bold">Address</span> Jaipur, Rajasthan</span>
            <a href={`tel:${PHONE}`} className="hover:text-[#12aeb5] transition-colors"><span className="text-[#12aeb5] font-bold">Call Now</span> {PHONE}</a>
            <span><span className="text-[#12aeb5] font-bold">Open Hours</span> Mon-Sat: 9am - 6pm</span>
          </div>
        </div>
      </div>

      <nav className="bg-white/92 backdrop-blur-md border-b border-[#e7eef0]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => setPage("home")} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-[#12aeb5] flex items-center justify-center overflow-hidden">
  <img
    src="/cool_point_logo.png"
    alt="Coolpoint Jaipur Logo"
    className="w-full h-full "
  />
</div>
            <div className="text-left leading-tight">
              <div className="font-black text-2xl tracking-tight text-[#26333b]">CoolPointJaipur</div>
              <div className="text-[10px] text-[#687882] uppercase tracking-[0.22em]">Heating & Air Conditioning</div>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-sm font-semibold transition-colors ${
                  activePage === link.id
                    ? "text-[#12aeb5]"
                    : "text-[#687882] hover:text-[#12aeb5]"
                }`}
              >
                {link.label.replace(" Us", "")}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello, AC service book karni hai`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex bg-[#12aeb5] hover:bg-[#078b94] text-white px-4 py-3 text-xs font-black uppercase tracking-widest transition-colors"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setPage("contact")}
              className="bg-[#ffd45a] hover:bg-[#f0bd32] text-[#26333b] px-6 py-3 text-xs font-black uppercase tracking-widest transition-colors"
            >
              Book Today
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

