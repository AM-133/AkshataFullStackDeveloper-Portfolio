import { motion } from "framer-motion";

import CodeEditor from "./CodeEditor";

import monitorFrame from "../../assets/Desktop.png";
import phoneFrame from "../../assets/phone.png";


export default function DeviceMockup() {
  return (
    <div className="relative flex items-center justify-center py-10 overflow-hidden">
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[140px]" />

      {/* Desktop */}

      <motion.div
  initial={{ x: 300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
   viewport={{
    once: false, // har baar trigger hoga
    amount: 0.4,
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="relative w-full max-w-[520px]"
>
        {/* Code Screen */}

       <div
  className="
    absolute
    left-[4.8%]
    top-[5.2%]
    h-[57.5%]
    w-[90.5%]
    overflow-hidden
    rounded-sm
    bg-[#0D1117]
    z-10
  "
>
  <CodeEditor />
</div>

        {/* Monitor Frame */}

        <img
          src={monitorFrame}
          alt="Desktop Monitor"
          className="relative z-20 w-full select-none pointer-events-none"
          draggable="false"
        />
     </motion.div>


  {/* Mobile */}
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-[-23%] bottom-[1%] z-30 
    w-[180px] sm:w-[260px] md:w-[320px] lg:w-[420px]
    overflow-hidden rounded-[40px]"
>

    <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
  <img
    src={phoneFrame}
    alt="Phone Frame"
    className="relative z-20 w-full select-none pointer-events-none"
    draggable="false"
  />

  <div
    className="
      absolute
      left-[29%]
      top-[5%]
      h-[89%]
      w-[42%]
      overflow-hidden
      rounded-[28px]
      z-10
    "
  >
    <img
      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=390&h=844&fit=crop"
      alt="Mobile Preview"
      className="h-full w-full object-cover"
    />
  </div>
  </motion.div>
</motion.div>
    </div>
  );
}