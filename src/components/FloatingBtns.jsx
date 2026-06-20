import { PHONE, WHATSAPP } from "../data/siteData";
import { trackPhoneCall } from "../utils/googleAds";

export default function FloatingBtns() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      <a
        href={`https://wa.me/${WHATSAPP}?text=Hello, AC service book karni hai`}
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-white px-5 py-3"
      >
        WhatsApp
      </a>


      <a
        href={`tel:${PHONE}`}
        onClick={(e) => {
          e.preventDefault();
          trackPhoneCall(`tel:${PHONE}`);
        }}
        className="bg-yellow-400 px-5 py-3"
      >
        Call Now
      </a>

    </div>
  );
}