import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "./lib/utils";

const videoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4";

type Logo = {
  label: string;
  gradient: {
    from: string;
    to: string;
  };
};

const logos: Logo[] = [
  {
    label: "Stop freezing",
    gradient: { from: "#60a5fa", to: "#1d4ed8" }
  },
  {
    label: "Answer cleaner",
    gradient: { from: "#fde047", to: "#f59e0b" }
  },
  {
    label: "Speak calmer",
    gradient: { from: "#7dd3fc", to: "#2563eb" }
  },
  {
    label: "Live HR mocks",
    gradient: { from: "#c084fc", to: "#7c3aed" }
  },
  {
    label: "AI pressure reps",
    gradient: { from: "#fb7185", to: "#e11d48" }
  },
  {
    label: "Direct feedback",
    gradient: { from: "#facc15", to: "#22c55e" }
  },
  {
    label: "Less rambling",
    gradient: { from: "#bae6fd", to: "#38bdf8" }
  },
  {
    label: "Ready for follow-ups",
    gradient: { from: "#67e8f9", to: "#14b8a6" }
  }
];

const marqueeLogos = [...logos, ...logos];
const logoCardClass =
  "group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden";

function MarqueeScroller() {
  return (
    <section
      className="mt-10 w-full max-w-[1400px] mx-auto overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)"
      }}
      aria-label="Hireable outcome marquee"
    >
      <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
        {marqueeLogos.map((logo, index) => (
          <div
            className={cn(logoCardClass)}
            key={`${logo.label}-${index}`}
            aria-label={logo.label}
          >
            <span
              className="absolute inset-0 z-0 scale-150 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${logo.gradient.from}, ${logo.gradient.to})`
              }}
              aria-hidden="true"
            />
            <span className="relative z-10 px-5 text-center text-[13px] font-semibold leading-tight text-[#0a1b33] transition-colors duration-300 group-hover:text-white">
              {logo.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f9fafb] py-6 md:py-10">
      <div className="mx-auto w-[calc(100vw-32px)] max-w-[1400px] md:w-[calc(100vw-64px)]">
        <section className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            />
          </div>

          <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[560px] min-w-0"
            >
              <h1 className="font-display text-[42px] md:text-[56px] font-medium tracking-tight text-[#0a1b33] leading-[0.96]">
                Your skills are ready.
                <br />
                Your delivery isn't.
              </h1>
              <p className="mt-6 w-full max-w-[300px] sm:max-w-[420px] md:max-w-[500px] font-sans text-[14px] md:text-[15px] text-[#64748b] leading-6 md:leading-7">
                Hireable fixes the interview gap with live mocks, AI pressure,
                and direct feedback that makes you clear, calm, and hard to
                ignore.
              </p>
              <motion.button
                className="mt-8 rounded-full bg-[#0a152d] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_14px_30px_rgba(10,21,45,0.2)] outline-none transition-shadow hover:shadow-[0_18px_40px_rgba(10,21,45,0.28)] focus-visible:ring-2 focus-visible:ring-[#0a152d] focus-visible:ring-offset-4"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                type="button"
              >
                Talk To An Expert
              </motion.button>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
            <motion.nav
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
              aria-label="Primary navigation"
            >
              <a
                className="grid w-9 h-9 place-items-center rounded-full bg-white border border-slate-100 shadow-sm text-[15px] text-[#0a1b33]"
                href="/hireable2"
                aria-label="Hireable2 home"
              >
                {"\u2726"}
              </a>
              <button
                className="px-3 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors whitespace-nowrap sm:px-4"
                type="button"
              >
                Method
              </button>
              <button
                className="px-3 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors whitespace-nowrap sm:px-4"
                type="button"
              >
                Mocks
              </button>
              <button
                className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all whitespace-nowrap sm:px-5"
                type="button"
              >
                Talk To An Expert
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.4} />
              </button>
            </motion.nav>
          </div>
        </section>
      </div>

      <div className="mx-auto w-[calc(100vw-32px)] max-w-[1400px] md:w-[calc(100vw-64px)]">
        <MarqueeScroller />
      </div>
    </main>
  );
}

export default App;
