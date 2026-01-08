import { o as jsxRuntimeExports } from "./server.mjs";
import { m as motion, I as Image } from "./router-BOVv61Kh.mjs";
import { C as Check } from "./check-BLqSWSUI.mjs";
function VerticalTimeline({
  steps,
  title,
  highlightLast = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full py-12", children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-16 text-center text-[var(--black)]", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[20px] top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:hidden" }),
      steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const isActive = highlightLast && isLast;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative flex flex-col md:flex-row items-center mb-16 last:mb-0 group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-10 transition-all duration-300 ${isActive ? "bg-amber-400 scale-125 shadow-[0_0_20px_rgba(251,191,36,0.6)] animate-pulse" : "bg-[var(--renoz-green)]"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: `w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`,
                  initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, margin: "-100px" },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest mb-3", children: [
                      "Step ",
                      index + 1
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 text-[var(--black)]", children: step.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-lg leading-relaxed mb-6 md:mb-0", children: step.description })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: `w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`,
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true, margin: "-100px" },
                  transition: { duration: 0.5, delay: index * 0.1 + 0.2 },
                  children: step.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-soft aspect-[4/3] group-hover:shadow-lg transition-shadow duration-500 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Image,
                    {
                      src: step.image,
                      alt: step.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                      width: 600,
                      height: 450
                    }
                  ) })
                }
              )
            ]
          },
          index
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[20px] md:left-1/2 bottom-0 translate-y-full -translate-x-1/2 flex flex-col items-center pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-[var(--renoz-green)] text-white flex items-center justify-center shadow-lg mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6", strokeWidth: 3 }) }) })
    ] })
  ] });
}
export {
  VerticalTimeline as V
};
