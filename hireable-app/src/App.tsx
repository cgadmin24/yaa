import {
  ArrowRight,
  Bot,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  GraduationCap,
  Instagram,
  Linkedin,
  MailCheck,
  Menu,
  Mic2,
  MonitorSmartphone,
  Phone,
  Repeat2,
  Search,
  Sparkles,
  Target,
  Trophy,
  Users,
  Youtube,
  X
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "./lib/utils";
import yaaLogoMark from "./assets/yaa-logo-mark.png";

const phoneNumber = "+91 90742 94791";
const phoneHref = "tel:+919074294791";
const talkHref = "/contact";
const emailHref =
  "mailto:info@theclosinggap.net?subject=Talk%20To%20An%20Expert%20-%20Hireable";

const heroImage =
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fm=webp&fit=crop&w=1120&q=78";
const communicationImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fm=webp&fit=crop&w=980&q=78";
const interviewImage =
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fm=webp&fit=crop&w=980&q=78";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Hireable", href: "/hireable" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const quickLinks = navItems;

const footerPrograms = [
  { label: "Hireable", href: "/hireable" },
  { label: "Corporate Readiness", href: "/courses" },
  { label: "Self Introduction", href: "/courses" }
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

const trustPoints = ["5000+ students", "2000+ mock sessions", "No theory"];

const audiences = [
  "Fresh graduates facing their first serious interviews",
  "Candidates returning after a career break",
  "Skilled speakers who freeze when the pressure rises",
  "BPO, IT, and professionals switching industries"
];

const differentiators = [
  {
    icon: Mic2,
    title: "Communication-first, always",
    text: "Every session prioritizes how you say it — structure, pacing, clarity — not just what you say. Designed by trainers with 25+ years coaching corporate communication."
  },
  {
    icon: BriefcaseBusiness,
    title: "Coached by people who hire",
    text: "Your mentors are MNC leaders with 12+ years of hiring experience. They know what panels actually look for — because they've sat on them."
  },
  {
    icon: Repeat2,
    title: "Always current",
    text: "Interview trends shift fast. Our content updates with them — no recycled decks, no outdated frameworks."
  }
];

const extras = [
  {
    icon: Bot,
    title: "AI & digital tools training",
    text: "Hands-on with the tools your future team is already using."
  },
  {
    icon: MailCheck,
    title: "Email & corporate etiquette",
    text: "Write messages that get read, not deleted. Tone, structure, subject lines, follow-ups."
  },
  {
    icon: Users,
    title: "Walk-in interview simulation",
    text: "Unscripted mocks with real-time pressure, body language coaching, and panel-style questioning."
  },
  {
    icon: Search,
    title: "Live question bank",
    text: "Role-specific questions across IT, BPO, finance, and sales — updated monthly from real interviews."
  },
  {
    icon: FileText,
    title: "ATS resume building",
    text: "Get past the bots, reach the humans."
  },
  {
    icon: Linkedin,
    title: "LinkedIn optimisation",
    text: "Headline, summary, and keyword strategy so recruiters find you before you find them."
  },
  {
    icon: Trophy,
    title: "Certificate of completion",
    text: "A shareable certificate to add to LinkedIn and resumes once you complete the program."
  }
];

const proofStories = [
  {
    name: "Anjali",
    detail: "Fresh graduate, hired at [Company]",
    quote: "I knew the answers, but I kept rambling. After the mocks, my answers finally sounded clear."
  },
  {
    name: "Rahul",
    detail: "IT services, 4-year experience",
    quote: "I was rejected for months because my answers had no structure. The feedback made the difference."
  },
  {
    name: "Priya",
    detail: "BPO to IT transition",
    quote: "The simulations felt uncomfortable at first. That is exactly why the real interview felt easier."
  }
];

const format = [
  {
    icon: Clock3,
    label: "Duration",
    value: "2 months",
    note: "Built around working hours."
  },
  {
    icon: CalendarDays,
    label: "Schedule",
    value: "Weekdays + Weekends",
    note: "Flexible batches for real lives."
  },
  {
    icon: MonitorSmartphone,
    label: "Mode",
    value: "Online & Offline",
    note: "Choose what works for you."
  }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e3e6ff]/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[86px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
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
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
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
    <div className="relative mx-auto w-full max-w-[590px] min-w-0 lg:mr-0">
      <div className="absolute -left-8 top-16 hidden h-52 w-28 rounded-r-full bg-[#ffee0f] lg:block" />
      <div className="absolute -top-3 left-12 grid grid-cols-4 gap-2 text-[#ffee0f]">
        {Array.from({ length: 16 }).map((_, index) => (
          <span className="h-3 w-1.5 rounded-full bg-current" key={index} />
        ))}
      </div>

      <div className="relative overflow-hidden rounded-[30px] bg-[#ffffff] shadow-[0_35px_90px_rgba(17,24,39,0.13)]">
        <img
          className="h-[440px] w-full object-cover object-center sm:h-[510px]"
          src={heroImage}
          alt="Students preparing for interviews with a mentor"
        />
      </div>

      <div className="mt-4 rounded-[18px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:absolute sm:bottom-8 sm:left-8 sm:mt-0 sm:w-[210px]">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#7886fb] text-white">
          <GraduationCap className="h-6 w-6 stroke-[1.5]" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Students trained</p>
        <p className="font-display text-[34px] font-extrabold text-[#111827]">5000+</p>
      </div>

      <div className="mt-3 rounded-[18px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:absolute sm:-right-1 sm:top-1/2 sm:mt-0 sm:w-[205px]">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#ffee0f] text-[#111827]">
          <Target className="h-6 w-6 stroke-[1.5]" />
        </div>
        <p className="font-display text-[26px] font-extrabold leading-tight text-[#111827]">Real interview panels</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#ffffff_0%,#ffffff_62%,#ffee0f_155%)]">
      <div className="mx-auto grid min-h-[700px] max-w-[1320px] min-w-0 grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 min-w-0"
        >
          <h1 className="max-w-full break-words font-display text-[36px] font-extrabold leading-[1.09] tracking-tight text-[#111827] min-[420px]:text-[42px] sm:max-w-[720px] sm:text-[58px] lg:text-[68px]">
            <span className="block">You&apos;re not failing interviews.</span>
            <span className="block text-[#7886fb]">
              <span className="block sm:inline">You were never</span>
              <span className="hidden sm:inline"> </span>
              <span className="block sm:inline">taught how to</span>
              <span className="hidden sm:inline"> </span>
              <span className="block sm:inline">pass them.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-[620px] break-words text-[18px] font-semibold leading-8 text-[#4b5563]">
            If you&apos;ve stumbled in interviews &mdash; through nerves, a career break,
            or losing the words when it counts &mdash; Hireable is built to fix the
            delivery, not the resume.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-5 py-4 text-[13px] font-extrabold uppercase text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] min-[420px]:text-[14px] sm:w-auto sm:px-7 sm:text-[15px]"
              href={talkHref}
            >
              Yes, I want to be Hireable
              <ArrowRight className="h-4 w-4 stroke-[1.5]" />
            </a>
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 py-4 text-[14px] font-extrabold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb] sm:w-auto sm:px-7 sm:text-[15px]"
              href={phoneHref}
            >
              <Phone className="h-4 w-4 stroke-[1.5]" />
              Talk to an Expert
            </a>
          </div>
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            {trustPoints.map((point) => (
              <span className="inline-flex w-full items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#4b5563] shadow-sm sm:w-auto" key={point}>
                <CheckCircle2 className="h-4 w-4 stroke-[1.5] text-[#7886fb]" />
                {point}
              </span>
            ))}
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
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

function OutcomeStrip() {
  return (
    <section className="bg-[#f9fafb]">
      <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8">
        <p className="rounded-[14px] border border-[#e3e6ff] bg-white px-5 py-5 text-center text-[15px] font-extrabold leading-7 text-[#111827] shadow-sm">
          We address: career-break gaps <span className="text-[#7886fb]">&middot;</span> interview nerves <span className="text-[#7886fb]">&middot;</span> communication blocks <span className="text-[#7886fb]">&middot;</span> panel pressure
        </p>
      </div>
    </section>
  );
}

function AudienceFit() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="font-display text-[38px] font-extrabold leading-tight text-[#111827] sm:text-[48px]">
            Built for people who know they can do more.
          </h2>
          <p className="mt-4 text-[17px] font-semibold leading-8 text-[#4b5563]">
            Hireable is not for passive watching. It is for candidates ready to
            practice, get corrected, and show up better.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {audiences.map((item) => (
            <div className="rounded-[14px] border border-[#e3e6ff] bg-[#ffffff] p-5 shadow-sm" key={item}>
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                <CheckCircle2 className="h-5 w-5 stroke-[1.5]" />
              </span>
              <p className="text-[16px] font-extrabold leading-7 text-[#111827]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ProblemSectionProps = {
  image: string;
  imageAlt: string;
  label: string;
  problem: string;
  fix: string;
  tag: string;
  reverse?: boolean;
};

function ProblemSection({ image, imageAlt, label, problem, fix, tag, reverse }: ProblemSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className={cn(
        "mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
        reverse && "lg:[&>div:first-child]:order-2"
      )}>
        <div className="relative">
          <div className="absolute -left-5 top-9 h-40 w-24 rounded-r-full bg-[#ffee0f]" />
          <div className="relative overflow-hidden rounded-[26px] bg-[#ffffff] shadow-[0_30px_80px_rgba(17,24,39,0.12)]">
            <img
              className="h-[420px] w-full object-cover object-center"
              src={image}
              alt={imageAlt}
            />
          </div>
        </div>

        <div>
          <p className="mb-4 text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
            {label}
          </p>
          <div className="grid gap-5">
            <div className="rounded-[16px] border border-[#e3e6ff] bg-[#ffffff] p-6">
              <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#6b7280]">
                The problem
              </p>
              <h2 className="font-display text-[34px] font-extrabold leading-tight text-[#111827] sm:text-[44px]">
                {problem}
              </h2>
            </div>
            <div className="rounded-[16px] border border-[#e3e6ff] bg-white p-6 shadow-sm">
              <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
                What we do
              </p>
              <p className="text-[18px] font-semibold leading-8 text-[#4b5563]">
                {fix}
              </p>
            </div>
          </div>
          <p className="mt-6 inline-flex max-w-full rounded-[8px] bg-[#111827] px-5 py-3 text-[15px] font-extrabold leading-6 text-white">
            {tag}
          </p>
        </div>
      </div>
    </section>
  );
}

function HireableBreak() {
  return (
    <section className="bg-[#0a1b33] py-16 text-white">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <h2 className="font-display text-[34px] font-extrabold leading-tight sm:text-[48px]">
          The real interview should not be your first real pressure.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Before", "Guessing what might happen."],
            ["During", "Live panels, interruptions, follow-ups."],
            ["After", "Clear feedback and better reps."]
          ].map(([label, text]) => (
            <div className="rounded-[16px] border border-white/15 bg-white/[0.08] p-5" key={label}>
              <p className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#ffee0f]">
                {label}
              </p>
              <p className="mt-3 text-[17px] font-bold leading-7 text-white/85">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="bg-[#ffffff] py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-11 max-w-[760px]">
          <h2 className="font-display text-[40px] font-extrabold leading-tight text-[#111827] sm:text-[54px]">
            Not your typical online course.
          </h2>
          <p className="mt-4 text-[17px] font-semibold leading-8 text-[#4b5563]">
            Hireable is built around pressure, fluency, and feedback - the three things candidates rarely get before the real interview.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="rounded-[16px] border border-[#e3e6ff] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]"
                key={item.title}
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                  <Icon className="h-7 w-7 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-[25px] font-extrabold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] font-medium leading-7 text-[#4b5563]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="bg-[#ffffff] py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[40px] font-extrabold leading-tight text-[#111827] sm:text-[52px]">
            Real candidates. Real pressure. Better answers.
          </h2>
          <p className="mt-4 text-[17px] font-semibold leading-8 text-[#4b5563]">
            Confidence starts sounding real when practice stops being polite.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {proofStories.map((story) => (
            <figure
              className="rounded-[16px] border border-[#e3e6ff] bg-white p-7 shadow-sm"
              key={story.name}
            >
              <blockquote className="text-[18px] font-semibold leading-8 text-[#111827]">
                "{story.quote}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#dfe3ff] bg-[#f1f3ff] text-[#7886fb]">
                  <Users className="h-5 w-5 stroke-[1.5]" />
                </span>
                <span>
                  <span className="block font-display text-[18px] font-extrabold text-[#111827]">
                    {story.name}
                  </span>
                  <span className="block text-[13px] font-bold text-[#6b7280]">
                    {story.detail}
                  </span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#9ca3af]">
                    Photo pending
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1 text-[12px] font-extrabold text-[#7886fb]">
                    <Linkedin className="h-3.5 w-3.5 stroke-[1.5]" />
                    LinkedIn pending
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-11 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-[40px] font-extrabold leading-tight text-[#111827] sm:text-[52px]">
              More than just interview prep.
            </h2>
            <p className="mt-4 max-w-[680px] text-[17px] font-semibold leading-8 text-[#4b5563]">
              The small corporate skills that quietly decide whether you get noticed, shortlisted, and trusted.
            </p>
          </div>
          <a
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 text-[15px] font-extrabold text-[#7886fb] transition hover:border-[#7886fb] md:w-auto md:border-transparent"
            href={talkHref}
          >
            Start with one call
            <ArrowRight className="h-4 w-4 stroke-[1.5]" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item) => {
            const Icon = item.icon;

            return (
              <div className="min-h-[170px] rounded-[14px] border border-[#e3e6ff] bg-[#ffffff] p-6" key={item.title}>
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb] shadow-sm">
                  <Icon className="h-5 w-5 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-[20px] font-extrabold leading-snug text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-6 text-[#4b5563]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Duration() {
  return (
    <section className="bg-[#ffffff] py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <h2 className="font-display text-[40px] font-extrabold leading-tight text-[#111827] sm:text-[54px]">
            60 days to change your career story.
          </h2>
          <p className="mt-4 text-[17px] font-semibold leading-8 text-[#4b5563]">
            Small commitment. Life-changing outcome.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {format.map((item) => {
            const Icon = item.icon;

            return (
              <div className="rounded-[16px] border border-[#e3e6ff] bg-white p-7 text-center shadow-sm" key={item.label}>
                <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                  <Icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#6b7280]">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-[30px] font-extrabold leading-tight text-[#111827]">
                  {item.value}
                </h3>
                <p className="mt-3 text-[15px] font-semibold leading-7 text-[#4b5563]">
                  {item.note}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-4 text-center sm:px-6 lg:px-8">
        <span className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
          <Sparkles className="h-8 w-8 stroke-[1.5]" />
        </span>
        <h2 className="font-display text-[42px] font-extrabold leading-tight text-[#111827] sm:text-[58px]">
          You do not need perfect confidence. You need a real practice system.
        </h2>
        <p className="mx-auto mt-5 max-w-[680px] text-[19px] font-semibold leading-8 text-[#4b5563]">
          One call. That is all it takes to start showing up differently.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex min-h-12 w-full max-w-[430px] flex-wrap items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-5 py-4 text-[14px] font-extrabold text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] sm:w-auto sm:max-w-none sm:px-8 sm:text-[15px]"
            href={talkHref}
          >
            Book a free intro call
            <ArrowRight className="h-4 w-4 stroke-[1.5]" />
          </a>
          <a
            className="inline-flex min-h-12 w-full max-w-[430px] items-center justify-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 py-4 text-[14px] font-extrabold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb] sm:w-auto sm:max-w-none sm:px-8 sm:text-[15px]"
            href={phoneHref}
          >
            Talk to an expert: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
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
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111827]" id="top">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <OutcomeStrip />
        <AudienceFit />
        <ProblemSection
          image={communicationImage}
          imageAlt="Candidate feeling unsure while preparing at a desk"
          label="THE COMMUNICATION GAP"
          problem="You have the skills. But when it counts, the words do not come out right."
          fix="We train you to speak with clarity, confidence, and corporate fluency — in English and beyond."
          tag="Communication is a skill. We teach it like one."
        />
        <ProblemSection
          image={interviewImage}
          imageAlt="Candidate practicing a formal interview conversation"
          label="THE PRESSURE GAP"
          problem="You blank out. You over-explain. You walk out knowing you had the answer."
          fix="Live mock interviews. Real panels. Feedback that actually sticks."
          tag="We simulate the pressure so the real thing feels easy."
          reverse
        />
        <HireableBreak />
        <Difference />
        <Proof />
        <Extras />
        <Duration />
        <FinalCta />
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
