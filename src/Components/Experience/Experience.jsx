import { motion } from "framer-motion";
import { experiences } from "./ExperienceData";
import DeviceMockup from "./DeviceMockup";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-1 px-14 bg-white dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">
            Experience
          </h2>

          <p className="mt-4 text-slate-600 dark:text-zinc-400">
            My journey from internship to full-time development.
          </p>
        </div>

        {/* Layout */}

        <div className="grid gap-10 lg:grid-cols-[40%_60%]">
          {/* LEFT SIDE TIMELINE */}

          <div className="relative">
            {/* Vertical line */}

            <div className="absolute left-[15px] top-0 h-full w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-indigo-500" />

            <div className="space-y-10">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="relative pl-14"
                >
                  {/* Dot */}

                  <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.45)]">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>

                  {/* Card */}

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-[#111827]">
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-400">
                      {item.type}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                      {item.company}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                      <span className="rounded-lg bg-slate-200 px-3 py-1 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {item.period}
                      </span>

                      <span className="rounded-lg bg-slate-200 px-3 py-1 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {item.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE PLACEHOLDER */}

          {/* RIGHT SIDE DEVICE MOCKUP */}

<div className="flex justify-center">
  <DeviceMockup />
</div>
        </div>
      </div>
    </section>
  );
}