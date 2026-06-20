import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";

const SERVICES = [
  {
    image: service1, // replace with your path
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" strokeLinecap="round"/>
      </svg>
    ),
    title: "Cooling Services",
    desc: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
  {
    image: service2, // replace with your path
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2c0 4-4 5-4 9a4 4 0 0 0 8 0c0-4-4-5-4-9Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 17.5A4 4 0 0 0 12 21a4 4 0 0 0 4-3.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Heating Services",
    desc: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
  {
    image: service3, // replace with your path
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="10" rx="2"/>
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Other Services",
    desc: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f0f0f0] py-20 px-6">
      {/* Heading */}
      <h2 className="text-center text-4xl text-gray-800 mb-12" style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}>
        Our services
      </h2>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className="bg-white flex flex-col group overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image + Icon overlap */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              {/* Icon badge overlapping image bottom-left */}
              <div className="absolute bottom-0 left-5 translate-y-1/2 bg-white p-3 text-gray-500 shadow-sm border border-gray-100">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 pt-10 pb-0 text-center">
              <h3 className="text-base font-bold text-gray-800 tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Learn More button */}
            <div className="mt-6 border-t border-gray-100">
              <button className="w-full py-4 text-xs font-bold tracking-[3px] uppercase text-gray-100 bg-[#12aeb5] hover:bg-[#08798b] hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}