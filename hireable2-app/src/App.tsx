import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Menu,
  MessageCircle,
  PlayCircle,
  Search,
  Sparkles,
  Target,
  Users,
  X
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "./lib/utils";

const contactHref =
  "mailto:info@theclosinggap.net?subject=Talk%20To%20An%20Expert%20-%20HIREABLE";
const heroImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=980&q=82";
const practiceImage =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=82";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Hireable", href: "/hirable2" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" }
];

const fixes = [
  "Freezing on follow-ups",
  "Rambling answers",
  "Weak self introduction",
  "Shaky delivery"
];

const modules = [
  {
    title: "Live Mock Interviews",
    meta: "Real HR pressure",
    text: "Get interrupted, pushed, corrected, and sharper before the real interview."
  },
  {
    title: "AI Interview Simulator",
    meta: "Practice anytime",
    text: "Answer live prompts and get instant feedback on clarity, structure, and confidence."
  },
  {
    title: "Self Introduction Mastery",
    meta: "First question fixed",
    text: "Turn the one answer every interviewer asks into a calm, high-impact opening."
  }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe7ff]/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[86px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="/" aria-label="YAA home">
          <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-[#0b57e3] text-lg font-black text-white shadow-[0_14px_30px_rgba(11,87,227,0.22)]">
            Y
          </span>
          <span className="leading-none">
            <span className="block font-display text-[26px] font-extrabold tracking-tight text-[#08265c]">
              YAA
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#6580aa]">
              Hireable
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              className="text-[15px] font-semibold text-[#08265c] transition-colors hover:text-[#0b57e3]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="flex h-12 items-center overflow-hidden rounded-[8px] border border-[#cfe0fb] bg-white shadow-sm">
            <div className="flex h-full items-center gap-2 border-r border-[#dbe7ff] px-4 text-[14px] font-semibold text-[#08265c]">
              <BookOpen className="h-4 w-4 text-[#0b57e3]" />
              Interview Prep
              <ChevronDown className="h-4 w-4 text-[#6b83aa]" />
            </div>
            <div className="flex h-full items-center gap-2 px-4">
              <Search className="h-4 w-4 text-[#6b83aa]" />
              <span className="w-44 text-[14px] font-medium text-[#8aa0bf]">
                Search practice...
              </span>
            </div>
          </div>
          <a
            className="rounded-[8px] border border-[#cfe0fb] bg-white px-6 py-3 text-[15px] font-bold text-[#08265c] transition hover:border-[#0b57e3] hover:text-[#0b57e3]"
            href={contactHref}
          >
            Talk To Expert
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-[8px] border border-[#cfe0fb] text-[#0b57e3] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#dbe7ff] bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[1320px] gap-2">
            {navItems.map((item) => (
              <a className="rounded-[8px] px-3 py-3 font-bold text-[#08265c] hover:bg-[#f5f9ff]" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
            <a className="rounded-[8px] bg-[#0b57e3] px-3 py-3 text-center font-extrabold text-white" href={contactHref}>
              Talk To Expert
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
      <div className="absolute -left-10 top-16 hidden h-48 w-28 rounded-r-full bg-[#90ead7] lg:block" />
      <div className="absolute -right-5 top-12 h-20 w-20 rotate-12 rounded-[18px] border-2 border-[#ad6bff] opacity-70" />
      <div className="absolute left-10 top-3 grid grid-cols-3 gap-2 text-[#ff786f]">
        {Array.from({ length: 12 }).map((_, index) => (
          <span className="h-3 w-1.5 rounded-full bg-current" key={index} />
        ))}
      </div>

      <div className="relative overflow-hidden rounded-[26px] bg-[#eaf3ff] shadow-[0_35px_90px_rgba(8,38,92,0.12)]">
        <img
          className="h-[450px] w-full object-cover object-center"
          src={heroImage}
          alt="Candidate practicing interview delivery"
        />
      </div>

      <div className="absolute -left-2 bottom-8 rounded-[16px] bg-white p-5 shadow-[0_24px_60px_rgba(8,38,92,0.16)] sm:left-8">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#12c879] text-white">
          <Users className="h-6 w-6" />
        </div>
        <p className="text-[13px] font-semibold text-[#45618c]">Mock reps</p>
        <p className="font-display text-[32px] font-extrabold text-[#08265c]">2K+</p>
      </div>

      <div className="absolute -right-2 top-1/2 rounded-[16px] bg-white p-5 shadow-[0_24px_60px_rgba(8,38,92,0.16)]">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#7d2cff] text-white">
          <Target className="h-6 w-6" />
        </div>
        <p className="text-[13px] font-semibold text-[#45618c]">Delivery score</p>
        <p className="font-display text-[32px] font-extrabold text-[#08265c]">A.C.E</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#f7fbff_0%,#f4f8ff_54%,#fff7fb_100%)]">
      <div className="mx-auto grid min-h-[680px] max-w-[1320px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex rounded-[6px] bg-[#e9f1ff] px-4 py-2 text-[14px] font-bold text-[#0b57e3]">
            Interview confidence, built under pressure
          </div>
          <h1 className="max-w-[700px] font-display text-[46px] font-extrabold leading-[1.08] tracking-tight text-[#08265c] sm:text-[60px] lg:text-[68px]">
            Stop freezing. <span className="text-[#0b57e3]">Start getting hired.</span>
          </h1>
          <p className="mt-6 max-w-[590px] text-[17px] font-medium leading-8 text-[#365783]">
            Your skills are ready. Hireable fixes the delivery gap with live
            mocks, AI interview pressure, and direct feedback.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#0b57e3] px-7 py-4 text-[15px] font-extrabold uppercase text-white shadow-[0_18px_44px_rgba(11,87,227,0.26)] transition hover:bg-[#0848be]"
              href={contactHref}
            >
              Talk To An Expert
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center gap-3 rounded-[8px] px-2 py-3 text-[15px] font-bold text-[#08265c] transition hover:text-[#0b57e3]"
              href="#method"
            >
              <MessageCircle className="h-6 w-6 text-[#0b57e3]" />
              See the A.C.E method
            </a>
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function FixStrip() {
  return (
    <section className="border-y border-[#dbe7ff] bg-white">
      <div className="mx-auto grid max-w-[1320px] gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {fixes.map((item) => (
          <div
            className="flex items-center gap-3 rounded-[10px] border border-[#dbe7ff] bg-white px-5 py-4 shadow-sm"
            key={item}
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#12c879]" />
            <span className="font-bold text-[#08265c]">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="bg-white py-20" id="method">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative">
          <div className="absolute -left-6 top-10 h-40 w-28 rounded-r-full bg-[#90ead7]" />
          <img
            className="relative h-[430px] w-full rounded-[24px] object-cover shadow-[0_30px_80px_rgba(8,38,92,0.12)]"
            src={practiceImage}
            alt="Interview practice and coaching session"
          />
          <div className="absolute -bottom-7 right-8 rounded-[16px] bg-white px-6 py-5 shadow-[0_24px_60px_rgba(8,38,92,0.14)]">
            <p className="font-display text-[34px] font-extrabold text-[#0b57e3]">A.C.E</p>
            <p className="text-[13px] font-bold text-[#45618c]">Articulate. Communicate. Execute.</p>
          </div>
        </div>

        <div>
          <div className="mb-5 inline-flex rounded-[6px] bg-[#e9f1ff] px-4 py-2 text-[14px] font-bold text-[#0b57e3]">
            No grammar drills
          </div>
          <h2 className="font-display text-[38px] font-extrabold leading-tight text-[#08265c] sm:text-[48px]">
            We do not teach English. We train the interview moment.
          </h2>
          <p className="mt-5 max-w-[650px] text-[16px] font-medium leading-8 text-[#45618c]">
            Structure your answer, control your pace, handle pressure, and
            execute when someone is actually watching.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["A", "Articulate"],
              ["C", "Communicate"],
              ["E", "Execute"]
            ].map(([letter, label]) => (
              <div className="rounded-[12px] border border-[#dbe7ff] bg-[#f8fbff] p-5" key={letter}>
                <p className="font-display text-[34px] font-extrabold text-[#0b57e3]">{letter}</p>
                <p className="mt-1 text-[14px] font-bold text-[#45618c]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="bg-[#f5f9ff] py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[15px] font-extrabold text-[#0b57e3]">
              Training modules
            </p>
            <h2 className="font-display text-[40px] font-extrabold text-[#08265c]">
              Everything is practice. Everything is feedback.
            </h2>
          </div>
          <a className="inline-flex items-center gap-2 text-[15px] font-extrabold text-[#0b57e3]" href={contactHref}>
            Start now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {modules.map((module) => (
            <div
              className="rounded-[14px] border border-[#dbe7ff] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(8,38,92,0.1)]"
              key={module.title}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-[10px] bg-[#e9f1ff] text-[#0b57e3]">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#0b57e3]">
                {module.meta}
              </p>
              <h3 className="mt-3 font-display text-[24px] font-extrabold text-[#08265c]">
                {module.title}
              </h3>
              <p className="mt-3 text-[15px] font-medium leading-7 text-[#45618c]">
                {module.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-4 text-center sm:px-6 lg:px-8">
        <PlayCircle className="mx-auto mb-6 h-14 w-14 text-[#0b57e3]" />
        <h2 className="font-display text-[42px] font-extrabold leading-tight text-[#08265c] sm:text-[56px]">
          Your next interview should feel like a conversation, not a test.
        </h2>
        <p className="mx-auto mt-5 max-w-[650px] text-[17px] font-medium leading-8 text-[#45618c]">
          No more practicing alone. Get pressure, feedback, and real reps before
          the interview that matters.
        </p>
        <a
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#0b57e3] px-8 py-4 text-[15px] font-extrabold uppercase text-white shadow-[0_18px_44px_rgba(11,87,227,0.26)] transition hover:bg-[#0848be]"
          href={contactHref}
        >
          Talk To An Expert
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071c42] py-10 text-white">
      <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <a className="flex items-center gap-3" href="/">
          <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-white text-lg font-black text-[#0b57e3]">
            Y
          </span>
          <span>
            <span className="block font-display text-[26px] font-extrabold tracking-tight">
              YAA Hireable
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
              Interview confidence
            </span>
          </span>
        </a>
        <p className="text-[14px] font-medium text-white/65">
          Your skills are ready. Now let us fix your delivery.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#f5f9ff] text-[#08265c]">
      <Header />
      <main>
        <Hero />
        <FixStrip />
        <Method />
        <Modules />
        <FinalCta />
      </main>
      <Footer />
      <a
        className={cn(
          "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-[8px]",
          "bg-[#0b57e3] text-white shadow-[0_18px_38px_rgba(11,87,227,0.28)]"
        )}
        href="#"
        aria-label="Back to top"
      >
        <ArrowRight className="h-4 w-4 -rotate-90" />
      </a>
    </div>
  );
}

export default App;
