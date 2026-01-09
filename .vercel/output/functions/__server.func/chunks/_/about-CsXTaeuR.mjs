import { a as reactExports, o as jsxRuntimeExports } from "./server.mjs";
import { V as VerticalTimeline } from "./VerticalTimeline-DDYzBAOI.mjs";
import { m as motion, c as createLucideIcon, T as Thermometer, Z as Zap, g as Shield, A as AnimatePresence, X, a as cn } from "./router-B12Uujuq.mjs";
import { C as Check } from "./check-ByJ9nAxH.mjs";
import { Q as Quote } from "./quote-DyeFl19i.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./index-BHtk7koP.mjs";
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
      key: "1l2ple"
    }
  ],
  [
    "path",
    {
      d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
      key: "1wam0m"
    }
  ]
];
const Atom = createLucideIcon("atom", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb"
    }
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }]
];
const Handshake = createLucideIcon("handshake", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode$1);
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
function YouTubeEmbed({
  videoId,
  title = "YouTube video player",
  className
}) {
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl",
        className
      ),
      children: !isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setIsPlaying(true),
          className: "group absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer",
          "aria-label": `Play ${title}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
                alt: title,
                className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-20 h-20 bg-[var(--renoz-green)] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-8 h-8 text-white fill-current ml-1" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
          title,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          className: "absolute inset-0 w-full h-full"
        }
      )
    }
  );
}
function AboutPage() {
  const [selectedMember, setSelectedMember] = reactExports.useState(null);
  const teamMembers = [{
    name: "Simon Chan",
    role: "Chief Executive Officer",
    image: "/images/team/simon-c.webp",
    bio: 'Simon Chan, a distinguished electrical engineer from UWA (1985), has dedicated his career to innovation in electronics and renewable energy. As a pivotal figure at GenZ Energy and co-founder of PowerPlus Energy, he successfully bootstrapped two Australian-made lithium battery companies. Now as RENOZ Energy CEO, Simon is developing high-reliability "Software Defined Batteries" in partnership with Oxford University spinout Brill Power.'
  }, {
    name: "Jack Spencer-Cotton",
    role: "Managing Director",
    image: "/images/team/jack-sc.webp",
    bio: "Jack is the managing director of RENOZ Energy and a non-executive director of One International Group Limited. With over 20 years of engineering experience, he has held senior roles in international manufacturing companies and founded his own electronics engineering consultancy. His expertise spans automation engineering, project planning, and managing large-scale projects, having previously served in senior engineering positions at ERG Group Ltd, Sanmina-SCI Corporation, SRX Global, and Pfizer Australia."
  }, {
    name: "Joel Chan",
    role: "Operations Manager",
    image: "/images/team/joel-c.webp",
    bio: "Joel is a qualified Mechanical Engineer who leads Commercialisation and Operations at RENOZ Energy. With deep expertise in the battery value chain from his previous role as Senior Management Consultant at Worley, he focuses on building scalable, traceable infrastructure around our battery products. His experience spans operational systems design, supplier coordination, and go-to-market strategy, bringing rigorous engineering discipline to energy storage deployment."
  }, {
    name: "Jeremy Emms",
    role: "Head of Strategic Growth",
    image: "/images/team/jeremy-e.webp",
    bio: "Jeremy leads strategic growth initiatives at RENOZ Energy, focusing on market expansion and partnership development. With extensive experience in business development and strategic planning, he drives our growth strategy to establish RENOZ as Western Australia's premier energy storage provider. His expertise spans market analysis, strategic partnerships, and scaling operations to meet the growing demand for reliable energy storage solutions across WA."
  }, {
    name: "Harley Frankfurt",
    role: "Technical Advisor",
    image: "/images/team/Harley_Frankfurt.webp",
    bio: "With over 25 years of experience in the energy sector, Harley has successfully led companies and the development of approximately 4,700 megawatts (MW) of renewable energy projects. His portfolio includes wind farms, solar PV systems, battery storage, and hydrogen production facilities. He holds a Global Executive MBA from the University of Sydney Business School, specializing in disruptive innovation and renewable energy leadership."
  }];
  const partners = [{
    name: "Brill Power",
    logo: "/images/partners/brill-power-logo.svg",
    width: 140
  }, {
    name: "CE+T Power",
    logo: "/images/partners/ce-t-logo.webp",
    width: 120
  }, {
    name: "CDI Energy",
    logo: "/images/partners/cdi-energy-logo.webp",
    width: 130
  }, {
    name: "Battery Works",
    logo: "/images/partners/battery-works.webp",
    width: 140
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--white-warm)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[var(--black)] text-[var(--text-on-dark)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-0 z-0", initial: {
        scale: 1.15
      }, animate: {
        scale: 1
      }, transition: {
        duration: 15,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-60", style: {
          backgroundImage: "url('/images/stock/matagarup-bridge.webp')",
          backgroundPosition: "center 40%"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-black/30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight", children: [
          "Perth's Own ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)]", children: "Battery Manufacturer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-gray-300 max-w-2xl font-light", children: "Building the state's capability for a resilient, renewable future." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-[var(--white-warm)] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "lg:col-span-7", initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-6 block flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-[var(--renoz-green)]" }),
          "Our Story"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-[var(--black)] leading-[0.9] tracking-tight", children: [
          "From Ohio ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "to O'Connor." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg prose-gray max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl md:text-3xl font-light leading-relaxed text-[var(--black)] mb-8 border-l-4 border-[var(--renoz-green)] pl-6", children: '"The technology that empowered the Amish to live off-grid was exactly what Western Australia needed."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-[var(--text-muted)] leading-relaxed space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Before founding RENOZ, CEO Simon Chan spent years developing off-grid energy solutions for the Amish community in Cleveland, Ohio—a people who live without connection to the electric grid by choice." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "He realized that the engineering challenges there were identical to those in Western Australia: vast distances, isolation, and a need for absolute reliability. If a battery fails in the Ohio winter or the Pilbara summer, it's not an inconvenience—it's a critical failure." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-[var(--black)]", children: "In 2024, RENOZ Energy brought this battle-hardened philosophy home to Perth." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "lg:col-span-5 relative mt-8 lg:mt-24", initial: {
        opacity: 0,
        x: 20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8,
        delay: 0.2
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] rounded-[2px] overflow-hidden shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/about/wa-roots.webp", alt: "Connecting to country", className: "w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm font-mono uppercase tracking-widest mb-2 opacity-70", children: "Established 2024" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-lg font-bold", children: "Perth, Western Australia" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--renoz-green)]/10 -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute -top-6 -left-6 w-32 h-32 border border-gray-200 -z-10" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-spacing bg-[#050505] text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,166,118,0.1),transparent_70%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -30
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.8
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 border border-[var(--renoz-green)]/30 rounded-full px-4 py-1.5 bg-[var(--renoz-green)]/10 text-[var(--renoz-green)] text-xs font-mono mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[var(--renoz-green)] animate-pulse" }),
            "SYSTEM_FAILURE_PROOFING"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter text-white", children: [
            "Chemistry ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--renoz-green)] to-emerald-400", children: "Agnostic." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-lg text-gray-300 font-light leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Battery science moves fast. Committing to a single chemistry is a risk. That's why we build",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Software Defined Batteries " }),
              "that can manage any electron source—LFP, Sodium-ion, or Hydrogen."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Powered by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Brill Power" }),
              " technology, our BMS actively balances cells to extend life by up to 60%, regardless of the chemistry inside."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Atom, { className: "w-6 h-6 text-[var(--renoz-green)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: "Next Gen: Sodium-Ion" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: "We are actively developing Sodium-ion packs for 2026 release. Abundant, safe, and cold-weather resilient." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.9
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.8,
          delay: 0.2
        }, className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [{
          icon: Thermometer,
          title: "Extreme Temp",
          desc: "-20°C to 60°C Operation",
          code: "TEMP_RATING_A1"
        }, {
          icon: Zap,
          title: "High C-Rates",
          desc: "Rapid Charge/Discharge",
          code: "PWR_DELIVERY_MAX"
        }, {
          icon: Truck,
          title: "Logistics Safe",
          desc: "0V Transport (Sodium)",
          code: "LOG_SAFETY_IDX"
        }, {
          icon: Shield,
          title: "Abundant",
          desc: "No Lithium Mining",
          code: "MAT_SUSTAINABLE"
        }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative p-6 bg-[#0A0A0A] border border-white/10 hover:border-[var(--renoz-green)]/50 transition-colors duration-300 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-2 opacity-30 font-mono text-[10px] text-[var(--renoz-green)]", children: item.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[var(--renoz-green)]/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-[var(--renoz-green)]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white mb-1 group-hover:text-[var(--renoz-green)] transition-colors", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: item.desc })
        ] }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-[var(--cream)] relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Our Core Values" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)]", children: "The principles that guide every system we build." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 hide-scrollbar pb-8", children: [{
        title: "Resilience.",
        desc: "We engineer for the worst-case scenario. When the grid fails, our systems don't.",
        bg: "from-gray-900 to-black"
      }, {
        title: "Local Support.",
        desc: "No overseas call centers. You speak directly to the engineers who designed your system.",
        bg: "from-[var(--renoz-green)] to-emerald-900"
      }, {
        title: "Quality.",
        desc: "Tier-1 components only. Rigorously tested in Perth before they ever reach your site.",
        bg: "from-blue-900 to-black"
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85%] max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden rounded-[32px] p-8 h-[350px] flex flex-col justify-between shadow-xl`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${item.bg}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-white/30 mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: item.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-200 font-light leading-relaxed", children: item.desc }) })
      ] }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:grid md:grid-cols-3 gap-6 lg:gap-8", children: [{
        title: "Resilience.",
        desc: "We engineer for the worst-case scenario. When the grid fails, our systems don't.",
        bg: "from-gray-900 to-black"
      }, {
        title: "Local Support.",
        desc: "No overseas call centers. You speak directly to the engineers who designed your system.",
        bg: "from-[var(--renoz-green)] to-emerald-900"
      }, {
        title: "Quality.",
        desc: "Tier-1 components only. Rigorously tested in Perth before they ever reach your site.",
        bg: "from-blue-900 to-black"
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: `relative overflow-hidden rounded-[40px] p-10 h-[400px] flex flex-col justify-between group`, initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6,
        delay: i * 0.1
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${item.bg} opacity-90 transition-opacity duration-500` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-white/30 mb-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: item.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-200 font-light leading-relaxed", children: item.desc }) })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-black text-white relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-end justify-between mb-12 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "Feature Presentation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter loading-none", children: "See the difference." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 max-w-sm text-lg text-right md:text-left", children: "Go inside our Perth facility and see how we engineer resilience." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(YouTubeEmbed, { videoId: "LMNODhIAkS4", title: "RENOZ Energy: Powering Western Australia" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-[var(--cream)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VerticalTimeline, { title: "Our Journey", highlightLast: true, steps: [{
      title: "2024 - The Inception",
      description: "RENOZ Energy was founded to bring proven off-grid technology to Western Australia. Development began on the LV-5KWH100AH—a modular, chemistry-agnostic platform designed for Australian conditions.",
      image: "/images/stock/renoz-ccs.webp"
    }, {
      title: "Late 2024 - Innovation",
      description: "Partnered with Oxford University spinout Brill Power to deliver a commercial BESS MVP. Pioneering one of Australia's first dual-chemistry systems combining LFP and Sodium-ion technology.",
      image: "/images/products/commercial/Brill-Power-System.webp"
    }, {
      title: "2025 - Certification & Launch",
      description: "Achieved UL1973 certification. Joined the Smart Energy Council (March). CEC certification secured and launched into the Cheaper Home Batteries program (July).",
      image: "/images/about/unpacking-container.webp"
    }, {
      title: "Dec 2025 - Recognition",
      description: "Shortlisted as a finalist in the WA GreenTech Hub Long Game Challenge, recognising our commitment to building WA's battery manufacturing capability.",
      image: "/images/about/greentech-finalist-group.webp"
    }, {
      title: "Future - Local Manufacturing",
      description: "Our goal: full local battery manufacturing in Western Australia. Building sovereign capability for a resilient, renewable future.",
      image: "/images/stock/solar-microgrid-bess-drone-shot.webp"
    }] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-white border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "Integrity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold text-[var(--black)] mb-6", children: [
          "Global Engineering. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "md:hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Local Compliance." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-xl max-w-2xl font-light", children: "We pair world-class components with rigorous Australian certification standards." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-24 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-[var(--black)] mb-8 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "w-5 h-5 text-[var(--renoz-green)]" }),
            "Technology Partners"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: partners.map((partner, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 bg-gray-50 rounded-xl flex items-center justify-center p-6 border border-gray-100 grayscale hover:grayscale-0 transition-all duration-500 hover:bg-white hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: partner.logo, alt: partner.name, className: "max-w-full max-h-full object-contain" }) }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-[var(--black)] mb-8 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-[var(--renoz-green)]" }),
            "Compliance Framework"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[var(--white-warm)] rounded-3xl p-8 md:p-10 border border-gray-100 relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 blur-[60px] rounded-full pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-gray-200/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 p-2 shrink-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/about/SEC_GoldMember_Logo.webp", alt: "Smart Energy Council Gold Member", className: "w-full h-full object-contain" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-lg font-bold text-[var(--black)]", children: "Smart Energy Council Gold Member" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)]", children: "Gold member status, committed to the long-term development of Australia's energy storage industry." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: [{
                title: "UL1973 Certified",
                desc: "Safety Standard for Stationary Batteries"
              }, {
                title: "CEC Approved",
                desc: "Clean Energy Council Listed (Rebate Eligible)"
              }, {
                title: "AS/NZS 5139",
                desc: "Compliant with AU Installation Safety Standards"
              }, {
                title: "UN 38.3",
                desc: "Certified for Safe Transport (Lithium Batteries)"
              }].map((cert, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-green-700", strokeWidth: 3 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900 text-sm", children: cert.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: cert.desc })
                ] })
              ] }, i)) })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-[var(--cream)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row items-end justify-between mb-16 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4 text-[var(--black)]", children: "Leadership." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-xl max-w-xl", children: "The engineers and strategists building WA's battery capability." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 hide-scrollbar pb-8", children: teamMembers.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[70%] max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group cursor-pointer h-full", onClick: () => setSelectedMember(member), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4 rounded-[16px] overflow-hidden aspect-[3/4] bg-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.image, alt: member.name, className: "w-full h-full object-cover", loading: "lazy", onError: (e) => {
            const target = e.target;
            if (target.src.includes(".webp")) {
              target.src = member.image.replace(".webp", ".png");
            }
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm", children: "Read Bio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-[var(--black)] leading-tight", children: member.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1 font-medium", children: member.role })
      ] }) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8", children: teamMembers.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "group cursor-pointer", initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: index * 0.1
      }, onClick: () => setSelectedMember(member), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-5 rounded-[4px] overflow-hidden aspect-[3/4] bg-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.image, alt: member.name, className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0", loading: "lazy", onError: (e) => {
            const target = e.target;
            if (target.src.includes(".webp")) {
              target.src = member.image.replace(".webp", ".png");
            }
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/90 backdrop-blur-md py-2 px-4 rounded-full text-xs font-bold uppercase tracking-widest text-center shadow-lg text-[var(--black)]", children: "Read Bio" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-[var(--black)] leading-tight group-hover:text-[var(--renoz-green)] transition-colors", children: member.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1 font-medium", children: member.role })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedMember && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, onClick: () => setSelectedMember(null), className: "absolute inset-0 bg-black/60 backdrop-blur-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95,
        y: 20
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.95,
        y: 20
      }, className: "relative bg-white rounded-[32px] w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px] overflow-y-auto md:overflow-y-visible", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedMember(null), className: "absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-gray-800" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-2/5 relative min-h-[250px] md:min-h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedMember.image, alt: selectedMember.name, className: "absolute inset-0 w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 text-white md:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: selectedMember.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--renoz-green)] font-bold", children: selectedMember.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-[var(--black)] mb-2", children: selectedMember.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--renoz-green)] font-bold uppercase tracking-wider", children: selectedMember.role })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -top-4 -left-4 w-8 h-8 text-gray-100 fill-current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-lg leading-relaxed relative z-10", children: selectedMember.bio })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
