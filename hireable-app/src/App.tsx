import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
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
  X
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "./lib/utils";

const phoneNumber = "+91 90742 94791";
const contactHref = "tel:+919074294791";
const websiteHref = "https://www.theclosinggap.net";

const heroImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fm=webp&fit=crop&w=1120&q=78";
const communicationImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fm=webp&fit=crop&w=980&q=78";
const interviewImage =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fm=webp&fit=crop&w=980&q=78";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Hireable", href: "/hireable" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" }
];

const trustPoints = ["5000+ students", "Real results", "No theory"];

const outcomes = [
  "Career gap",
  "Nerves",
  "Communication blocks",
  "Interview pressure"
];

const differentiators = [
  {
    icon: Mic2,
    title: "Communication-first approach",
    text: "Led by a trainer with 25+ years in English communication and 5000+ trained students working across borders."
  },
  {
    icon: BriefcaseBusiness,
    title: "Trained by people who hired",
    text: "Mentors include MNC leaders with 12+ years of corporate experience and real hiring-panel judgment."
  },
  {
    icon: Repeat2,
    title: "Always current",
    text: "Interview trends change. Our training changes with them. No recycled decks, no outdated material."
  }
];

const extras = [
  {
    icon: Bot,
    title: "AI & digital tools training",
    text: "Stay relevant, not left behind."
  },
  {
    icon: MailCheck,
    title: "Email & corporate etiquette",
    text: "Because how you write matters too."
  },
  {
    icon: Users,
    title: "Walk-in interview simulation",
    text: "The closest thing to the real room."
  },
  {
    icon: Search,
    title: "Question bank",
    text: "Know what is coming before it does."
  },
  {
    icon: FileText,
    title: "ATS resume building",
    text: "Get past the bots, reach the humans."
  },
  {
    icon: Linkedin,
    title: "LinkedIn optimisation",
    text: "Your profile is your first interview."
  },
  {
    icon: Trophy,
    title: "Certificate of completion",
    text: "Proof that you showed up and did the work."
  }
];

const format = [
  {
    icon: Clock3,
    label: "Duration",
    value: "2 months",
    note: "Small commitment. Serious change."
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
    <header className="sticky top-0 z-50 border-b border-[#e3e6ff]/85 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="/" aria-label="YAA home">
          <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-[#7886fb] text-lg font-black text-white shadow-[0_14px_30px_rgba(120,134,251,0.22)]">
            Y
          </span>
          <span className="leading-none">
            <span className="block font-display text-[26px] font-extrabold tracking-tight text-[#111827]">
              YAA
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#7886fb]">
              Hireable
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="inline-flex items-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 py-3 text-[14px] font-extrabold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb]"
            href={websiteHref}
          >
            <Building2 className="h-4 w-4" />
            Closing Gap
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#7886fb] px-6 py-3 text-[14px] font-extrabold text-white shadow-[0_14px_32px_rgba(120,134,251,0.24)] transition hover:bg-[#7886fb]"
            href={contactHref}
          >
            <Phone className="h-4 w-4" />
            Talk to Expert
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-[8px] border border-[#dfe3ff] text-[#7886fb] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
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
              Talk to Expert
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[590px] lg:mr-0">
      <div className="absolute -left-8 top-16 hidden h-52 w-28 rounded-r-full bg-[#ffee0f] lg:block" />
      <div className="absolute -right-3 top-8 h-20 w-20 rotate-12 rounded-[20px] border-2 border-[#7886fb] opacity-70" />
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

      <div className="absolute -left-1 bottom-8 w-[210px] rounded-[18px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:left-8">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#7886fb] text-white">
          <GraduationCap className="h-6 w-6" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Students trained</p>
        <p className="font-display text-[34px] font-extrabold text-[#111827]">5000+</p>
      </div>

      <div className="absolute -right-1 top-1/2 w-[188px] rounded-[18px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)]">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#ffee0f] text-[#111827]">
          <Target className="h-6 w-6" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Built for</p>
        <p className="font-display text-[30px] font-extrabold text-[#111827]">Real panels</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#ffffff_0%,#ffffff_62%,#ffee0f_155%)]">
      <div className="mx-auto grid min-h-[700px] max-w-[1320px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10"
        >
          <h1 className="max-w-full font-display text-[35px] font-extrabold leading-[1.09] tracking-tight text-[#111827] min-[420px]:text-[42px] sm:max-w-[720px] sm:text-[58px] lg:text-[68px]">
            <span className="block">You&apos;re not failing interviews.</span>
            <span className="block text-[#7886fb]">
              <span className="block sm:inline">You were never</span>
              <span className="hidden sm:inline"> </span>
              <span className="block sm:inline">taught how to</span>
              <span className="hidden sm:inline"> </span>
              <span className="block sm:inline">pass them.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-[620px] text-[18px] font-semibold leading-8 text-[#4b5563]">
            Career gap, nerves, communication blocks - we fix all of it.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-5 py-4 text-[13px] font-extrabold uppercase text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] min-[420px]:text-[14px] sm:w-auto sm:px-7 sm:text-[15px]"
              href={contactHref}
            >
              Yes, I want to be Hireable
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 py-4 text-[14px] font-extrabold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb] sm:w-auto sm:px-7 sm:text-[15px]"
              href={contactHref}
            >
              <Phone className="h-4 w-4" />
              Talk to an Expert
            </a>
          </div>
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            {trustPoints.map((point) => (
              <span className="inline-flex w-full items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#4b5563] shadow-sm sm:w-auto" key={point}>
                <CheckCircle2 className="h-4 w-4 text-[#7886fb]" />
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

function OutcomeStrip() {
  return (
    <section className="border-y border-[#e3e6ff] bg-white">
      <div className="mx-auto grid max-w-[1320px] gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {outcomes.map((item) => (
          <div
            className="flex items-center gap-3 rounded-[10px] border border-[#e3e6ff] bg-white px-5 py-4 shadow-sm"
            key={item}
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#7886fb]" />
            <span className="font-bold text-[#111827]">{item}</span>
          </div>
        ))}
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
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-[14px] bg-[#f1f3ff] text-[#7886fb]">
                  <Icon className="h-7 w-7" />
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
          <a className="inline-flex items-center gap-2 text-[15px] font-extrabold text-[#7886fb]" href={contactHref}>
            Start with one call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item) => {
            const Icon = item.icon;

            return (
              <div className="min-h-[170px] rounded-[14px] border border-[#e3e6ff] bg-[#ffffff] p-6" key={item.title}>
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-[10px] bg-white text-[#7886fb] shadow-sm">
                  <Icon className="h-5 w-5" />
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
                  <Icon className="h-8 w-8" />
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
        <Sparkles className="mx-auto mb-6 h-14 w-14 text-[#7886fb]" />
        <h2 className="font-display text-[42px] font-extrabold leading-tight text-[#111827] sm:text-[58px]">
          The job you want is not waiting for perfect confidence.
        </h2>
        <p className="mx-auto mt-5 max-w-[680px] text-[19px] font-semibold leading-8 text-[#4b5563]">
          One call. That is all it takes to start.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex w-full max-w-[430px] flex-wrap items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-5 py-4 text-[14px] font-extrabold uppercase text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] sm:w-auto sm:max-w-none sm:px-8 sm:text-[15px]"
            href={contactHref}
          >
            Talk to Our Expert
            <span className="font-black">{phoneNumber}</span>
          </a>
          <a
            className="inline-flex w-full max-w-[430px] items-center justify-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 py-4 text-[14px] font-extrabold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb] sm:w-auto sm:max-w-none sm:px-8 sm:text-[15px]"
            href={websiteHref}
          >
            Visit www.theclosinggap.net
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#7886fb] py-10 text-white">
      <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-7 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <a className="flex items-center gap-3" href="/">
          <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-white text-lg font-black text-[#7886fb]">
            Y
          </span>
          <span>
            <span className="block font-display text-[26px] font-extrabold tracking-tight">
              YAA | Your Added Advantage
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
              Program: HIREABLE
            </span>
          </span>
        </a>
        <div className="flex flex-col gap-2 text-[14px] font-medium text-white/70 md:items-end">
          <a className="hover:text-white" href={contactHref}>{phoneNumber}</a>
          <a className="hover:text-white" href={websiteHref}>www.theclosinggap.net</a>
          <span>(c) 2026 YAA</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111827]">
      <Header />
      <main>
        <Hero />
        <OutcomeStrip />
        <ProblemSection
          image={communicationImage}
          imageAlt="Candidate feeling unsure while preparing at a desk"
          label="Communication problem"
          problem="You have the skills. But when it counts, the words do not come out right."
          fix="We train you to speak with clarity, confidence, and corporate fluency - in English and beyond."
          tag="Communication is a skill. We teach it like one."
        />
        <ProblemSection
          image={interviewImage}
          imageAlt="Candidate practicing a formal interview conversation"
          label="Interview pressure"
          problem="You blank out. You over-explain. You walk out knowing you had the answer."
          fix="Live mock interviews. Real panels. Feedback that actually sticks."
          tag="We simulate the pressure so the real thing feels easier."
          reverse
        />
        <Difference />
        <Extras />
        <Duration />
        <FinalCta />
      </main>
      <Footer />
      <a
        className={cn(
          "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-[8px]",
          "bg-[#7886fb] text-white shadow-[0_18px_38px_rgba(120,134,251,0.28)]"
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
