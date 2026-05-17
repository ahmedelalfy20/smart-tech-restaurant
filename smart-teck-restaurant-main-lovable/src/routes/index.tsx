import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
  Utensils,
  Smartphone,
  Target,
  Ruler,
  CheckCircle2,
  Link2,
  Clock,
  Search,
  Palette,
  Code2,
  TestTube,
  Wallet,
  CalendarDays,
  Users,
  AlertTriangle,
  BookOpen,
  Briefcase,
  ArrowRight,
  Play,
  TrendingUp,
  TrendingDown,
  Shield,
  Zap,
  Bell,
  CreditCard,
  QrCode,
  Menu,
  Package,
  CheckCircle,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUT Smart Tech Restaurant — Interactive Presentation" },
      {
        name: "description",
        content:
          "An interactive presentation for the SUT Smart Tech Restaurant — a mobile app and self-service kiosks that end campus cafeteria queues and waste.",
      },
      { property: "og:title", content: "SUT Smart Tech Restaurant" },
      {
        property: "og:description",
        content:
          "Smart Eco-Tech presentation: problem, solution, SMART objectives, methodology, budget and Team Alpha.",
      },
    ],
  }),
  component: Presentation,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80";
const CHAOS_IMG =
  "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&q=80";
const SMART_IMG =
  "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=1200&q=80";
const TEAM_BG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80";

const ACCENT = "#E67E22";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasAnimated]);

  return <>{count}{suffix}</>;
}

// Mouse Glow Effect
function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 h-64 w-64 rounded-full opacity-20 blur-3xl transition-all duration-200"
      style={{
        background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
        left: mousePosition.x - 128,
        top: mousePosition.y - 128,
      }}
    />
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-30 ${className}`}
      style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
    />
  );
}

function SlideShell({
  children,
  bgImage,
  id,
}: {
  children: React.ReactNode;
  bgImage?: string;
  id: string;
}) {
  return (
    <section
      id={id}
      className="snap-start snap-always relative h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-12 py-8"
      style={{ scrollSnapStop: "always" }}
    >
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <Glow className="-top-32 -left-32 h-[28rem] w-[28rem]" />
      <Glow className="-bottom-40 -right-32 h-[32rem] w-[32rem]" />
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center justify-center py-16">{children}</div>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`rounded-2xl bg-white/5 backdrop-blur-md border border-[#E67E22]/20 p-6 shadow-[0_8px_32px_-12px_rgba(230,126,34,0.25)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transforming campus dining with smart technology";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <SlideShell id="slide-1" bgImage={HERO_IMG}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        variants={stagger}
        className="flex flex-col items-center text-center"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-[#E67E22]/40 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-[#E67E22]"
        >
          <Utensils className="h-3.5 w-3.5" /> SUT · HUM 231
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F8FAFC]"
          style={{ fontFamily: "'Space Grotesk', Inter, system-ui, sans-serif" }}
        >
          SUT <span style={{ color: ACCENT }}>Smart Tech</span> Restaurant
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-6 h-8 text-base md:text-xl text-[#E67E22] font-mono"
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-base md:text-lg text-[#F8FAFC]/70 leading-relaxed"
        >
          A mobile app & self-service kiosks ending long queues and food waste
          in our campus cafeteria — a project by Team Alpha.
        </motion.p>

        {/* Animated Stats */}
        <motion.div
          variants={fadeUp}
          className="mt-10 grid grid-cols-3 gap-6 md:gap-12"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: ACCENT, textShadow: `0 0 30px ${ACCENT}80` }}>
              <AnimatedCounter end={70} suffix="%" />
            </div>
            <div className="mt-2 text-xs md:text-sm text-[#F8FAFC]/60 uppercase tracking-wider">
              Fewer Complaints
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: ACCENT, textShadow: `0 0 30px ${ACCENT}80` }}>
              <AnimatedCounter end={40} suffix="%" />
            </div>
            <div className="mt-2 text-xs md:text-sm text-[#F8FAFC]/60 uppercase tracking-wider">
              Faster Service
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: ACCENT, textShadow: `0 0 30px ${ACCENT}80` }}>
              <AnimatedCounter end={12} suffix=" Weeks" />
            </div>
            <div className="mt-2 text-xs md:text-sm text-[#F8FAFC]/60 uppercase tracking-wider">
              Timeline
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#slide-2"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: ACCENT,
              boxShadow: `0 0 40px ${ACCENT}80, 0 0 80px ${ACCENT}40`,
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Begin Presentation
            </motion.span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[#F8FAFC] border border-[#E67E22]/40 bg-white/5 backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10"
          >
            <Play className="h-4 w-4" />
            Live Demo
          </button>
        </motion.div>

        <motion.span
          variants={fadeUp}
          className="mt-6 text-xs uppercase tracking-[0.3em] text-[#F8FAFC]/40"
        >
          Scroll · Use arrows below
        </motion.span>
        
        {/* Extra Bottom Spacing to Prevent Navigation Overlap */}
        <div className="h-32 md:h-24" />
      </motion.div>
    </SlideShell>
  );
}

function Hook() {
  const [isInView, setIsInView] = useState(false);

  return (
    <SlideShell id="slide-2">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#E67E22] rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              opacity: 0.2,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
      >
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E67E22]">02 · The Hook</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#F8FAFC]">
            From Chaos to Clarity
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-6">
          {/* Animated Neon Line Connector */}
          <motion.div
            className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 z-20"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              background: `linear-gradient(90deg, #ef4444, ${ACCENT})`,
              boxShadow: `0 0 20px ${ACCENT}, 0 0 40px ${ACCENT}`,
            }}
          >
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: ACCENT, boxShadow: `0 0 15px ${ACCENT}` }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* LEFT CARD - CURRENT CHAOS */}
          <motion.div
            variants={fadeUp}
          >
            <motion.div
              animate={{
                x: [0, -2, 2, -2, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <GlassCard className="h-full border-red-500/30 relative overflow-hidden">
                {/* Flickering Red Glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: `radial-gradient(circle at 50% 50%, #ef4444, transparent 70%)`,
                  }}
                />

                <div
                  className="rounded-xl h-44 md:h-56 bg-cover bg-center mb-5 relative overflow-hidden"
                  style={{ backgroundImage: `url(${CHAOS_IMG})` }}
                >
                  <div className="absolute inset-0 bg-red-900/40" />
                  
                  {/* Animated Queue Icon */}
                  <motion.div
                    className="absolute top-4 right-4 bg-red-500/20 backdrop-blur-sm rounded-full p-3 border border-red-500/30"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Users className="h-6 w-6 text-red-400" />
                  </motion.div>

                  {/* Loading Animation */}
                  <motion.div
                    className="absolute bottom-4 left-4 flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-red-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                <div className="flex items-center gap-2 text-red-400 text-xs uppercase tracking-widest">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <AlertTriangle className="h-4 w-4" />
                  </motion.div>
                  Current Chaos
                </div>

                <h3 className="mt-3 text-2xl font-semibold text-[#F8FAFC]">
                  Long queues. Wasted food. Frustrated students.
                </h3>
                
                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <motion.div
                    className="bg-red-500/10 rounded-lg p-3 border border-red-500/20"
                    whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.4)" }}
                  >
                    <div className="flex items-center gap-2 text-red-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-2xl font-bold">
                        <AnimatedCounter end={20} suffix=" min" />
                      </span>
                    </div>
                    <div className="text-xs text-[#F8FAFC]/60 mt-1">Average Wait</div>
                  </motion.div>
                  <motion.div
                    className="bg-red-500/10 rounded-lg p-3 border border-red-500/20"
                    whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.4)" }}
                  >
                    <div className="flex items-center gap-2 text-red-400">
                      <TrendingDown className="h-4 w-4" />
                      <span className="text-2xl font-bold">
                        <AnimatedCounter end={70} suffix="%" />
                      </span>
                    </div>
                    <div className="text-xs text-[#F8FAFC]/60 mt-1">Complaints</div>
                  </motion.div>
                </div>

                <ul className="mt-5 space-y-2.5 text-[#F8FAFC]/70 text-sm">
                  {[
                    "20+ minute waits between classes",
                    "Overproduction & daily food waste",
                    "No way to know what's available",
                    "Cash-only friction at the counter",
                  ].map((text, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD - SMART SOLUTION */}
          <motion.div
            variants={fadeUp}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="h-full border-[#E67E22]/40 relative overflow-hidden">
                {/* Animated Orange Glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: [0.1, 0.3, 0.1] } : { opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${ACCENT}, transparent 70%)`,
                  }}
                />

                {/* Pulsing Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      `0 0 20px ${ACCENT}40`,
                      `0 0 40px ${ACCENT}80`,
                      `0 0 20px ${ACCENT}40`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div
                  className="rounded-xl h-44 md:h-56 bg-cover bg-center mb-5 relative overflow-hidden"
                  style={{ backgroundImage: `url(${SMART_IMG})` }}
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ background: `linear-gradient(135deg, ${ACCENT}20, transparent)` }}
                  />
                  
                  {/* Animated Success Icon */}
                  <motion.div
                    className="absolute top-4 right-4 backdrop-blur-sm rounded-full p-3 border"
                    style={{
                      backgroundColor: `${ACCENT}20`,
                      borderColor: `${ACCENT}40`,
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CheckCircle className="h-6 w-6" style={{ color: ACCENT }} />
                  </motion.div>

                  {/* Success Particles */}
                  {isInView && Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                      initial={{
                        x: "50%",
                        y: "50%",
                        scale: 0,
                      }}
                      animate={{
                        x: `${50 + (Math.random() - 0.5) * 100}%`,
                        y: `${50 + (Math.random() - 0.5) * 100}%`,
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: ACCENT }}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Smartphone className="h-4 w-4" />
                  </motion.div>
                  Smart Solution
                </div>

                <h3 className="mt-3 text-2xl font-semibold text-[#F8FAFC]">
                  Order ahead. Pay digitally. Walk in, pick up.
                </h3>
                
                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <motion.div
                    className="rounded-lg p-3 border"
                    style={{ backgroundColor: `${ACCENT}10`, borderColor: `${ACCENT}40` }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 20px ${ACCENT}60`,
                    }}
                  >
                    <div className="flex items-center gap-2" style={{ color: ACCENT }}>
                      <Zap className="h-4 w-4" />
                      <span className="text-2xl font-bold">
                        <AnimatedCounter end={5} suffix=" min" />
                      </span>
                    </div>
                    <div className="text-xs text-[#F8FAFC]/60 mt-1">Expected Wait</div>
                  </motion.div>
                  <motion.div
                    className="rounded-lg p-3 border"
                    style={{ backgroundColor: `${ACCENT}10`, borderColor: `${ACCENT}40` }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 20px ${ACCENT}60`,
                    }}
                  >
                    <div className="flex items-center gap-2" style={{ color: ACCENT }}>
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-2xl font-bold">
                        <AnimatedCounter end={95} suffix="%" />
                      </span>
                    </div>
                    <div className="text-xs text-[#F8FAFC]/60 mt-1">Satisfaction</div>
                  </motion.div>
                </div>

                <ul className="mt-5 space-y-2.5 text-[#F8FAFC]/80 text-sm">
                  {[
                    "Mobile app with live menu & wait times",
                    "Self-service kiosks for instant ordering",
                    "Data-driven prep to slash waste",
                    "Cashless, contactless, queueless",
                  ].map((text, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.4, type: "spring" }}
                      >
                        <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                      </motion.div>
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Extra Bottom Spacing to Prevent Navigation Overlap */}
        <div className="h-32 md:h-24" />
      </motion.div>
    </SlideShell>
  );
}

const SMART = [
  {
    icon: Target,
    letter: "S",
    title: "Specific",
    text: "Launch a unified ordering app and 3 self-service kiosks at the SUT cafeteria.",
  },
  {
    icon: Ruler,
    letter: "M",
    title: "Measurable",
    text: "Cut average wait time by 60% and food waste by 40% in the first semester.",
  },
  {
    icon: CheckCircle2,
    letter: "A",
    title: "Achievable",
    text: "Built within a 12,000 EGP budget using accessible tools and student talent.",
  },
  {
    icon: Link2,
    letter: "R",
    title: "Relevant",
    text: "Directly aligned with SUT's mission of sustainability and smart campus innovation.",
  },
  {
    icon: Clock,
    letter: "T",
    title: "Time-bound",
    text: "Full pilot deployed and evaluated within a 12-week academic timeline.",
  },
];

function Smart() {
  return (
    <SlideShell id="slide-3">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E67E22]">03 · Objectives</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#F8FAFC]">
            SMART Objectives
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SMART.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={fadeUp}>
                <GlassCard className="h-full text-center">
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold"
                    style={{
                      backgroundColor: `${ACCENT}20`,
                      color: ACCENT,
                      boxShadow: `0 0 30px ${ACCENT}40`,
                    }}
                  >
                    {s.letter}
                  </div>
                  <Icon className="mx-auto mt-4 h-5 w-5 text-[#F8FAFC]/60" />
                  <h3 className="mt-2 text-lg font-semibold text-[#F8FAFC]">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#F8FAFC]/65">{s.text}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
        
        {/* Extra Bottom Spacing to Prevent Navigation Overlap */}
        <div className="h-32 md:h-24" />
      </motion.div>
    </SlideShell>
  );
}

const STAGES = [
  { 
    icon: Search, 
    title: "Research", 
    weeks: "Weeks 1–3", 
    text: "Student surveys, cafeteria observation, data collection.",
    completion: 100,
  },
  { 
    icon: Palette, 
    title: "Design", 
    weeks: "Weeks 4–6", 
    text: "UI/UX wireframes, kiosk interface, user flow planning.",
    completion: 100,
  },
  { 
    icon: Code2, 
    title: "Code", 
    weeks: "Weeks 7–10", 
    text: "App development, database integration, kiosk system coding.",
    completion: 75,
  },
  { 
    icon: TestTube, 
    title: "Test", 
    weeks: "Weeks 11–12", 
    text: "Beta testing, bug fixing, user feedback.",
    completion: 25,
  },
];

function Methodology() {
  const [lineProgress, setLineProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setLineProgress(100);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <SlideShell id="slide-4">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.4 }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
      >
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E67E22]">04 · Methodology</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#F8FAFC]">Waterfall Timeline</h2>
          <p className="mt-2 text-sm text-[#F8FAFC]/60">Structured Development Process</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 right-0 top-9 h-0.5 hidden md:block overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}80, ${ACCENT})`,
                boxShadow: `0 0 20px ${ACCENT}, 0 0 40px ${ACCENT}60`,
              }}
              initial={{ width: "0%" }}
              animate={{ width: isInView ? "100%" : "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Milestone Dots Animation */}
          <div className="absolute left-0 right-0 top-9 hidden md:flex justify-between px-9">
            {STAGES.map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full -translate-y-1/2"
                style={{
                  backgroundColor: ACCENT,
                  boxShadow: `0 0 15px ${ACCENT}`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 0.5 + i * 0.3, duration: 0.4 }}
              >
                <motion.div
                  className="w-full h-full rounded-full"
                  animate={{
                    boxShadow: [
                      `0 0 10px ${ACCENT}`,
                      `0 0 25px ${ACCENT}`,
                      `0 0 10px ${ACCENT}`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  custom={i}
                  className="relative"
                >
                  {/* Phase Icon Circle */}
                  <motion.div
                    className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 relative z-10 bg-[#1A1A1A] group"
                    style={{ borderColor: ACCENT }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Pulsing Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          `0 0 20px ${ACCENT}40`,
                          `0 0 40px ${ACCENT}80`,
                          `0 0 20px ${ACCENT}40`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />

                    {/* Animated Icon */}
                    <motion.div
                      animate={{
                        rotate: s.title === "Design" ? [0, 360] : 0,
                        scale: s.title === "Test" ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: s.title === "Design" ? 20 : 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Icon className="h-7 w-7" style={{ color: ACCENT }} />
                    </motion.div>

                    {/* Typing Effect for Code Phase */}
                    {s.title === "Code" && (
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Phase Card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: `0 20px 40px ${ACCENT}30`,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GlassCard className="mt-6 text-center relative overflow-hidden group">
                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${ACCENT}20, transparent 70%)`,
                        }}
                      />

                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                        style={{
                          border: `1px solid ${ACCENT}60`,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <p className="text-xs uppercase tracking-widest text-[#F8FAFC]/40">
                        Phase {i + 1}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-[#F8FAFC]">{s.title}</h3>
                      <p className="text-xs mt-1" style={{ color: ACCENT }}>{s.weeks}</p>

                      {/* Completion Progress */}
                      <div className="mt-3 mb-3">
                        <div className="flex justify-between text-xs text-[#F8FAFC]/60 mb-1">
                          <span>Progress</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.2 + 0.5 }}
                          >
                            <AnimatedCounter end={s.completion} suffix="%" duration={1.5} />
                          </motion.span>
                        </div>
                        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${ACCENT}, #D48B4B)` }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.completion}%` }}
                            transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-[#F8FAFC]/70 leading-relaxed">{s.text}</p>

                      {/* Glass Reflection */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: "linear-gradient(180deg, white, transparent)",
                        }}
                      />

                      {/* Success Pulse for Test Phase */}
                      {s.title === "Test" && (
                        <motion.div
                          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </GlassCard>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Extra Bottom Spacing to Prevent Navigation Overlap */}
        <div className="h-32 md:h-24" />
      </motion.div>
    </SlideShell>
  );
}

function Budget() {
  const [isInView, setIsInView] = useState(false);
  
  const budgetData = [
    { 
      category: "Hardware", 
      amount: 8000, 
      percentage: 67, 
      color: ACCENT,
      description: "2 touch-screen kiosks for cafeteria ordering.",
      icon: Smartphone,
    },
    { 
      category: "Cloud Hosting", 
      amount: 2500, 
      percentage: 21, 
      color: "#F97316",
      description: "Annual cloud database hosting and backend services.",
      icon: CalendarDays,
    },
    { 
      category: "Marketing", 
      amount: 500, 
      percentage: 4, 
      color: "#FB923C",
      description: "Posters and promotional materials to encourage app usage.",
      icon: Users,
    },
    { 
      category: "Miscellaneous", 
      amount: 1000, 
      percentage: 8, 
      color: "#FDBA74",
      description: "Installation tools, testing resources, and backup expenses.",
      icon: Package,
    },
  ];

  const totalBudget = 12000;

  return (
    <SlideShell id="slide-5">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.3 }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
      >
        <motion.div variants={fadeUp} className="text-center mb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E67E22]">05 · Resources</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-bold text-[#F8FAFC]">
            Budget & Cost Analysis
          </h2>
          <motion.div
            className="mt-2 text-lg md:text-xl font-semibold"
            style={{ color: ACCENT }}
            animate={{
              textShadow: [
                `0 0 20px ${ACCENT}60`,
                `0 0 40px ${ACCENT}80`,
                `0 0 20px ${ACCENT}60`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Estimated Budget: <AnimatedCounter end={totalBudget} duration={2} /> EGP
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
          {/* LEFT SIDE - Pie Chart */}
          <motion.div variants={fadeUp} className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Animated Pie Chart */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                {/* Background Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="35"
                />
                
                {/* Animated Segments */}
                {budgetData.map((item, index) => {
                  const prevPercentages = budgetData
                    .slice(0, index)
                    .reduce((sum, d) => sum + d.percentage, 0);
                  const circumference = 2 * Math.PI * 70;
                  const segmentLength = (item.percentage / 100) * circumference;
                  const offset = (prevPercentages / 100) * circumference;

                  return (
                    <motion.circle
                      key={item.category}
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="35"
                      strokeDasharray={`${segmentLength} ${circumference}`}
                      strokeDashoffset={-offset}
                      initial={{ strokeDasharray: `0 ${circumference}` }}
                      animate={isInView ? { strokeDasharray: `${segmentLength} ${circumference}` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                      style={{
                        filter: `drop-shadow(0 0 10px ${item.color})`,
                      }}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  );
                })}

                {/* Center Text */}
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  className="text-xl font-bold fill-[#F8FAFC]"
                  transform="rotate(90 100 100)"
                >
                  12,000
                </text>
                <text
                  x="100"
                  y="110"
                  textAnchor="middle"
                  className="text-xs fill-[#F8FAFC]/60"
                  transform="rotate(90 100 100)"
                >
                  EGP
                </text>
              </svg>

              {/* Legend */}
              <div className="absolute -bottom-12 left-0 right-0 flex flex-wrap justify-center gap-3">
                {budgetData.map((item, index) => (
                  <motion.div
                    key={item.category}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 0 8px ${item.color}`,
                      }}
                    />
                    <span className="text-xs text-[#F8FAFC]/70">{item.category}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Budget Cards */}
          <div className="space-y-1.5">
            {budgetData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.category}
                  variants={fadeUp}
                  custom={index}
                >
                  <motion.div
                    whileHover={{
                      y: -2,
                      boxShadow: `0 10px 25px ${item.color}30`,
                    }}
                  >
                    <GlassCard className="relative overflow-hidden group p-2">
                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${item.color}20, transparent 70%)`,
                        }}
                      />

                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                        style={{
                          border: `1px solid ${item.color}60`,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="flex items-start gap-2">
                        {/* Icon */}
                        <motion.div
                          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: `${item.color}20`,
                            border: `1px solid ${item.color}40`,
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 6px ${item.color}40`,
                              `0 0 12px ${item.color}60`,
                              `0 0 6px ${item.color}40`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        >
                          <Icon className="h-4 w-4" style={{ color: item.color }} />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <h3 className="text-xs font-semibold text-[#F8FAFC]">
                              {item.category}
                            </h3>
                            <motion.div
                              className="text-sm font-bold flex-shrink-0 ml-2"
                              style={{ color: item.color }}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                            >
                              <AnimatedCounter end={item.amount} duration={1.5} /> EGP
                            </motion.div>
                          </div>

                          <p className="text-[10px] text-[#F8FAFC]/70 mb-1 line-clamp-1">
                            {item.description}
                          </p>

                          {/* Progress Bar */}
                          <div className="space-y-0.5">
                            <div className="flex justify-between text-[9px] text-[#F8FAFC]/60">
                              <span>Budget Allocation</span>
                              <span>{item.percentage}%</span>
                            </div>
                            <div className="h-0.5 rounded-full bg-white/5 overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                                  boxShadow: `0 0 6px ${item.color}60`,
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.percentage}%` }}
                                transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Glass Reflection */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: "linear-gradient(180deg, white, transparent)",
                        }}
                      />
                    </GlassCard>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Extra Bottom Spacing to Prevent Navigation Overlap */}
        <div className="h-32 md:h-24" />
      </motion.div>
    </SlideShell>
  );
}

function SmartAppFeatures() {
  const [isInView, setIsInView] = useState(false);

  return (
    <SlideShell id="slide-features">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.2 }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
        className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center h-full pt-10"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-4 md:mb-10 shrink-0">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-8" style={{ background: `linear-gradient(to right, transparent, ${ACCENT})` }} />
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase" style={{ color: ACCENT }}>06 · Technology</p>
            <div className="h-px w-8" style={{ background: `linear-gradient(to left, transparent, ${ACCENT})` }} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC]">
            Smart App <span style={{ color: ACCENT }}>Features</span>
          </h2>
          <p className="mt-3 text-sm text-[#F8FAFC]/60">
            Enhancing the Campus Dining Experience Through Technology
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="relative w-full flex-1 flex items-center justify-center min-h-[500px]">
          
          {/* Central Phone Mockup */}
          <motion.div
            variants={fadeUp}
            className="relative z-30 w-[260px] md:w-[280px] h-[520px] md:h-[560px] rounded-[40px] md:rounded-[48px] bg-[#0A0A0A] border-[6px] border-[#222] shadow-2xl overflow-hidden shrink-0"
            style={{
              boxShadow: `0 0 60px ${ACCENT}20, inset 0 0 20px rgba(255,255,255,0.05)`,
            }}
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-[#222] rounded-b-[16px] z-40 flex justify-center items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <div className="w-1 h-1 rounded-full bg-blue-500/50" />
            </div>

            {/* Status Bar */}
            <div className="absolute top-2 w-full px-5 flex justify-between items-center z-30 pointer-events-none">
              <span className="text-[10px] font-medium text-white/80">9:41</span>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-2.5 bg-white/80 rounded-[2px]" />
                <div className="w-3 h-2.5 bg-white/80 rounded-[2px]" />
              </div>
            </div>
            
            {/* Phone Screen App UI */}
            <div className="w-full h-full p-4 pt-12 md:pt-14 flex flex-col relative bg-[#111]">
               
               {/* App Header */}
               <div className="flex justify-between items-center mb-5">
                 <div>
                   <h4 className="font-bold text-white text-sm md:text-base">SUT Restaurant</h4>
                   <div className="flex items-center gap-1.5 mt-0.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
                     <span className="text-[10px] text-green-500 font-medium">Live • 12 in queue</span>
                   </div>
                 </div>
                 <div className="flex gap-2">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center relative">
                     <Bell className="w-4 h-4 text-white" />
                     <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-red-500" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hidden md:flex">
                     <Menu className="w-4 h-4 text-white" />
                   </div>
                 </div>
               </div>

               {/* Search Bar */}
               <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2 mb-5">
                 <Search className="w-4 h-4 text-white/40" />
                 <span className="text-xs text-white/40">Search for meals...</span>
                 <div className="ml-auto">
                   <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                     <div className="w-3 h-[1px] bg-white/60 mb-[3px]" />
                     <div className="w-3 h-[1px] bg-white/60 absolute" />
                     <div className="w-3 h-[1px] bg-white/60 mt-[3px]" />
                   </div>
                 </div>
               </div>

               {/* Categories or title */}
               <h5 className="text-xs font-bold text-white mb-3">Popular Meals</h5>

               {/* Menu List */}
               <div className="flex-1 overflow-hidden relative">
                 <motion.div 
                   className="space-y-3 pb-20"
                   animate={{ y: [0, -60, 0] }}
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 >
                   {[
                     { name: "Grilled Chicken", price: "45 EGP", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80", tag: "Add" },
                     { name: "Pasta Alfredo", price: "35 EGP", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&q=80", tag: "Add" },
                     { name: "Caesar Salad", price: "25 EGP", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&q=80", tag: "Out" },
                     { name: "Beef Burger", price: "55 EGP", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&q=80", tag: "Add" }
                   ].map((item, idx) => (
                     <div key={idx} className="bg-[#1A1A1A] rounded-xl p-2.5 flex gap-3 items-center border border-white/5">
                       <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg object-cover shadow-md" />
                       <div className="flex-1">
                         <h5 className="text-xs font-bold text-white mb-0.5">{item.name}</h5>
                         <p className="text-[10px] text-white/50">{item.price}</p>
                       </div>
                       {item.tag === "Add" ? (
                         <div className="px-3 py-1.5 rounded-full bg-[#E67E22]/10 border border-[#E67E22]/30 flex items-center justify-center text-[#E67E22] text-[10px] font-bold">
                           Add
                         </div>
                       ) : (
                         <span className="text-[10px] font-bold text-red-500 px-2">Out</span>
                       )}
                     </div>
                   ))}
                 </motion.div>
                 
                 {/* Fade out at bottom */}
                 <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
               </div>

               {/* Bottom Cart Overlay */}
               <div className="absolute bottom-4 left-4 right-4 z-20">
                 <motion.div
                   className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(230,126,34,0.3)] cursor-pointer"
                   style={{ background: `linear-gradient(135deg, ${ACCENT}, #FF8C42)` }}
                   whileHover={{ scale: 1.02 }}
                 >
                   <Package className="w-4 h-4 text-black" />
                   <span className="text-sm font-bold text-black">View Cart • 2 items</span>
                 </motion.div>
               </div>
            </div>
            
            {/* Screen Glare Effect */}
            <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
          </motion.div>

          {/* Connectors and Cards for Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
             
             {/* Left Top Card */}
             <FeatureCardDesktop
               title="Mobile Ordering"
               desc="Order meals from your phone before arriving."
               icon={Smartphone}
               align="left"
               yOffset="-140px"
               delay={0.2}
               isInView={isInView}
             />

             {/* Left Bottom Card */}
             <FeatureCardDesktop
               title="Cashless Payment"
               desc="Secure digital payments for seamless transactions."
               icon={CreditCard}
               align="left"
               yOffset="60px"
               delay={0.4}
               isInView={isInView}
             />

             {/* Right Top Card */}
             <FeatureCardDesktop
               title="Live Queue Tracking"
               desc="Track real-time queue levels and estimated wait times."
               icon={Users}
               align="right"
               yOffset="-140px"
               delay={0.3}
               isInView={isInView}
             />

             {/* Right Bottom Card */}
             <FeatureCardDesktop
               title="Smart Notifications"
               desc="Get instant updates on your orders and offers."
               icon={Bell}
               align="right"
               yOffset="60px"
               delay={0.5}
               isInView={isInView}
             />

             {/* Bottom Wide Card */}
             <FeatureCardDesktop
               title="Digital Menu"
               desc="Browse digital menus with rich details and beautiful food images."
               icon={BookOpen}
               align="bottom"
               yOffset="0"
               delay={0.6}
               isInView={isInView}
             />

             {/* Connectors */}
             {isInView && (
               <>
                 <ConnectorLine align="left" yOffset="-140px" delay={0.2} />
                 <ConnectorLine align="left" yOffset="60px" delay={0.4} />
                 <ConnectorLine align="right" yOffset="-140px" delay={0.3} />
                 <ConnectorLine align="right" yOffset="60px" delay={0.5} />
                 <ConnectorLine align="bottom" yOffset="0" delay={0.6} />
               </>
             )}
          </div>
        </div>

        {/* Mobile View Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl px-4 mt-12 z-20">
           <FeatureCardMobile title="Mobile Ordering" desc="Order meals from your smartphone." icon={Smartphone} delay={0.2} isInView={isInView} />
           <FeatureCardMobile title="Live Queue" desc="Monitor crowd levels." icon={Users} delay={0.3} isInView={isInView} />
           <FeatureCardMobile title="Cashless" desc="Secure digital payments." icon={CreditCard} delay={0.4} isInView={isInView} />
           <FeatureCardMobile title="Notifications" desc="Instant alerts for pickups." icon={Bell} delay={0.5} isInView={isInView} />
           <div className="md:col-span-2">
             <FeatureCardMobile title="Digital Menu" desc="Interactive menus with details." icon={BookOpen} delay={0.6} isInView={isInView} />
           </div>
        </div>

      </motion.div>
    </SlideShell>
  );
}

function ConnectorLine({ align, yOffset, delay }: { align: string, yOffset: string, delay: number }) {
  const isVertical = align === 'bottom';
  
  const lineStyle: any = {
    position: 'absolute',
    backgroundColor: ACCENT,
    boxShadow: `0 0 10px ${ACCENT}`,
  };

  if (isVertical) {
    lineStyle.left = '50%';
    lineStyle.top = 'calc(50% + 280px)'; // Phone is 560px high -> +280px is bottom edge
    lineStyle.width = '2px';
    lineStyle.transform = 'translateX(-50%)';
  } else if (align === 'left') {
    lineStyle.right = 'calc(50% + 140px)'; // Phone width 280px -> 140px is edge
    lineStyle.top = `calc(50% + ${yOffset} + 40px)`; // Card height center approx
    lineStyle.height = '2px';
  } else if (align === 'right') {
    lineStyle.left = 'calc(50% + 140px)';
    lineStyle.top = `calc(50% + ${yOffset} + 40px)`;
    lineStyle.height = '2px';
  }

  const initial = isVertical ? { height: 0 } : { width: 0 };
  const animate = isVertical ? { height: 40 } : { width: 60 };

  return (
    <motion.div
      style={lineStyle}
      initial={{ ...initial, opacity: 0 }}
      animate={{ ...animate, opacity: 0.6 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    />
  );
}

function FeatureCardDesktop({ title, desc, icon: Icon, align, yOffset, delay, isInView }: any) {
  const isBottom = align === 'bottom';
  const positionStyle: any = {
    position: 'absolute',
    top: isBottom ? 'calc(50% + 320px)' : `calc(50% + ${yOffset})`,
  };

  if (isBottom) {
    positionStyle.left = '50%';
    positionStyle.transform = 'translateX(-50%)';
    positionStyle.width = '480px';
  } else if (align === 'left') {
    positionStyle.right = 'calc(50% + 200px)';
    positionStyle.width = '300px';
  } else if (align === 'right') {
    positionStyle.left = 'calc(50% + 200px)';
    positionStyle.width = '300px';
  }

  const initialX = isBottom ? 0 : align === 'left' ? 30 : -30;
  const initialY = isBottom ? -30 : 0;

  return (
    <motion.div
      style={positionStyle}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
      className={`z-20 pointer-events-auto group`}
    >
      <div className={`bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#E67E22]/20 p-5 rounded-2xl flex ${isBottom ? 'flex-row items-center gap-5' : 'flex-col'} shadow-2xl relative overflow-hidden`}>
        {/* Hover Glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${ACCENT}15, transparent 70%)` }}
        />
        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ border: `1px solid ${ACCENT}60`, boxShadow: `0 0 20px ${ACCENT}30 inset` }} />
        
        <div className={`flex ${isBottom ? 'items-center' : 'items-start'} gap-4 w-full`}>
          <motion.div
            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay }}
            className={`w-12 h-12 rounded-xl bg-[#E67E22]/10 border border-[#E67E22]/30 flex items-center justify-center flex-shrink-0 relative`}
          >
             <Icon className="w-6 h-6" style={{ color: ACCENT }} />
             <div className="absolute inset-0 rounded-xl blur-md" style={{ backgroundColor: `${ACCENT}40` }} />
          </motion.div>
          <div>
            <h3 className="font-bold text-[#F8FAFC] text-base mb-1">{title}</h3>
            <p className="text-xs text-[#F8FAFC]/60 leading-relaxed">{desc}</p>
          </div>
        </div>

        {/* Connection node glow dot */}
        <div className={`absolute w-2 h-2 rounded-full bg-[#E67E22] shadow-[0_0_10px_#E67E22]
          ${align === 'left' ? 'top-1/2 -translate-y-1/2 -right-1' : 
            align === 'right' ? 'top-1/2 -translate-y-1/2 -left-1' : 
            align === 'bottom' ? '-top-1 left-1/2 -translate-x-1/2' : ''}`} 
        />
      </div>
    </motion.div>
  );
}

function FeatureCardMobile({ title, desc, icon: Icon, delay, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E67E22]/20 p-4 rounded-xl flex items-center gap-4"
    >
      <div className="w-10 h-10 rounded-lg bg-[#E67E22]/10 flex items-center justify-center flex-shrink-0">
         <Icon className="w-5 h-5" style={{ color: ACCENT }} />
      </div>
      <div>
        <h3 className="font-bold text-[#F8FAFC] text-sm">{title}</h3>
        <p className="text-xs text-[#F8FAFC]/60 mt-0.5">{desc}</p>
      </div>
    </motion.div>
  );
}

const TEAM = [
  { name: "Youssef Saber", role: "Project Manager", icon: Briefcase, bio: "Coordinates scope, schedule and stakeholders.", image: "/images/CVP.png" },
  { name: "Ahmed Elalfy", role: "Financial Lead", icon: Wallet, bio: "Owns budgeting, vendor costs and reporting.", image: "/images/Ahmed elalfy.png" },
  { name: "Omar Ahmed", role: "Risk Manager", icon: AlertTriangle, bio: "Maps risks and contingency strategies.", image: "/images/photo_2026-05-18_01-13-27.png" },
  { name: "Hbiba Mohamed", role: "Lead Researcher", icon: BookOpen, bio: "Drives user research and data validation.", image: "/images/photo_2026-05-18_01-13-43.png" },
];

const USER_JOURNEY_STEPS = [
  {
    step: 1,
    title: "Open App",
    description: "Students access the smart cafeteria app from their mobile devices.",
    icon: Smartphone,
    color: "#3B82F6",
  },
  {
    step: 2,
    title: "Choose Meal",
    description: "Browse meals, nutritional information, and real-time availability.",
    icon: Utensils,
    color: "#10B981",
  },
  {
    step: 3,
    title: "Pay Securely",
    description: "Complete transactions instantly using digital payment methods.",
    icon: CreditCard,
    color: "#8B5CF6",
  },
  {
    step: 4,
    title: "Pick Up Order",
    description: "Receive notifications and collect the order without waiting in long lines.",
    icon: Package,
    color: ACCENT,
  },
];

const RISKS = [
  {
    title: "Technical Risk",
    risk: "The application may crash during peak cafeteria hours due to high traffic.",
    impact: "High",
    impactColor: "#EF4444",
    solution: "Conduct stress testing, optimize server performance, and maintain a manual backup ordering system.",
    icon: AlertTriangle,
    color: "#EF4444",
  },
  {
    title: "Financial Risk",
    risk: "Hardware and installation costs may increase because of market fluctuations.",
    impact: "Medium",
    impactColor: "#F59E0B",
    solution: "Allocate a contingency reserve and monitor expenses throughout development.",
    icon: TrendingDown,
    color: "#F59E0B",
  },
  {
    title: "User Adoption Risk",
    risk: "Some students may continue using traditional cafeteria ordering methods.",
    impact: "Medium",
    impactColor: "#F59E0B",
    solution: "Offer promotional discounts and provide a simple user-friendly experience.",
    icon: Users,
    color: ACCENT,
  },
];

const OUTCOMES = [
  {
    title: "Faster Service",
    counter: "40%",
    suffix: " Faster",
    description: "Reduce cafeteria waiting times and improve student efficiency during breaks.",
    icon: Zap,
    color: ACCENT,
  },
  {
    title: "Less Food Waste",
    counter: "Reduced",
    suffix: " Waste",
    description: "Smart inventory tracking helps reduce unnecessary food waste.",
    icon: TrendingDown,
    color: "#10B981",
  },
  {
    title: "Better Experience",
    counter: "95%",
    suffix: " Satisfaction",
    description: "Provide students with a seamless, modern, and stress-free dining process.",
    icon: Users,
    color: "#3B82F6",
  },
  {
    title: "Smart Campus",
    counter: "Digital",
    suffix: " Future",
    description: "Support SUT's transformation into a fully integrated smart university.",
    icon: Smartphone,
    color: "#8B5CF6",
  },
];

function UserJourney() {
  const [isInView, setIsInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % USER_JOURNEY_STEPS.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <SlideShell id="slide-6">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.3 }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E67E22]">07 · Experience</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#F8FAFC]">
            User Journey
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#F8FAFC]/60 max-w-2xl mx-auto">
            From Ordering to Pickup in a Few Simple Steps
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="absolute top-24 left-0 right-0 h-1 hidden md:block">
            <div className="relative h-full max-w-4xl mx-auto">
              {/* Background Line */}
              <div className="absolute inset-0 bg-white/10 rounded-full" />
              
              {/* Animated Progress Line */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, #3B82F6, #10B981, #8B5CF6, ${ACCENT})`,
                  boxShadow: `0 0 20px ${ACCENT}60`,
                }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />

              {/* Milestone Dots */}
              {USER_JOURNEY_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                  style={{
                    left: `${(index / (USER_JOURNEY_STEPS.length - 1)) * 100}%`,
                    backgroundColor: step.color,
                    boxShadow: `0 0 20px ${step.color}`,
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { 
                    scale: activeStep === index ? [1, 1.5, 1] : 1,
                  } : { scale: 0 }}
                  transition={{ 
                    scale: { duration: 0.5, repeat: activeStep === index ? Infinity : 0, repeatDelay: 0.5 },
                    default: { delay: index * 0.3 + 0.5 }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {USER_JOURNEY_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div key={step.step} className="relative">
                  {/* Animated Arrow (between steps) */}
                  {index < USER_JOURNEY_STEPS.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-24 left-full w-full h-1 pointer-events-none"
                      style={{ zIndex: 1 }}
                    >
                      <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.4 + 1 }}
                      >
                        <ArrowRight 
                          className="w-6 h-6" 
                          style={{ 
                            color: step.color,
                            filter: `drop-shadow(0 0 8px ${step.color})`,
                          }} 
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Step Card */}
                  <motion.div
                    variants={fadeUp}
                    custom={index}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        y: isActive ? [0, -10, 0] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <GlassCard className="relative overflow-hidden group h-full">
                          {/* Active Glow */}
                          <motion.div
                            className="absolute inset-0 pointer-events-none"
                            animate={{
                              opacity: isActive ? [0.1, 0.3, 0.1] : 0,
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            style={{
                              background: `radial-gradient(circle at 50% 50%, ${step.color}, transparent 70%)`,
                            }}
                          />

                          {/* Animated Border */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                              border: `2px solid ${step.color}00`,
                            }}
                            animate={{
                              borderColor: isActive ? `${step.color}80` : `${step.color}00`,
                              boxShadow: isActive ? `0 0 30px ${step.color}60` : "none",
                            }}
                            transition={{ duration: 0.5 }}
                          />

                          {/* Step Number Badge */}
                          <motion.div
                            className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{
                              backgroundColor: step.color,
                              boxShadow: `0 0 20px ${step.color}80`,
                            }}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                            transition={{ delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
                          >
                            {step.step}
                          </motion.div>

                          {/* Icon */}
                          <motion.div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                            style={{
                              backgroundColor: `${step.color}20`,
                              border: `2px solid ${step.color}40`,
                            }}
                            animate={{
                              boxShadow: [
                                `0 0 15px ${step.color}40`,
                                `0 0 30px ${step.color}60`,
                                `0 0 15px ${step.color}40`,
                              ],
                              y: [0, -5, 0],
                            }}
                            transition={{
                              boxShadow: {
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3,
                              },
                              y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.5,
                              },
                            }}
                          >
                            <Icon className="w-8 h-8" style={{ color: step.color }} />
                          </motion.div>

                          {/* Content */}
                          <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 text-center">
                            {step.title}
                          </h3>
                          <p className="text-xs text-[#F8FAFC]/70 leading-relaxed text-center">
                            {step.description}
                          </p>

                          {/* Step-Specific Animations */}
                          {step.step === 1 && (
                            <motion.div
                              className="absolute top-4 right-4 w-3 h-3 rounded-full"
                              style={{ backgroundColor: step.color }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                            />
                          )}

                          {step.step === 2 && (
                            <motion.div
                              className="absolute bottom-4 left-4 right-4 h-1 rounded-full bg-white/10 overflow-hidden"
                            >
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: step.color }}
                                animate={{
                                  x: ["-100%", "100%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            </motion.div>
                          )}

                          {step.step === 3 && (
                            <motion.div
                              className="absolute top-4 left-4"
                              initial={{ scale: 0 }}
                              animate={isInView ? {
                                scale: [0, 1.2, 1],
                                rotate: [0, 360],
                              } : { scale: 0 }}
                              transition={{
                                delay: index * 0.3 + 1,
                                duration: 0.6,
                              }}
                            >
                              <CheckCircle className="w-5 h-5" style={{ color: step.color }} />
                            </motion.div>
                          )}

                          {step.step === 4 && (
                            <motion.div
                              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{
                                backgroundColor: `${step.color}20`,
                                border: `1px solid ${step.color}40`,
                              }}
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                              }}
                            >
                              <Bell className="w-4 h-4" style={{ color: step.color }} />
                            </motion.div>
                          )}

                          {/* Glass Reflection */}
                          <div
                            className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                            style={{
                              background: "linear-gradient(180deg, white, transparent)",
                            }}
                          />
                        </GlassCard>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom Progress Indicator */}
          <motion.div
            className="mt-12 flex justify-center items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" style={{ color: ACCENT }} />
              <div>
                <div className="text-xs text-[#F8FAFC]/60">Average Time</div>
                <div className="text-lg font-bold" style={{ color: ACCENT }}>
                  <AnimatedCounter end={5} suffix=" minutes" />
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-white/20" />

            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-xs text-[#F8FAFC]/60">Efficiency Gain</div>
                <div className="text-lg font-bold text-green-400">
                  <AnimatedCounter end={75} suffix="%" />
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-white/20" />

            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-xs text-[#F8FAFC]/60">Daily Users</div>
                <div className="text-lg font-bold text-blue-400">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Extra Bottom Spacing to Prevent Navigation Overlap */}
        <div className="h-32 md:h-24" />
      </motion.div>
    </SlideShell>
  );
}

function RiskAssessment() {
  const [isInView, setIsInView] = useState(false);

  return (
    <SlideShell id="slide-7">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.3 }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
      >
        <motion.div variants={fadeUp} className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E67E22]">08 · Risk Management</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#F8FAFC]">
            Risk Assessment
          </h2>
          <p className="mt-2 text-sm md:text-base text-[#F8FAFC]/60 max-w-2xl mx-auto">
            Identifying Challenges and Building Smart Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {RISKS.map((risk, index) => {
            const Icon = risk.icon;
            const isHighRisk = risk.impact === "High";

            return (
              <motion.div
                key={risk.title}
                variants={fadeUp}
                custom={index}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <GlassCard className="relative overflow-hidden group h-full">
                    {/* Animated Background Glow */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      animate={{
                        opacity: [0.05, 0.15, 0.05],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${risk.color}, transparent 70%)`,
                      }}
                    />

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        border: `2px solid ${risk.color}00`,
                      }}
                      animate={{
                        borderColor: [`${risk.color}00`, `${risk.color}60`, `${risk.color}00`],
                        boxShadow: [
                          "none",
                          `0 0 30px ${risk.color}40`,
                          "none",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.7,
                      }}
                    />

                    {/* Glitch Effect for High Risk */}
                    {isHighRisk && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0"
                        animate={{
                          opacity: [0, 0.3, 0],
                          x: [0, -2, 2, -2, 0],
                        }}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          repeatDelay: 5,
                        }}
                        style={{
                          background: `linear-gradient(90deg, ${risk.color}20, transparent)`,
                        }}
                      />
                    )}

                    {/* Icon with Animation */}
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                      style={{
                        backgroundColor: `${risk.color}20`,
                        border: `2px solid ${risk.color}40`,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 15px ${risk.color}40`,
                          `0 0 30px ${risk.color}60`,
                          `0 0 15px ${risk.color}40`,
                        ],
                        rotate: isHighRisk ? [0, -5, 5, -5, 0] : 0,
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.4,
                        },
                        rotate: {
                          duration: 0.5,
                          repeat: Infinity,
                          repeatDelay: 4,
                        },
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: risk.color }} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
                      {risk.title}
                    </h3>

                    {/* Divider */}
                    <motion.div
                      className="h-px mb-3 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${risk.color}60, transparent)`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    />

                    {/* Risk Description */}
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: risk.color,
                            boxShadow: `0 0 8px ${risk.color}`,
                          }}
                        />
                        <span className="text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider">
                          Risk
                        </span>
                      </div>
                      <p className="text-xs text-[#F8FAFC]/70 leading-relaxed pl-4">
                        {risk.risk}
                      </p>
                    </div>

                    {/* Impact Level */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: risk.impactColor,
                              boxShadow: `0 0 8px ${risk.impactColor}`,
                            }}
                          />
                          <span className="text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider">
                            Impact
                          </span>
                        </div>
                        <motion.span
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: `${risk.impactColor}20`,
                            color: risk.impactColor,
                            border: `1px solid ${risk.impactColor}40`,
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 10px ${risk.impactColor}00`,
                              `0 0 20px ${risk.impactColor}60`,
                              `0 0 10px ${risk.impactColor}00`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        >
                          {risk.impact}
                        </motion.span>
                      </div>
                    </div>

                    {/* Divider */}
                    <motion.div
                      className="h-px mb-3 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${risk.color}60, transparent)`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                    />

                    {/* Solution */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: index * 0.2 + 0.9, type: "spring", bounce: 0.5 }}
                        >
                          <Shield className="w-4 h-4" style={{ color: risk.color }} />
                        </motion.div>
                        <span className="text-xs font-semibold text-[#F8FAFC]/80 uppercase tracking-wider">
                          Mitigation
                        </span>
                      </div>
                      <p className="text-xs text-[#F8FAFC]/70 leading-relaxed pl-6">
                        {risk.solution}
                      </p>
                    </div>

                    {/* Floating Particles for User Adoption Risk */}
                    {risk.title === "User Adoption Risk" && (
                      <>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
                            style={{ backgroundColor: risk.color, opacity: 0.4 }}
                            initial={{
                              x: "50%",
                              y: "50%",
                            }}
                            animate={{
                              x: `${50 + (Math.random() - 0.5) * 100}%`,
                              y: `${50 + (Math.random() - 0.5) * 100}%`,
                              opacity: [0.4, 0.8, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        ))}
                      </>
                    )}

                    {/* Glass Reflection */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(180deg, white, transparent)",
                      }}
                    />

                    {/* Corner Accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at top right, ${risk.color}20, transparent 70%)`,
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </GlassCard>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          className="mt-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2 }}
        >
          <GlassCard className="relative overflow-hidden">
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: `radial-gradient(circle at 50% 50%, ${ACCENT}, transparent 70%)`,
              }}
            />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${ACCENT}20`,
                    border: `2px solid ${ACCENT}40`,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 15px ${ACCENT}40`,
                      `0 0 30px ${ACCENT}60`,
                      `0 0 15px ${ACCENT}40`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Shield className="w-6 h-6" style={{ color: ACCENT }} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-[#F8FAFC]">Risk Mitigation Strategy</h4>
                  <p className="text-sm text-[#F8FAFC]/60">
                    Proactive planning ensures project success
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: ACCENT }}>
                    <AnimatedCounter end={3} />
                  </div>
                  <div className="text-xs text-[#F8FAFC]/60 uppercase tracking-wider">
                    Risks Identified
                  </div>
                </div>

                <div className="w-px h-12 bg-white/20" />

                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-xs text-[#F8FAFC]/60 uppercase tracking-wider">
                    Mitigation Coverage
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
        
        {/* Extra Bottom Spacing to Prevent Navigation Overlap */}
        <div className="h-32 md:h-24" />
      </motion.div>
    </SlideShell>
  );
}

function ExpectedOutcomes() {
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <SlideShell id="slide-8">
      {/* Subtle Floating Particles - Cinematic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.15 }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Layered Ambient Lighting - Premium Depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${ACCENT}15, transparent 50%), radial-gradient(ellipse at 70% 60%, ${ACCENT}10, transparent 50%)`,
        }}
      />

      {/* Mouse Follow Glow Effect */}
      <motion.div
        className="absolute pointer-events-none w-96 h-96 rounded-full blur-3xl opacity-0"
        animate={{
          opacity: isInView ? [0, 0.08, 0] : 0,
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          opacity: { duration: 3, repeat: Infinity },
          x: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
        }}
        style={{
          background: `radial-gradient(circle, ${ACCENT}, transparent 70%)`,
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
      >
        {/* REFINED HEADER - Apple/Tesla Aesthetic */}
        <motion.div variants={fadeUp} className="text-center mb-6">
          <div className="flex items-center justify-center gap-6 mb-1.5">
            <motion.div 
              className="h-px flex-1 max-w-[100px]"
              style={{
                background: `linear-gradient(to right, transparent, ${ACCENT}30, ${ACCENT}60)`,
                boxShadow: `0 0 8px ${ACCENT}20`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] tracking-tight">
              Expected Outcomes
            </h2>
            <motion.div 
              className="h-px flex-1 max-w-[100px]"
              style={{
                background: `linear-gradient(to left, transparent, ${ACCENT}30, ${ACCENT}60)`,
                boxShadow: `0 0 8px ${ACCENT}20`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="text-[10px] text-[#F8FAFC]/40 tracking-[0.2em] uppercase font-light">
            Projected Impact & Measurable Benefits
          </p>
        </motion.div>

        {/* COMPACT HORIZONTAL FEATURE CARDS - Silicon Valley Style */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6 max-w-6xl mx-auto"
        >
          {[
            {
              title: "Faster Service",
              metric: "40%",
              description: "Reduced waiting times",
              icon: Zap,
              gradient: `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}05)`,
              color: ACCENT,
            },
            {
              title: "Less Waste",
              metric: "Reduced",
              description: "Smart inventory tracking",
              icon: TrendingDown,
              gradient: "linear-gradient(135deg, #10B98115, #10B98105)",
              color: "#10B981",
            },
            {
              title: "Better Experience",
              metric: "95%",
              description: "Student satisfaction",
              icon: Users,
              gradient: "linear-gradient(135deg, #3B82F615, #3B82F605)",
              color: "#3B82F6",
            },
            {
              title: "Digital Future",
              metric: "Smart",
              description: "Campus transformation",
              icon: Smartphone,
              gradient: "linear-gradient(135deg, #8B5CF615, #8B5CF605)",
              color: "#8B5CF6",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.08 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div 
                className="relative overflow-hidden rounded-xl p-3.5 h-full group cursor-pointer"
                style={{
                  background: card.gradient,
                  border: `1px solid ${card.color}20`,
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${card.color}08, transparent 70%)`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glass Reflection */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.03), transparent)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <motion.div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${card.color}12`,
                        border: `1px solid ${card.color}25`,
                      }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <card.icon className="w-4 h-4" style={{ color: card.color }} />
                    </motion.div>
                    <motion.div 
                      className="text-xl font-bold tracking-tight tabular-nums"
                      style={{ 
                        color: card.color,
                        textShadow: `0 0 15px ${card.color}25`,
                      }}
                      animate={{
                        textShadow: [
                          `0 0 15px ${card.color}25`,
                          `0 0 20px ${card.color}35`,
                          `0 0 15px ${card.color}25`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {card.metric.includes("%") ? (
                        <AnimatedCounter end={parseInt(card.metric)} suffix="%" />
                      ) : (
                        card.metric
                      )}
                    </motion.div>
                  </div>
                  <h3 className="text-xs font-semibold text-[#F8FAFC] mb-0.5">{card.title}</h3>
                  <p className="text-[9px] text-[#F8FAFC]/50 leading-relaxed">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* HERO ANALYTICS DASHBOARD - Cinematic Main Focus */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div 
            className="relative overflow-hidden rounded-2xl p-6 md:p-8"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${ACCENT}15`,
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(230, 126, 34, 0.05)`,
            }}
          >
            {/* Layered Background Effects */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0.02, 0.04, 0.02],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: `radial-gradient(ellipse at 20% 30%, ${ACCENT}08, transparent 50%), radial-gradient(ellipse at 80% 70%, ${ACCENT}06, transparent 50%)`,
              }}
            />

            {/* Animated Grid Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke={ACCENT} strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Animated Graph Lines - More Sophisticated */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
              <motion.path
                d="M 0 60 Q 200 40, 400 60 T 800 60 T 1200 60 T 1600 60"
                stroke={ACCENT}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 0 100 Q 200 80, 400 100 T 800 100 T 1200 100 T 1600 100"
                stroke={ACCENT}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
              />
              <motion.path
                d="M 0 140 Q 200 120, 400 140 T 800 140 T 1200 140 T 1600 140"
                stroke={ACCENT}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2.5, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>

            {/* Dashboard Header - Refined */}
            <div className="text-center mb-6 relative z-10">
              <motion.div
                className="inline-flex items-center justify-center gap-2 mb-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 0px ${ACCENT}00`,
                      `0 0 15px ${ACCENT}40`,
                      `0 0 0px ${ACCENT}00`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${ACCENT}12`,
                    border: `1px solid ${ACCENT}30`,
                  }}
                >
                  <TrendingUp className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                </motion.div>
                <h3 className="text-base md:text-lg font-bold text-[#F8FAFC] tracking-tight">
                  Measurable Impact
                </h3>
              </motion.div>
              <p className="text-[9px] text-[#F8FAFC]/40 uppercase tracking-[0.25em] font-light">
                Key Performance Indicators
              </p>
            </div>

            {/* Premium Progress Bars - Enhanced */}
            <div className="space-y-4 mb-6 relative z-10">
              {[
                { label: "Waiting Time Reduction", value: 60, color: ACCENT, icon: Clock },
                { label: "Student Satisfaction", value: 95, color: "#10B981", icon: Users },
                { label: "Efficiency Improvement", value: 75, color: "#3B82F6", icon: Zap },
                { label: "Food Waste Reduction", value: 40, color: "#8B5CF6", icon: TrendingDown },
              ].map((metric, index) => {
                const MetricIcon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2.5">
                        <motion.div
                          className="w-7 h-7 rounded-lg flex items-center justify-center relative"
                          style={{
                            backgroundColor: `${metric.color}08`,
                            border: `1px solid ${metric.color}20`,
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 0px ${metric.color}00`,
                              `0 0 10px ${metric.color}25`,
                              `0 0 0px ${metric.color}00`,
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.4,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <MetricIcon className="w-3.5 h-3.5" style={{ color: metric.color }} />
                        </motion.div>
                        <span className="text-xs md:text-sm font-medium text-[#F8FAFC]">
                          {metric.label}
                        </span>
                      </div>
                      <motion.span
                        className="text-lg md:text-xl font-bold tracking-tight tabular-nums"
                        style={{ 
                          color: metric.color,
                          textShadow: `0 0 12px ${metric.color}30`,
                        }}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                        transition={{ delay: index * 0.1 + 1, type: "spring", bounce: 0.5 }}
                      >
                        <AnimatedCounter end={metric.value} suffix="%" />
                      </motion.span>
                    </div>

                    {/* Elegant Thin Progress Bar with Glow */}
                    <div className="h-1.5 rounded-full bg-white/[0.03] overflow-hidden relative">
                      <motion.div
                        className="h-full rounded-full relative"
                        style={{
                          background: `linear-gradient(90deg, ${metric.color}, ${metric.color}90)`,
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${metric.value}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: index * 0.1 + 1, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {/* Animated Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${metric.color}40, transparent)`,
                          }}
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3 + 1.5,
                            ease: "easeInOut",
                          }}
                        />
                        {/* Subtle Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-full blur-sm"
                          animate={{
                            boxShadow: [
                              `0 0 3px ${metric.color}25`,
                              `0 0 6px ${metric.color}40`,
                              `0 0 3px ${metric.color}25`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom KPI Stats - Compact & Premium */}
            <motion.div
              className="pt-5 border-t relative z-10"
              style={{ borderColor: "rgba(255, 255, 255, 0.03)" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Daily Users", value: 500, suffix: "+", icon: Users, color: "#3B82F6" },
                  { label: "Orders/Day", value: 300, suffix: "+", icon: Package, color: ACCENT },
                  { label: "Avg Wait", value: 5, suffix: " min", icon: Clock, color: "#10B981" },
                  { label: "Satisfaction", value: 95, suffix: "%", icon: CheckCircle, color: "#8B5CF6" },
                ].map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="text-center group cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.08 + 1.5, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <motion.div
                        className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center relative"
                        style={{
                          backgroundColor: `${stat.color}08`,
                          border: `1px solid ${stat.color}20`,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-100"
                          style={{ backgroundColor: `${stat.color}15` }}
                          transition={{ duration: 0.3 }}
                        />
                        <StatIcon className="w-4 h-4 relative z-10" style={{ color: stat.color }} />
                      </motion.div>
                      <motion.div
                        className="text-xl md:text-2xl font-bold tracking-tight tabular-nums"
                        style={{ 
                          color: stat.color,
                          textShadow: `0 0 10px ${stat.color}20`,
                        }}
                        animate={{
                          textShadow: [
                            `0 0 10px ${stat.color}20`,
                            `0 0 15px ${stat.color}30`,
                            `0 0 10px ${stat.color}20`,
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </motion.div>
                      <div className="text-[9px] text-[#F8FAFC]/45 mt-1 uppercase tracking-wider font-light">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Reduced Bottom Spacing - More Elegant */}
        <div className="h-12" />
      </motion.div>
    </SlideShell>
  );
}

function ThankYou() {
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <SlideShell id="slide-10">
      {/* Cinematic Background with Smart Cafeteria Ambiance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(230, 126, 34, 0.08), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(230, 126, 34, 0.06), transparent 50%)",
              "radial-gradient(ellipse at 30% 40%, rgba(230, 126, 34, 0.1), transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(230, 126, 34, 0.08), transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(230, 126, 34, 0.08), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(230, 126, 34, 0.06), transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles - Cinematic */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.2 }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Mouse Follow Glow */}
        <motion.div
          className="absolute pointer-events-none w-[500px] h-[500px] rounded-full blur-3xl"
          animate={{
            opacity: [0.05, 0.12, 0.05],
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity },
            x: { duration: 0.3, ease: "easeOut" },
            y: { duration: 0.3, ease: "easeOut" },
          }}
          style={{
            background: `radial-gradient(circle, ${ACCENT}, transparent 70%)`,
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* Main Thank You Title - Ultra Premium */}
        <motion.div
          variants={fadeUp}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            style={{
              background: `linear-gradient(135deg, ${ACCENT}, #FF8C42, ${ACCENT})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              textShadow: [
                `0 0 30px ${ACCENT}40`,
                `0 0 50px ${ACCENT}60`,
                `0 0 30px ${ACCENT}40`,
              ],
            }}
            transition={{
              backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
              textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Thank You
          </motion.h1>

          {/* Elegant Divider Lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="h-px w-24 md:w-32"
              style={{
                background: `linear-gradient(to right, transparent, ${ACCENT}60, ${ACCENT})`,
                boxShadow: `0 0 10px ${ACCENT}30`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: ACCENT,
                boxShadow: `0 0 20px ${ACCENT}80`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  `0 0 20px ${ACCENT}80`,
                  `0 0 30px ${ACCENT}`,
                  `0 0 20px ${ACCENT}80`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="h-px w-24 md:w-32"
              style={{
                background: `linear-gradient(to left, transparent, ${ACCENT}60, ${ACCENT})`,
                boxShadow: `0 0 10px ${ACCENT}30`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Cinematic Quote */}
          <motion.p
            className="text-lg md:text-2xl text-[#F8FAFC]/80 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Transforming SUT into a{" "}
            <motion.span
              style={{ color: ACCENT }}
              animate={{
                textShadow: [
                  `0 0 10px ${ACCENT}40`,
                  `0 0 20px ${ACCENT}60`,
                  `0 0 10px ${ACCENT}40`,
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Smart Campus Experience
            </motion.span>
            .
          </motion.p>
        </motion.div>

        {/* Team Members - Elegant Glass Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl w-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { name: "Youssef", role: "Project Lead", color: ACCENT },
            { name: "Ahmed", role: "Developer", color: "#3B82F6" },
            { name: "Omar", role: "Designer", color: "#10B981" },
            { name: "Habiba", role: "Analyst", color: "#8B5CF6" },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-xl p-4 h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${member.color}20`,
                }}
              >
                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${member.color}10, transparent 70%)`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glass Reflection */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.05), transparent)",
                  }}
                />

                <div className="relative z-10 text-center">
                  {/* Avatar Circle */}
                  <motion.div
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}20, ${member.color}10)`,
                      border: `2px solid ${member.color}30`,
                      color: member.color,
                      boxShadow: `0 0 20px ${member.color}20`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${member.color}20`,
                        `0 0 30px ${member.color}40`,
                        `0 0 20px ${member.color}20`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {member.name.charAt(0)}
                  </motion.div>

                  <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#F8FAFC]/50">{member.role}</p>
                </div>

                {/* Floating Animation */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons Section */}
        <motion.div
          className="flex gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2 }}
        >
          {[
            { icon: "GitHub", label: "GitHub" },
            { icon: "LinkedIn", label: "LinkedIn" },
            { icon: "Mail", label: "Email" },
            { icon: "Globe", label: "Website" },
          ].map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 2.2 + index * 0.1, type: "spring", bounce: 0.5 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center relative group"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${ACCENT}20`,
                }}
              >
                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${ACCENT}20, transparent 70%)`,
                    boxShadow: `0 0 20px ${ACCENT}40`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {social.icon === "GitHub" && <Code2 className="w-5 h-5" style={{ color: ACCENT }} />}
                {social.icon === "LinkedIn" && <Briefcase className="w-5 h-5" style={{ color: ACCENT }} />}
                {social.icon === "Mail" && <Bell className="w-5 h-5" style={{ color: ACCENT }} />}
                {social.icon === "Globe" && <Link2 className="w-5 h-5" style={{ color: ACCENT }} />}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Tagline */}
        <motion.p
          className="text-xs text-[#F8FAFC]/40 uppercase tracking-[0.3em] font-light"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5 }}
        >
          Team Alpha · HUM 231 · 2024
        </motion.p>

        {/* Bottom Spacing */}
        <div className="h-16" />
      </motion.div>
    </SlideShell>
  );
}

function InteractivePoll() {
  const [isInView, setIsInView] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showPoll, setShowPoll] = useState(false);

  const options = [
    { id: 1, text: "Yes, definitely", icon: CheckCircle2, percent: 78, color: "#10B981" },
    { id: 2, text: "Maybe, if it saves time", icon: Clock, percent: 17, color: "#F59E0B" },
    { id: 3, text: "No, I prefer traditional ordering", icon: XCircle, percent: 5, color: "#EF4444" },
  ];

  const handleSelect = (id: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(id);
    setTimeout(() => {
      setShowPoll(true);
    }, 600);
  };

  return (
    <SlideShell id="slide-poll">
      {/* Background Particles & Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient lighting */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, ${ACCENT}15, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, ${ACCENT}10, transparent 50%)`,
              `radial-gradient(circle at 20% 80%, ${ACCENT}15, transparent 50%)`,
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.3 }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : [0, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        {/* Confetti if selected */}
        {showPoll && Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`confetti-${i}`}
            className="absolute w-2 h-2 rounded-sm"
            style={{ backgroundColor: options.find(o => o.id === selectedOption)?.color || ACCENT }}
            initial={{
              x: '50%',
              y: '50%',
              opacity: 1,
            }}
            animate={{
              x: `calc(50% + ${(Math.random() - 0.5) * 800}px)`,
              y: `calc(50% + ${(Math.random() - 0.5) * 800}px)`,
              opacity: 0,
              rotate: Math.random() * 360,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
        onViewportEnter={() => setIsInView(true)}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full px-6"
      >
        <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14 w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E67E22] mb-3">Before We Meet the Team...</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-tight">
            Would <span style={{ color: ACCENT }}>YOU</span> use a smart cafeteria system like this at SUT?
          </h2>
        </motion.div>

        {/* Answer Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto mb-10 relative z-20">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            const isSelected = selectedOption === opt.id;
            const isNotSelected = selectedOption !== null && selectedOption !== opt.id;

            return (
              <motion.button
                key={opt.id}
                variants={fadeUp}
                onClick={() => handleSelect(opt.id)}
                disabled={selectedOption !== null}
                className={`relative group flex items-center p-5 md:p-6 rounded-2xl w-full text-left transition-all duration-300 ${isNotSelected ? 'opacity-40 scale-95 grayscale' : ''}`}
                style={{
                  background: isSelected ? `${opt.color}15` : 'rgba(10, 10, 10, 0.6)',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${isSelected ? opt.color : 'rgba(230,126,34,0.2)'}`,
                  boxShadow: isSelected ? `0 0 30px ${opt.color}40, inset 0 0 20px ${opt.color}20` : '0 10px 30px rgba(0,0,0,0.5)',
                }}
                whileHover={selectedOption === null ? { scale: 1.02, backgroundColor: 'rgba(230,126,34,0.1)' } : {}}
                whileTap={selectedOption === null ? { scale: 0.98 } : {}}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" style={{ border: `1px solid ${ACCENT}60` }} />
                
                <div className="flex-1 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center relative shrink-0 transition-all duration-300"
                    style={{ 
                      backgroundColor: isSelected ? `${opt.color}30` : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${isSelected ? opt.color : 'rgba(255,255,255,0.1)'}` 
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: isSelected ? opt.color : '#F8FAFC' }} />
                    {isSelected && (
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }} 
                        animate={{ scale: 1.5, opacity: 0 }} 
                        transition={{ duration: 1 }} 
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: opt.color }}
                      />
                    )}
                  </div>
                  <span className="text-lg md:text-2xl font-medium text-white group-hover:text-[#E67E22] transition-colors duration-300" style={{ color: isSelected ? opt.color : undefined }}>
                    {opt.text}
                  </span>
                </div>

                {/* Selected Checkmark */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                    className="ml-4 w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                    style={{ backgroundColor: opt.color, boxShadow: `0 0 20px ${opt.color}` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Live Poll Results Area */}
        {showPoll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full max-w-3xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            {/* Ambient Background for Poll */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 relative z-10">
                <Users className="w-5 h-5" style={{ color: ACCENT }} />
                Live Poll Results
              </h3>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30 relative z-10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-400 font-bold tracking-wide">342 VOTES</span>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              {options.map((opt, i) => (
                <div key={opt.id} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-semibold text-white/80">{opt.text.split(',')[0]}</span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 + 0.5 }}
                      className="text-lg font-bold tabular-nums"
                      style={{ color: opt.color }}
                    >
                      <AnimatedCounter end={opt.percent} suffix="%" duration={1.5} />
                    </motion.span>
                  </div>
                  {/* Progress Bar Track */}
                  <div className="h-3 md:h-4 rounded-full bg-white/5 overflow-hidden border border-white/5 relative">
                    {/* Progress Bar Fill */}
                    <motion.div
                      className="absolute top-0 left-0 bottom-0 rounded-full"
                      style={{ 
                        backgroundColor: opt.color,
                        boxShadow: `0 0 10px ${opt.color}`,
                        backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 50%, transparent)`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${opt.percent}%` }}
                      transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </SlideShell>
  );
}

function Team() {
  return (
    <SlideShell id="slide-9" bgImage={TEAM_BG}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E67E22]">06 · The People</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#F8FAFC]">
            Meet Team <span style={{ color: ACCENT }}>Alpha</span>
          </h2>
          <p className="mt-4 text-sm text-[#F8FAFC]/60 flex items-center justify-center gap-2">
            <Users className="h-4 w-4" /> Four students. One smart restaurant.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {TEAM.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.name} variants={fadeUp}>
                <GlassCard className="text-center">
                  {m.image ? (
                    <div className="mx-auto h-20 w-20 rounded-full overflow-hidden" style={{ boxShadow: `0 0 40px ${ACCENT}60` }}>
                      <img 
                        src={m.image} 
                        alt={m.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${ACCENT}, #D48B4B)`,
                        color: "#1A1A1A",
                        boxShadow: `0 0 40px ${ACCENT}60`,
                      }}
                    >
                      {m.name[0]}
                    </div>
                  )}
                  <h3 className="mt-5 text-xl font-semibold text-[#F8FAFC]">{m.name}</h3>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs" style={{ color: ACCENT }}>
                    <Icon className="h-3.5 w-3.5" />
                    {m.role}
                  </div>
                  <p className="mt-3 text-xs text-[#F8FAFC]/65 leading-relaxed">{m.bio}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <motion.p variants={fadeUp} className="mt-14 text-center text-xs uppercase tracking-[0.3em] text-[#F8FAFC]/40">
          Thank you · SUT · HUM 231 · 2026
        </motion.p>
        
        {/* Extra Bottom Spacing to Prevent Navigation Overlap */}
        <div className="h-32 md:h-24" />
      </motion.div>
    </SlideShell>
  );
}

function Controller({
  current,
  total,
  onJump,
}: {
  current: number;
  total: number;
  onJump: (i: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 rounded-full border border-[#E67E22]/30 bg-black/95 backdrop-blur-xl px-2 py-1.5 shadow-2xl"
      style={{
        boxShadow: `0 4px 16px -4px rgba(230,126,34,0.4), 0 0 0 1px rgba(230,126,34,0.1)`,
      }}
    >
      <button
        onClick={() => onJump(Math.max(0, current - 1))}
        disabled={current === 0}
        aria-label="Previous slide"
        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-[#E67E22]/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 text-[#F8FAFC]"
      >
        <ChevronUp className="h-3 w-3" />
      </button>
      
      <div className="flex items-center gap-1.5 px-1">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onJump(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer"
            style={{
              width: i === current ? 16 : 6,
              backgroundColor: i === current ? ACCENT : "rgba(248,250,252,0.4)",
              boxShadow: i === current ? `0 0 8px ${ACCENT}70` : undefined,
            }}
          />
        ))}
      </div>
      
      <button
        onClick={() => onJump(Math.min(total - 1, current + 1))}
        disabled={current === total - 1}
        aria-label="Next slide"
        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-[#E67E22]/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 text-[#F8FAFC]"
      >
        <ChevronDown className="h-3 w-3" />
      </button>
      
      <div className="ml-1 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm">
        <span className="text-[9px] tracking-wider text-[#F8FAFC]/80 tabular-nums font-medium">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

function Presentation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = 12;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollTop / window.innerHeight);
      setCurrent(Math.max(0, Math.min(total - 1, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        jump(Math.min(total - 1, current + 1));
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        jump(Math.max(0, current - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  const jump = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    
    // Use window.innerHeight for consistent calculation
    const targetTop = i * window.innerHeight;
    
    el.scrollTo({ 
      top: targetTop, 
      behavior: "smooth" 
    });
  };

  return (
    <>
      <MouseGlow />
      <div
        ref={containerRef}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{
          backgroundColor: "#1A1A1A",
          color: "#F8FAFC",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <Hero />
        <Hook />
        <Smart />
        <Methodology />
        <Budget />
        <SmartAppFeatures />
        <UserJourney />
        <RiskAssessment />
        <ExpectedOutcomes />
        <InteractivePoll />
        <Team />
        <ThankYou />
        <Controller current={current} total={total} onJump={jump} />
      </div>
    </>
  );
}
