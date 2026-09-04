import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CodeIcon from "@mui/icons-material/Code";

const projects = [
  {
    id: "01",
    name: "ProParamedics CAD",
    description:
      "A complete event and resource management platform for managing event requests, medical staff, vehicles, scheduling, bookings and dispatch operations.",
    tech: ["React", "PHP", "MySQL", "REST API"],
    category: "Web Application",
    type: "Full Stack Development",
  },

  {
    id: "02",
    name: "EMS Analytics Dashboard",
    description:
      "Real-time emergency medical service analytics dashboard with interactive maps, KPIs, ambulance tracking and performance metrics.",
    tech: ["React", "MUI", "WebSocket", "Leaflet"],
    category: "Analytics Dashboard",
    type: "Frontend Development",
  },

  {
    id: "03",
    name: "Hospital Monitor",
    description:
      "A monitoring dashboard designed to visualize hospital and emergency service data with real-time updates and interactive analytics.",
    tech: ["React", "Charts", "WebSocket", "REST API"],
    category: "Monitoring System",
    type: "Frontend Development",
  },

  {
    id: "04",
    name: "DMS Admin Panel",
    description:
      "A responsive administration panel with REST APIs for managing application data, users and operational workflows.",
    tech: ["React", "Django", "REST API", "PostgreSQL"],
    category: "Admin Dashboard",
    type: "Full Stack Development",
  },
];

export default function MyWork() {
  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        px-6
        py-14
        md:px-10
        lg:px-20
        bg-white
        dark:bg-slate-950
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          h-64
          w-64
          rounded-full
          bg-fuchsia-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="uppercase tracking-[5px] text-sm text-fuchsia-400">
            My Work
          </p>

          <h2
            className="
              mt-2
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              md:text-6xl
              dark:text-white
            "
          >
            Things I've{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-600
                via-purple-600
                to-fuchsia-500
                bg-clip-text
                text-transparent
              "
            >
              built.
            </span>
          </h2>

          <p
            className="
              mt-2
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-gray-400
            "
          >
            A collection of projects I've worked on, focused on building
            responsive interfaces, dashboards and real-world web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-3
                shadow-sm
                transition-all
                duration-300
                hover:border-violet-400/40
                hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:hover:border-violet-500/40
                dark:hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600/20
                  to-fuchsia-500/20
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                "
              />

              {/* Top Section */}
              <div className="relative flex items-start justify-between">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    to-fuchsia-500
                    text-white
                    shadow-lg
                    shadow-violet-500/20
                  "
                >
                  <CodeIcon sx={{ fontSize: 21 }} />
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-violet-500/20
                    bg-violet-500/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-violet-600
                    dark:text-violet-300
                  "
                >
                  {project.id}
                </span>
              </div>

              {/* Category */}
              <p
                className="
                  relative
                  mt-3
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-fuchsia-500
                "
              >
                {project.category}
              </p>

              {/* Project Name */}
              <h3
                className="
                  relative
                  mt-2
                  text-2xl
                  font-bold
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-violet-600
                  dark:text-white
                  dark:group-hover:text-violet-400
                "
              >
                {project.name}
              </h3>

              {/* Description */}
              <p
                className="
                  relative
                  mt-2
                  min-h-[84px]
                  text-sm
                  leading-7
                  text-slate-600
                  dark:text-gray-400
                "
              >
                {project.description}
              </p>

              {/* Divider */}
              <div
                className="
                  relative
                  my-1
                  h-px
                  w-full
                  bg-slate-200
                  dark:bg-white/10
                "
              />

              {/* Tech Stack */}
              <div className="relative">
                <p
                  className="
                    mb-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-slate-500
                    dark:text-gray-500
                  "
                >
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-violet-500/20
                        bg-violet-500/5
                        px-2
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-700
                        transition-all
                        duration-300
                        group-hover:border-violet-500/30
                        group-hover:bg-violet-500/10
                        dark:text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="relative mt-7 flex items-center justify-between">
              <span
  className="
    text-sm
    font-medium
    text-slate-500
    dark:text-gray-500
  "
>
  {project.type}
</span>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-sm
                    font-semibold
                    text-violet-600
                    transition-all
                    duration-300
                    group-hover:gap-3
                    dark:text-violet-400
                  "
                >
                  View Details
                  <ArrowOutwardIcon
                    sx={{
                      fontSize: 17,
                    }}
                  />
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}