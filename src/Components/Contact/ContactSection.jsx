import ContactForm from "./ContactForm";
import ContactIllustration from "./ContactIllustration";
import ContactCards from "./ContactCards";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-10
        bg-white
        dark:bg-[#080112]
      "
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[1fr_0.9fr]
            xl:gap-16
          "
        >
          <ContactForm />
          <ContactIllustration />
        </div>

        <ContactCards />
      </div>
    </section>
  );
}