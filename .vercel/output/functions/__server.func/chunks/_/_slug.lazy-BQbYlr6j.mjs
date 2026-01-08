import { a as reactExports, o as jsxRuntimeExports } from "./server.mjs";
import { c as createLazyFileRoute, u as useScroll, b as useTransform, m as motion, d as Sun, a as createLucideIcon, S as Shield, Z as Zap, B as Button } from "./router-BronkvAw.mjs";
import { Q as Quote } from "./quote-0AM7vXPn.mjs";
import { D as DollarSign } from "./dollar-sign-Co4C3mZt.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./types-RbEUnDjD.mjs";
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
];
const VolumeX = createLucideIcon("volume-x", __iconNode);
const Route = createLazyFileRoute("/case-studies/$slug")({
  component: CaseStudyDetailPage
});
const iconMap = {
  Zap,
  DollarSign,
  Shield,
  VolumeX,
  Sun
};
function CaseStudyDetailPage() {
  const { study } = Route.useLoaderData();
  const containerRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--white-warm)]", ref: containerRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          style: { y: heroY, opacity: heroOpacity },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: study.image,
                alt: study.title,
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col justify-end p-6 md:p-16 text-white pb-24 md:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.2 },
          className: "max-w-5xl mx-auto w-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 mb-6 opacity-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.2em] text-xs md:text-sm font-bold", children: study.location }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-white rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-[var(--renoz-green)]", children: study.systemSize })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8", children: study.title })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20 relative z-10 pb-16 md:pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.6 },
          className: "bg-white p-6 md:p-12 rounded-[24px] md:rounded-[32px] shadow-2xl mb-16 md:mb-24",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl font-medium leading-relaxed text-[var(--black)]", children: study.summary })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16 md:space-y-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:sticky md:top-32", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2", children: "The Frustration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-12 bg-red-400/50" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg text-zinc-600 text-lg leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: study.story.challenge }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative py-8 md:py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 text-[var(--renoz-green)]/10 -translate-y-1/2 -translate-x-1/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "relative text-2xl md:text-4xl font-medium text-center leading-tight text-[var(--black)] italic px-4", children: [
            '"',
            study.quote,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:sticky md:top-32", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--renoz-green)] mb-2", children: "The Relief" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-12 bg-[var(--renoz-green)]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg text-zinc-600 text-lg leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: study.story.solution }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[var(--black)] text-white section-spacing", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10", children: study.results.map((result, i) => {
      const Icon = iconMap[result.icon] || Zap;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.2 },
          className: "text-center pt-12 md:pt-0 px-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Icon,
              {
                className: "w-12 h-12 text-[var(--renoz-green)] mx-auto mb-6",
                strokeWidth: 1.5
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl md:text-7xl font-bold mb-4 tracking-tighter", children: result.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-500", children: result.label })
          ]
        },
        i
      );
    }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white section-spacing", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center mb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[var(--cream)] rounded-[32px] p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold tracking-tight text-[var(--black)] mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-8 bg-[var(--renoz-green)] rounded-full" }),
          "System Configuration"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-6", children: study.solution.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-start gap-4 text-lg text-zinc-700 font-normal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 w-6 h-6 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[var(--renoz-green)]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-tight", children: item })
            ]
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight", children: [
          "Ready for your own ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)]", children: "transformation?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-zinc-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed", children: "Whether it's a farm, a home, or a commercial site, we engineer systems that solve real problems." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "lg", to: "/case-studies", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 w-4 h-4" }),
            "All Stories"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", to: "/contact", children: "Start Your Journey" })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Route
};
