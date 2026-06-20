import { useEffect, useRef, useState } from "react";
import slide1 from "../assets/slider-1.jpg";
import slide2 from "../assets/slider-2.jpg";
import slide3 from "../assets/slider-3.jpg";

const slides = [
  {
    id: 1,
    image: slide1,
    tag: "01 - Reliable Air Conditioning",
    title: "Installation\nServices &\nRepair",
    cta: "Get a Free Quote",
  },
  {
    id: 2,
    image: slide2,
    tag: "02 - Expert Heating Solutions",
    title: "Heating &\nFurnace\nMaintenance",
    cta: "Book a Service",
  },
  {
    id: 3,
    image: slide3,
    tag: "03 - Year-Round Comfort",
    title: "Emergency\nRepair &\nSupport",
    cta: "Call Us Now",
  },
];

const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [textVisible, setTextVisible] = useState(true);
  const timerRef = useRef(null);

  const goTo = (index) => {
    setTextVisible(false);
    setPrev(current);
    setTimeout(() => {
      setCurrent(index);
      setPrev(null);
      setTimeout(() => setTextVisible(true), 80);
    }, 500);
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % slides.length;
        setTextVisible(false);
        setPrev(c);
        setTimeout(() => {
          setCurrent(next);
          setPrev(null);
          setTimeout(() => setTextVisible(true), 80);
        }, 500);
        return c;
      });
    }, SLIDE_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    setTimeout(() => setTextVisible(true), 200);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDot = (i) => {
    if (i === current) return;
    goTo(i);
    startTimer();
  };

  return (
    <>
      <style>{`
        .loazzne-root {
          min-height: 720px;
          background: #f4f8f9;
          font-family: Barlow, sans-serif;
          overflow: hidden;
          position: relative;
        }

        .loazzne-root .hero-carousel {
          position: relative;
          width: 100%;
          height: 720px;
          overflow: hidden;
        }

        .loazzne-root .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }

        .loazzne-root .slide.active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
          z-index: 2;
        }

        .loazzne-root .slide.exit {
          opacity: 0;
          transform: translateX(-60px);
          z-index: 1;
          pointer-events: none;
        }

        .loazzne-root .slide-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .loazzne-root .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 38%, rgba(255,255,255,0.16) 62%, rgba(244,248,249,0.62) 100%);
          z-index: 1;
        }

        .loazzne-root .slide-content {
          position: absolute;
          z-index: 3;
          left: max(48px, calc((100vw - 1280px) / 2 + 24px));
          top: 55%;
          transform: translateY(-50%);
          max-width: 440px;
        }

        .loazzne-root .slide-tag {
          font-size: 13px;
          font-weight: 600;
          color: #687882;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .loazzne-root .slide-tag::before {
          content: '';
          display: inline-block;
          width: 34px;
          height: 3px;
          background: #12aeb5;
          flex-shrink: 0;
        }

        .loazzne-root .slide-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.02;
          color: #26333b;
          white-space: pre-line;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease 0.12s, transform 0.55s ease 0.12s;
        }

        .loazzne-root .btn-quote {
          background: #ffd45a;
          color: #26333b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 17px 34px;
          border: none;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s, background 0.2s;
        }

        .loazzne-root .btn-quote:hover {
          background: #f0bd32;
        }

        .loazzne-root .text-visible .slide-tag,
        .loazzne-root .text-visible .slide-title,
        .loazzne-root .text-visible .btn-quote {
          opacity: 1;
          transform: translateY(0);
        }

        .loazzne-root .carousel-dots {
          position: absolute;
          bottom: 34px;
          left: max(48px, calc((100vw - 1280px) / 2 + 24px));
          z-index: 10;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .loazzne-root .dot {
          width: 28px;
          height: 6px;
          border-radius: 0;
          background: rgba(38,51,59,0.2);
          cursor: pointer;
          border: none;
          padding: 0;
          transition: background 0.3s, width 0.3s;
        }

        .loazzne-root .dot.active {
          background: #12aeb5;
          width: 42px;
        }

        .loazzne-root .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          background: #ffd45a;
          z-index: 20;
          animation: loazzne-progress ${SLIDE_INTERVAL}ms linear infinite;
        }

        @keyframes loazzne-progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @media (max-width: 768px) {
          .loazzne-root,
          .loazzne-root .hero-carousel {
            height: 680px;
            min-height: 680px;
          }

          .loazzne-root .slide-overlay {
            background: linear-gradient(100deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.8) 66%, rgba(244,248,249,0.44) 100%);
          }

          .loazzne-root .slide-content {
            left: 24px;
            right: 24px;
            max-width: none;
          }

          .loazzne-root .slide-title {
            font-size: 46px;
          }

          .loazzne-root .carousel-dots {
            left: 24px;
          }
        }
      `}</style>

      <div className="loazzne-root">
        <div className="hero-carousel">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`slide ${i === current ? "active" : i === prev ? "exit" : ""}`}
            >
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-overlay" />
              <div className={`slide-content ${i === current && textVisible ? "text-visible" : ""}`}>
                <p className="slide-tag">{slide.tag}</p>
                <h1 className="slide-title">{slide.title}</h1>
                <button className="btn-quote">{slide.cta}</button>
              </div>
            </div>
          ))}

          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => handleDot(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="progress-bar" key={current} />
        </div>
      </div>
    </>
  );
}

