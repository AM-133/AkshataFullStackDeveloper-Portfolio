import { motion } from "framer-motion";

export default function IntroScreen() {
  return (
    <div
      className="
    fixed inset-0
    flex items-center justify-center
    bg-[#080112]
    z-[9999]
  "
    >
         <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[140px]" />
       <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
       <h1
  className="
    font-roboto
    text-4xl md:text-7xl
   
    bg-gradient-to-r
    from-violet-500
    via-fuchsia-500
    to-purple-500
    bg-clip-text
    text-transparent
  "
>
  Akshata More
</h1>
<div
  className="
    mt-4
    mx-auto
    h-[4px]
    w-44
    rounded-full
    bg-gradient-to-r
    from-violet-500
    via-fuchsia-500
    to-purple-500
    shadow-[0_0_15px_rgba(168,85,247,0.8)]
  "
/>

        <p
          className="
            mt-4
            text-lg md:text-2xl
            text-violet-600
            dark:text-fuchsia-400
          "
        >
          Software Developer
        </p>

      <p
  className="
    mt-2
    text-slate-600
    dark:text-white-400
  "
>
  Spero Healthcare Innovation Pvt Ltd.
</p>

<p
  className="
    mt-2
    font-medium
    text-slate-700
    dark:text--300
  "
>
  3.4+ Years Experience
</p>
      </motion.div>
    </div>
  );
}