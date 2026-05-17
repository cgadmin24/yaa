import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Target,
  Users,
  Youtube,
  X
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { cn } from "./lib/utils";
import yaaLogoMark from "./assets/yaa-logo-mark.png";

const phoneNumber = "+91 90742 94791";
const emailHref =
  "mailto:info@theclosinggap.net?subject=Talk%20To%20An%20Expert%20-%20YAA";
const phoneHref = "tel:+919074294791";
const talkHref = "/contact";
const heroImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fm=webp&fit=crop&w=1100&q=78";
const mentorImage =
  "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fm=webp&fit=crop&w=900&q=78";

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
    lessons: "60 days",
    price: "Talk to us",
    href: "/hireable",
    status: "Open now"
  },
  {
    title: "Corporate Readiness",
    category: "Workplace Skills",
    description: "Meetings, emails, calls, and the everyday language of professional teams.",
    lessons: "6 modules",
    price: "Coming soon",
    href: "/contact",
    status: "Coming Soon"
  },
  {
    title: "Self Introduction Mastery",
    category: "Career Confidence",
    description: "Own the first question before it owns the interview.",
    lessons: "3 sessions",
    price: "Coming soon",
    href: "/contact",
    status: "Coming Soon"
  }
];

const companyLogoSlots = [
  "Logo pending",
  "Logo pending",
  "Logo pending",
  "Logo pending",
  "Logo pending",
  "Logo pending",
  "Logo pending",
  "Logo pending",
  "Logo pending",
  "Logo pending"
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Hireable", href: "/hireable" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const footerPrograms = [
  { label: "Hireable", href: "/hireable" },
  { label: "Corporate Readiness", href: "/courses" },
  { label: "Self Introduction", href: "/courses" }
];

const routeMeta = {
  home: {
    title: "YAA | Your Added Advantage",
    description:
      "YAA helps students and early professionals build interview confidence, corporate communication, and career readiness through real practice."
  },
  courses: {
    title: "Courses | YAA",
    description:
      "Explore YAA programs for interview communication, corporate readiness, self introduction mastery, and career confidence."
  },
  about: {
    title: "About | YAA",
    description:
      "YAA helps skilled candidates turn interview anxiety and weak delivery into calm, structured, confident communication."
  },
  contact: {
    title: "Contact | YAA",
    description:
      "Talk to YAA about Hireable, communication training, mock interviews, corporate readiness, and career confidence."
  }
};

type RouteName = keyof typeof routeMeta;

function getRoute(): RouteName {
  const path = window.location.pathname.replace(/^\/main(?=\/|$)/, "") || "/";

  if (path === "/courses") return "courses";
  if (path === "/about") return "about";
  if (path === "/contact") return "contact";
  return "home";
}

function Logo() {
  return (
    <a className="flex items-center gap-3" href="/" aria-label="YAA home">
      <span className="grid h-12 w-12 place-items-center rounded-[14px] border border-[#e3e6ff] bg-white p-1.5 shadow-[0_14px_30px_rgba(120,134,251,0.16)]">
        <img className="h-full w-full object-contain" src={yaaLogoMark} alt="" aria-hidden="true" />
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
          <a
            className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 text-[14px] font-semibold text-[#111827] shadow-sm transition hover:border-[#7886fb] hover:text-[#7886fb]"
            href="/courses"
          >
            <BookOpen className="h-4 w-4 stroke-[1.5] text-[#7886fb]" />
            Programs
            <ChevronDown className="h-4 w-4 stroke-[1.5] text-[#6b7280]" />
          </a>
          <a
            className="rounded-[8px] border border-[#dfe3ff] bg-white px-6 py-3 text-[15px] font-bold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb]"
            href={talkHref}
          >
            Talk to Us
          </a>
        </div>

        <a
          className="hidden rounded-[8px] bg-[#7886fb] px-5 py-3 text-[14px] font-bold text-white shadow-[0_14px_32px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] sm:inline-flex xl:hidden"
          href={talkHref}
        >
          Talk to Us
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-[8px] border border-[#dfe3ff] text-[#7886fb] lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5 stroke-[1.5]" /> : <Menu className="h-5 w-5 stroke-[1.5]" />}
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
            <a className="rounded-[8px] px-3 py-3 font-bold text-[#111827] hover:bg-[#ffffff]" href="/courses">
              Programs
            </a>
            <a className="rounded-[8px] bg-[#7886fb] px-3 py-3 text-center font-extrabold text-white" href={talkHref}>
              Talk to Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] min-w-0 lg:mr-0">
      <div className="absolute -left-10 top-12 hidden h-44 w-28 rounded-r-full bg-[#ffee0f] lg:block" />
      <div className="absolute -right-8 top-4 hidden h-20 w-20 rotate-12 rounded-[18px] border-2 border-[#7886fb] opacity-70 sm:block" />
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

      <div className="mt-4 rounded-[16px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:absolute sm:bottom-8 sm:left-8 sm:mt-0">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#7886fb] text-white">
          <Users className="h-6 w-6 stroke-[1.5]" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Students trained</p>
        <p className="font-display text-[32px] font-extrabold text-[#111827]">5000+</p>
      </div>

      <div className="mt-3 rounded-[16px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:absolute sm:-right-2 sm:top-1/2 sm:mt-0">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#ffee0f] text-[#111827]">
          <Target className="h-6 w-6 stroke-[1.5]" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Mock sessions</p>
        <p className="font-display text-[32px] font-extrabold text-[#111827]">2000+</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#ffffff_0%,#ffffff_62%,#ffee0f_155%)]">
        <div className="mx-auto grid min-h-[670px] max-w-[1320px] min-w-0 grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10 min-w-0"
          >
            <div className="mb-6 inline-flex rounded-[6px] bg-[#f1f3ff] px-4 py-2 text-[14px] font-bold text-[#7886fb]">
              Build the communication advantage
            </div>
            <h1 className="max-w-full break-words font-display text-[36px] font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:max-w-[690px] sm:text-[60px] lg:text-[68px]">
              Skills get you shortlisted.{" "}
              <span className="text-[#7886fb]">Delivery</span> gets you hired.
            </h1>
            <p className="mt-6 max-w-[600px] break-words text-[17px] font-medium leading-8 text-[#4b5563]">
              YAA trains students and early-career professionals to speak with structure,
              confidence, and clarity &mdash; in interviews and at work.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-7 py-4 text-[15px] font-extrabold text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] sm:w-auto"
                href="/hireable"
              >
                See how Hireable works
                <ArrowRight className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[8px] border border-[#dfe3ff] bg-white px-5 py-3 text-[15px] font-bold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb] sm:w-auto sm:border-transparent sm:px-2"
                href={talkHref}
              >
                <MessageCircle className="h-6 w-6 stroke-[1.5] text-[#7886fb]" />
                Have a question? Talk to YAA
              </a>
            </div>
          </motion.div>
          <HeroVisual />
        </div>
      </section>

      <TrustStrip />

      <AboutBand />
      <HomepageBreak />
      <FeaturedPrograms />
    </>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-[#e3e6ff] bg-white">
      <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-5 text-center text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#6b7280]">
          Our students have been hired at
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {companyLogoSlots.map((slot, index) => (
            <div
              className="grid h-16 min-w-[150px] place-items-center rounded-[12px] border border-[#e5e7eb] bg-[#f9fafb] px-5 text-center text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#9ca3af] grayscale"
              key={`${slot}-${index}`}
            >
              {slot}
            </div>
          ))}
        </div>
      </div>
    </section>
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
            <p className="max-w-[210px] text-[13px] font-bold leading-5 text-[#4b5563]">
              more speaking time than a typical online course
            </p>
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
              ["5000+", "Students trained"],
              ["2000+", "Mock sessions"],
              ["60 days", "Average program length"],
              ["4.9 / 5", "Candidate rating"]
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

function HomepageBreak() {
  return (
    <section className="bg-[#0a1b33] py-16 text-white">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#ffee0f]">
            Practice beats panic
          </p>
          <h2 className="max-w-[760px] font-display text-[34px] font-extrabold leading-tight sm:text-[48px]">
            Confidence is not a mood. It is what happens after enough real reps.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            "Mock pressure before real pressure",
            "Clear answer structure before the panel",
            "Feedback that is honest enough to help"
          ].map((item) => (
            <div className="flex items-center gap-3 rounded-[14px] border border-white/15 bg-white/[0.08] p-4" key={item}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                <CheckCircle2 className="h-5 w-5 stroke-[1.5]" />
              </span>
              <span className="text-[15px] font-bold leading-6 text-white/85">{item}</span>
            </div>
          ))}
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
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 text-[15px] font-extrabold text-[#7886fb] transition hover:border-[#7886fb] md:w-auto md:border-transparent"
            href="/courses"
          >
            View all courses
            <ArrowRight className="h-4 w-4 stroke-[1.5]" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <a
              className={cn(
                "group rounded-[14px] border border-[#e3e6ff] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]",
                program.status === "Coming Soon" && "bg-[#f9fafb] opacity-75"
              )}
              href={program.href}
              key={program.title}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-[6px] bg-[#f1f3ff] px-3 py-1.5 text-[12px] font-extrabold text-[#7886fb]">
                  {program.category}
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[12px] font-extrabold",
                    program.status === "Coming Soon"
                      ? "bg-white text-[#6b7280]"
                      : "bg-[#ffee0f] text-[#111827]"
                  )}
                >
                  {program.status}
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
      title="Practical programs for the moments that decide your career."
      description="Start with Hireable today, then build the corporate communication habits that make interviews, calls, emails, and meetings feel less intimidating."
    >
      <div className="mb-8 grid gap-4 rounded-[16px] border border-[#e3e6ff] bg-[#ffffff] p-5 shadow-sm md:grid-cols-3">
        {[
          ["Start here", "Hireable is open for interview confidence and delivery training."],
          ["Coming next", "Corporate readiness and self-introduction tracks are being shaped for focused batches."],
          ["Talk first", "If you are unsure where to begin, we will map the right route before you join."]
        ].map(([title, text]) => (
          <div className="flex gap-3" key={title}>
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
              <CheckCircle2 className="h-[18px] w-[18px] stroke-[1.5]" />
            </span>
            <div>
              <p className="font-display text-[18px] font-extrabold text-[#111827]">{title}</p>
              <p className="mt-1 text-[14px] font-medium leading-6 text-[#4b5563]">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <a
            className="rounded-[14px] border border-[#e3e6ff] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]"
            href={program.href}
            key={program.title}
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
              <BriefcaseBusiness className="h-6 w-6 stroke-[1.5]" />
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
            <div className="mt-6 flex items-center justify-between border-t border-[#e3e6ff] pt-5">
              <span className="text-[13px] font-bold text-[#6b7280]">{program.lessons}</span>
              <span className="font-display text-[17px] font-extrabold text-[#7886fb]">
                {program.price}
              </span>
            </div>
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
      description="YAA brings together Hireable, communication training, and career readiness for students and early professionals who need real practice before real opportunities."
    >
      <div className="mb-8 grid gap-8 rounded-[18px] border border-[#e3e6ff] bg-[#ffffff] p-7 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
            <GraduationCap className="h-7 w-7 stroke-[1.5]" />
          </span>
          <h2 className="font-display text-[32px] font-extrabold leading-tight text-[#111827]">
            The gap is rarely talent. It is delivery under pressure.
          </h2>
        </div>
        <p className="text-[16px] font-medium leading-8 text-[#4b5563]">
          A candidate can know the answer, have the degree, and still lose the
          room when the interviewer asks a follow-up. YAA trains the missing
          layer: structure, calm, professional language, and repeated practice
          with feedback that is honest enough to be useful.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["Pressure first", "We train for the real moment, not the quiet room."],
          ["Feedback fast", "Students need clear correction, not polite encouragement."],
          ["Outcome focused", "Every module must move someone closer to a clearer answer, stronger voice, and better interview."]
        ].map(([title, text]) => (
          <div className="rounded-[14px] border border-[#e3e6ff] bg-white p-7" key={title}>
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
              <CheckCircle2 className="h-6 w-6 stroke-[1.5]" />
            </span>
            <h3 className="font-display text-[24px] font-extrabold text-[#111827]">{title}</h3>
            <p className="mt-3 text-[15px] font-medium leading-7 text-[#4b5563]">{text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const challenge = String(data.get("challenge") || "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Interested in / struggling with: ${challenge}`
    ].join("\n");

    window.location.href =
      "mailto:info@theclosinggap.net?subject=Talk%20To%20YAA&body=" +
      encodeURIComponent(body);
  }

  return (
    <PageShell
      label="Contact"
      title="Tell us where candidates are getting stuck."
      description="Tell us what is blocking you: interview nerves, communication confidence, career break concerns, or corporate readiness. We will help you choose the right next step."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[16px] bg-[#7886fb] p-8 text-white">
          <span className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-white/15 text-white">
            <Mail className="h-7 w-7 stroke-[1.5]" />
          </span>
          <h3 className="font-display text-[32px] font-extrabold">Talk to YAA</h3>
          <p className="mt-4 text-[16px] leading-8 text-white/80">
            One conversation is enough to understand where you are freezing,
            what you need to practice, and whether Hireable is the right fit.
          </p>
          <div className="mt-8 grid gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-[8px] bg-white px-6 py-4 text-[15px] font-extrabold text-[#7886fb]"
              href={phoneHref}
            >
              <Phone className="h-4 w-4 stroke-[1.5]" />
              {phoneNumber}
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-[8px] border border-white/30 px-6 py-4 text-[15px] font-extrabold text-white transition hover:bg-white/10"
              href={emailHref}
            >
              Send email
              <ArrowRight className="h-4 w-4 stroke-[1.5]" />
            </a>
          </div>
        </div>
        <form className="rounded-[16px] border border-[#e3e6ff] bg-white p-8" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-[13px] font-extrabold text-[#4b5563]">Name</span>
              <input
                className="rounded-[8px] border border-[#e3e6ff] bg-[#ffffff] px-4 py-4 text-[#111827] outline-none transition focus:border-[#7886fb]"
                name="name"
                placeholder="Your name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[13px] font-extrabold text-[#4b5563]">Email</span>
              <input
                className="rounded-[8px] border border-[#e3e6ff] bg-[#ffffff] px-4 py-4 text-[#111827] outline-none transition focus:border-[#7886fb]"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[13px] font-extrabold text-[#4b5563]">
                What are you struggling with?
              </span>
              <textarea
                className="min-h-28 rounded-[8px] border border-[#e3e6ff] bg-[#ffffff] px-4 py-4 text-[#111827] outline-none transition focus:border-[#7886fb]"
                name="challenge"
                placeholder="Interview fear, communication confidence, career break, self introduction..."
                required
              />
            </label>
            <button
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-6 py-4 text-[15px] font-extrabold text-white shadow-[0_14px_32px_rgba(120,134,251,0.22)] transition hover:bg-[#6978f7]"
              type="submit"
            >
              Send enquiry
              <ArrowRight className="h-4 w-4 stroke-[1.5]" />
            </button>
          </div>
        </form>
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
    <footer className="bg-[#0a1b33] text-white">
      <div className="bg-[#7886fb]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="font-display text-[30px] font-extrabold leading-tight sm:text-[40px]">
            Ready to fix your delivery?
          </h2>
          <a
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-white px-6 py-4 text-[15px] font-extrabold text-[#111827] shadow-[0_18px_44px_rgba(17,24,39,0.14)] transition hover:-translate-y-0.5 md:w-auto"
            href={talkHref}
          >
            Talk to YAA
            <ArrowRight className="h-4 w-4 stroke-[1.5]" />
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1fr] lg:px-8">
        <div>
          <a className="flex items-center gap-3" href="/" aria-label="YAA home">
            <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-white p-1.5">
              <img className="h-full w-full object-contain" src={yaaLogoMark} alt="" aria-hidden="true" />
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
          <p className="mt-5 max-w-[300px] text-[15px] font-semibold leading-7 text-white/70">
            Your skills are ready. Now let us fix your delivery.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#ffee0f]">
            Quick links
          </h3>
          <div className="grid gap-3 text-[15px] font-semibold text-white/70">
            {quickLinks.map((link) => (
              <a className="transition hover:text-white" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#ffee0f]">
            Programs
          </h3>
          <div className="grid gap-3 text-[15px] font-semibold text-white/70">
            {footerPrograms.map((link) => (
              <a className="transition hover:text-white" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#ffee0f]">
            Contact
          </h3>
          <div className="grid gap-3 text-[15px] font-semibold text-white/70">
            <a className="transition hover:text-white" href={phoneHref}>{phoneNumber}</a>
            <a className="transition hover:text-white" href={emailHref}>info@theclosinggap.net</a>
          </div>
          <div className="mt-5 flex gap-3" aria-label="Social profiles pending">
            {[Linkedin, Instagram, Youtube].map((Icon, index) => (
              <span
                className="grid h-10 w-10 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]"
                key={index}
              >
                <Icon className="h-5 w-5 stroke-[1.5]" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-4 py-5 text-[13px] font-semibold text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>&copy; 2026 YAA</span>
          <span>Privacy Policy | Terms of Service</span>
        </div>
      </div>

    </footer>
  );
}

function App() {
  const route = getRoute();
  const meta = routeMeta[route];

  useEffect(() => {
    document.title = meta.title;
    const description = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (description) {
      description.content = meta.description;
    }
  }, [meta.description, meta.title]);

  return (
    <div className="min-h-screen bg-[#ffffff]" id="top">
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
          "fixed bottom-6 right-6 z-50 hidden h-12 w-12 place-items-center rounded-[8px] lg:grid",
          "bg-[#7886fb] text-white shadow-[0_18px_38px_rgba(120,134,251,0.28)]"
        )}
        href="#top"
        aria-label="Back to top"
      >
        <ArrowRight className="h-4 w-4 -rotate-90 stroke-[1.5]" />
      </a>
    </div>
  );
}

export default App;
