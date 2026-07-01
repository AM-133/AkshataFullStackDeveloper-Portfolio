import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);

  const socialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    const handleClickOutside = (event) => {
      if (
        socialRef.current &&
        !socialRef.current.contains(event.target)
      ) {
        setOpenSocial(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    {
      icon: FaLinkedinIn,
      link: "https://linkedin.com/in/your-linkedin",
      angle: 180,
    },
    {
      icon: FaGithub,
      link: "https://github.com/your-github",
      angle: 225,
    },
    {
      icon: FaInstagram,
      link: "https://instagram.com/your-instagram",
      angle: 270,
    },
  ];

  const radius = 65;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-4">
      {/* Social FAB */}

      <div ref={socialRef} className="relative h-10 w-10">
        {socials.map(({ icon: Icon, link, angle }, index) => {
          const x =
            Math.cos((angle * Math.PI) / 180) * radius;

          const y =
            Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="
                absolute left-1/2 top-1/2
                flex h-9 w-9 items-center justify-center
                rounded-full border border-violet-500/20
                bg-white text-slate-700 shadow-lg
                dark:bg-[#18181B] dark:text-white

                transition-all duration-500
                hover:scale-110
                hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
              "
              style={{
                transform: openSocial
                  ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                  : "translate(-50%, -50%) scale(0)",

                opacity: openSocial ? 1 : 0,

                transitionDelay: openSocial
                  ? `${index * 100}ms`
                  : `${(socials.length - index) * 50}ms`,
              }}
            >
              <Icon className="text-base hover:text-violet-600 dark:hover:text-violet-300" />
            </a>
          );
        })}

        {/* Share Button */}

        <button
          onClick={() => setOpenSocial((prev) => !prev)}
          className="
            relative z-10
            flex h-10 w-10 items-center justify-center rounded-full

            bg-gradient-to-r from-violet-500 to-indigo-500

            text-white
            shadow-[0_0_25px_rgba(168,85,247,0.4)]

            transition-all duration-300
            hover:scale-110
          "
        >
          <FaShareAlt
            className={`text-base transition-transform duration-300 ${
              openSocial ? "rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Scroll To Top */}

      {showTop && (
        <button
          onClick={scrollToTop}
          className="
            flex h-10 w-10 items-center justify-center rounded-full

            bg-gradient-to-r from-violet-500 to-indigo-500

            text-white
            shadow-[0_0_25px_rgba(168,85,247,0.4)]

            transition-all duration-300
            hover:scale-110
          "
        >
          <FaArrowUp className="text-base" />
        </button>
      )}
    </div>
  );
}