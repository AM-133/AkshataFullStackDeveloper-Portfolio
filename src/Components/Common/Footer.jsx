import CodeOffIcon from "@mui/icons-material/CodeOff";
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Certificates", href: "#certificates" },
];

const socialLinks = [
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/akshata-more-69b9a2219/",
        label: "LinkedIn",
    },
    {
        icon: FaGithub,
        href: "https://github.com/Akshata133",
        label: "GitHub",
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/_am__133?igsi=MTVmbWoyODhjbzRvNw==",
        label: "Instagram",
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white px-3 py-3 transition-colors duration-300 dark:border-zinc-800 dark:bg-black">
            <div className="mx-auto flex max-w-6xl flex-col items-center">

                {/* Logo */}

                <a
                    href="#home"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-slate-100 dark:bg-zinc-900">
                        <svg width="0" height="0">
                            <linearGradient
                                id="footerIconGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#6366f1" />
                            </linearGradient>
                        </svg>

                        <CodeOffIcon
                            sx={{
                                fontSize: 30,
                                fill: "url(#footerIconGradient)",
                            }}
                        />
                    </div>

                    <span className="text-3xl font-semibold text-slate-900 dark:text-white">
                        Akshata.dev
                    </span>
                </a>

                {/* Nav Links */}

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="
                text-lg
                text-slate-600
                transition-colors duration-300

                hover:text-violet-600
                dark:text-slate-300
                dark:hover:text-violet-300
              "
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Divider */}

                <div className="mt-10 w-full border-t border-dashed border-slate-300 dark:border-zinc-800" />

                {/* Bottom */}

                <div className="mt-8 flex w-full flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="text-base text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} Akshata.dev
                    </p>

                    <div className="flex items-center gap-6">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="
                  text-2xl
                  text-slate-500
                  transition-colors duration-300

                  hover:text-violet-600
                  dark:text-slate-400
                  dark:hover:text-violet-300
                "
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}