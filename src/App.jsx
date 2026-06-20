import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingBtns from "./components/FloatingBtns";
import ScrollReveal from "./components/ScrollReveal";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [page, setPage] = useState("home");

  const setPageScroll = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell font-sans antialiased bg-[#f4f8f9] text-[#26333b]">
      <Navbar activePage={page} setPage={setPageScroll} />
      <FloatingBtns />
      <ScrollReveal watchKey={page} />
      <main>
        {page === "home" && <HomePage setPage={setPageScroll} />}
        {page === "about" && <AboutPage setPage={setPageScroll} />}
        {page === "services" && <ServicesPage setPage={setPageScroll} />}
        {page === "contact" && <ContactPage setPage={setPageScroll} />}
      </main>
      <Footer setPage={setPageScroll} />
    </div>
  );
}
