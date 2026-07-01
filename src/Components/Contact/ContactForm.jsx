import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import { CoolMode } from "./../ui/cool-mode";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";

export default function ContactForm() {
  const form = useRef();

const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [snackbar, setSnackbar] = useState({
  open: false,
  severity: "success",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_5bwek09",
      "template_yt847vh",
      formData,
      "IgVoDWovjXM3NbXew"
    )
    .then(() => {
      setSnackbar({
        open: true,
        severity: "success",
        message: "Message sent successfully 🚀",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch(() => {
      setSnackbar({
        open: true,
        severity: "error",
        message: "Failed to send message",
      });
    });
};
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Snackbar
  open={snackbar.open}
  autoHideDuration={3000}
  onClose={() => setSnackbar({ ...snackbar, open: false })}
>
  <Alert severity={snackbar.severity} variant="filled">
    {snackbar.message}
  </Alert>
</Snackbar>
      <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">
        Get In Touch
      </p>

     <h2
  className="
    mt-3
    text-4xl
    md:text-6xl
    font-bold
    text-slate-900
    dark:text-white
  "
>
  Contact Us
</h2>

      <p
        className="
          mt-6
          text-lg
          text-slate-600
          dark:text-gray-400
          max-w-lg
        "
      >
        Have a project in mind or want to work together?
        I'd love to hear from you.
      </p>

     <form
      ref={form}
  onSubmit={handleSubmit}
  className="
    mt-1
    max-w-xl
    space-y-5
    rounded-3xl
    border border-white/10
    bg-white/5
    p-6
    backdrop-blur-xl
    shadow-[0_0_40px_rgba(139,92,246,0.08)]
  "
>

        <div className="grid sm:grid-cols-2 gap-5">

          <input
            name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="
    h-14
    w-full
    rounded-xl
    border border-white/10
    bg-white/5
    px-5
    text-slate-900
    placeholder:text-slate-400
    outline-none
    transition-all
    duration-300
    focus:border-violet-500
    focus:ring-2
    focus:ring-violet-500/20
    dark:bg-white/5
    dark:text-white
    dark:placeholder:text-gray-500
  "
/>

          <input
             name="email"
  type="email"
  value={formData.email}
  onChange={handleChange}
            placeholder="Your Email"
           className="
    h-14
    w-full
    rounded-xl
    border border-white/10
    bg-white/5
    px-5
    text-slate-900
    placeholder:text-slate-400
    outline-none
    transition-all
    duration-300
    focus:border-violet-500
    focus:ring-2
    focus:ring-violet-500/20
    dark:bg-white/5
    dark:text-white
    dark:placeholder:text-gray-500
  "
          />
        </div>

        <input
          name="subject"
  value={formData.subject}
  onChange={handleChange}
          placeholder="Subject"
          className="
    h-14
    w-full
    rounded-xl
    border border-white/10
    bg-white/5
    px-5
    text-slate-900
    placeholder:text-slate-400
    outline-none
    transition-all
    duration-300
    focus:border-violet-500
    focus:ring-2
    focus:ring-violet-500/20
    dark:bg-white/5
    dark:text-white
    dark:placeholder:text-gray-500
  "
        />

        <textarea
          name="message"
  value={formData.message}
  onChange={handleChange}
          rows={6}
          placeholder="Your Message"
         className="
    h-14
    w-full
    rounded-xl
    border border-white/10
    bg-white/5
    px-5
    text-slate-900
    placeholder:text-slate-400
    outline-none
    transition-all
    duration-300
    focus:border-violet-500
    focus:ring-2
    focus:ring-violet-500/20
    dark:bg-white/5
    dark:text-white
    dark:placeholder:text-gray-500
  "
        />
 <CoolMode>
        <button
        type="submit"
          className="
            w-full
            h-14
            rounded-xl
            font-semibold
            text-white
            flex
            items-center
            justify-center
            gap-3
            bg-gradient-to-r
            from-violet-600
            via-purple-600
            to-fuchsia-500
          "
        >
          <SendIcon />
          Send Message
        </button>
        </CoolMode>
      </form>
    </motion.div>
  );
}