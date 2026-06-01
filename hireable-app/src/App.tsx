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
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "./lib/utils";
import yaaLogoMark from "./assets/yaa-logo-mark.png";
import accentureLogo from "./assets/client-logos/accenture.svg";
import htiLogo from "./assets/client-logos/hti.webp";
import myShoppLogo from "./assets/client-logos/my-shopp.webp";
import purpleHealthLogo from "./assets/client-logos/purple-health.webp";
import rukCabsLogo from "./assets/client-logos/ruk-cabs.webp";
import sarensNassLogo from "./assets/client-logos/sarens-nass.webp";
import toskaLogo from "./assets/client-logos/toska.webp";
import ustLogo from "./assets/client-logos/ust.webp";
import founderImage from "./assets/founder-yaa.webp";

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

const companyLogos = [
  { alt: "Accenture", src: accentureLogo },
  { alt: "UST", src: ustLogo },
  { alt: "Toska", src: toskaLogo },
  { alt: "HTI", src: htiLogo },
  { alt: "Purple Health", src: purpleHealthLogo },
  { alt: "My Shopp", src: myShoppLogo },
  { alt: "RUK Cabs", src: rukCabsLogo },
  { alt: "Sarens NASS", src: sarensNassLogo }
];

function getNextCohortLabel() {
  const today = new Date();
  const nextCohort = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  return nextCohort.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });
}

const nextCohortLabel = getNextCohortLabel();

const trustPoints = [
  { key: "students", end: 5000, suffix: "+ students" },
  { key: "mocks", end: 2000, suffix: "+ mock sessions" },
  { key: "practice", end: 100, suffix: "% live practice" }
];

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
    text: "Every session focuses on how you say it - structure, pacing, clarity - not just what you say."
  },
  {
    icon: BriefcaseBusiness,
    title: "Coached by people who hire",
    text: "Your mentors have 12+ years of MNC experience and have sat on the hiring panels you'll face."
  },
  {
    icon: Repeat2,
    title: "Always current",
    text: "Interview trends shift fast. Our content updates with them - no recycled decks, no outdated frameworks."
  }
];

const extras = [
  {
    icon: Bot,
    title: "AI & digital tools training",
    text: "Hands-on training with the tools your future team is already using."
  },
  {
    icon: MailCheck,
    title: "Email & corporate etiquette",
    text: "Write the message that gets read, not deleted."
  },
  {
    icon: Users,
    title: "Walk-in interview simulation",
    text: "The closest thing to the real room."
  },
  {
    icon: Search,
    title: "Live question bank",
    text: "Role-specific questions across IT, BPO, finance, and sales - updated monthly from real interviews."
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
    text: "A shareable certificate for LinkedIn and resumes once you complete the program."
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
    countEnd: 2,
    countSuffix: " months",
    note: "Built around working hours."
  },
  {
    icon: CalendarDays,
    label: "Schedule",
    value: "Weekdays + Weekends",
    note: "Pick what fits your schedule."
  },
  {
    icon: MonitorSmartphone,
    label: "Mode",
    value: "Online & Offline",
    note: "Same coaches, same outcomes."
  }
];

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    Boolean(
      typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    )
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

function useInViewOnce<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [canAnimate, setCanAnimate] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCanAnimate(false);
      setHasEntered(true);
      return;
    }

    setCanAnimate(true);

    const node = ref.current;
    if (typeof window === "undefined" || !node || !("IntersectionObserver" in window)) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  return {
    ref,
    isInView: hasEntered || prefersReducedMotion,
    canAnimate: canAnimate && !prefersReducedMotion
  };
}

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

type CountUpStatProps = {
  end: number;
  suffix?: string;
  decimals?: number;
  className?: string;
};

function CountUpStat({ end, suffix = "", decimals = 0, className }: CountUpStatProps) {
  const { ref, isInView, canAnimate } = useInViewOnce<HTMLSpanElement>(0.5);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (!canAnimate) {
      setDisplayValue(end);
      return;
    }

    let frameId = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / 1500, 1);
      setDisplayValue(end * easeOutCubic(progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplayValue(end);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [canAnimate, end, isInView]);

  const value = decimals > 0 ? displayValue.toFixed(decimals) : String(Math.round(displayValue));

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {value}
      {suffix}
    </span>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isInView, canAnimate } = useInViewOnce<HTMLDivElement>(0.18);
  const isVisible = !canAnimate || isInView;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 24px, 0)",
        transition: canAnimate
          ? `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`
          : undefined,
        willChange: canAnimate && !isVisible ? "opacity, transform" : undefined
      }}
    >
      {children}
    </div>
  );
}

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
            Book intro call
          </a>
        </div>

        <a
          className="hidden rounded-[8px] bg-[#7886fb] px-5 py-3 text-[14px] font-bold text-white shadow-[0_14px_32px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] sm:inline-flex xl:hidden"
          href={talkHref}
        >
          Book intro call
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
              Book intro call
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
        <p className="font-display text-[34px] font-extrabold text-[#111827]">
          <CountUpStat end={5000} suffix="+" />
        </p>
      </div>

      <div className="mt-3 rounded-[18px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:absolute sm:-right-1 sm:top-1/2 sm:mt-0 sm:w-[205px]">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#ffee0f] text-[#111827]">
          <Target className="h-6 w-6 stroke-[1.5]" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Built for</p>
        <p className="font-display text-[26px] font-extrabold leading-tight text-[#111827]">real interview panels</p>
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
          <p className="mb-5 inline-flex rounded-full border border-[#dfe3ff] bg-white px-4 py-2 text-[13px] font-extrabold text-[#7886fb] shadow-sm">
            Next cohort: {nextCohortLabel} <span className="px-2 text-[#9ca3af]">&middot;</span> 18 seats remaining
          </p>
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
            For career-break returners, nervous freshers, and skilled speakers
            who freeze on the panel &mdash; we don&apos;t fix your resume. We fix the delivery.
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
              Talk to a coach
            </a>
          </div>
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            {trustPoints.map((point) => (
              <span className="inline-flex w-full items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#4b5563] shadow-sm sm:w-auto" key={point.key}>
                <CheckCircle2 className="h-4 w-4 stroke-[1.5] text-[#7886fb]" />
                <CountUpStat end={point.end} suffix={point.suffix} />
              </span>
            ))}
          </div>
        </motion.div>
        <Reveal className="min-w-0" delay={120}>
          <HeroVisual />
        </Reveal>
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
          {companyLogos.map((logo, index) => (
            <Reveal
              className="shrink-0"
              delay={index * 80}
              key={logo.alt}
            >
              <div className="grid h-16 min-w-[150px] place-items-center rounded-[12px] border border-[#e5e7eb] bg-white px-5 grayscale transition duration-300 hover:grayscale-0">
                <img
                  alt={logo.alt}
                  className="h-8 w-full object-contain opacity-75 transition duration-300 hover:opacity-100"
                  decoding="async"
                  loading="lazy"
                  src={logo.src}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  const outcomes = [
    "Career break gaps",
    "Interview nerves",
    "Communication blocks",
    "Panel pressure"
  ];

  return (
    <section className="bg-[#f9fafb]">
      <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <Reveal className="h-full" delay={index * 80} key={outcome}>
              <div className="flex h-full items-center justify-center rounded-full border border-[#e3e6ff] bg-white px-5 py-4 text-center text-[15px] font-extrabold text-[#111827] shadow-sm">
                {outcome}
              </div>
            </Reveal>
          ))}
        </div>
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
            Hireable isn&apos;t for passive watching. It is for candidates ready to
            practice, get corrected, and show up better.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {audiences.map((item, index) => (
            <Reveal className="h-full" delay={index * 80} key={item}>
              <div className="h-full rounded-[14px] border border-[#e3e6ff] bg-[#ffffff] p-5 shadow-sm">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                  <CheckCircle2 className="h-5 w-5 stroke-[1.5]" />
                </span>
                <p className="text-[16px] font-extrabold leading-7 text-[#111827]">{item}</p>
              </div>
            </Reveal>
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
        <Reveal className="min-w-0">
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
        </Reveal>

        <div>
          <p className="mb-4 text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
            {label}
          </p>
          <div className="grid gap-5">
            <Reveal>
              <div className="rounded-[16px] border border-[#e3e6ff] bg-[#ffffff] p-6">
                <h2 className="font-display text-[34px] font-extrabold leading-tight text-[#111827] sm:text-[44px]">
                  {problem}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-[16px] border border-[#e3e6ff] bg-white p-6 shadow-sm">
                <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
                  What we do
                </p>
                <p className="text-[18px] font-semibold leading-8 text-[#4b5563]">
                  {fix}
                </p>
              </div>
            </Reveal>
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
          ].map(([label, text], index) => (
            <Reveal className="h-full" delay={index * 80} key={label}>
              <div className="h-full rounded-[16px] border border-white/15 bg-white/[0.08] p-5">
                <p className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#ffee0f]">
                  {label}
                </p>
                <p className="mt-3 text-[17px] font-bold leading-7 text-white/85">{text}</p>
              </div>
            </Reveal>
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
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal className="h-full" delay={index * 80} key={item.title}>
                <div className="h-full rounded-[16px] border border-[#e3e6ff] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]">
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
              </Reveal>
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
          {proofStories.map((story, index) => (
            <Reveal className="h-full" delay={index * 80} key={story.name}>
              <figure className="h-full rounded-[16px] border border-[#e3e6ff] bg-white p-7 shadow-sm">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-[#f9fafb] py-20">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="mb-4 text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
            PRICING
          </p>
          <h2 className="font-display text-[40px] font-extrabold leading-tight text-[#111827] sm:text-[52px]">
            Simple pricing. No hidden fees.
          </h2>
          <p className="mt-4 text-[17px] font-semibold leading-8 text-[#4b5563]">
            We&apos;ll share the cohort fee, batch options, and what is included before you decide.
          </p>
        </div>

        <Reveal>
          <div className="rounded-[18px] border border-[#e3e6ff] bg-white p-7 shadow-[0_24px_70px_rgba(17,24,39,0.08)]">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#6b7280]">
              Hireable cohort
            </p>
            <h3 className="mt-3 font-display text-[38px] font-extrabold text-[#111827]">
              Talk to us for pricing
            </h3>
            <div className="mt-6 grid gap-3 text-[15px] font-bold text-[#4b5563] sm:grid-cols-2">
              {[
                "60-day interview practice",
                "Live mock interviews",
                "AI practice access",
                "Mentor feedback"
              ].map((item) => (
                <span className="flex items-center gap-2" key={item}>
                  <CheckCircle2 className="h-4 w-4 shrink-0 stroke-[1.5] text-[#7886fb]" />
                  {item}
                </span>
              ))}
            </div>
            <a
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-6 py-4 text-[15px] font-extrabold text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] sm:w-auto"
              href={talkHref}
            >
              Book a free intro call
              <ArrowRight className="h-4 w-4 stroke-[1.5]" />
            </a>
          </div>
        </Reveal>
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
            Book a free intro call
            <ArrowRight className="h-4 w-4 stroke-[1.5]" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal className="h-full" delay={index * 80} key={item.title}>
                <div className="min-h-[170px] rounded-[14px] border border-[#e3e6ff] bg-[#ffffff] p-6">
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
              </Reveal>
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
            <CountUpStat end={60} suffix=" days" /> to change your career story.
          </h2>
          <p className="mt-4 text-[17px] font-semibold leading-8 text-[#4b5563]">
            Short program. Long-term impact.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {format.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal className="h-full" delay={index * 80} key={item.label}>
                <div className="h-full rounded-[16px] border border-[#e3e6ff] bg-white p-7 text-center shadow-sm">
                  <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                    <Icon className="h-8 w-8 stroke-[1.5]" />
                  </div>
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#6b7280]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 font-display text-[30px] font-extrabold leading-tight text-[#111827]">
                    {typeof item.countEnd === "number" ? (
                      <CountUpStat end={item.countEnd} suffix={item.countSuffix} />
                    ) : (
                      item.value
                    )}
                  </h3>
                  <p className="mt-3 text-[15px] font-semibold leading-7 text-[#4b5563]">
                    {item.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FounderNote() {
  return (
    <section className="bg-[#f9fafb] py-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[24px] border border-[#e3e6ff] bg-white shadow-[0_24px_70px_rgba(17,24,39,0.08)]">
            <img
              alt="Founder of YAA"
              className="aspect-square h-full w-full object-cover"
              decoding="async"
              loading="lazy"
              src={founderImage}
            />
          </div>
        </Reveal>

        <div>
          <p className="mb-4 text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
            FOUNDER NOTE
          </p>
          <h2 className="font-display text-[40px] font-extrabold leading-tight text-[#111827] sm:text-[52px]">
            Why we built Hireable
          </h2>
          <p className="mt-5 text-[17px] font-semibold leading-8 text-[#4b5563]">
            We built Hireable because too many good candidates were losing interviews they were qualified for. Not because they lacked skill. Because nobody trained them to speak when the pressure hit. A quiet room is easy. A panel is different. Your voice shakes. Your answer runs long. Your strongest point gets buried. Hireable brings that pressure into practice, before the interview does. We coach the answer, the pause, the tone, and the recovery after a bad start. The goal is simple: help you sound like the person your resume already says you are. So panels hear the candidate, not the panic.
          </p>
          <div className="mt-6 rounded-[14px] border border-[#e3e6ff] bg-white p-5">
            <p className="font-display text-[22px] font-extrabold text-[#111827]">
              YAA Founder
            </p>
            <p className="mt-1 text-[14px] font-bold text-[#6b7280]">
              Name and credentials pending approval
            </p>
          </div>
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
          You don&apos;t need perfect confidence. You need a real practice system.
        </h2>
        <p className="mx-auto mt-5 max-w-[680px] text-[19px] font-semibold leading-8 text-[#4b5563]">
          One call. That&apos;s all it takes to start sounding like the person on your resume.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex min-h-12 w-full max-w-[430px] flex-wrap items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-5 py-4 text-[14px] font-extrabold text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] sm:w-auto sm:max-w-none sm:px-8 sm:text-[15px]"
            href={phoneHref}
          >
            Talk to a coach <span className="text-white/70">&middot;</span> {phoneNumber}
          </a>
          <a
            className="inline-flex min-h-12 w-full max-w-[430px] items-center justify-center gap-2 rounded-[8px] border border-[#dfe3ff] bg-white px-5 py-4 text-[14px] font-extrabold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb] sm:w-auto sm:max-w-none sm:px-8 sm:text-[15px]"
            href={talkHref}
          >
            Book a free 15-min intro call
            <ArrowRight className="h-4 w-4 stroke-[1.5]" />
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
          problem="You have the skills. But when it counts, the words don't come out right."
          fix="We coach how you sound under pressure - your clarity, your structure, your tone, and the words you reach for when it counts."
          tag="Communication is a skill. We teach it like one."
        />
        <ProblemSection
          image={interviewImage}
          imageAlt="Candidate practicing a formal interview conversation"
          label="THE PRESSURE GAP"
          problem="You blank out. You over-explain. You walk out knowing you had the answer."
          fix="Live mock interviews. Real panels. Feedback that actually sticks."
          tag="We simulate the pressure so the real thing feels easier."
          reverse
        />
        <HireableBreak />
        <Difference />
        <Proof />
        <Pricing />
        <Extras />
        <Duration />
        <FounderNote />
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

