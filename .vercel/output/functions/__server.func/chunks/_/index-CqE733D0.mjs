import { a as reactExports, o as jsxRuntimeExports } from "./server.mjs";
import { u as useScroll, b as useTransform, m as motion, B as Button, A as ArrowRight, l as SolarEconomics, I as Image, s as MapPin, S as Shield, Z as Zap, x as InverterMarquee, y as Star, n as MasonryGallery, o as getCaseStudySubset, L as Link, g as cn, k as AnimatePresence, a as createLucideIcon, d as Sun, C as ChevronDown } from "./router-BOVv61Kh.mjs";
import { F as Flame } from "./flame-B_q4bj-8.mjs";
import { A as AccordionSteps } from "./AccordionSteps-BD8ZypPW.mjs";
import { H as House } from "./house-CQesajET.mjs";
import { T as Tractor } from "./tractor-DY-DIAqA.mjs";
import { B as Building } from "./building-LGWcoi3j.mjs";
import { Q as Quote } from "./quote-CWyr_lg_.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./types-RbEUnDjD.mjs";
const __iconNode = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode);
const faqs = [
  {
    question: "Why choose RENOZ over imported battery systems?",
    answer: "We're Perth's own battery OEM, designing and engineering systems specifically for Australian conditions. Unlike overseas manufacturers, we understand WA's heat, dust, and isolation challenges. Our systems are built to last in the harshest environments, with local engineering support available to our installer partners."
  },
  {
    question: "How are RENOZ systems supported after installation?",
    answer: "Our Perth-based engineering team provides technical support to our certified installer network throughout each system's lifetime. If you have questions about your installation, contact your installer first—they have direct access to our engineers, firmware updates, and diagnostic tools. We back our partners so they can back you."
  },
  {
    question: "Can RENOZ batteries work with my existing solar setup?",
    answer: "Yes. We offer both AC-coupled and DC-coupled battery solutions, giving installers flexibility to integrate with virtually any solar inverter—Deye, Goodwe, Selectronic, Sungrow, Victron, SMA, and more. Your installer will recommend the best approach for your specific system, whether that's keeping your current inverter or designing a fully integrated DC-coupled solution."
  },
  {
    question: "What happens if something goes wrong?",
    answer: "Our 10-year warranty is backed by our Perth headquarters, not an overseas entity. We stand behind every system we manufacture. If an issue arises, our engineers work directly with your installer to resolve it quickly—local support, no overseas call centers, no runaround."
  },
  {
    question: "How do RENOZ systems handle WA's extreme conditions?",
    answer: "We use tier-one Lithium Iron Phosphate (LFP) cells rated for 6,000+ cycles at 80% depth of discharge. Our enclosures are tested to 55°C ambient temperatures and built to withstand WA's dust and corrosion. Every system includes comprehensive monitoring and remote diagnostics, enabling proactive maintenance through your installer."
  },
  {
    question: "How do I get a RENOZ battery system?",
    answer: "RENOZ batteries are available through our network of certified installer partners across WA. We don't sell direct to homeowners—instead, we focus on manufacturing the best batteries possible and supporting the installers who bring them to you. Contact us to find a certified installer in your area."
  }
];
function FAQ() {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-[var(--white-warm)] border-t border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "Why Choose Renoz" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-[var(--black)] tracking-tight", children: [
        "Built for WA, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " Backed by WA."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "bg-white border rounded-2xl transition-all duration-300 overflow-hidden",
          openIndex === index ? "border-[var(--renoz-green)] shadow-md" : "border-gray-200 hover:border-gray-300"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpenIndex(openIndex === index ? null : index),
              className: "w-full flex items-center justify-between p-6 md:p-8 text-left group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-lg md:text-xl font-bold transition-colors pr-8",
                      openIndex === index ? "text-[var(--black)]" : "text-gray-600 group-hover:text-gray-900"
                    ),
                    children: faq.question
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
                      openIndex === index ? "bg-[var(--renoz-green)] border-[var(--renoz-green)] text-white rotate-180" : "border-gray-200 text-gray-400 group-hover:border-gray-300"
                    ),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3, ease: "easeInOut" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-8 pb-8 pt-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-px bg-gray-100 mb-6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-lg leading-relaxed", children: faq.answer })
              ] })
            }
          ) })
        ]
      },
      index
    )) })
  ] }) });
}
function UrgencyBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-gradient-to-br from-orange-50 to-orange-100 border-y border-orange-200 overflow-hidden relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "max-w-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-200/50 text-orange-800 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 fill-orange-600 text-orange-600" }),
              "Summer is here"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight", children: [
              "Don't waste another ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600", children: "sun-soaked day." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-gray-700 leading-relaxed max-w-xl mb-8", children: [
              "Every single day this summer, your panels are generating peak power. Without a battery, that value is evaporating.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-900", children: "Households lose up to $2,500 per summer* in potential savings." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "primary",
                  size: "lg",
                  to: "/contact",
                  className: "bg-orange-600 hover:bg-orange-700 border-none shadow-lg shadow-orange-500/30 text-lg px-8 py-6 rounded-full",
                  children: [
                    "Get a Quote Today ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 text-sm text-gray-600 font-medium bg-white/50 rounded-full backdrop-blur-sm border border-white/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-4 h-4 text-orange-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Installations available for Feb '26" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-4", children: "*Based on 10kW system exporting 40kWh/day at 5c vs offsetting 30c usage." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.2 },
          className: "relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/3]",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 h-full flex flex-col justify-between bg-gradient-to-b from-white to-orange-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-gray-900 font-bold text-2xl mb-2", children: "Summer Savings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Dec - Feb Potential" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-gray-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-green-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-5 h-5 text-green-600" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900", children: "Stored Energy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: "Self-consumption" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-green-600 text-xl", children: "+$2,100" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-gray-100 opacity-50 grayscale", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 text-gray-400 rotate-[-45deg]" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900", children: "Grid Exports" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: "Feed-in Tariff (5c)" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-400 text-xl", children: "+$350" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6 border-t border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-500", children: "Missed Opportunity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gray-900", children: "$1,750+" })
            ] }) })
          ] }) })
        }
      )
    ] }) })
  ] });
}
function ExpandingCards({
  items,
  className
}) {
  const [activeId, setActiveId] = reactExports.useState(items[0].id);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "w-full h-[800px] md:h-[600px] flex flex-col md:flex-row gap-4",
        className
      ),
      children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          layout: true,
          onClick: () => setActiveId(item.id),
          className: cn(
            "relative h-full rounded-[32px] overflow-hidden cursor-pointer group",
            activeId === item.id ? "flex-[3]" : "flex-[1] hover:flex-[1.2]"
          ),
          transition: {
            layout: {
              duration: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Image,
                {
                  src: item.image,
                  alt: item.title,
                  className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                  width: 800,
                  height: 600
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "absolute inset-0 transition-colors duration-500",
                    activeId === item.id ? "bg-black/20" : "bg-black/60 group-hover:bg-black/50"
                    // Darker when inactive
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 p-8 flex flex-col justify-end z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: activeId === item.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
                transition: { duration: 0.4, delay: 0.1 },
                className: "space-y-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase w-fit", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-3 h-3" }),
                    item.kwh
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-200 max-w-lg leading-relaxed", children: item.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: item.link,
                      className: "inline-flex items-center gap-2 text-white font-bold text-lg hover:text-[var(--renoz-green)] transition-colors mt-4 group/link",
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        "Explore System",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover/link:translate-x-1 transition-transform" })
                      ]
                    }
                  )
                ]
              },
              "active"
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0, transition: { duration: 0.1 } },
                transition: { duration: 0.3, delay: 0.1 },
                className: "flex flex-col items-center justify-end h-full",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rotate-0 md:-rotate-90 whitespace-nowrap mb-0 md:mb-12 origin-left translate-x-0 md:translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white tracking-wider uppercase", children: item.title }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mt-4 md:mt-0 group-hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" }) })
                ]
              },
              "inactive"
            ) }) })
          ]
        },
        item.id
      ))
    }
  );
}
function HomePage() {
  const containerRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--cream)] font-sans selection:bg-[var(--renoz-green)] selection:text-white", ref: containerRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[100svh] md:h-screen min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 z-0", style: {
        y
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-0 z-0", initial: {
        scale: 1.15
      }, animate: {
        scale: 1
      }, transition: {
        duration: 15,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
          backgroundImage: "url('/images/about/perth-skyline-kingspark-stylized.webp')"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-20 md:pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -50
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-6 md:mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-4 py-1.5 rounded-full border border-[var(--renoz-green)]/40 text-[var(--renoz-green)] text-xs font-bold tracking-widest uppercase bg-[var(--renoz-green)]/10 backdrop-blur-md shadow-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[var(--renoz-green)] mr-2 animate-pulse" }),
            "Perth's Battery OEM"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 text-sm font-medium tracking-wide", children: "Building WA's battery capability" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 md:mb-10 text-white leading-[0.95]", children: [
          "Your solar generates excess power.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] drop-shadow-[0_0_15px_rgba(0,177,64,0.3)]", children: "Now keep it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }, className: "hidden md:block glass-dark p-6 md:p-8 rounded-2xl mb-8 md:mb-12 max-w-lg border-l-4 border-[var(--renoz-green)] shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl text-zinc-100 leading-relaxed font-light", children: [
          "Australian homes and businesses",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-medium", children: "waste 70% of their solar" }),
          " ",
          "back to the grid for cents on the dollar. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " RENOZ batteries let you store",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-medium", children: "and use it when you need it most." }),
          " "
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "lg", to: "/products", className: "group text-lg px-8 py-6 rounded-full w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(0,177,64,0.2)] hover:shadow-[0_0_30px_rgba(0,177,64,0.4)] transition-all duration-300", children: [
            "Explore Our Batteries",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", to: "/case-studies", className: "text-lg px-8 py-6 rounded-full backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white hover:text-black transition-all w-full sm:w-auto justify-center", children: "See Real Installations" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 50
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        delay: 0.8
      }, className: "hidden md:flex absolute bottom-6 left-4 right-4 md:bottom-12 md:left-auto md:right-12 flex-row gap-3 md:gap-4 z-20 justify-center md:justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark p-4 md:p-6 rounded-2xl flex-1 md:flex-none md:min-w-[180px] text-center md:text-left hover:bg-black/40 transition-colors duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-0.5", children: "WA-Based" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] md:text-xs text-[var(--renoz-green)] uppercase tracking-widest font-bold", children: "Local OEM" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark p-4 md:p-6 rounded-2xl flex-1 md:flex-none md:min-w-[180px] text-center md:text-left hover:bg-black/40 transition-colors duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-0.5", children: "10 Year" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] md:text-xs text-[var(--renoz-green)] uppercase tracking-widest font-bold", children: "Replacement Warranty" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SolarEconomics, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-spacing px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 0.8
      }, className: "mb-8 md:mb-12 lg:mb-16 text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "The Solution" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--black)] tracking-tight", children: [
          "Don't Rent Your Power. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
          "Own It."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed", children: "The only way to solve the Solar Paradox is storage. But to store energy reliably in WA, you need a battery built for the heat." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px] mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "lg:col-span-8 h-[400px] lg:h-full relative rounded-[32px] overflow-hidden group shadow-soft", initial: {
          opacity: 0,
          scale: 0.95
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: "/images/about/wa-roots.webp", alt: "WA roots", className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 p-8 md:p-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--renoz-green)] text-white text-xs font-bold uppercase tracking-wider mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
              "Designed in WA"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Engineered for the heat." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-200 text-lg max-w-md leading-relaxed font-normal", children: "Western Australia demands resilience. Our systems are built to withstand dust, isolation, and extreme temperatures." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 flex flex-col gap-6 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "flex-1 bg-[var(--black)] rounded-[32px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-soft group", initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.2
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[var(--renoz-green)]/20 rounded-full blur-[60px] pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-12 h-12 text-[var(--renoz-green)] mb-6 group-hover:scale-110 transition-transform duration-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "10-Year Warranty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-secondary)]", children: "Local support means real security. We stand behind every system." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "flex-1 bg-white rounded-[32px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-soft border border-white/50", initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.4
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-12 h-12 text-[var(--black)] mb-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[var(--black)] mb-2", children: "High Efficiency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)]", children: "6000+ Cycles at 80% Depth of Discharge for maximum longevity." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-100 pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-8", children: "Compatible with your existing solar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InverterMarquee, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-spacing bg-[var(--white-warm)] relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 lg:mb-20 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "Product Range" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--black)] tracking-tight leading-none", children: "Scalable Power." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-[var(--text-muted)] max-w-sm leading-relaxed text-right md:text-left", children: "From residential homes to industrial complexes, we have a system that fits." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandingCards, { items: [{
          id: "residential",
          title: "Residential",
          kwh: "10-50 kWh",
          description: "Power your entire household with genuine security. Keep lights, fridges, and air conditioning running during outages.",
          image: "/images/stock/garage-renoz-1.webp",
          link: "/products/residential",
          icon: House
        }, {
          id: "rural",
          title: "Rural",
          kwh: "50-200 kWh",
          description: "Rugged independence for properties at the grid edge. Replace diesel generators with silent, reliable stored energy.",
          image: "/images/stock/homestead-rural-2.webp",
          // Updated Image
          link: "/products/rural",
          icon: Tractor
        }, {
          id: "commercial",
          title: "Commercial",
          kwh: "200+ kWh",
          description: "Stabilise operational costs and secure your business assets against grid instability and peak demand charges.",
          image: "/images/stock/solar-microgrid-bess-drone-shot.webp",
          // Updated Image
          link: "/products/commercial",
          icon: Building
        }] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-spacing bg-[var(--black)] text-white overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-100px"
        }, transition: {
          duration: 0.8
        }, className: "text-center mb-12 md:mb-16 lg:mb-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "Social Proof" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight", children: "Trusted by Western Australians." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-[var(--text-secondary)] max-w-2xl mx-auto", children: "Real installations. Real results. Real reviews from real customers." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-100px"
        }, transition: {
          duration: 0.8,
          delay: 0.2
        }, className: "mb-12 md:mb-16 lg:mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center gap-6 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-yellow-400", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-6 h-6 fill-current" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-white ml-2", children: "5.0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-gray-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[var(--text-secondary)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white text-lg", children: "Google Reviews" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: "From verified customers" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-6 w-12 h-12 text-[var(--renoz-green)] opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--renoz-green)]/10 border border-[var(--renoz-green)]/20 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[var(--renoz-green)] animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest", children: "Featured in Press" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "text-xl md:text-2xl font-light leading-relaxed mb-8 text-gray-100", children: `"When Brad Jones learnt it could cost up to $200,000 to have his property connected to the power grid, he decided to look at different options... Mr Jones' property is now powered by batteries engineered and made in WA by RENOZ Energy."` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-6 mb-6 border border-white/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 italic mb-4", children: '"I look at it as an investment, not as just paying for power but as an investment in the property. His system only depletes 30% overnight and is fully charged the next morning."' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[var(--text-secondary)]", children: "— Brad Jones, Harvey homeowner" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white", children: "South Western Times" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-[var(--text-secondary)]", children: "October 2, 2025" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-[var(--renoz-green)]", children: "$200k" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[var(--text-secondary)]", children: "Grid Connection Saved" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-100px"
        }, transition: {
          duration: 0.8,
          delay: 0.3
        }, className: "text-center mb-8 md:mb-12 lg:mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-yellow-400", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-white", children: "4.9/5 from Local Installers" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MasonryGallery, { title: "Provenance.", showRating: false, images: getCaseStudySubset(6) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-100px"
        }, transition: {
          duration: 0.8,
          delay: 0.4
        }, className: "mt-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-secondary)] text-xl max-w-2xl mx-auto mb-8", children: "See all our installations and read more customer stories." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "lg", to: "/case-studies", className: "rounded-full px-10 shadow-glow", children: [
            "View All Case Studies ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[var(--white-warm)] border-t border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group rounded-[32px] overflow-hidden aspect-[4/3] md:aspect-[21/9] lg:aspect-[21/9] shadow-soft cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/homeowners", className: "absolute inset-0 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "For Homeowners" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: "/images/stock/garage-renoz-2.webp", alt: "Homeowners", className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 p-8 md:p-12 flex flex-col items-start z-10 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold text-white", children: "For Homeowners" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 backdrop-blur-md p-2 rounded-full group-hover:bg-[var(--renoz-green)] transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "text-white w-6 h-6" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-lg max-w-md", children: "Secure your home with energy independence." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group rounded-[32px] overflow-hidden aspect-[4/3] md:aspect-[21/9] lg:aspect-[21/9] shadow-soft cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partners", className: "absolute inset-0 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "For Installers" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: "/images/stock/renoz-stacking.webp", alt: "Partners", className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 p-8 md:p-12 flex flex-col items-start z-10 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold text-white", children: "For Partners" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 backdrop-blur-md p-2 rounded-full group-hover:bg-[var(--renoz-green)] transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "text-white w-6 h-6" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-lg max-w-md", children: "Partner with WA's Own Battery OEM." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSteps, { title: "Getting secure power is simple.", steps: [{
      title: "Contact us for a sizing",
      content: "Send us a photo of your switchboard and current solar setup. Our engineers will determine which RENOZ configuration is best for your specific load profile.",
      image: "/images/stock/renoz-ccs.webp"
    }, {
      title: "Connect with a partner",
      content: "We'll introduce you to a certified installer in your local area. No call centers, just experienced tradespeople who know our systems inside out.",
      image: "/images/stock/renoz-stacking.webp"
    }, {
      title: "Install & Stay Protected",
      content: "Installation typically takes one day. Once active, your system automatically manages your power—saving you money daily and keeping the lights on during blackouts.",
      image: "/images/stock/garage-renoz-1.webp"
    }] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UrgencyBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-[var(--cream)] relative overflow-hidden flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center relative z-10 max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--black)] mb-6 md:mb-8 tracking-tighter", children: [
        "Ready to secure ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " your energy?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", to: "/contact", className: "text-lg px-12 py-6 rounded-full shadow-glow", children: "Get in Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-sm font-medium uppercase tracking-widest mt-4 sm:mt-0 sm:ml-4", children: "Talk to our Perth team" })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
