// import { motion } from "framer-motion";
// import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import CallIcon from "@mui/icons-material/Call";
// import SettingsIcon from "@mui/icons-material/Settings";

// export default function ContactIllustration() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 60 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7 }}
//       className="
//         relative
//         h-[420px]
//         flex
//         items-center
//         justify-center
//       "
//     >
//       <div
//         className="
// absolute
// h-[360px]
// w-[360px]
// rounded-full
// bg-gradient-to-br
// from-violet-600/20
// via-indigo-600/10
// to-transparent
// blur-2xl
// "
//       />

//       {/* Envelope */}

//       <div
//         className="
//           relative
//           w-[280px]
//           h-[220px]
//           rounded-[30px]
//           bg-gradient-to-br
//           from-gray-200
//           to-gray-500
//           shadow-2xl
//         "
//       >
//        <motion.div
//   animate={{ y: [-8, 8, -8] }}
//   transition={{
//     duration: 4,
//     repeat: Infinity,
//   }}
//   className="absolute left-12 top-4"
// >
//   <DraftsOutlinedIcon
//     sx={{
//       fontSize: 42,
//       color: "#64748b",
//       opacity: 0.8,
//     }}
//   />
// </motion.div>
//       </div>

//       {/* Chat Bubble */}

//     <motion.div
//   animate={{ y: [-10, 10, -10] }}
//   transition={{
//     duration: 4,
//     repeat: Infinity,
//   }}
//   className="
//     absolute
//     top-8
//     right-10
//     flex
//     h-20
//     w-32
//     items-center
//     justify-center
//     rounded-full
//     bg-blue-600
//   "
// >
//   <MoreHorizIcon
//     sx={{
//       color: "white",
//       fontSize: 42,
//     }}
//   />
// </motion.div>
//       {/* Call */}

//       <motion.div
//         animate={{ y: [-8, 8, -8] }}
//         transition={{
//           duration: 3,
//           repeat: Infinity
//         }}
//         className="
//           absolute
//           bottom-8
//           left-1/2
//           -translate-x-1/2

//           w-28
//           h-28
//           rounded-full
//           bg-green-500

//           flex
//           items-center
//           justify-center
//         "
//       >
//         <CallIcon sx={{ color: "white", fontSize: 50 }} />
//       </motion.div>

//       {/* Gear */}

//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//         className="
//           absolute
//           bottom-10
//           right-10
//         "
//       >
//         <SettingsIcon
//           sx={{
//             fontSize: 100,
//             color: "#64748b"
//           }}
//         />
//       </motion.div>
//       <motion.div
//   animate={{ y: [0, -5, 0] }}
//   transition={{
//     duration: 3,
//     repeat: Infinity,
//   }}
//   className="
//     absolute
//     left-16
//     top-40
//     rounded-xl
//     bg-slate-700/70
//     px-3
//     py-2
//     text-lg
//     font-semibold
//     text-white
//     backdrop-blur-md
//   "
// >
//   24/7
// </motion.div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function ContactIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex h-[560px] items-center justify-center overflow-visible"
    >
      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[90px]" />

      <div className="absolute h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[80px]" />

      {/* ========================= */}
      {/* Main Envelope */}
      {/* ========================= */}

      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20"
      >
        {/* Shadow */}

        <div className="absolute left-1/2 top-[220px] h-10 w-64 -translate-x-1/2 rounded-full bg-black/20 blur-2xl dark:bg-black/60" />

        {/* Envelope */}

        <div className="relative h-[220px] w-[310px] rounded-[34px] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 shadow-[0_30px_60px_rgba(0,0,0,.35)] overflow-hidden">

          {/* Paper */}

        <div className="absolute left-1/2 top-2 z-20 h-[145px] w-[215px] -translate-x-1/2 rounded-2xl bg-white shadow-xl">

            {/* Avatar */}

            <div className="absolute left-6 top-6 h-9 w-9 rounded-full bg-violet-300" />

            {/* Lines */}

            <div className="absolute left-20 top-8 h-2 w-24 rounded bg-slate-300" />

            <div className="absolute left-20 top-14 h-2 w-20 rounded bg-slate-200" />

            <div className="absolute left-6 top-24 h-2 w-40 rounded bg-slate-200" />

            <div className="absolute left-6 top-30 h-2 w-32 rounded bg-slate-200" />
          </div>

          {/* Left flap */}

          <div
            className="
            absolute
            bottom-0
            left-0
            h-[150px]
            w-[170px]
            origin-bottom-left
            bg-gradient-to-br
            from-slate-300
            to-slate-500
            [clip-path:polygon(0_100%,100%_0,100%_100%)]
          "
          />

          {/* Right flap */}

          <div
            className="
            absolute
            bottom-0
            right-0
            h-[150px]
            w-[170px]
            origin-bottom-right
            bg-gradient-to-bl
            from-slate-300
            to-slate-500
            [clip-path:polygon(0_0,100%_100%,0_100%)]
          "
          />

          {/* Top flap */}

          <div
            className="
            absolute
            top-0
            left-0
            h-[130px]
            w-full
            bg-gradient-to-b
            from-slate-200
            to-slate-400
            [clip-path:polygon(0_0,50%_100%,100%_0)]
          "
          />
        </div>
      </motion.div>

      {/* ========================= */}
      {/* Floating Mail */}
      {/* ========================= */}

      <motion.div
        animate={{
          y: [-10, 8, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          left-10
          top-12
          z-30
        "
      >
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-xl shadow-xl">
          <MailOutlineRoundedIcon
            sx={{
              fontSize: 40,
              color: "#94a3b8",
            }}
          />
        </div>
      </motion.div>
            {/* ================= CHAT BUBBLE ================= */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-8 top-10 z-50"
      >
        <div className="relative flex h-20 w-32 items-center justify-center rounded-[30px] bg-[#2962FF] shadow-[0_0_40px_rgba(41,98,255,.35)]">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-white"></span>
            <span className="h-3 w-3 rounded-full bg-white"></span>
            <span className="h-3 w-3 rounded-full bg-white"></span>
          </div>

          {/* Bubble Tail */}
          <div
            className="absolute bottom-2 left-5 h-5 w-5 rotate-45 bg-[#2962FF]"
          />
        </div>
      </motion.div>

      {/* ================= PHONE ================= */}

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-1/2 z-50 -translate-x-1/2"
      >
        <div
          className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-[#00C853]
          shadow-[0_0_45px_rgba(0,200,83,.45)]
        "
        >
          <CallIcon
            sx={{
              color: "#fff",
              fontSize: 46,
            }}
          />
        </div>
      </motion.div>

      {/* ================= SMALL GEAR ================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-5 top-[215px] z-40"
      >
        <SettingsIcon
          sx={{
            fontSize: 46,
            color: "#6B7280",
          }}
        />
      </motion.div>

      {/* ================= BIG GEAR ================= */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-12 right-8 z-40"
      >
        <SettingsIcon
          sx={{
            fontSize: 110,
            color: "#64748B",
          }}
        />
      </motion.div>

      {/* ================= 24/7 ================= */}

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-6 top-[205px] z-50"
      >
        <div
          className="
          rounded-2xl
          bg-slate-700/80
          px-5
          py-3
          text-3xl
          font-bold
          text-white
          backdrop-blur-xl
        "
        >
          24/7
        </div>
      </motion.div>
    </motion.div>
  );
}