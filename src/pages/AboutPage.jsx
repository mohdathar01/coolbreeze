import CTABanner from "../components/CTABanner";
import SectionTag from "../components/SectionTag";
import { ABOUT_IMAGES, ABOUT_TIMELINE, CERTIFICATIONS, TEAM_MEMBERS } from "../data/siteData";

export default function AboutPage({ setPage }) {
  return (
    <div>
      <section className="bg-[#f4f8f9] pt-32 pb-20 relative overflow-hidden border-b border-[#e7eef0]">
        <div className="absolute inset-0 bg-white/50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-8 flex items-center gap-2">
            <button onClick={() => setPage("home")} className="hover:text-sky-400 transition-colors">Home</button>
            <span>›</span>
            <span className="text-slate-400">About Us</span>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Our Story</div>
              <h1 className="text-5xl font-black text-[#26333b] leading-tight mb-6">8 Years of <span className="text-sky-400">Excellence,</span> One Strong<br />Reputation</h1>
              <p className="text-slate-400 text-lg leading-relaxed">In 2017, a simple idea became a trusted brand. Today, CoolPoint is Jaipur's most reliable AC service company.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['5,000+', 'Satisfied Customers'], ['8+', 'Years of Excellence'], ['25+', 'Certified Technicians'], ['98%', 'Customer Retention']].map(([number, label]) => (
                <div key={label} className="bg-white border border-[#e7eef0] rounded p-6 text-center shadow-sm">
                  <div className="text-4xl font-black text-sky-400 mb-1">{number}</div>
                  <div className="text-slate-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f4f8f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {ABOUT_IMAGES.map((image, index) => (
              <div key={index} className="h-64 overflow-hidden rounded border border-slate-800 shadow-xl shadow-slate-950/20">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTag>We are Here</SectionTag>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Cool-Breeze goal — to provide honest, reliable, and affordable AC services</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>In 2017, CoolPoint started with a simple goal — to provide honest, reliable, and affordable AC services that people can trust. What began with a small team and a single service van has now grown into a trusted service company serving thousands of happy customers across Delhi.</p>
                <p>Over the years, we have built our reputation through quality work, transparent pricing, and professional customer support. Today, our team of trained technicians handles AC installation, repair, gas refilling, maintenance, and servicing for homes and offices with complete care and efficiency.</p>
                <p>At CoolPoint, customer satisfaction always comes first. We believe in genuine solutions, timely service, and fair pricing without unnecessary charges. Our mission is simple — to keep your home and workplace comfortable with dependable AC services you can rely on.</p>
                <p>Today, our team of trained technicians handles AC installation, repair, gas refilling, maintenance, and servicing for homes and offices with complete care and efficiency.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-sky-50 border border-sky-100 rounded p-8">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">"Every household in Jaipur deserves affordable, honest, and excellent AC service. Our mission is to be the trusted partner you can rely on."</p>
                <p className="text-sky-700 font-bold mt-4">— Lokendra Singh, Founder</p>
              </div>
              <div className="bg-slate-900 rounded p-8">
                <h3 className="text-xl font-bold text-white mb-4">Our Core Values</h3>
                <ul className="space-y-3">
                  {[
                    "Honesty First — integrity above profit",
                    "Quality Without Compromise — work done with care",
                    "Speed + Quality — fast and reliable service",
                    "Customer Education — transparency over complexity",
                    "Environmental Responsibility — eco-friendly practices",
                  ].map((value) => (
                    <li key={value} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="text-sky-400 mt-0.5 flex-shrink-0">✦</span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag>Our Journey</SectionTag>
            <h2 className="text-4xl font-black text-slate-900 mb-4">2017 to Today</h2>
          </div>
          <div className="space-y-6">
            {ABOUT_TIMELINE.map(([year, title, desc]) => (
              <div key={year} className="flex gap-6">
                <div className="w-16 h-16 rounded bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0">{year}</div>
                <div className="bg-white border border-slate-100 rounded p-5 flex-1">
                  <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                  <p className="text-slate-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>Meet Our Team</SectionTag>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Skilled Professionals Serving Jaipur</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Verified, trained, and genuinely caring professionals — this is our team.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="bg-white border border-slate-100 rounded p-8 hover:shadow-xl transition-all hover:-translate-y-1 hover:border-sky-100">
                <div className={`w-20 h-20 rounded bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-black text-2xl mb-6`}>{member.init}</div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <div className="text-sky-600 font-bold text-sm mt-0.5 mb-1">{member.role}</div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">{member.exp}</span>
                  <span className="bg-sky-50 text-sky-700 text-xs px-3 py-1 rounded-full">{member.cert}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionTag>Certifications & Awards</SectionTag>
          <h2 className="text-4xl font-black text-slate-900 mb-12">Our Qualifications</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert} className="bg-white border border-slate-100 rounded p-6 text-center hover:border-sky-200 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">🏅</div>
                <div className="font-bold text-slate-800 text-sm">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Connect With Us" sub="Have any AC-related questions or want to know more? We're available 24/7 to help." />
    </div>
  );
}

