import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  Play,
  Search,
  Sparkles,
  Star,
  Target,
  Users,
  X
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "./lib/utils";

const contactHref =
  "mailto:info@theclosinggap.net?subject=Talk%20To%20An%20Expert%20-%20YAA";
const heroImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=980&q=82";
const mentorImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=860&q=82";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Hireable", href: "/hireable" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const programs = [
  {
    title: "Hireable",
    category: "Interview Communication",
    description: "Live mocks, AI pressure practice, and feedback that fixes delivery fast.",
    lessons: "Live + AI",
    price: "Talk to us",
    href: "/hireable"
  },
  {
    title: "Corporate Readiness",
    category: "Workplace Skills",
    description: "Meetings, emails, calls, and the everyday language of working teams.",
    lessons: "6 modules",
    price: "Coming soon",
    href: "/courses"
  },
  {
    title: "Self Introduction Mastery",
    category: "Career Confidence",
    description: "Own the first question before it owns the interview.",
    lessons: "3 sessions",
    price: "Coming soon",
    href: "/courses"
  }
];

const categories = ["Interview Prep", "Communication", "Career", "Corporate"];

function getRoute() {
  const path = window.location.pathname.replace(/^\/main(?=\/|$)/, "") || "/";

  if (path === "/courses") return "courses";
  if (path === "/about") return "about";
  if (path === "/contact") return "contact";
  return "home";
}

function Logo() {
  return (
    <a className="flex items-center gap-3" href="/" aria-label="YAA home">
      <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-[#7886fb] text-lg font-black text-white shadow-[0_14px_30px_rgba(120,134,251,0.22)]">
        Y
      </span>
      <span className="leading-none">
        <span className="block font-display text-[26px] font-extrabold tracking-tight text-[#111827]">
          YAA
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#7886fb]">
          Your Added Advantage
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e3e6ff]/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[86px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              className="text-[15px] font-semibold text-[#111827] transition-colors hover:text-[#7886fb]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="flex h-12 items-center overflow-hidden rounded-[8px] border border-[#dfe3ff] bg-white shadow-sm">
            <div className="flex h-full items-center gap-2 border-r border-[#e3e6ff] px-4 text-[14px] font-semibold text-[#111827]">
              <BookOpen className="h-4 w-4 text-[#7886fb]" />
              Programs
              <ChevronDown className="h-4 w-4 text-[#6b7280]" />
            </div>
            <div className="flex h-full items-center gap-2 px-4">
              <Search className="h-4 w-4 text-[#6b7280]" />
              <span className="w-44 text-[14px] font-medium text-[#6b7280]">
                Search your goal...
              </span>
            </div>
          </div>
          <a
            className="rounded-[8px] border border-[#dfe3ff] bg-white px-6 py-3 text-[15px] font-bold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb]"
            href={contactHref}
          >
            Talk To Us
          </a>
        </div>

        <a
          className="hidden rounded-[8px] bg-[#7886fb] px-5 py-3 text-[14px] font-bold text-white shadow-[0_14px_32px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] sm:inline-flex xl:hidden"
          href={contactHref}
        >
          Talk To Us
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-[8px] border border-[#dfe3ff] text-[#7886fb] lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#e3e6ff] bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[1320px] gap-2">
            {navItems.map((item) => (
              <a className="rounded-[8px] px-3 py-3 font-bold text-[#111827] hover:bg-[#ffffff]" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
            <a className="rounded-[8px] bg-[#7886fb] px-3 py-3 text-center font-extrabold text-white" href={contactHref}>
              Talk To Us
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
      <div className="absolute -left-10 top-12 hidden h-44 w-28 rounded-r-full bg-[#ffee0f] lg:block" />
      <div className="absolute -right-8 top-4 h-20 w-20 rotate-12 rounded-[18px] border-2 border-[#7886fb] opacity-70" />
      <div className="absolute left-6 top-2 grid grid-cols-3 gap-2 text-[#ffee0f]">
        {Array.from({ length: 12 }).map((_, index) => (
          <span className="h-3 w-1.5 rounded-full bg-current" key={index} />
        ))}
      </div>

      <div className="relative overflow-hidden rounded-[26px] bg-[#ffffff] shadow-[0_35px_90px_rgba(17,24,39,0.12)]">
        <img
          className="h-[430px] w-full object-cover object-center"
          src={heroImage}
          alt="Students building career confidence together"
        />
      </div>

      <div className="absolute -left-4 bottom-8 rounded-[16px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:left-8">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#7886fb] text-white">
          <Users className="h-6 w-6" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Learners coached</p>
        <p className="font-display text-[32px] font-extrabold text-[#111827]">18K+</p>
      </div>

      <div className="absolute -right-2 top-1/2 rounded-[16px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)]">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#ffee0f] text-[#111827]">
          <Target className="h-6 w-6" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Confidence reps</p>
        <p className="font-display text-[32px] font-extrabold text-[#111827]">34K</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#ffffff_0%,#ffffff_62%,#ffee0f_155%)]">
        <div className="mx-auto grid min-h-[670px] max-w-[1320px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex rounded-[6px] bg-[#f1f3ff] px-4 py-2 text-[14px] font-bold text-[#7886fb]">
              Build the communication advantage
            </div>
            <h1 className="max-w-[690px] font-display text-[46px] font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-[60px] lg:text-[68px]">
              Skills get you shortlisted.{" "}
              <span className="text-[#7886fb]">Delivery</span> gets you hired.
            </h1>
            <p className="mt-6 max-w-[600px] text-[17px] font-medium leading-8 text-[#4b5563]">
              YAA helps students and early professionals turn interview anxiety,
              weak delivery, and workplace hesitation into confident execution.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-7 py-4 text-[15px] font-extrabold uppercase text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb]"
                href="/hireable"
              >
                Explore Hireable
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center gap-3 rounded-[8px] px-2 py-3 text-[15px] font-bold text-[#111827] transition hover:text-[#7886fb]"
                href={contactHref}
              >
                <MessageCircle className="h-6 w-6 text-[#7886fb]" />
                Have a question? Talk to YAA
              </a>
            </div>
          </motion.div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-[#e3e6ff] bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {categories.map((category) => (
            <a
              className="group flex items-center justify-between rounded-[10px] border border-[#e3e6ff] bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:border-[#7886fb] hover:shadow-[0_18px_44px_rgba(17,24,39,0.08)]"
              href={category === "Interview Prep" ? "/hireable" : "/courses"}
              key={category}
            >
              <span className="font-bold text-[#111827]">{category}</span>
              <ArrowRight className="h-4 w-4 text-[#7886fb] transition group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </section>

      <AboutBand />
      <FeaturedPrograms />
    </>
  );
}

function AboutBand() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative">
          <div className="absolute -left-6 top-10 h-40 w-28 rounded-r-full bg-[#ffee0f]" />
          <img
            className="relative h-[430px] w-full rounded-[24px] object-cover shadow-[0_30px_80px_rgba(17,24,39,0.12)]"
            src={mentorImage}
            alt="Career mentor coaching a learner"
          />
          <div className="absolute -bottom-7 right-8 rounded-[16px] bg-white px-6 py-5 shadow-[0_24px_60px_rgba(17,24,39,0.14)]">
            <p className="font-display text-[34px] font-extrabold text-[#7886fb]">3x</p>
            <p className="text-[13px] font-bold text-[#4b5563]">More real practice</p>
          </div>
        </div>

        <div>
          <div className="mb-5 inline-flex rounded-[6px] bg-[#f1f3ff] px-4 py-2 text-[14px] font-bold text-[#7886fb]">
            Get to know YAA
          </div>
          <h2 className="font-display text-[38px] font-extrabold leading-tight text-[#111827] sm:text-[48px]">
            We do not teach confidence as a quote. We build it as a skill.
          </h2>
          <p className="mt-5 max-w-[650px] text-[16px] font-medium leading-8 text-[#4b5563]">
            YAA is built for candidates who know the answer but lose the room.
            We make communication practical: structure, delivery, simulation,
            feedback, and repetition.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["2000+", "Mock sessions"],
              ["12 days", "Average clarity sprint"],
              ["Live + AI", "Practice model"],
              ["1:1", "Feedback loops"]
            ].map(([value, label]) => (
              <div className="rounded-[12px] border border-[#e3e6ff] bg-[#ffffff] p-5" key={label}>
                <p className="font-display text-[30px] font-extrabold text-[#111827]">{value}</p>
                <p className="mt-1 text-[14px] font-bold text-[#6b7280]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedPrograms() {
  return (
    <section className="bg-[#ffffff] py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[15px] font-extrabold text-[#7886fb]">
              Focused programs
            </p>
            <h2 className="font-display text-[40px] font-extrabold text-[#111827]">
              Built for real career moments.
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[15px] font-extrabold text-[#7886fb]"
            href="/courses"
          >
            View all courses
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <a
              className="group rounded-[14px] border border-[#e3e6ff] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]"
              href={program.href}
              key={program.title}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-[6px] bg-[#f1f3ff] px-3 py-1.5 text-[12px] font-extrabold text-[#7886fb]">
                  {program.category}
                </span>
                <span className="flex items-center gap-1 text-[#ffee0f]">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-[13px] font-bold text-[#4b5563]">4.9</span>
                </span>
              </div>
              <h3 className="font-display text-[25px] font-extrabold text-[#111827]">
                {program.title}
              </h3>
              <p className="mt-3 min-h-[78px] text-[15px] font-medium leading-7 text-[#4b5563]">
                {program.description}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-[#e3e6ff] pt-5">
                <span className="text-[13px] font-bold text-[#6b7280]">{program.lessons}</span>
                <span className="font-display text-[18px] font-extrabold text-[#7886fb]">
                  {program.price}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoursesPage() {
  return (
    <PageShell
      label="Courses"
      title="Lean, practical programs. No bloated lessons."
      description="These are frontend-ready course pages for now. Backend enrollment, payments, and dashboards can come later."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {programs.concat(programs.slice(1)).map((program, index) => (
          <a
            className="rounded-[14px] border border-[#e3e6ff] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]"
            href={program.href}
            key={`${program.title}-${index}`}
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-[10px] bg-[#f1f3ff] text-[#7886fb]">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#7886fb]">
              {program.category}
            </p>
            <h3 className="mt-3 font-display text-[24px] font-extrabold text-[#111827]">
              {program.title}
            </h3>
            <p className="mt-3 text-[15px] font-medium leading-7 text-[#4b5563]">
              {program.description}
            </p>
          </a>
        ))}
      </div>
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell
      label="About YAA"
      title="We exist for candidates who can do the job, but cannot yet show it."
      description="The YAA ecosystem will hold Hireable, courses, corporate readiness, and future career tools under one simple education brand."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["Pressure first", "We train for the real moment, not the quiet room."],
          ["Feedback fast", "Students need clear correction, not polite encouragement."],
          ["Outcome focused", "Every module must move someone closer to confidence."]
        ].map(([title, text]) => (
          <div className="rounded-[14px] border border-[#e3e6ff] bg-white p-7" key={title}>
            <CheckCircle2 className="mb-5 h-8 w-8 text-[#7886fb]" />
            <h3 className="font-display text-[24px] font-extrabold text-[#111827]">{title}</h3>
            <p className="mt-3 text-[15px] font-medium leading-7 text-[#4b5563]">{text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell
      label="Contact"
      title="Tell us where candidates are getting stuck."
      description="This is a frontend contact screen for now. The action opens email until backend forms are added."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[16px] bg-[#7886fb] p-8 text-white">
          <Mail className="mb-8 h-10 w-10" />
          <h3 className="font-display text-[32px] font-extrabold">Talk to YAA</h3>
          <p className="mt-4 text-[16px] leading-8 text-white/80">
            We can map the route: main YAA site, Hireable landing, courses,
            and later backend flows.
          </p>
          <a
            className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-white px-6 py-4 text-[15px] font-extrabold text-[#7886fb]"
            href={contactHref}
          >
            Send email
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="rounded-[16px] border border-[#e3e6ff] bg-white p-8">
          <div className="grid gap-4">
            {["Name", "Email", "What do you want to build next?"].map((label) => (
              <label className="grid gap-2" key={label}>
                <span className="text-[13px] font-extrabold text-[#4b5563]">{label}</span>
                <span className="rounded-[8px] border border-[#e3e6ff] bg-[#ffffff] px-4 py-4 text-[#6b7280]">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function PageShell({
  label,
  title,
  description,
  children
}: {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-[#ffffff]">
      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-[800px]">
          <div className="mb-5 inline-flex rounded-[6px] bg-[#f1f3ff] px-4 py-2 text-[14px] font-bold text-[#7886fb]">
            {label}
          </div>
          <h1 className="font-display text-[42px] font-extrabold leading-tight text-[#111827] sm:text-[56px]">
            {title}
          </h1>
          <p className="mt-5 text-[17px] font-medium leading-8 text-[#4b5563]">
            {description}
          </p>
        </div>
        {children}
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-[#7886fb] py-10 text-white">
      <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <a className="flex items-center gap-3" href="/" aria-label="YAA home">
          <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-white text-lg font-black text-[#7886fb]">
            Y
          </span>
          <span className="leading-none">
            <span className="block font-display text-[26px] font-extrabold tracking-tight text-white">
              YAA
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
              Your Added Advantage
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
  const route = getRoute();

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main>
        {route === "home" && <HomePage />}
        {route === "courses" && <CoursesPage />}
        {route === "about" && <AboutPage />}
        {route === "contact" && <ContactPage />}
      </main>
      <Footer />
      <a
        className={cn(
          "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-[8px]",
          "bg-[#7886fb] text-white shadow-[0_18px_38px_rgba(120,134,251,0.28)]"
        )}
        href="/"
        aria-label="Back to top"
      >
        <Play className="h-4 w-4 -rotate-90 fill-current" />
      </a>
    </div>
  );
}

export default App;
