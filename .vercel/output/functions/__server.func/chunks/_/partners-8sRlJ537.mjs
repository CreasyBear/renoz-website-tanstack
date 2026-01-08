import { o as jsxRuntimeExports } from "./server.mjs";
import { m as motion, I as Image, a as createLucideIcon, B as Button, A as ArrowRight, L as Link, Z as Zap } from "./router-D_CYVxjy.mjs";
import { A as AccordionSteps } from "./AccordionSteps-C87AnzQN.mjs";
import { H as HardHat } from "./hard-hat-Bkm723Li.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./types-RbEUnDjD.mjs";
const __iconNode$4 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
const __iconNode$2 = [
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
const PhoneCall = createLucideIcon("phone-call", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
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
const partnerTypes = [{
  icon: HardHat,
  title: "Installers",
  description: "Trade accounts, wholesale pricing, and direct technical support for certified electricians.",
  cta: "Apply for Trade Account",
  href: "/contact?type=installer"
}, {
  icon: Warehouse,
  title: "Distributors",
  description: "Carry our brand in your territory. Margin protection, marketing support, and co-branded materials.",
  cta: "Discuss Distribution",
  href: "/contact?type=distributor"
}, {
  icon: Building2,
  title: "Project Developers",
  description: "Commercial and utility-scale BESS projects. Engineering support, custom configurations, and EPC partnerships.",
  cta: "Discuss a Project",
  href: "/contact?type=developer"
}];
function PartnersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--cream)] font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--black)] text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-0 z-0", initial: {
        scale: 1.1
      }, animate: {
        scale: 1
      }, transition: {
        duration: 20,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: "/images/about/team-warehouse.webp", alt: "RENOZ Team in Warehouse", className: "w-full h-full object-cover opacity-30", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-[var(--black)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-noise opacity-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--renoz-green)]/30 bg-[var(--renoz-green)]/10 backdrop-blur-md mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-[var(--renoz-green)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest", children: "Trade Partner Program" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-[0.9] text-white", children: [
          "Local Support. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--renoz-green)] to-emerald-400", children: "Global Standard." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl text-gray-300 mb-14 leading-relaxed max-w-3xl mx-auto font-light", children: [
          "We don't just stick a label on a box. We engineer and support batteries in Perth.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: "Partner with the source" }),
          " ",
          "for direct access to WA's battery experts."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 w-full justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "lg", to: "#partner-types", className: "rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-[var(--renoz-green)]/20 transition-all hover:-translate-y-1", children: [
            "Become a Partner",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", to: "/products", className: "rounded-full px-10 py-6 text-lg bg-transparent text-white border-white/20 hover:bg-white hover:text-[var(--black)] backdrop-blur-sm", children: "View Range" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "partner-types", className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-4 text-[var(--black)]", children: "Choose Your Path" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-lg max-w-2xl mx-auto", children: "Whether you install, distribute, or develop, we're here to back you up with local stock and engineering support." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-20", children: partnerTypes.map((partner, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "group relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[var(--renoz-green)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(partner.icon, { className: "w-6 h-6", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-[var(--black)]", children: partner.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-sm leading-relaxed mb-6", children: partner.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: partner.href, className: "inline-flex items-center text-[var(--renoz-green)] font-bold text-sm group-hover:underline", children: [
          partner.cta,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[var(--black)] rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid md:grid-cols-3 gap-8 text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "w-6 h-6 text-[var(--renoz-green)]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Real Support." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "We're in O'Connor, not overseas. Talk directly to the engineers who designed the system." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Warehouse, { className: "w-6 h-6 text-[var(--renoz-green)]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Local Stock." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "We hold significant inventory in WA. No waiting for containers. Instant warranty swaps." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-[var(--renoz-green)]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Partnership First." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "We design & support. You install. We pass leads to our network and never compete with you." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--renoz-green)]/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-6 text-[var(--black)]", children: "How we work together" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-lg max-w-2xl mx-auto", children: "Simple onboarding. No hoops to jump through. Just verify your credentials and start installing." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSteps, { title: "", steps: [{
        title: "Submit an Enquiry",
        content: "Fill out the form below or pick up the phone. Let us know what you do—install solar, distribute hardware, or develop projects.",
        image: "/images/stock/renoz-stacking.webp"
      }, {
        title: "Visit our Facility",
        content: "Come down to O'Connor. Meet the team, see the stock on the floor, and get hands-on with the product before you commit.",
        image: "/images/about/unpacking-container.webp"
      }, {
        title: "Find a Solution",
        content: "We'll set you up with the right commercial framework. Whether it's wholesale pricing, distribution territory, or project specs.",
        image: "/images/case-studies/Harvey-35kWh.webp"
      }] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase mb-4 text-xs", children: "Technical Specs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-6 text-[var(--black)] leading-tight", children: [
          "Engineered for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Easy Installation."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 mb-8", children: ["Free Standing - No Wall Mount Required", "Solid Brass M8 Terminals (No proprietary connectors)", "Native CAN/RS485 for your preferred inverter", "Self-Stacking Alignment Pins", "100A Continuous Discharge"].map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-[var(--renoz-green)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 font-medium", children: feature })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl shadow-sm text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-[var(--black)]", children: "51.2V" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-gray-400 font-bold", children: "Nominal" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl shadow-sm text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-[var(--black)]", children: [
              "5.12",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "kWh" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-gray-400 font-bold", children: "Capacity" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl shadow-sm text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-[var(--black)]", children: "6000+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-gray-400 font-bold", children: "Cycles" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: "/images/case-studies/Simon-Oeij-HV60kWh.webp", alt: "Commercial Installation", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 p-8 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-[var(--renoz-green)] font-bold uppercase tracking-widest text-xs mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
            "Commercial Grade"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Need HV Solutions?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm mb-6 max-w-md", children: "We scale from residential 5kWh to megawatt commercial systems. Access our HV range for larger clients." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", to: "/products/commercial", className: "rounded-full border-white text-white hover:bg-white hover:text-black", children: "View Commercial" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 text-center bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6 text-[var(--black)]", children: "Ready to partner?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] mb-8 text-lg", children: "Join the network of WA energy professionals building local capability." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", to: "/contact?type=installer", className: "rounded-full px-8 py-4 shadow-lg hover:-translate-y-1 transition-transform", children: "Apply for Account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", to: "/contact?type=distributor", className: "rounded-full px-8 py-4", children: "Distribution" })
      ] })
    ] }) })
  ] });
}
export {
  PartnersPage as component
};
