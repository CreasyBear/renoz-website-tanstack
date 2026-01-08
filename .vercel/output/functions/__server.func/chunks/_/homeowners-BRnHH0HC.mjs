import { o as jsxRuntimeExports, a as reactExports } from "./server.mjs";
import { m as motion, B as Button, l as SolarEconomics, S as Shield, n as MasonryGallery, o as getCaseStudySubset, g as cn, I as Image, d as Sun, M as Moon } from "./router-BINnGphe.mjs";
import { C as Card } from "./Card-D7qZoRa1.mjs";
import { V as VerticalTimeline } from "./VerticalTimeline-B_COM4BK.mjs";
import { H as House } from "./house-8XSPSBC6.mjs";
import { D as DollarSign } from "./dollar-sign-hvBnGEM5.mjs";
import { C as CircleCheckBig } from "./circle-check-big-C2QrBMeW.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./types-RbEUnDjD.mjs";
import "./check-CozvwX0c.mjs";
function DayNightSlider({ className }) {
  const [mode, setMode] = reactExports.useState("night");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative w-full aspect-[4/3] md:aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-gray-900 group select-none",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Image,
            {
              src: "/images/stock/corner-street-house.webp",
              alt: "Daytime Solar Production",
              className: "w-full h-full object-cover",
              width: 1200,
              height: 675
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-overlay" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute inset-0 z-10",
            initial: { opacity: 1 },
            animate: { opacity: mode === "night" ? 1 : 0 },
            transition: { duration: 1.2, ease: "easeInOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Image,
                {
                  src: "/images/stock/corner-street-house-lights-on-tesla.webp",
                  alt: "Nighttime Battery Power",
                  className: "w-full h-full object-cover",
                  width: 1200,
                  height: 675
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-blue-900/30 mix-blend-multiply" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h3,
            {
              className: "text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2",
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              children: mode === "day" ? "Generate & Store." : "Power through the night."
            },
            mode
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              className: "text-lg md:text-xl text-white/90 font-medium drop-shadow-md",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.1 },
              children: mode === "day" ? "Capture free energy from the sun." : "Use your stored energy when the sun goes down."
            },
            `sub-${mode}`
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex p-1.5 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setMode("day"),
              className: cn(
                "relative px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-500",
                mode === "day" ? "bg-white text-black shadow-lg scale-105" : "text-white/70 hover:text-white hover:bg-white/10"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Sun,
                  {
                    className: cn(
                      "w-5 h-5",
                      mode === "day" ? "text-orange-500" : "text-white/70"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold leading-none mb-0.5", children: "Day" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium opacity-80 uppercase tracking-wider", children: "Charge Battery" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setMode("night"),
              className: cn(
                "relative px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-500",
                mode === "night" ? "bg-white text-black shadow-lg scale-105" : "text-white/70 hover:text-white hover:bg-white/10"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Moon,
                  {
                    className: cn(
                      "w-5 h-5",
                      mode === "night" ? "text-blue-600" : "text-white/70"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold leading-none mb-0.5", children: "Night" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium opacity-80 uppercase tracking-wider", children: "Discharge" })
                ] })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
function HomeownersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--cream)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--renoz-green)] text-white text-xs font-bold tracking-widest uppercase mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-3 h-3" }),
          "For Homeowners"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-none text-[var(--black)]", children: [
          "Keep your power. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)]", children: "Keep your savings." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto", children: "Stop selling your solar energy for pennies. Store it, use it at night, and protect your home from blackouts." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.98,
        y: 40
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.2
      }, className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DayNightSlider, { className: "w-full aspect-[4/5] md:aspect-[21/9] min-h-[600px] shadow-2xl border border-white/20" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6,
        delay: 0.8
      }, className: "flex flex-col sm:flex-row gap-4 justify-center mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", to: "/products/residential", className: "rounded-full px-8 shadow-lg shadow-[var(--renoz-green)]/20 text-lg py-6", children: "View Battery Sizes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", to: "/contact?type=homeowner", className: "rounded-full px-8 border-gray-300 hover:bg-[var(--black)] hover:text-white hover:border-transparent text-lg py-6", children: "Request a Quote" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SolarEconomics, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-[var(--white-warm)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "The Solution" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4 text-[var(--black)]", children: "Independence is the answer." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-lg", children: "A RENOZ battery bridges the gap between your solar production and your energy needs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 hide-scrollbar pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85vw]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "h-full p-6 border-none bg-white shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-green-100 text-green-600 rounded-[20px] flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Slash Your Bills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] leading-relaxed text-sm", children: "Store your free solar energy and use it during peak times. Many customers reduce their grid reliance by over 90%." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85vw]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "h-full p-6 border-none bg-[var(--black)] text-white shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-white/10 text-[var(--renoz-green)] rounded-[20px] flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Blackout Proof" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 leading-relaxed text-sm", children: "When the grid goes down, your RENOZ system instantly takes over. Keep your lights, internet, and fridge running." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85vw]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "h-full p-6 border-none bg-white shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-blue-100 text-blue-600 rounded-[20px] flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Local Support" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] leading-relaxed text-sm", children: "Designed in WA, supported by WA engineers. If you ever have an issue, we're just down the road in O'Connor." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { hover: true, className: "p-8 border-none bg-white hover:shadow-lg transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-green-100 text-green-600 rounded-[20px] flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-7 h-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-3", children: "Slash Your Bills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] leading-relaxed", children: "Store your free solar energy and use it during peak times. Many customers reduce their grid reliance by over 90%." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { hover: true, className: "p-8 border-none bg-[var(--black)] text-white hover:bg-gray-900 transition-colors duration-300 shadow-xl transform md:-translate-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-white/10 text-[var(--renoz-green)] rounded-[20px] flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-7 h-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-3", children: "Blackout Proof" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 leading-relaxed", children: "When the grid goes down, your RENOZ system instantly takes over. Keep your lights, internet, and fridge running seamlessly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { hover: true, className: "p-8 border-none bg-white hover:shadow-lg transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-blue-100 text-blue-600 rounded-[20px] flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-7 h-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-3", children: "Local Support" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] leading-relaxed", children: "Designed in WA, supported by WA engineers. If you ever have an issue, we're just down the road in O'Connor." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-[var(--renoz-green)] to-[#00A676] rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col md:flex-row items-center justify-between gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-4", children: "Government Incentives" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold mb-2", children: "Did you know?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 max-w-lg text-lg", children: "You may be eligible for attractive energy loans or rebates. Our team can help navigate the latest WA incentives to lower your upfront cost." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", to: "/contact?type=general", className: "bg-white text-[var(--renoz-green)] border-none hover:bg-gray-100 shrink-0 rounded-full px-8 py-4 h-auto text-lg font-bold", children: "Check Eligibility" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: (() => {
      const steps = [{
        title: "Free Sizing Consultation",
        description: "We analyze your bill and solar output to recommend the perfect battery size (10-50kWh). No overselling, just engineering math.",
        image: "/images/stock/renoz-ccs.webp"
      }, {
        title: "Certified Installation",
        description: "We connect you with a trusted local installer who knows our systems. Installation is quick, tidy, and compliant.",
        image: "/images/stock/renoz-stacking.webp"
      }, {
        title: "Set & Forget",
        description: "Your system runs automatically. Track your savings in real-time and enjoy the peace of mind that comes with energy security.",
        image: "/images/stock/garage-renoz-1.webp"
      }];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 md:mb-16 text-center md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-[var(--black)]", children: "The path to independence." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 hide-scrollbar pb-8", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85vw]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl overflow-hidden shadow-sm h-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-48 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: step.image, alt: step.title, className: "w-full h-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider", children: [
              "Step ",
              index + 1
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 leading-relaxed", children: step.description })
          ] })
        ] }) }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VerticalTimeline, { title: "The path to independence.", steps }) })
      ] });
    })() }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-spacing bg-[var(--white-warm)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MasonryGallery, { title: "Join your neighbors.", showRating: true, images: getCaseStudySubset(3) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-spacing bg-[var(--black)] text-white text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight", children: [
          "Stop renting your power. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " Own it."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", to: "/contact?type=homeowner", className: "text-lg px-12 py-5 rounded-full shadow-glow", children: "Get My Free Quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--renoz-green)] text-sm font-medium uppercase tracking-widest mt-4 sm:mt-0 sm:ml-4", children: "10-Year Warranty included" })
        ] })
      ] })
    ] })
  ] });
}
export {
  HomeownersPage as component
};
