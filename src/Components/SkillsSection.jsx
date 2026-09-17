import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
    { name: "HTML", x: -290, y: -220, depth: 0.4 },
    { name: "CSS", x: -160, y: -240, depth: 0.6 },
    { name: "PHP", x: -40, y: -240, depth: 0.8 },
    { name: "PYTHON", x: 80, y: -240, depth: 1.0 },
    { name: "MYSQL", x: -400, y: -150, depth: 1.4 },
    { name: "DJANGO", x: 190, y: -200, depth: 1.2 },
    { name: "REACTJS", x: -310, y: 65, depth: 1.6 },
    { name: "POSTGRESS", x: 250, y: 10, depth: 1.3 },
    { name: "NEXTJS", x: -200, y: 100, depth: 0.9 },
    { name: "MATERIAL UI", x: 160, y: 80, depth: 1.1 },
    { name: "TAILWIND", x: -80, y: 110, depth: 0.7 },
    { name: "CANVAS", x: 270, y: -110, depth: 1.5 },
    { name: "JAVASCRIPT", x: -500, y: -70, depth: 1.8 },
    { name: "GIT", x: 40, y: 110, depth: 0.5 },
    { name: "TYPESCRIPT", x: 370, y: -40, depth: 1.7 },
    { name: "BOOTSTRAP", x: -415, y: 10, depth: 1.0 },
];

export default function SkillsSection() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [screenSize, setScreenSize] = useState("desktop");

    useEffect(() => {
        const updateScreenSize = () => {
            if (window.innerWidth < 640) {
                setScreenSize("mobile");
            } else if (window.innerWidth < 1024) {
                setScreenSize("tablet");
            } else {
                setScreenSize("desktop");
            }
        };

        updateScreenSize();

        window.addEventListener("resize", updateScreenSize);

        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, []);

    useEffect(() => {
        const handleMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, [mouseX, mouseY]);

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
        [0, typeof window !== "undefined" ? window.innerWidth : 1200],
        [-20, 20]
    );

    const sectionY = useTransform(
        smoothY,
        [0, typeof window !== "undefined" ? window.innerHeight : 800],
        [-15, 15]
    );

    const responsiveSettings = {
        mobile: {
            bubbleSize: "w-14 h-14",
            textSize: "text-[8px]",
            radiusX: 135,
            radiusY: 180,
            centerWidth: "px-5 py-4",
            headingSize: "text-3xl",
            sectionHeight: "h-[440px]",
        },
        tablet: {
            bubbleSize: "w-20 h-20",
            textSize: "text-[10px]",
            radiusX: 250,
            radiusY: 270,
            centerWidth: "px-10 py-6",
            headingSize: "text-5xl",
            sectionHeight: "h-[580px]",
        },
        desktop: {
            bubbleSize: "w-28 h-28",
            textSize: "text-sm",
            radiusX: 280,
            radiusY: 270,
            centerWidth: "px-16 py-8",
            headingSize: "text-7xl",
            sectionHeight: "h-[700px]",
        },
    };

    const settings = responsiveSettings[screenSize];

    return (
        <section
            id="skills"
            className="
                relative
                overflow-hidden
                min-h-screen
                flex
                items-center
                justify-center
                bg-white
                dark:bg-[#080112]
                py-16
                sm:py-20
            "
        >
            {/* Background Glow */}
            <div
                className="
                    absolute
                    w-[300px]
                    h-[300px]
                    sm:w-[500px]
                    sm:h-[500px]
                    rounded-full
                    bg-fuchsia-300/40
                    dark:bg-violet-600/20
                    blur-[100px]
                    sm:blur-[140px]
                "
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center">
                    <p className="uppercase tracking-[3px] sm:tracking-[5px] text-violet-600 dark:text-fuchsia-400 text-xs sm:text-sm">
                        My Expertise
                    </p>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mt-3">
                        Skills I{" "}
                        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                            Work With
                        </span>
                    </h2>

                    <p className="text-slate-600 dark:text-gray-400 mt-4 sm:mt-5 max-w-xl mx-auto text-sm sm:text-base">
                        Technologies and tools I use to build modern web applications.
                    </p>
                </div>

                {/* Skills Orbit */}
                <motion.div
                    className={`relative w-full ${settings.sectionHeight} flex items-center justify-center mt-8 sm:mt-0`}
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
                        className={`
                            relative
                            z-20
                            ${settings.centerWidth}
                            rounded-xl
                            border
                            border-violet-300
                            dark:border-fuchsia-500/40
                            bg-white
                            dark:bg-white/5
                            backdrop-blur-md
                        `}
                    >
                        <h1
                            className={`${settings.headingSize} font-bold text-slate-900 dark:text-white`}
                        >
                            SKILLS
                        </h1>

                        {/* Skill Bubbles */}
                        <div className="absolute inset-0 pointer-events-none">
                            {skills.map((skill, index) => (
                                <SkillBubble
                                    key={skill.name}
                                    skill={skill}
                                    mouseX={mouseX}
                                    mouseY={mouseY}
                                    index={index}
                                    screenSize={screenSize}
                                    settings={settings}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function SkillBubble({
    skill,
    mouseX,
    mouseY,
    index,
    screenSize,
    settings,
}) {
    const isMobile = screenSize === "mobile";

    const angle = (index / skills.length) * Math.PI * 2;

    // Responsive elliptical orbit
    const x = Math.cos(angle) * settings.radiusX;
    const y = Math.sin(angle) * settings.radiusY;

    const bubbleX = useTransform(
        mouseX,
        [0, typeof window !== "undefined" ? window.innerWidth : 1200],
        [x - 12 * skill.depth, x + 12 * skill.depth]
    );

    const bubbleY = useTransform(
        mouseY,
        [0, typeof window !== "undefined" ? window.innerHeight : 800],
        [y - 12 * skill.depth, y + 12 * skill.depth]
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
            className="absolute left-1/2 top-1/2 pointer-events-auto"
            style={{
                x: bubbleX,
                y: bubbleY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            <div
                className={`
                    relative
                    overflow-hidden
                    ${settings.bubbleSize}
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-center
                    ${settings.textSize}
                    text-white
                    font-semibold
                    border
                    border-white/10
                    bg-[radial-gradient(circle_at_30%_30%,#c084fc_0%,#a855f7_30%,#7e22ce_65%,#4c1d95_100%)]
                    shadow-[inset_-10px_-10px_18px_rgba(0,0,0,0.18),0_8px_24px_rgba(139,92,246,0.20)]
                    dark:shadow-[0_10px_30px_rgba(217,70,239,0.20)]
                    backdrop-blur-md
                    px-1
                    sm:px-2
                `}
            >
                {/* Glossy Reflection */}
                <div
                    className="
                        absolute
                        top-[22%]
                        left-[20%]
                        w-[18%]
                        h-[18%]
                        rounded-full
                        bg-white/15
                        blur-[3px]
                    "
                />

                <span className="relative z-10 break-words leading-tight">
                    {skill.name}
                </span>
            </div>
        </motion.div>
    );
}