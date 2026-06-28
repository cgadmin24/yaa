import {
  ArrowRight,
  Bell,
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
import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
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

const courseProgrammes = [
  {
    title: "HireAble Express",
    subtitle: "Quick Interview Tune-Up",
    description:
      "Perfect for students with an upcoming interview who need expert guidance, resume review, and a confidence boost.",
    duration: "2 Sessions",
    price: "Starting From: \u20b91,999",
    cta: "Explore Programme",
    href: "/hireable"
  },
  {
    title: "HireAble Boost",
    badge: "Most Popular",
    subtitle: "Interview Success Programme",
    description:
      "A structured programme for freshers and job seekers to strengthen communication, interview skills, and career readiness.",
    duration: "2-3 Weeks",
    price: "Starting From: \u20b97,999",
    cta: "Explore Programme",
    href: "/hireable"
  },
  {
    title: "HireAble Plus",
    badge: "Flagship Programme",
    subtitle: "Career Acceleration Programme",
    description:
      "A comprehensive learning journey covering communication, workplace readiness, interview mastery, and professional development.",
    duration: "2 Months",
    price: "Starting From: \u20b919,999",
    cta: "Explore Programme",
    href: "/hireable"
  },
  {
    title: "HireAble Elite",
    subtitle: "Premium Career Transformation",
    description:
      "Personalized mentoring, unlimited mock interviews, career strategy, placement support, and long-term professional guidance.",
    duration: "3+ Months",
    price: "Starting From: \u20b949,999",
    cta: "Talk to a Mentor",
    href: "/contact"
  },
  {
    title: "Leadership Upskill",
    badge: "Coming Soon",
    subtitle: "For Emerging Leaders & Working Professionals",
    description:
      "Strengthen leadership, strategic thinking, business communication, AI productivity, and real-world problem-solving through practical corporate scenarios and case studies.",
    highlights: [
      "Leadership & Decision Making",
      "AI Tools for Professionals",
      "Business Case Studies",
      "Corporate Problem Solving",
      "Workplace Productivity",
      "Strategic Thinking"
    ],
    cta: "Notify Me",
    href: "/contact"
  },
  {
    title: "Excel & Power BI Essentials",
    badge: "Coming Soon",
    subtitle: "Data & Business Analytics Programme",
    description:
      "Master Excel and Power BI through practical business scenarios, dashboards, reporting, and hands-on projects designed for the modern workplace.",
    highlights: [
      "Advanced Excel",
      "Power BI Fundamentals",
      "Dashboard Development",
      "Business Reporting",
      "Data Analysis",
      "Real-World Projects"
    ],
    cta: "Notify Me",
    href: "/contact"
  }
];

const homeProgrammes = [
  {
    title: "HireAble Programme",
    category: "Interview Communication",
    description:
      "Become interview-ready and workplace-ready through our flagship career acceleration programme.",
    highlights: ["Express", "Boost", "Plus", "Elite"],
    href: "/hireable",
    cta: "Explore HireAble",
    status: "Primary"
  },
  {
    title: "Leadership Upskill",
    category: "Leadership",
    description:
      "Designed for emerging and experienced professionals looking to lead with confidence, solve business problems, and work smarter using modern workplace tools.",
    highlights: [
      "AI for Leaders",
      "Business Case Studies",
      "Corporate Problem Solving",
      "Decision Making",
      "Productivity & Workplace Excellence"
    ],
    href: "/contact",
    cta: "Get in Touch",
    status: "Coming Soon"
  },
  {
    title: "Excel & Power BI Essentials",
    category: "Analytics",
    description:
      "Build practical analytical skills through hands-on Excel and Power BI training designed for today's workplace.",
    highlights: [
      "Excel Fundamentals",
      "Dashboards & Reporting",
      "Power BI Basics",
      "Business Analytics",
      "Real-World Projects"
    ],
    href: "/contact",
    cta: "Notify Me",
    status: "Coming Soon"
  }
];

const companyLogos = [
  { alt: "Accenture", className: "scale-[1]", src: accentureLogo },
  { alt: "UST", className: "scale-[1.18]", src: ustLogo },
  { alt: "Toska", className: "scale-[1.45]", src: toskaLogo },
  { alt: "HTI", className: "scale-[1.08]", src: htiLogo },
  { alt: "Purple Health", className: "scale-[1.05]", src: purpleHealthLogo },
  { alt: "My Shopp", className: "scale-[1.35]", src: myShoppLogo },
  { alt: "RUK Cabs", className: "scale-[1.24]", src: rukCabsLogo },
  { alt: "Sarens NASS", className: "scale-[1.25]", src: sarensNassLogo }
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
      "YAA is the EdTech wing of The Closing Gap, helping students and early-career professionals build communication, interview, and workplace skills."
  },
  courses: {
    title: "Programs | YAA",
    description:
      "See YAA programmes for interview communication, workplace skills, and career acceleration."
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
      { rootMargin: "0px", threshold }
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
  const { ref, isInView, canAnimate } = useInViewOnce<HTMLSpanElement>(0.1);
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

function StatText({ text }: { text: string }) {
  const match = text.match(/^(\d+(?:\.\d+)?)(.*)$/);

  if (!match) return <>{text}</>;

  return (
    <CountUpStat
      decimals={match[1].includes(".") ? 1 : 0}
      end={Number(match[1])}
      suffix={match[2]}
    />
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
        <p className="font-display text-[32px] font-extrabold text-[#111827]">
          <CountUpStat end={150} suffix="+" />
        </p>
      </div>

      <div className="mt-3 rounded-[16px] bg-white p-5 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:absolute sm:-right-2 sm:top-1/2 sm:mt-0">
        <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#ffee0f] text-[#111827]">
          <Target className="h-6 w-6 stroke-[1.5]" />
        </div>
        <p className="text-[13px] font-semibold text-[#4b5563]">Mock sessions</p>
        <p className="font-display text-[32px] font-extrabold text-[#111827]">
          <CountUpStat end={2000} suffix="+" />
        </p>
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
              For Students, Freshers &amp; Early-Career Professionals
            </div>
            <h1 className="max-w-full break-words font-display text-[36px] font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:max-w-[690px] sm:text-[60px] lg:text-[68px]">
              Performance gets you hired.
            </h1>
            <p className="mt-6 max-w-[600px] break-words text-[17px] font-medium leading-8 text-[#4b5563]">
              YAA (Your Added Advantage) is the EdTech wing of The Closing Gap,
              helping students and early-career professionals build the
              communication, interview, and workplace skills employers truly
              value. Through our HireAble Career Acceleration Programmes, we
              prepare you to confidently step into interviews, workplaces, and
              your career.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-7 py-4 text-[15px] font-extrabold text-white shadow-[0_18px_44px_rgba(120,134,251,0.26)] transition hover:bg-[#7886fb] sm:w-auto"
                href="/hireable"
              >
                Explore HireAble
                <ArrowRight className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[8px] border border-[#dfe3ff] bg-white px-5 py-3 text-[15px] font-bold text-[#111827] transition hover:border-[#7886fb] hover:text-[#7886fb] sm:w-auto sm:border-transparent sm:px-2"
                href={talkHref}
              >
                <MessageCircle className="h-6 w-6 stroke-[1.5] text-[#7886fb]" />
                Book a Free Career Consultation
              </a>
            </div>
          </motion.div>
          <Reveal className="min-w-0" delay={120}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <TrustStrip />
      <TrustIntro />

      <AboutBand />
      <HomepageBreak />
      <FeaturedProgrammes />
    </>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-[#e3e6ff] bg-white">
      <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-5 text-center font-display text-[22px] font-extrabold leading-tight text-[#111827] sm:text-[28px]">
          YAA learners have gone on to work with organizations such as
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
                  className={cn("h-8 w-full object-contain opacity-75 transition duration-300 hover:opacity-100", logo.className)}
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

function TrustIntro() {
  const trustCards = [
    {
      icon: CheckCircle2,
      title: "Backed by an ISO-Certified Organization"
    },
    {
      icon: Target,
      title: "Interview-Focused Career Programmes"
    },
    {
      icon: BriefcaseBusiness,
      title: "Mentors with 10+ Years of Corporate Experience"
    },
    {
      icon: GraduationCap,
      title: "Industry-Relevant Practical Learning"
    }
  ];

  return (
    <section className="bg-[#f9fafb] py-16">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal>
          <div>
            <p className="mb-4 text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
              Why YAA
            </p>
            <p className="max-w-[720px] font-display text-[28px] font-extrabold leading-tight text-[#111827] sm:text-[36px]">
              YAA is the EdTech wing of The Closing Gap, built to bridge
              the gap between education and employability.
            </p>
            <p className="mt-5 max-w-[760px] text-[17px] font-semibold leading-8 text-[#4b5563]">
              Our programmes are designed and delivered by professionals with
              corporate experience, helping students become interview-ready and
              workplace-ready through practical learning - not just theory.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {trustCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal className="h-full" delay={index * 80} key={card.title}>
                <div className="h-full rounded-[14px] border border-[#e3e6ff] bg-white p-5 shadow-sm">
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                    <Icon className="h-5 w-5 stroke-[1.5]" />
                  </span>
                  <p className="font-display text-[19px] font-extrabold leading-snug text-[#111827]">
                    {card.title}
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

function AboutBand() {
  const stats = [
    { end: 150, suffix: "+", label: "Students trained" },
    { end: 100, suffix: "+", label: "Hours of live learning delivered" },
    { end: 2000, suffix: "+", label: "Mock sessions completed" },
    { end: 4.9, suffix: "/5", decimals: 1, label: "Learner rating" }
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 max-w-[920px]">
            <p className="mb-4 text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
              OUR APPROACH
            </p>
            <h2 className="font-display text-[40px] font-extrabold leading-tight text-[#111827] sm:text-[54px]">
              More Than an EdTech Platform. A Career Partner.
            </h2>
            <p className="mt-5 text-[17px] font-semibold leading-8 text-[#4b5563]">
              YAA (Your Added Advantage) is the EdTech wing of The Closing Gap,
              created to bridge the gap between academic learning and real-world
              employability. Through our HireAble Career Acceleration
              Programmes, we help students build the confidence, communication,
              interview skills, and workplace readiness needed to succeed in
              today&apos;s competitive job market.
            </p>
          </div>
        </Reveal>

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="min-w-0">
          <div className="relative">
            <div className="absolute -left-6 top-10 h-40 w-28 rounded-r-full bg-[#ffee0f]" />
            <img
              className="relative h-[430px] w-full rounded-[24px] object-cover shadow-[0_30px_80px_rgba(17,24,39,0.12)]"
              src={mentorImage}
              alt="Career mentor coaching a learner"
            />
            <div className="absolute -bottom-7 right-8 rounded-[16px] bg-white px-6 py-5 shadow-[0_24px_60px_rgba(17,24,39,0.14)]">
              <p className="font-display text-[34px] font-extrabold text-[#7886fb]">
                <CountUpStat end={100} suffix="+" />
              </p>
              <p className="max-w-[210px] text-[13px] font-bold leading-5 text-[#4b5563]">
                Hours of live learning delivered
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <div className="mb-5 inline-flex rounded-[6px] bg-[#f1f3ff] px-4 py-2 text-[14px] font-bold text-[#7886fb]">
            PRACTICAL CONFIDENCE
          </div>
          <h2 className="font-display text-[38px] font-extrabold leading-tight text-[#111827] sm:text-[48px]">
            We don&apos;t teach confidence as a quote. We build it as a skill.
          </h2>
          <p className="mt-5 max-w-[650px] text-[16px] font-medium leading-8 text-[#4b5563]">
            YAA is built for candidates who know the answer but lose the room.
            We make communication practical: structure, delivery, simulation,
            feedback, and repetition.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Reveal className="h-full" delay={index * 80} key={stat.label}>
                <div className="h-full rounded-[12px] border border-[#e3e6ff] bg-[#ffffff] p-5">
                  <p className="font-display text-[30px] font-extrabold text-[#111827]">
                    <CountUpStat
                      decimals={stat.decimals}
                      end={stat.end}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-1 text-[14px] font-bold text-[#6b7280]">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function HomepageBreak() {
  const approachSteps = [
    {
      icon: Target,
      title: "Assess",
      text: "Understand where you stand through expert evaluation and personalised guidance."
    },
    {
      icon: GraduationCap,
      title: "Accelerate",
      text: "Build confidence through practical learning, real-world exposure, and mentor support."
    },
    {
      icon: CheckCircle2,
      title: "Achieve",
      text: "Apply your skills with confidence and become truly HireAble."
    }
  ];

  return (
    <section className="bg-[#0a1b33] py-16 text-white">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#ffee0f]">
            THE HIREABLE APPROACH
          </p>
          <h2 className="max-w-[760px] font-display text-[34px] font-extrabold leading-tight sm:text-[48px]">
            Confidence isn&apos;t a mood. It comes after enough real reps.
          </h2>
          <p className="mt-6 max-w-[680px] text-[17px] font-semibold leading-8 text-white/78">
            Every HireAble programme is designed around practical learning,
            guided mentorship, and real-world application - helping you build
            the confidence employers notice.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {approachSteps.map((step, index) => {
            const Icon = step.icon;

            return (
            <Reveal delay={index * 80} key={step.title}>
              <div className="flex items-center gap-3 rounded-[14px] border border-white/15 bg-white/[0.08] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                  <Icon className="h-5 w-5 stroke-[1.5]" />
                </span>
                <span>
                  <span className="block font-display text-[20px] font-extrabold text-white">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-[14px] font-semibold leading-6 text-white/72">
                    {step.text}
                  </span>
                </span>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProgrammes() {
  const [notifyProgram, setNotifyProgram] = useState<string | null>(null);
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  function handleNotifySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();

    if (!email || !notifyProgram) return;

    const stored = window.localStorage.getItem("yaa_notify_requests");
    const requests = stored ? JSON.parse(stored) as Array<{ email: string; program: string }> : [];
    requests.push({ email, program: notifyProgram });
    window.localStorage.setItem("yaa_notify_requests", JSON.stringify(requests));
    setNotifySubmitted(true);
  }

  return (
    <section className="bg-[#ffffff] py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[15px] font-extrabold text-[#7886fb]">
              Our Programmes
            </p>
            <h2 className="max-w-[760px] font-display text-[40px] font-extrabold leading-tight text-[#111827]">
              Career-Focused Programmes. Built for Every Stage of Your Journey.
            </h2>
            <p className="mt-4 max-w-[760px] text-[16px] font-semibold leading-7 text-[#4b5563]">
              Whether you&apos;re preparing for interviews, developing workplace
              skills, or advancing your career, YAA offers practical programmes
              designed to help you stay ahead.
            </p>
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
          {homeProgrammes.map((program, index) => (
            <Reveal className="h-full" delay={index * 80} key={program.title}>
              <div
                className={cn(
                  "group flex h-full flex-col rounded-[14px] border border-[#e3e6ff] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]",
                  program.status === "Coming Soon" && "bg-[#f9fafb]"
                )}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
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
                    {program.status === "Coming Soon" ? program.status : "Flagship"}
                  </span>
                </div>
                <h3 className="font-display text-[25px] font-extrabold text-[#111827]">
                  {program.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-7 text-[#4b5563]">
                  {program.description}
                </p>
                <div className="mt-5 rounded-[12px] bg-[#f9fafb] p-4">
                  <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#6b7280]">
                    Highlights
                  </p>
                  <div className="grid gap-2">
                    {program.highlights.map((highlight) => (
                      <span
                        className="flex items-center gap-2 text-[14px] font-bold text-[#4b5563]"
                        key={highlight}
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 stroke-[1.5] text-[#7886fb]" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-end border-t border-[#e3e6ff] pt-5">
                  {program.cta === "Notify Me" ? (
                    <button
                      className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#7886fb] px-3 py-2 text-[13px] font-extrabold text-[#7886fb] transition hover:bg-[#f1f3ff]"
                      onClick={() => {
                        setNotifyProgram(program.title);
                        setNotifySubmitted(false);
                      }}
                      type="button"
                    >
                      <Bell className="h-4 w-4 stroke-[1.5]" />
                      Notify Me
                    </button>
                  ) : (
                    <a
                      className="inline-flex items-center gap-1.5 font-display text-[18px] font-extrabold text-[#7886fb]"
                      href={program.href}
                    >
                      {program.cta}
                      <ArrowRight className="h-4 w-4 stroke-[1.5]" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {notifyProgram && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-[#0a1b33]/40 px-4 backdrop-blur-sm">
          <div className="w-full max-w-[440px] rounded-[18px] border border-[#e3e6ff] bg-white p-6 shadow-[0_30px_90px_rgba(17,24,39,0.22)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
                  Launch alert
                </p>
                <h3 className="mt-2 font-display text-[28px] font-extrabold text-[#111827]">
                  {notifyProgram}
                </h3>
              </div>
              <button
                className="grid h-10 w-10 place-items-center rounded-[8px] border border-[#dfe3ff] text-[#111827]"
                onClick={() => setNotifyProgram(null)}
                type="button"
                aria-label="Close notification form"
              >
                <X className="h-5 w-5 stroke-[1.5]" />
              </button>
            </div>

            {notifySubmitted ? (
              <p className="mt-5 rounded-[12px] bg-[#f1f3ff] p-4 text-[15px] font-bold text-[#111827]">
                You&apos;re on the list. We&apos;ll email you when this program opens.
              </p>
            ) : (
              <form className="mt-5 grid gap-3" onSubmit={handleNotifySubmit}>
                <label className="grid gap-2">
                  <span className="text-[13px] font-extrabold text-[#4b5563]">Email</span>
                  <input
                    className="rounded-[8px] border border-[#dfe3ff] px-4 py-3 text-[#111827] outline-none transition focus:border-[#7886fb]"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </label>
                <button
                  className="rounded-[8px] bg-[#7886fb] px-5 py-3 text-[15px] font-extrabold text-white"
                  type="submit"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function CoursesPage() {
  const [notifyProgram, setNotifyProgram] = useState<string | null>(null);
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  function handleNotifySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();

    if (!email || !notifyProgram) return;

    const stored = window.localStorage.getItem("yaa_notify_requests");
    const requests = stored ? JSON.parse(stored) as Array<{ email: string; program: string }> : [];
    requests.push({ email, program: notifyProgram });
    window.localStorage.setItem("yaa_notify_requests", JSON.stringify(requests));
    setNotifySubmitted(true);
  }

  return (
    <>
      <PageShell
        label="Programs"
        title="Practical Programmes. Real Career Outcomes."
        description="Whether you're preparing for your first interview, developing workplace skills, or advancing your career, YAA offers practical, mentor-led programmes designed for every stage of your professional journey."
      >
        <div className="mb-8 grid gap-4 rounded-[16px] border border-[#e3e6ff] bg-[#ffffff] p-5 shadow-sm md:grid-cols-3">
          {[
            ["Learn", "Practical, mentor-led programmes designed around real career challenges."],
            ["Grow", "Build confidence, workplace skills, and industry-ready capabilities."],
            ["Succeed", "Choose the programme that matches your goals and accelerate your career."]
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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courseProgrammes.map((program, index) => {
            const isNotify = program.cta === "Notify Me";

            return (
              <Reveal className="h-full" delay={index * 80} key={program.title}>
                <article className="flex h-full flex-col rounded-[14px] border border-[#e3e6ff] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                      <BriefcaseBusiness className="h-6 w-6 stroke-[1.5]" />
                    </div>
                    {program.badge && (
                      <span className={cn(
                        "rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em]",
                        program.badge === "Coming Soon"
                          ? "bg-[#f9fafb] text-[#6b7280]"
                          : "bg-[#ffee0f] text-[#111827]"
                      )}>
                        {program.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-[25px] font-extrabold text-[#111827]">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-extrabold text-[#7886fb]">
                    {program.subtitle}
                  </p>
                  <p className="mt-4 text-[15px] font-medium leading-7 text-[#4b5563]">
                    {program.description}
                  </p>

                  {program.highlights ? (
                    <div className="mt-5 rounded-[12px] bg-[#f9fafb] p-4">
                      <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#6b7280]">
                        What you&apos;ll learn
                      </p>
                      <div className="grid gap-2">
                        {program.highlights.map((highlight) => (
                          <span className="flex items-center gap-2 text-[14px] font-bold text-[#4b5563]" key={highlight}>
                            <CheckCircle2 className="h-4 w-4 shrink-0 stroke-[1.5] text-[#7886fb]" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 grid gap-2 rounded-[12px] bg-[#f9fafb] p-4">
                      <span className="text-[13px] font-bold text-[#6b7280]">
                        Duration: <span className="text-[#111827]">{program.duration}</span>
                      </span>
                      <span className="text-[13px] font-bold text-[#6b7280]">
                        {program.price}
                      </span>
                    </div>
                  )}

                  <div className="mt-auto pt-6">
                    {isNotify ? (
                      <button
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] border border-[#7886fb] px-5 py-3 text-[14px] font-extrabold text-[#7886fb] transition hover:bg-[#f1f3ff]"
                        onClick={() => {
                          setNotifyProgram(program.title);
                          setNotifySubmitted(false);
                        }}
                        type="button"
                      >
                        <Bell className="h-4 w-4 stroke-[1.5]" />
                        Notify Me
                      </button>
                    ) : (
                      <a
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#7886fb] px-5 py-3 text-[14px] font-extrabold text-white shadow-[0_14px_32px_rgba(120,134,251,0.22)] transition hover:bg-[#6978f7]"
                        href={program.href}
                      >
                        {program.cta}
                        <ArrowRight className="h-4 w-4 stroke-[1.5]" />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 rounded-[18px] bg-[#0a1b33] p-7 text-white md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="font-display text-[30px] font-extrabold leading-tight">
              Not Sure Which Programme Is Right for You?
            </h2>
            <p className="mt-3 max-w-[760px] text-[16px] font-semibold leading-7 text-white/78">
              Book a free career consultation, and we&apos;ll help you choose the programme that best aligns with your goals, experience, and aspirations.
            </p>
          </div>
          <a
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-white px-6 py-4 text-[15px] font-extrabold text-[#111827] md:mt-0 md:w-auto"
            href={talkHref}
          >
            Book a Career Consultation
            <ArrowRight className="h-4 w-4 stroke-[1.5]" />
          </a>
        </div>
      </PageShell>

      {notifyProgram && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-[#0a1b33]/40 px-4 backdrop-blur-sm">
          <div className="w-full max-w-[440px] rounded-[18px] border border-[#e3e6ff] bg-white p-6 shadow-[0_30px_90px_rgba(17,24,39,0.22)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
                  Launch alert
                </p>
                <h3 className="mt-2 font-display text-[28px] font-extrabold text-[#111827]">
                  {notifyProgram}
                </h3>
              </div>
              <button
                aria-label="Close notification form"
                className="grid h-10 w-10 place-items-center rounded-[8px] border border-[#dfe3ff] text-[#111827]"
                onClick={() => setNotifyProgram(null)}
                type="button"
              >
                <X className="h-5 w-5 stroke-[1.5]" />
              </button>
            </div>

            {notifySubmitted ? (
              <p className="mt-5 rounded-[12px] bg-[#f1f3ff] p-4 text-[15px] font-bold text-[#111827]">
                You&apos;re on the list. We&apos;ll email you when this programme opens.
              </p>
            ) : (
              <form className="mt-5 grid gap-3" onSubmit={handleNotifySubmit}>
                <label className="grid gap-2">
                  <span className="text-[13px] font-extrabold text-[#4b5563]">Email</span>
                  <input
                    className="rounded-[8px] border border-[#dfe3ff] px-4 py-3 text-[#111827] outline-none transition focus:border-[#7886fb]"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </label>
                <button
                  className="rounded-[8px] bg-[#7886fb] px-5 py-3 text-[15px] font-extrabold text-white"
                  type="submit"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function AboutPage() {
  return (
    <PageShell
      label="About YAA"
      title="Building Careers. Creating Added Advantage."
      description="YAA (Your Added Advantage) is the EdTech wing of The Closing Gap, helping students and professionals bridge the gap between education and employability through practical, career-focused learning."
    >
      <div className="mb-8 grid gap-8 rounded-[18px] border border-[#e3e6ff] bg-[#ffffff] p-7 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
            <GraduationCap className="h-7 w-7 stroke-[1.5]" />
          </span>
          <h2 className="font-display text-[32px] font-extrabold leading-tight text-[#111827]">
            Why YAA Exists
          </h2>
        </div>
        <p className="text-[16px] font-medium leading-8 text-[#4b5563]">
          We believe career success is built through practical skills, industry
          mentorship, and real-world preparation - not just qualifications. Too
          many talented people miss opportunities because traditional education
          doesn&apos;t prepare them for real careers. YAA was created to bridge that
          gap with practical, career-focused programmes that help learners
          become workplace-ready.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["Industry-Led Learning", "Learn from professionals with real corporate experience who understand today's workplace expectations."],
          ["Practical Learning", "Interactive sessions, practical activities, mentorship, and real-world application - not just theory."],
          ["Career-Focused Outcomes", "Every programme is designed to build confidence, workplace readiness, and long-term career growth."]
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

      <div className="mt-14 rounded-[20px] bg-[#f9fafb] p-6 sm:p-8">
        <div className="mb-8 max-w-[760px]">
          <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#7886fb]">
            Student trust
          </p>
          <h2 className="font-display text-[34px] font-extrabold leading-tight text-[#111827] sm:text-[44px]">
            Why Students Trust YAA
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "EdTech Wing of The Closing Gap",
            "Backed by an ISO-Certified Organization",
            "Mentors with 10+ Years of Corporate Experience",
            "Career-Focused Learning",
            "Growing Learning Community",
            "Practical. Personalised. Professional."
          ].map((item, index) => (
            <Reveal className="h-full" delay={index * 80} key={item}>
              <div className="h-full rounded-[14px] border border-[#e3e6ff] bg-white p-5 shadow-sm">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                  <CheckCircle2 className="h-5 w-5 stroke-[1.5]" />
                </span>
                <p className="font-display text-[20px] font-extrabold leading-snug text-[#111827]">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
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
      title="Let's Talk About Your Career Goals."
      description="Whether you're preparing for interviews, exploring our programmes, or unsure where to begin, our team is here to guide you towards the right learning path."
    >
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {[
          "Have a question about our programmes?",
          "Looking for career guidance?",
          "Need help choosing the right programme?",
          "We're happy to help."
        ].map((item, index) => (
          <Reveal className="h-full" delay={index * 80} key={item}>
            <div className="flex h-full items-center gap-3 rounded-[14px] border border-[#e3e6ff] bg-white p-5 shadow-sm">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f1f3ff] text-[#7886fb]">
                <CheckCircle2 className="h-5 w-5 stroke-[1.5]" />
              </span>
              <p className="text-[15px] font-extrabold leading-6 text-[#111827]">
                {item}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[16px] bg-[#7886fb] p-8 text-white">
          <span className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-white/15 text-white">
            <Mail className="h-7 w-7 stroke-[1.5]" />
          </span>
          <h3 className="font-display text-[32px] font-extrabold">Talk to YAA</h3>
          <p className="mt-4 text-[16px] leading-8 text-white/80">
            One conversation is enough to understand your goals, your current
            gap, and the programme that fits you best.
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
          <h2 className="mb-5 font-display text-[30px] font-extrabold text-[#111827]">
            How can we help you?
          </h2>
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
                Tell us about your goals
              </span>
              <textarea
                className="min-h-28 rounded-[8px] border border-[#e3e6ff] bg-[#ffffff] px-4 py-4 text-[#111827] outline-none transition focus:border-[#7886fb]"
                name="challenge"
                placeholder="Tell us about your goals or how we can help you..."
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

function Footer({ route }: { route: RouteName }) {
  return (
    <footer className="bg-[#0a1b33] text-white">
      <div className="bg-[#7886fb]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="font-display text-[30px] font-extrabold leading-tight sm:text-[40px]">
            {route === "home" || route === "courses" || route === "about" || route === "contact"
              ? "Ready to Build Your Added Advantage?"
              : "Ready to fix your delivery?"}
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
      <Footer route={route} />
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
