import { useState } from "react";
import CTABanner from "../components/CTABanner";
import SectionTag from "../components/SectionTag";
import FaqItem from "../components/FaqItem";
import { BRANDS, CONTACT_IMAGES, EMAIL, FAQ, PHONE, SERVICES_DATA, WHATSAPP } from "../data/siteData";
import { trackPhoneCall } from "../utils/googleAds";

export default function ContactPage({ setPage }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", brand: "", area: "", address: "", problem: "", time: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div>
      <section className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#f4f8f9]">
        <div className="absolute inset-0 bg-slate-950 bg-cover bg-center" style={{ backgroundImage: `url(${CONTACT_IMAGES[0]})` }} />
        <div className="absolute inset-0 bg-white/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-[#f4f8f9]/40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 flex items-center gap-2">
            <button onClick={() => setPage("home")} className="hover:text-sky-400 transition-colors">Home</button>
            <span>›</span>
            <span className="text-slate-400">Contact Us</span>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">24/7 Available</div>
              <h1 className="text-5xl font-black text-[#26333b] leading-tight mb-6">Get in Touch — <span className="text-sky-400">We're Here</span></h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">Have any questions, need to book a service, or have an emergency? WhatsApp or call us. We typically respond in 2-3 minutes.</p>
              <div className="flex flex-wrap gap-4">
                <a href={`https://wa.me/${WHATSAPP}?text=Hello, AC service book karni hai`} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded font-bold transition-all hover:-translate-y-0.5 shadow-xl shadow-green-500/20">
                  💬 Chat on WhatsApp
                </a>
                <a
 href={`tel:${PHONE}`}
 onClick={(e) => {
   e.preventDefault();
   trackPhoneCall(`tel:${PHONE}`);
 }}
 className="flex items-center gap-3 border-2 border-sky-500/30 text-sky-300 hover:bg-sky-500/10 px-6 py-3 rounded font-bold transition-all">
                  📞 {PHONE}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "📞", label: "Phone (24/7 Emergency)", value: PHONE, link: `tel:${PHONE}` },
                { icon: "💬", label: "WhatsApp (Fastest Response)", value: PHONE, link: `https://wa.me/${WHATSAPP}` },
                { icon: "✉️", label: "Email Support", value: EMAIL, link: `mailto:${EMAIL}` },
                { icon: "📍", label: "Service Coverage", value: "Jaipur", link: null },
                { icon: "⏰", label: "Working Hours", value: "8 AM – 10 PM Daily | Emergency: 24/7", link: null },
              ].map((card) => (
                <div key={card.label} className="bg-white border border-[#e7eef0] rounded p-5 shadow-sm flex items-center gap-4 hover:bg-white/8 transition-colors">
                  <div className="w-12 h-12 rounded bg-sky-500/15 flex items-center justify-center text-xl flex-shrink-0">{card.icon}</div>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{card.label}</div>
                    {card.link ? (
                      <a href={card.link} target={card.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-[#26333b] font-semibold text-sm hover:text-sky-400 transition-colors">
                        {card.value}
                      </a>
                    ) : (
                      <div className="text-[#26333b] font-semibold text-sm">{card.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 gap-4">
          {CONTACT_IMAGES.slice(1).map((image, index) => (
            <div key={index} className="h-72 overflow-hidden rounded border border-slate-200 shadow-lg shadow-slate-200/10">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
            </div>
          ))}
        </div>
      </section>

      <div className="md:col-span-3 bg-white border border-slate-100 rounded p-4 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900 mb-2">
          Our Location
        </h2>

        <p className="text-slate-500 text-sm mb-6">
          Visit our office or get directions directly from Google Maps.
        </p>

        <div className="w-full h-[500px] rounded overflow-hidden">
          <iframe
            title="Coolpoint Jaipur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14225.595159245211!2d75.71005933413456!3d26.954267858243906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4cd51e624fe1%3A0x56ebec2d8d68edd!2sCrime%20Ban%20in%20India!5e0!3m2!1sen!2sin!4v1779000987407!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag>FAQ</SectionTag>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Book Now — 30 Minutes at Your Door!" sub="Don't wait in the heat. One message or call — everything is sorted." />
    </div>
  );
}


