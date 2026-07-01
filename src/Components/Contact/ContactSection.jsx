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
        py-20
        bg-white
        dark:bg-[#080112]
      "
    >
     <div className="max-w-6xl mx-auto px-6 lg:px-12">

       <div
  className="
    grid
    lg:grid-cols-[1fr_0.9fr]
    gap-10
    xl:gap-16
    items-center
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