import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
    { name: "HTML", x: -290, y: -190, depth: 0.4 },
    { name: "CSS", x: -160, y: -240, depth: 0.6 },
    { name: "PHP", x: 0, y: -220, depth: 0.8 },
    { name: "PYTHON", x: 180, y: -240, depth: 1.0 },

    { name: "MYSQL", x: -380, y: -120, depth: 1.4 },
    { name: "DJANGO", x: 260, y: -140, depth: 1.2 },

    { name: "REACTJS", x: -360, y: 0, depth: 1.6 },
    { name: "POSTGRESS", x: 220, y: -20, depth: 1.3 },

    { name: "NEXTJS", x: -270, y: 100, depth: 0.9 },
    { name: "MATERIAL UI", x: 200, y: 100, depth: 1.1 },

    { name: "TAILWIND", x: -140, y: 80, depth: 0.7 },
    { name: "CANVAS", x: -40, y: 220, depth: 1.5 },

    { name: "JAVASCRIPT", x: -120, y: 320, depth: 1.8 },
    { name: "GIT", x: 40, y: 110, depth: 0.5 },

    { name: "TYPESCRIPT", x: 180, y: 320, depth: 1.7 },
    { name: "BOOTSTRAP", x: -190, y: 200, depth: 1.0 },
];
const isMobile = window.innerWidth < 768;

const scale = isMobile ? 0.45 : 1;

export default function SkillsSection() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);
    const smoothX = useSpring(mouseX, {
        stiffness: 50,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 50,
        damping: 20,
    });

    const sectionX = useTransform(
        smoothX,
        [0, window.innerWidth],
        [-40, 40]
    );

    const sectionY = useTransform(
        smoothY,
        [0, window.innerHeight],
        [-25, 25]
    );

    return (
        <section className="relative overflow-hidden  min-h-screen flex items-center justify-center  bg-white
    dark:bg-[#080112]"
     id="skills">

            {/* Background Glow */}

            <div
                className="
    absolute
    w-[500px]
    h-[500px]
    rounded-full
    bg-fuchsia-300/40
    dark:bg-violet-600/20
    blur-[140px]
  "
            />

            <div className="relative z-10 max-w-7xl mx-auto px-1">

                <div className="text-center ">
                    <p className="uppercase tracking-[5px] text-violet-600 dark:text-fuchsia-400 text-sm">
                        My Expertise
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mt-3">
                        Skills I{" "}
                        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                            Work With
                        </span>
                    </h2>

                    <p className="text-slate-600 dark:text-gray-400 mt-5 max-w-xl mx-auto">
                        Technologies and tools I use to build modern web applications.
                    </p>
                </div>

                <motion.div
                     className="relative h-[500px] md:h-[700px] flex items-center justify-center -mt-24"
                    style={{
                        x: sectionX,
                        y: sectionY,
                    }}
                >

                    {/* Center Box */}
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 20px #a855f7",
                                "0 0 50px #d946ef",
                                "0 0 20px #a855f7",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                        className="
  z-20
  px-4
  md:px-16
  py-3
  md:py-8
  rounded-xl

  border
  border-violet-300
  dark:border-fuchsia-500/40

  bg-white
  dark:bg-white/5

  backdrop-blur-md
"
                    >
                        <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-slate-900 dark:text-white">
                            SKILLS
                        </h1>


                        {/* Skill Bubbles */}
                        <div
                            className="absolute left-1/2"

                        >
                            {skills.map((skill, index) => {
                                const angle = (index / skills.length) * Math.PI * 2;
                                const radius =
                                    window.innerWidth < 640
                                        ? 140
                                        : window.innerWidth < 1024
                                            ? 240
                                            : 360;

                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;

                                return (
                                    <SkillBubble
                                        key={skill.name}
                                        skill={{
                                            ...skill,
                                            x: skill.x * scale,
                                            y: skill.y * scale,
                                        }}
                                        mouseX={mouseX}
                                        mouseY={mouseY}
                                        index={index}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function SkillBubble({ skill, mouseX, mouseY, index }) {
    const bubbleX = useTransform(
        mouseX,
        [0, window.innerWidth],
        [
            skill.x - 20 * skill.depth,
            skill.x + 20 * skill.depth,
        ]
    );

    const bubbleY = useTransform(
        mouseY,
        [0, window.innerHeight],
        [
            skill.y - 20 * skill.depth,
            skill.y + 20 * skill.depth,
        ]
    );
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
            }}
            className="absolute left-1/2"
            style={{
                x: bubbleX,
                y: bubbleY,
            }}
        >
           <div
  className="
    relative
    overflow-hidden

    w-12 h-12
    sm:w-16 sm:h-16
    md:w-28 md:h-28

    rounded-full

    flex
    items-center
    justify-center
    text-center

    text-[7px]
    sm:text-[10px]
    md:text-sm

    text-white
    font-semibold

    border
    border-white/10

    bg-[radial-gradient(circle_at_30%_30%,#c084fc_0%,#a855f7_30%,#7e22ce_65%,#4c1d95_100%)]

    shadow-[inset_-10px_-10px_18px_rgba(0,0,0,0.18),0_8px_24px_rgba(139,92,246,0.20)]

    dark:shadow-[0_10px_30px_rgba(217,70,239,0.20)]

    backdrop-blur-md
    px-2
  "
>
  {/* Small glossy reflection */}
  <div
    className="
      absolute
      top-[22%]
      left-[28%]
      w-[18%]
      h-[18%]
      rounded-full
      bg-white/15
      blur-[3px]
    "
  />

  <span className="relative z-10">
    {skill.name}
  </span>
</div>
        </motion.div>
    );
}