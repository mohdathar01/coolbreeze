import { FaClock, FaCheckCircle, FaTag, FaBox, FaMobileAlt, FaCalendarAlt, FaBuilding, FaLeaf, FaAddressBook } from "react-icons/fa";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
export const PHONE = " +91 6378260919";
export const WHATSAPP = " +91 6378260919";
export const EMAIL = "jaipurcoolpoint@gmail.com";
export const COMPANY = "Cool Point AC Services";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact Us" },
];

export const BRANDS = [
  "Daikin",
  "Voltas",
  "Carrier",
  "Lloyd",
  "Hitachi",
  "Blue Star",
  "LG",
  "Samsung",
  "Panasonic",
  "O General",
  "Godrej",
  "Whirlpool",
  "Haier",
  "Onida",
  "Videocon",
  "Mitsubishi",
];

export const HOME_FEATURES = [
  { icon: FaClock, title: "30-Minute Emergency Response", desc: "Our team arrives fast and ready. We dispatch the nearest certified technician within 30 minutes for urgent AC support." },
  { icon: FaCheckCircle, title: "Certified Technicians", desc: "Every technician is trained, verified, and experienced to handle all AC brands and system types safely." },
  { icon: FaTag, title: "Transparent Pricing", desc: "You get a clear estimate before work starts – no hidden fees, no surprise invoices, no last-minute charges." },
  { icon: FaAddressBook, title: "Service Warranty", desc: "All repairs and services include a 90-day workmanship warranty so you can rest easy." },
  { icon: FaBox, title: "All Brands Covered", desc: "We service split ACs, window ACs, cassette units, ducted systems, VRF systems, and all major brands." },
  { icon: FaMobileAlt, title: "Digital Booking", desc: "Book via WhatsApp, call, or website form. We provide digital updates, invoices, and reminders." },
  { icon: FaCalendarAlt, title: "Seasonal Maintenance", desc: "Prepare your AC for summer, monsoon, and winter with scheduled maintenance that improves reliability." },
  { icon: FaBuilding, title: "Residential & Commercial", desc: "Home and business AC systems both receive the same reliable service quality." },
  { icon: FaLeaf, title: "Eco-Friendly Service", desc: "We recover refrigerant safely, dispose of waste responsibly, and follow eco-friendly practices." },
];

export const SERVICES_DATA = [
  {
    emoji: "🎖️",
    color: "from-sky-100 to-blue-200",
    title: "AC Servicing & Deep Cleaning",
    short: "Complete cleaning, filter wash, coil care, and performance tuning.",
    price: "xxxxx onwards",
    desc: "Routine AC servicing restores cooling efficiency and lowers electricity bills. We clean indoor and outdoor units, flush drainage, and inspect all major components.",
    includes: [
      "Deep indoor unit cleaning",
      "Anti-bacterial filter wash",
      "Evaporator coil cleaning",
      "Condenser coil cleaning",
      "Drainage line flush",
      "Electrical safety inspection",
      "Gas pressure check",
      "Thermostat and remote calibration",
      "Performance verification",
    ],
    time: "2-3 hours",
    warranty: "60 days",
  },
  {
    emoji: "🎖️",
    color: "from-emerald-100 to-green-200",
    title: "AC Repair & Troubleshooting",
    short: "Cooling issues, leaks, noise, or electrical faults fixed quickly.",
    price: "xxxxx onwards",
    desc: "We diagnose the root cause and repair compressors, fan motors, PCB boards, electrical faults, and more. Most repairs are completed the same day when parts are available.",
    includes: [
      "Compressor diagnostics",
      "PCB and control board repair",
      "Fan motor and capacitor replacement",
      "Leak detection and repair",
      "Thermostat sensor replacement",
      "Electrical safety checks",
      "Noise and vibration troubleshooting",
      "Performance testing",
    ],
    time: "1-4 hours",
    warranty: "90 days",
  },
  {
    emoji: "🎖️",
    color: "from-orange-100 to-amber-200",
    title: "New AC Installation",
    short: "Professional installation with proper piping and electrical setup.",
    price: "xxxxx onwards",
    desc: "A correct installation ensures efficiency and preserves warranty. We mount indoor and outdoor units, route pipes correctly, align drainage, and verify refrigerant pressure.",
    includes: [
      "Indoor unit mounting and leveling",
      "Outdoor unit bracket setup",
      "Copper piping up to 15 feet",
      "Drainage slope alignment",
      "Power line and MCB inspection",
      "Refrigerant pressure verification",
      "Final system performance test",
    ],
    time: "3-5 hours",
    warranty: "30 days support",
  },
  {
    emoji: "🎖️",
    color: "from-violet-100 to-purple-200",
    title: "Gas Refilling / Re-Gassing",
    short: "Safe refrigerant refill for improved cooling.",
    price: "xxxxx onwards",
    desc: "Low refrigerant reduces cooling. We locate leaks, recover old gas safely, and refill the correct amount based on manufacturer requirements.",
    includes: [
      "Electronic leak detection",
      "Safe refrigerant recovery",
      "Gas recharge with correct pressure",
      "Superheat and subcooling checks",
      "Post-refill leak test",
      "30-minute monitoring",
    ],
    time: "1-2 hours",
    warranty: "60 days leak-free guarantee",
  },
  {
    emoji: "🎖️",
    color: "from-red-100 to-rose-200",
    title: "Annual Maintenance Contract (AMC)",
    short: "Quarterly service, emergency coverage, and priority support.",
    price: "yearly",
    desc: "An AMC keeps your AC ready all year. Enjoy scheduled maintenance, priority response, parts discounts, and reliable coverage.",
    includes: [
      "4 preventive maintenance visits",
      "Priority emergency response",
      "20% discount on spare parts",
      "2 free emergency visits",
      "Digital service records",
      "Thermostat calibration every visit",
      "Annual performance review",
    ],
    time: "Year-round coverage",
    warranty: "90 days per visit",
  },
  {
    emoji: "🎖️",
    color: "from-yellow-100 to-amber-200",
    title: "AC Uninstall & Reinstall",
    short: "Safe transfer to new locations with protective handling.",
    price: "xxxxx onwards",
    desc: "Moving homes? We uninstall your AC safely, recover refrigerant, protect all components, and reinstall the unit properly at the new address.",
    includes: [
      "Indoor and outdoor unit removal",
      "Safe refrigerant recovery",
      "Protective packing",
      "Site survey at the new location",
      "Reinstallation with proper piping",
      "Gas recharge after reinstall",
      "Full performance check",
    ],
    time: "4-6 hours",
    warranty: "30 days",
  },
  {
    emoji: "🎖️",
    color: "from-slate-100 to-gray-200",
    title: "Commercial AC Services",
    short: "Office, retail, and industrial AC support solutions.",
    price: "Custom Quote",
    desc: "We handle VRF systems, cassette ACs, ducted installations, and commercial HVAC with dedicated teams and tailored maintenance plans.",
    includes: [
      "VRF / VRV system servicing",
      "Cassette AC maintenance",
      "Ducted system inspection",
      "Chiller plant check",
      "AHU and FCU servicing",
      "BMS integration review",
      "Energy efficiency audit",
      "24/7 commercial emergency support",
    ],
    time: "Custom schedule",
    warranty: "As per contract",
  },
  {
    emoji: "🎖️",
    color: "from-teal-100 to-cyan-200",
    title: "Deep Disinfection Service",
    short: "Anti-bacterial treatment for clean indoor air.",
    price: "xxxxx onwards",
    desc: "We disinfect AC systems to remove mold, bacteria, and allergens. This improves safety and makes the air fresher and healthier.",
    includes: [
      "Complete unit disinfection",
      "Anti-bacterial chemical application",
      "Anti-fungal protection",
      "Electrostatic fogging",
      "Odor removal",
      "Air quality improvement",
      "Safe for homes and offices",
    ],
    time: "3-4 hours",
    warranty: "45 days freshness guarantee",
  },
];

export const TESTIMONIALS = [
  { name: "Rakesh Kumar", loc: "C Scheme, Jaipur", init: "RK", color: "from-sky-500 to-blue-600", stars: 5, text: "CoolPoint repaired my AC in 45 minutes. The technician was professional, explained the issue clearly, and there were no hidden charges." },
  { name: "Priya Sharma", loc: "Malviya Nagar, Jaipur", init: "PS", color: "from-violet-500 to-purple-600", stars: 5, text: "My AC stopped cooling at 11 PM. The technician arrived quickly and fixed the compressor issue the same night." },
  { name: "Amit Verma", loc: "Mansarovar, Jaipur", init: "AV", color: "from-emerald-500 to-teal-600", stars: 5, text: "The AMC plan saved me money and gave me peace of mind. The team is reliable and responsive." },
  { name: "Sunita Agarwal", loc: "Vidhyadhar Nagar, Jaipur", init: "SA", color: "from-rose-500 to-pink-600", stars: 5, text: "They installed my new AC perfectly with clean piping and no delays. Very satisfied." },
  { name: "Mohit Gupta", loc: "Tonk Road, Jaipur", init: "MG", color: "from-amber-500 to-orange-600", stars: 5, text: "They found and fixed a leak before refilling gas. The AC works great now." },
  { name: "Kavita Jain", loc: "Pratap Nagar, Jaipur", init: "KJ", color: "from-indigo-500 to-blue-700", stars: 5, text: "The disinfection service removed mold and odor from my AC. The air is much fresher now." },
];

export const AMC_PLANS = [
  {
    name: "Silver",
    price: "custom",
    period: "yearly",
    desc: "Ideal for one AC unit.",
    popular: false,
    color: "from-slate-400 to-gray-500",
    features: [
      "2 preventive visits",
      "1 free emergency visit",
      "10% parts discount",
      "Email support",
      "60-day warranty per visit",
    ],
  },
  {
    name: "Gold",
    price: "xxxxx",
    period: "yearly",
    desc: "Perfect for two AC units.",
    popular: true,
    color: "from-sky-500 to-blue-600",
    features: [
      "4 preventive visits",
      "2 free emergency visits",
      "20% parts discount",
      "Priority response",
      "Phone and WhatsApp support",
      "90-day warranty per visit",
      "Dedicated coordinator",
    ],
  },
  {
    name: "Platinum",
    price: "custom",
    period: "yearly",
    desc: "Best for 3+ AC units or commercial properties.",
    popular: false,
    color: "from-amber-500 to-orange-600",
    features: [
      "6 preventive visits",
      "Unlimited emergency visits",
      "30% parts discount",
      "10-minute response guarantee",
      "24/7 helpline",
      "Annual energy audit",
      "Commercial system review",
    ],
  },
];

export const IMAGE_URLS = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

export const HERO_SLIDES = IMAGE_URLS.slice(0, 6);
export const ABOUT_IMAGES = IMAGE_URLS;
export const SERVICES_IMAGES = IMAGE_URLS.slice(10, 15);
export const CONTACT_IMAGES = IMAGE_URLS.slice(15, 20);

export const FAQ = [
  { q: "How long does AC servicing take?", a: "Standard AC servicing takes around 2-3 hours. Deep cleaning or disinfection may require 3-4 hours depending on the unit condition." },
  { q: "Do you service all AC brands?", a: "Yes, we service all major brands including Daikin, Voltas, Carrier, Hitachi, Blue Star, LG, Samsung, Panasonic, Godrej, Whirlpool, Haier, Onida, Videocon, and more." },
  { q: "How often should I service my AC?", a: "For regular use, we recommend servicing twice a year: before summer and after the monsoon. Light use may need annual servicing." },
  { q: "How soon should cooling improve after gas refilling?", a: "Cooling should improve within 15-20 minutes after refilling. We also monitor the system for 30 minutes to confirm the correct operation." },
  { q: "Do you offer warranty on parts?", a: "We use original/OEM parts when available and offer a 90-day labor warranty. Part warranties depend on the manufacturer." },
  { q: "Is there an extra charge for emergency service?", a: "Emergency service after 10 PM and on Sundays may include a surcharge. AMC customers receive emergency visits according to their plan." },
  { q: "What payment options do you accept?", a: "We accept cash, UPI, debit/credit cards, and bank transfers. You receive a digital invoice via WhatsApp or email." },
  { q: "How should I prepare for the technician?", a: "Keep the area around your AC units clear and ensure power access is available. Our technicians handle the rest." },
];

export const PROCESS_STEPS = [
  { num: "01", icon: "1", title: "Book Your Service", desc: "Contact us via WhatsApp, call, or website form and describe your AC issue clearly." },
  { num: "02", icon: "2", title: "Technician Dispatched", desc: "We send the nearest certified technician with the right tools and parts." },
  { num: "03", icon: "3", title: "Transparent Diagnosis", desc: "The technician inspects your AC and provides a clear quote before starting work." },
  { num: "04", icon: "4", title: "Service Completed", desc: "The job is completed with quality checks, testing, and a digital service report." },
];

export const SERVICE_AREAS = [
  "Jaipur City - C Scheme, D Scheme, Tonk Road, Malviya Nagar",
  "East Jaipur - Kota Road, Ajmer Road, Adarsh Nagar, Mansarovar",
  "South Jaipur - Vidhyadhar Nagar, Gyan Vihar, Ambabari, Kant Nagar",
  "West Jaipur - Pratap Nagar, Jagatpura, Ramdev Nagar, Kalyan Nagar",
  "North Jaipur - Sanganeri Gate, Bapu Nagar, Doongri, Ramniwas Garden area",
];

export const ABOUT_TIMELINE = [
  ["2017", "Humble Beginnings", "Started with one service van, two technicians, and a promise to deliver honest AC support in Jaipur."],
  ["2018", "Growing the Team", "Expanded service coverage across Jaipur with more certified technicians."],
  ["2019", "1,000 Customers", "Reached the first 1,000 satisfied customers and launched AMC plans."],
  ["2021", "Digital Booking", "Introduced WhatsApp booking and digital invoicing for faster service."],
  ["2022", "Commercial Services", "Built a dedicated commercial division for offices and retail spaces."],
  ["2023", "25+ Technicians", "Built a skilled team of more than 25 technicians across Jaipur."],
  ["2024", "5,000 Customers", "Served over 5,000 Jaipur customers with a strong 4.9/5 rating."],
  ["2025", "ISO Certification", "Achieved ISO-certified service processes and eco-friendly refrigerant handling."],
];

export const TEAM_MEMBERS = [
  { init: "RS", color: "from-sky-900 to-blue-900", name: "Lokendra Singh", role: "Founder & CEO", exp: "15 Yrs", cert: "HVAC Specialist", desc: "Leads operations with 15 years of HVAC experience and a focus on honest service." },
  { init: "AK", color: "from-violet-500 to-purple-600", name: "Tahseen Ahmed", role: "Head Technician", exp: "10 Yrs", cert: "Certified HVAC Trainer", desc: "Expert in diagnostics, installations, and complex AC repairs." },
  { init: "PT", color: "from-emerald-500 to-teal-600", name: "Priyansu Tyagi", role: "Customer Relations Head", exp: "6 Yrs", cert: "Service Management", desc: "Ensures clear communication and fast resolutions for every customer." },
  { init: "SK", color: "from-amber-500 to-orange-500", name: "Suresh Kumar", role: "Senior Field Technician", exp: "8 Yrs", cert: "Blue Star Authorized", desc: "Skilled in split AC and multi-unit field service." },
  { init: "MR", color: "from-rose-500 to-pink-600", name: "Manish Rawat", role: "Commercial HVAC Specialist", exp: "12 Yrs", cert: "VRF / VRV Certified", desc: "Specializes in large commercial AC systems and efficient project delivery." },
  { init: "NS", color: "from-indigo-500 to-blue-700", name: "Neeraj Singh", role: "Operations Manager", exp: "5 Yrs", cert: "Operations & Logistics", desc: "Keeps dispatch, inventory, and billing coordinated for smooth service." },
];

export const CERTIFICATIONS = [
  "ISO 9001:2015 Certified",
  "GST Registered Business",
  "Police Verified Staff",
  "Eco-Friendly Service Practices",
  "Daikin Authorized Partner",
  "Voltas Service Partner",
  "Blue Star Authorized Partner",
  "BEE Star Rated Service",
];

export const WORKERS = [
   { init: "AK", color: "from-purple-500 to-pink-500", name: "Amit Kumar", role: "Installation Specialist", exp: "10+ Years", services: "New AC Installation, Setup" },
  { init: "PS", color: "from-green-500 to-emerald-500", name: "Pradeep Singh", role: "Field Technician", exp: "8+ Years", services: "Repair, Servicing, Gas Refill" },
  { init: "VK", color: "from-orange-500 to-red-500", name: "Vikram Kumar", role: "Senior Technician", exp: "11+ Years", services: "Commercial AC, VRF Systems" },
  { init: "MB", color: "from-indigo-500 to-blue-600", name: "Manoj Bansal", role: "Field Technician", exp: "7+ Years", services: "Split AC, Window AC, Repair" },
  { init: "SK", color: "from-rose-500 to-pink-600", name: "Suresh Kumar", role: "Installation Expert", exp: "9+ Years", services: "Professional Installation, Setup" },
  { init: "RD", color: "from-teal-500 to-green-600", name: "Rohit Desai", role: "Service Technician", exp: "6+ Years", services: "Maintenance, Deep Cleaning" },
 
];

