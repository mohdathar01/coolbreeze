import CTABanner from "../components/CTABanner";
import FaqItem from "../components/FaqItem";
import SectionTag from "../components/SectionTag";
import Hero from "../components/Hero";

import {
  ABOUT_IMAGES,
  BRANDS,
  FAQ,
  HOME_FEATURES,
  PROCESS_STEPS,
  SERVICE_AREAS,
  SERVICES_DATA,
  TESTIMONIALS,
  WORKERS,
} from "../data/siteData";
import Services from "../components/Services";


export default function HomePage({ setPage }) {
  return (
    <div>
      <Hero/>

     <section className="bg-[#12aeb5] overflow-hidden">
  <div className="flex w-max animate-ticker">
    {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
      <span
        key={i}
        className="text-white/90 font-black text-sm tracking-widest text-center border-x border-white/20 py-7 px-10 hover:bg-[#078b94] transition-colors whitespace-nowrap"
      >
        {brand}
      </span>
    ))}
  </div>
</section>

<Services />

      <section className="py-20 bg-slate-50">
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

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Why Choose Us?</SectionTag>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">Why We Stand Apart in Jaipur</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">We build relationships, not just transactions. Every customer is important to us and deserves the best service.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HOME_FEATURES.map((feature) => (
              <div key={feature.title} className="group bg-white border border-slate-100 hover:border-sky-200 rounded p-8 transition-all duration-300 hover:shadow-xl hover:shadow-sky-50 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#2bced5] rounded flex items-center justify-center text-2xl mb-6 group-hover:bg-sky-100 transition-colors"><feature.icon /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Our Services</SectionTag>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">Complete AC Solutions Under One Roof</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">From servicing to installation, gas refill to AMC plans — everything is covered. One call solves everything.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <button key={service.title} onClick={() => setPage("services")} className="group bg-white rounded overflow-hidden border border-slate-100 hover:border-sky-200 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-sky-100 hover:-translate-y-2 text-left">
                <div className={`bg-gradient-to-br ${service.color} h-40 flex items-center justify-center text-7xl`}>{service.emoji}</div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{service.short}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-sky-50 text-sky-700 text-sm font-bold px-3 py-1 rounded-full border border-sky-100">{service.price}</span>
                    <span className="text-sky-500 font-bold text-sm group-hover:translate-x-1 transition-transform">Details →</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setPage("services")} className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 rounded font-black text-base transition-all hover:-translate-y-1 shadow-lg shadow-sky-200">
              Saari Services Dekhein →
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Our Process</SectionTag>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">4 Simple Steps From Booking to Completion</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">No complicated steps, no long waits. One call and we handle everything for you.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[17%] right-[17%] h-0.5 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-200" />
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-[#12aeb5] font-bold flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl shadow-sky-200">
                  {step.icon}
                </div>
                <div className="text-sky-500 font-black text-xs tracking-widest mb-2">STEP {step.num}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-950 to-blue-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[["5,000+", "Happy Customers"], ["98%", "Satisfaction Rate"], ["8 Yrs", "In Business"], ["30 Min", "Avg Response Time"]].map(([value, label]) => (
              <div key={label} className="border border-sky-500/20 rounded p-8 bg-white/3">
                <div className="text-5xl font-black text-sky-400 mb-2">{value}</div>
                <div className="text-slate-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Customer Reviews</SectionTag>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">Over 5,000 Happy Customers Share Their Experience</h2>
            <p className="text-slate-500 text-lg">4.9/5 rating on Google — our customers tell our true story</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="bg-white border border-slate-100 rounded p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex mb-4">{Array(testimonial.stars).fill("⭐").join("")}</div>
                <p className="text-slate-600 leading-relaxed text-sm mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-black text-sm`}>{testimonial.init}</div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-400 text-xs mt-0.5">📍 {testimonial.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionTag>Service Area</SectionTag>
          <h2 className="text-4xl font-black text-slate-900 mb-4">We Serve All of Jaipur</h2>
          <p className="text-slate-500 mb-10">Wherever you are in Jaipur, our technicians can reach you quickly</p>
          <div className="grid md:grid-cols-1 gap-3 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <div key={area} className="bg-white border border-slate-100 rounded px-6 py-4 text-slate-600 text-sm text-left flex items-center gap-3">
                <span className="text-sky-500">📍</span>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Our Team</SectionTag>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">Meet Our Expert AC Technicians</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Trained, certified, and verified professionals ready to serve Jaipur. Every technician brings years of expertise.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {WORKERS.map((worker) => (
              <div key={worker.name} className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded p-6 hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${worker.color} flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-md`}>{worker.init}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{worker.name}</h3>
                <div className="text-sky-600 font-semibold text-sm mb-2">{worker.role}</div>
                <div className="flex gap-2 justify-center mb-3">
                  <span className="bg-sky-50 text-sky-700 text-xs px-3 py-1 rounded-full font-medium">{worker.exp}</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{worker.services}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag>FAQ</SectionTag>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQ.slice(0, 4).map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setPage("contact")} className="text-sky-600 font-bold hover:text-sky-500 transition-colors">
              Aur sawaal hain? Contact karein →
            </button>
          </div>
        </div>
      </section>

      <CTABanner title="Your AC Needs Repair? Book Now!" sub="Same-day service available. Technician at your doorstep in 30 minutes. 90-day warranty included." />
    </div>
  );
}


