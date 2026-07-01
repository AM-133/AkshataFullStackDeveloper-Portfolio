import { motion } from "framer-motion";
import { stats } from "./data";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
    >
      <p
        className="
          uppercase
          tracking-[5px]
          text-fuchsia-500
          text-sm
        "
      >
        About Me
      </p>

      <h2
        className="
          mt-1
          text-5xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        Passionate Full Stack
        <span className="block text-violet-500">
          Developer
        </span>
      </h2>

      <p
        className="
          mt-1
          text-lg
          leading-9
          text-slate-600
          dark:text-gray-400
        "
      >
        I'm a Full Stack Developer with 3+ years of experience
        building modern, scalable, and user-friendly web
        applications. I enjoy developing responsive frontend
        interfaces with React.js and Next.js while also working on
        robust backend solutions using PHP and Python. Passionate
        about clean code, performance, and intuitive user
        experiences, I love turning ideas into reliable,
        high-quality digital products.
      </p>

      {/* Stats */}

      <div className="mt-10 grid grid-cols-3 gap-5">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{
              y: -8,
              scale: 1.04,
            }}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-lg
              transition-all
              duration-300

              hover:border-violet-400/40
              hover:shadow-xl

              dark:border-violet-500/15
              dark:bg-[#171717]
              dark:hover:border-violet-500/30
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-violet-500
              "
            >
              {item.number}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-slate-600
                dark:text-gray-400
              "
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}