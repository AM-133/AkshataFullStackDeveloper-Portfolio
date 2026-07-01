import CodeOffIcon from "@mui/icons-material/CodeOff";
import { OrbitingCircles } from "../ui/orbiting-circles";
import { techStack } from "./data";
import Tooltip from "@mui/material/Tooltip";

export default function HeroRight() {
  return (
    <div className="relative mt-8 flex h-[340px] w-[340px] items-center justify-center overflow-hidden md:h-[440px] md:w-[440px]">

      {/* Purple Glow */}
      <div className="absolute h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Center Icon */}
      <div className="absolute z-20 flex items-center justify-center">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full border border-violet-500/20 bg-white shadow-[0_0_40px_rgba(168,85,247,0.25)] dark:bg-[#121212]"
        >
          <CodeOffIcon
            sx={{
              fontSize: 44,
              color: "#a855f7",
            }}
          />
        </div>
      </div>

      {/* Outer Orbit */}
      <OrbitingCircles iconSize={55} radius={170}>
        {techStack.slice(0, 6).map(({ icon: Icon, color, name }) => (
          <div key={name} className="group relative z-50">
            {/* Tooltip */}
            <div
              className="
      pointer-events-none
      absolute -top-10 left-1/2
      -translate-x-1/2
      opacity-0 scale-95
      transition-all duration-300
      group-hover:opacity-100
      group-hover:scale-100
      z-[9999]
    "
            >
              <div
                className="
        whitespace-nowrap
        rounded-md
        bg-gradient-to-r
        from-violet-500
        via-purple-500
        to-indigo-500
        px-3 py-1.5
        text-xs font-medium text-white
        shadow-lg
      "
              >
                {name}
              </div>

              <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-violet-500" />
            </div>

            {/* Icon */}
            <div
              className="
      flex h-14 w-14 cursor-pointer items-center justify-center
      rounded-full border border-violet-500/20
      bg-gray-100
      shadow-[0_0_20px_rgba(168,85,247,0.15)]
      transition-all duration-300
      hover:scale-110
      hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
      dark:bg-[#18181B]
    "
            >
              <Icon size={28} style={{ color }} />
            </div>
          </div>
        ))}
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles
        iconSize={50}
        radius={110}
        reverse
        speed={2}
      >
        {techStack.slice(6).map(({ icon: Icon, color, name }) => (
          <div key={name} className="group relative z-50 hover:z-[9999]">

            {/* Tooltip */}
            <div
              className="
        pointer-events-none
        absolute -top-10 left-1/2
        -translate-x-1/2
        opacity-0 scale-95
        transition-all duration-300
        group-hover:opacity-100
        group-hover:scale-100
        z-[9999]
      "
            >
              <div
                className="
          whitespace-nowrap
          rounded-md
          bg-gradient-to-r
          from-violet-500
          via-purple-500
          to-indigo-500
          px-3 py-1.5
          text-xs font-medium text-white
          shadow-lg
        "
              >
                {name}
              </div>

              <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-violet-500" />
            </div>

            {/* Icon */}
            <div
              className="
        flex h-12 w-12 cursor-pointer items-center justify-center
        rounded-full border border-violet-500/20
        bg-gray-100
        shadow-[0_0_20px_rgba(168,85,247,0.15)]
        transition-all duration-300
        hover:scale-110
        hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
        dark:bg-[#18181B]
      "
            >
              <Icon size={24} style={{ color }} />
            </div>

          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}