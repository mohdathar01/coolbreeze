import { COMPANY, EMAIL, NAV_LINKS, PHONE, SERVICES_DATA, WHATSAPP } from "../data/siteData";
import { trackPhoneCall } from "../utils/googleAds";

export default function Footer({ setPage }) {
  return (
    <footer className="bg-[#26333b] text-white pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#12aeb5] text-[#12aeb5] flex items-center justify-center font-black">CB</div>
              <span className="font-black text-2xl">Cool<span className="text-[#12aeb5]">PointJaipur</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">Jaipur's trusted AC service partner with fast booking, transparent pricing, and careful technical work.</p>
            <div className="flex gap-3">
              {["t", "f", "in", "g+"].map((icon) => (
                <a key={icon} href="#" className="w-9 h-9 bg-white/8 hover:bg-[#12aeb5] flex items-center justify-center text-xs font-bold transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#ffd45a] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button onClick={() => setPage(link.id)} className="text-white/60 hover:text-[#12aeb5] text-sm transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#ffd45a] mb-6">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <button onClick={() => setPage("services")} className="text-white/60 hover:text-[#12aeb5] text-sm transition-colors text-left">
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#ffd45a] mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="text-white/40 text-xs mb-0.5">Phone</div>
                <a href={`tel:${PHONE}`} onClick={(e) => { e.preventDefault(); trackPhoneCall(`tel:${PHONE}`); }} className="text-white/80 hover:text-[#12aeb5] font-semibold">{PHONE}</a>
              </li>
              <li>
                <div className="text-white/40 text-xs mb-0.5">WhatsApp</div>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="text-white/80 hover:text-[#12aeb5] font-semibold">{PHONE}</a>
              </li>
              <li>
                <div className="text-white/40 text-xs mb-0.5">Email</div>
                <a href={`mailto:${EMAIL}`} className="text-white/80 hover:text-[#12aeb5]">{EMAIL}</a>
              </li>
              <li>
                <div className="text-white/40 text-xs mb-0.5">Service Area</div>
                <span className="text-white/80">Jaipur - All Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2026 {COMPANY}. All rights reserved. | GST Registered | ISO Certified Service</p>
          <div className="flex gap-6 flex-wrap justify-center">
            {["Privacy Policy", "Terms of Service", "Sitemap", "Refund Policy"].map((item) => (
              <a key={item} href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

