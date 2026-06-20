import { useState } from "react";
import CTABanner from "../components/CTABanner";
import FaqItem from "../components/FaqItem";
import SectionTag from "../components/SectionTag";
import { ABOUT_IMAGES, AMC_PLANS, FAQ, PHONE, SERVICES_DATA, SERVICES_IMAGES, WHATSAPP } from "../data/siteData";
import { trackPhoneCall } from "../utils/googleAds";

export default function ServicesPage({ setPage }) {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <section className="pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${SERVICES_IMAGES[0]})` }} />
        <div className="absolute inset-0 bg-white/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-[#f4f8f9]/40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 flex items-center gap-2">
            <button onClick={() => setPage("home")} className="hover:text-sky-400 transition-colors">Home</button>
            <span>›</span>
            <span className="text-slate-400">Services</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-block bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Complete AC Solutions</div>
            <h1 className="text-5xl font-black text-[#26333b] leading-tight mb-6">What Service Do You <span className="text-sky-400">Need?</span></h1>
            <p className="text-slate-400 text-lg leading-relaxed">From a small servicing to complete commercial building AC maintenance — we have solutions for everything. Choose your service and book now.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Our Service Menu</SectionTag>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Complete Service List</h2>
            <p className="text-slate-500">Click on any service to see complete details, what's included, and pricing</p>
          </div>
          <div className="space-y-4">
            {SERVICES_DATA.map((service, index) => (
              <div key={service.title} className="border border-slate-100 rounded overflow-hidden hover:border-sky-200 transition-all">
                <button onClick={() => setOpen(open === index ? null : index)} className="w-full flex items-center gap-6 p-7 bg-white hover:bg-slate-50 transition-colors text-left">
                  <div className={`w-16 h-16 rounded bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl flex-shrink-0`}>{service.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                    <p className="text-slate-500 text-sm">{service.short}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="bg-sky-50 text-sky-700 font-bold text-sm px-4 py-2 rounded-full border border-sky-100 mb-2">{service.price}</div>
                    <div className="text-slate-400 text-xs">⏱ {service.time}</div>
                  </div>
                  <div className={`text-sky-500 font-black text-2xl ml-4 transition-transform flex-shrink-0 ${open === index ? "rotate-45" : ""}`}>+</div>
                </button>
                {open === index && (
                  <div className="border-t border-slate-50 bg-slate-50/50 p-8">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg">Service Details</h4>
                        <p className="text-slate-600 leading-relaxed text-sm mb-6">{service.desc}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded p-4 border border-slate-100">
                            <div className="text-slate-400 text-xs mb-1">Duration</div>
                            <div className="font-bold text-slate-800 text-sm">⏱ {service.time}</div>
                          </div>
                          <div className="bg-white rounded p-4 border border-slate-100">
                            <div className="text-slate-400 text-xs mb-1">Warranty</div>
                            <div className="font-bold text-slate-800 text-sm">🛡️ {service.warranty}</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg">Kya Kya Included Hai</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-slate-600 text-sm"><span className="text-sky-500 font-bold flex-shrink-0 mt-0.5">✓</span>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                      <div className="mt-8 flex flex-wrap gap-4">
                      <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`${service.title} book karni hai`)}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded font-bold transition-all">
                        💬 Book on WhatsApp
                      </a>
                    <a
 href={`tel:${PHONE}`}
 onClick={(e)=>{
   e.preventDefault();
   trackPhoneCall(`tel:${PHONE}`);
 }}

  className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded font-bold transition-all"
>
  📞 Call Us
</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTag>Image Gallery</SectionTag>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Jaipur AC Service Moments</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Real AC service, repair, and installation imagery from our team across Jaipur.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_IMAGES.map((image, index) => (
              <div key={index} className="h-56 overflow-hidden rounded border border-slate-200 shadow-lg shadow-slate-200/10">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
              </div>
            ))}
          </div>
        </div>
      </section>
     


      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag>FAQ</SectionTag>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Questions About Services?</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Book Now — Same Day Service!" sub="Emergency or planned service — we're always ready. 30-minute response guaranteed." />
    </div>
  );
}

