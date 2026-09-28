import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
    { name: "HTML", x: -0.72, y: -0.55, depth: 0.4 },
    { name: "CSS", x: -0.38, y: -0.78, depth: 0.6 },
    { name: "PHP", x: 0.0, y: -0.92, depth: 0.8 },
    { name: "PYTHON", x: 0.38, y: -0.78, depth: 1.0 },

    { name: "MYSQL", x: -0.82, y: -0.20, depth: 1.4 },
    { name: "DJANGO", x: 0.72, y: -0.55, depth: 1.2 },

    { name: "REACTJS", x: -0.92, y: 0.18, depth: 1.6 },
    { name: "POSTGRESS", x: 0.92, y: 0.18, depth: 1.3 },

    { name: "NEXTJS", x: -0.72, y: 0.55, depth: 0.9 },
    { name: "MATERIAL UI", x: 0.72, y: 0.55, depth: 1.1 },

    { name: "TAILWIND", x: -0.38, y: 0.78, depth: 0.7 },
    { name: "CANVAS", x: 0.38, y: 0.78, depth: 1.5 },

    { name: "JAVASCRIPT", x: -0.55, y: -0.02, depth: 1.8 },
    { name: "GIT", x: 0.0, y: 0.92, depth: 0.5 },
    { name: "TYPESCRIPT", x: 0.82, y: -0.20, depth: 1.7 },
    { name: "BOOTSTRAP", x: -0.82, y: -0.20, depth: 1.0 },
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
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    useEffect(() => {
        const handleMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

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
            diamondWidth: 145,
            diamondHeight: 180,
            centerPadding: "px-8 py-3",
            headingSize: "text-2xl",
            sectionHeight: "h-[430px]",
        },
        tablet: {
            bubbleSize: "w-20 h-20",
            textSize: "text-[10px]",
            diamondWidth: 250,
            diamondHeight: 260,
            centerPadding: "px-14 py-5",
            headingSize: "text-4xl",
            sectionHeight: "h-[560px]",
        },
        desktop: {
            bubbleSize: "w-28 h-28",
            textSize: "text-sm",
            diamondWidth: 310,
            diamondHeight: 290,
            centerPadding: "px-20 py-6",
            headingSize: "text-6xl",
            sectionHeight: "h-[650px]",
        },
    };

    const settings = responsiveSettings[screenSize];

    return (
        <section
            id="skills"
            className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white dark:bg-[#080112] py-16 sm:py-20"
        >
            {/* Background Glow */}
            <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-fuchsia-300/40 dark:bg-violet-600/20 blur-[100px] sm:blur-[140px]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading Section */}
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

                {/* Skills Orbit Container */}
                <motion.div
                    className={`relative w-full ${settings.sectionHeight} flex items-center justify-center mt-8 sm:mt-0`}
                    style={{ x: sectionX, y: sectionY }}
                >
                    {/* Arrow / Code Tag Styled Center Container */}
                    <div className="relative z-20 flex items-center justify-center">
                        
                        {/* Top Accent Line */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />

                        {/* Bottom Accent Line */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

                        {/* Main Center Box */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(168,85,247,0.3)",
                                    "0 0 40px rgba(217,70,239,0.5)",
                                    "0 0 20px rgba(168,85,247,0.3)",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className={`relative flex items-center justify-center ${settings.centerPadding} bg-white/80 dark:bg-black/40 backdrop-blur-md border-y-2 border-violet-500/50 dark:border-fuchsia-500/50`}
                        >
                            {/* Left Arrow Notch `<` */}
                            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent border-r-[20px] border-r-violet-500/50 dark:border-r-fuchsia-500/50" />
                            <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[18px] border-y-transparent border-r-[18px] border-r-white dark:border-r-[#080112]" />

                            {/* Heading Text */}
                            <h1 className={`${settings.headingSize} font-extrabold text-slate-900 dark:text-white tracking-wider`}>
                                SKILLS
                            </h1>

                            {/* Right Arrow Notch `>` */}
                            <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent border-l-[20px] border-l-violet-500/50 dark:border-l-fuchsia-500/50" />
                            <div className="absolute -right-[18px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[18px] border-y-transparent border-l-[18px] border-l-white dark:border-l-[#080112]" />

                            {/* Floating Skill Bubbles */}
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SkillBubble({ skill, mouseX, mouseY, index, settings }) {
    const bubbleX = useTransform(
        mouseX,
        [0, typeof window !== "undefined" ? window.innerWidth : 1200],
        [
            skill.x * settings.diamondWidth - 10 * skill.depth,
            skill.x * settings.diamondWidth + 10 * skill.depth,
        ]
    );

    const bubbleY = useTransform(
        mouseY,
        [0, typeof window !== "undefined" ? window.innerHeight : 800],
        [
            skill.y * settings.diamondHeight - 10 * skill.depth,
            skill.y * settings.diamondHeight + 10 * skill.depth,
        ]
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
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
                    relative overflow-hidden ${settings.bubbleSize} rounded-full 
                    flex items-center justify-center text-center ${settings.textSize} 
                    text-white font-semibold border border-white/10 
                    bg-[radial-gradient(circle_at_30%_30%,#c084fc_0%,#a855f7_30%,#7e22ce_65%,#4c1d95_100%)] 
                    shadow-[inset_-10px_-10px_18px_rgba(0,0,0,0.18),0_8px_24px_rgba(139,92,246,0.20)] 
                    dark:shadow-[0_10px_30px_rgba(217,70,239,0.20)] backdrop-blur-md px-1 sm:px-2
                `}
            >
                <div className="absolute top-[22%] left-[20%] w-[18%] h-[18%] rounded-full bg-white/15 blur-[3px]" />
                <span className="relative z-10 break-words leading-tight">
                    {skill.name}
                </span>
            </div>
        </motion.div>
    );
}