import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-5
        bg-slate-50
        dark:bg-[#09090B]
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto grid max-w-6xl items-center gap-5 px-7 lg:grid-cols-2">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}