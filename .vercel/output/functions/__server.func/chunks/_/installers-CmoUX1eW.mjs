import { o as jsxRuntimeExports } from "./server.mjs";
import { A as AccordionSteps } from "./AccordionSteps-Oz-w4Y6G.mjs";
import { m as motion, I as Image, B as Button, T as TrendingUp, a as createLucideIcon, Z as Zap, A as ArrowRight } from "./router-DL48cnRL.mjs";
import { H as HardHat } from "./hard-hat-G-Xv6ggQ.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./types-RbEUnDjD.mjs";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const PhoneCall = createLucideIcon("phone-call", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11", key: "pb2vm6" }],
  [
    "path",
    {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z",
      key: "doq5xv"
    }
  ],
  ["path", { d: "M6 13h12", key: "yf64js" }],
  ["path", { d: "M6 17h12", key: "1jwigz" }]
];
const Warehouse = createLucideIcon("warehouse", __iconNode);
function InstallersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--cream)] font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[var(--black)] text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-0 z-0", initial: {
        scale: 1.15
      }, animate: {
        scale: 1
      }, transition: {
        duration: 15,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: "/images/about/team-warehouse.webp", alt: "RENOZ Team in Warehouse", className: "w-full h-full object-cover opacity-50", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--black)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--renoz-green)]/10 border border-[var(--renoz-green)]/20 text-[var(--renoz-green)] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HardHat, { className: "w-3 h-3" }),
          "For Licensed Electricians"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-none text-white", children: [
          "Your partner, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--renoz-green)] to-emerald-400", children: "not just a supplier." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light", children: "We cut out the distributor to give you better margins, direct access to stock, and engineering support that actually picks up the phone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-5 w-full justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", to: "/contact?type=installer", className: "rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-[var(--renoz-green)]/20 transition-all", children: "Apply for Trade Account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", to: "/products/residential", className: "rounded-full px-10 py-7 text-lg bg-transparent text-white border-white/20 hover:bg-white hover:text-[var(--black)] backdrop-blur-sm", children: "View Product Range" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4 text-[var(--black)]", children: "The RENOZ Difference." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-xl", children: "Why WA sparkies are making the switch." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 hide-scrollbar pb-8", children: [{
        icon: TrendingUp,
        title: "Better Margins",
        desc: "We design the product and sell direct to you. No distributor markup means more profit in your pocket on every job."
      }, {
        icon: PhoneCall,
        title: "Real Support",
        desc: "Stuck on site? Call us. You'll speak to an engineer in O'Connor, not a call center overseas. We know our product inside out."
      }, {
        icon: Warehouse,
        title: "Local Stock",
        desc: "We hold significant stock in our WA warehouse. Short lead times and local warranty swaps keep your projects moving."
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85vw]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-[24px] bg-gray-50 border border-gray-100 h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[var(--renoz-green)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-7 h-7", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] leading-relaxed text-base", children: item.desc })
      ] }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:grid md:grid-cols-3 gap-8 lg:gap-12", children: [{
        icon: TrendingUp,
        title: "Better Margins",
        desc: "We design the product and sell direct to you. No distributor markup means more profit in your pocket on every job."
      }, {
        icon: PhoneCall,
        title: "Real Support",
        desc: "Stuck on site? Call us. You'll speak to an engineer in O'Connor, not a call center overseas. We know our product inside out."
      }, {
        icon: Warehouse,
        title: "Local Stock",
        desc: "We hold significant stock in our WA warehouse. Short lead times and local warranty swaps keep your projects moving."
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-[var(--renoz-green)] group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-8 h-8", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] leading-relaxed text-lg", children: item.desc })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-32 bg-[var(--black)] text-white overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--renoz-green)]/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase mb-4", children: "Technical Superiority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight", children: [
            "Engineered for the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300", children: "Trade Professional." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg mb-10 leading-relaxed", children: "We know you don't care about marketing fluff. You want specs that work, connections that don't strip, and protocols that talk to everything." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-6", children: ["100A Continuous Discharge (Real Rating)", "Solid Brass M8 Terminals (No plastic caps)", "Pre-configured CAN/RS485 for Deye/Victron", "Self-Stacking Alignment Pins (No racking)", "IP65 Rated Enclosure"].map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-[var(--renoz-green)] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: feature })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
          label: "Nominal Voltage",
          value: "51.2V",
          sub: "16S Architecture"
        }, {
          label: "Capacity",
          value: "5.12kWh",
          sub: "100Ah"
        }, {
          label: "Max Discharge",
          value: "100A",
          sub: "1C Rating"
        }, {
          label: "Cycle Life",
          value: "6000+",
          sub: "@ 80% DoD"
        }].map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
          scale: 1.02
        }, className: "bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--renoz-green)] text-sm uppercase tracking-widest font-medium mb-2", children: spec.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-white mb-1", children: spec.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--renoz-green)] text-sm font-mono", children: spec.sub })
        ] }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 bg-[var(--white-warm)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSteps, { title: "How to Partner", steps: [{
      title: "Apply Online",
      content: "Fill out the trade application below. We verify your EC license and ABN to ensure we only sell to qualified professionals. Approval takes less than 24 hours.",
      image: "/images/stock/renoz-stacking.webp"
    }, {
      title: "Get Onboarded",
      content: "We'll send you our wholesale price list and invite you to the O'Connor facility. Come have a coffee, meet the engineers, and see our workshop.",
      image: "/images/about/unpacking-container.webp"
    }, {
      title: "Start Installing",
      content: "Once certified, you get direct access to wholesale pricing and priority ordering via your dedicated account manager. We'll also list you on our 'Find an Installer' map to drive local leads your way.",
      image: "/images/case-studies/Harvey-35kWh.webp"
    }] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white border-y border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[var(--black)] rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-6 text-[var(--renoz-green)] font-bold uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
          "Beyond Residential"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Commercial & HV Systems." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg mb-8 leading-relaxed", children: "From residential retrofits to megawatt-scale commercial projects, we have the hardware and the engineering chops to back you up. Access our commercial range (50kWh - 2MWh) for your larger clients." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "lg", to: "/products/commercial", className: "rounded-full px-8 py-4", children: [
          "View Commercial Specs",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[400px] rounded-3xl overflow-hidden border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: "/images/case-studies/Simon-Oeij-HV60kWh.webp", alt: "Commercial Installation", className: "w-full h-full object-cover" }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 text-center bg-[var(--cream)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-8 text-[var(--black)]", children: "Ready to switch?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] mb-10 text-xl", children: "Join the network of WA installers who are backing local engineering." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", to: "/contact?type=installer", className: "rounded-full px-16 py-6 text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1", children: "Apply for Trade Account" }) })
    ] }) })
  ] });
}
export {
  InstallersPage as component
};
