import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import confetti from "canvas-confetti";
import { CoolMode } from "./../ui/cool-mode";

export default function HeroLeft() {
  const buttonRef = useRef(null);
const handleDownloadCV = () => {
  if (buttonRef.current) {
    const rect = buttonRef.current.getBoundingClientRect();

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: {
        x,
        y,
      },
    });
  }

  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "/Akshata_Resume.pdf";
    link.download = "Akshata_Resume.pdf";
    link.click();
  }, 300);
};
  return (
    <div className="flex flex-col items-start gap-6">

      {/* Greeting */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-[3px] rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
        <span className="text-lg text-gray-500 dark:text-gray-400">
          Hello.
        </span>
      </div>

      {/* Name */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white lg:text-7xl">
        Akshata More
      </h1>

      {/* Typewriter */}
      <h2 className="text-2xl font-semibold text-violet-600 dark:text-violet-400 lg:text-4xl">
        <Typewriter
          words={[
            "Full Stack Developer",
            "UI Developer",
            "Frontend Developer",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* Description */}
      <p className="max-w-lg text-gray-500 dark:text-gray-400">
        I build modern, responsive and scalable web applications with clean UI
        and smooth user experiences.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">

        {/* Primary — Hire Me */}
      <button
  ref={buttonRef}
  onClick={handleDownloadCV}
  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-[1.04] hover:shadow-violet-500/50 lg:px-9 lg:text-base"
>
  <span className="relative z-10">Download CV</span>

  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
</button>

        {/* Secondary — View My Work */}
       <CoolMode>
  <button className="rounded-xl border border-violet-500/40 px-7 py-3 text-sm font-semibold text-violet-700 transition-all duration-300 hover:scale-[1.04] hover:border-violet-500 hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-500/10 lg:px-9 lg:text-base">
    View My Work
  </button>
</CoolMode>

      </div>
    </div>
  );
}