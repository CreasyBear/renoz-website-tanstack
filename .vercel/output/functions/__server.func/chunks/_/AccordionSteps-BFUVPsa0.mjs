import { a as reactExports, o as jsxRuntimeExports } from "./server.mjs";
import { C as ChevronDown, A as AnimatePresence, m as motion, I as Image } from "./router-CyzwqXBN.mjs";
function AccordionSteps({ steps, title }) {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-8 text-[var(--black)]", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-4", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `border-b border-gray-200 pb-4 last:border-0 transition-colors duration-300 ${openIndex === index ? "opacity-100" : "opacity-60 hover:opacity-100"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpenIndex(index),
                className: "w-full flex items-center justify-between text-left py-4 group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `text-2xl font-mono font-bold transition-colors ${openIndex === index ? "text-[var(--renoz-green)]" : "text-gray-300 group-hover:text-gray-400"}`,
                        children: [
                          String(index + 1).padStart(2, "0"),
                          "."
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: `text-xl md:text-2xl font-bold transition-colors ${openIndex === index ? "text-[var(--black)]" : "text-gray-500 group-hover:text-gray-700"}`,
                        children: step.title
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === index ? "border-[var(--renoz-green)] bg-[var(--renoz-green)] text-white rotate-180" : "border-gray-200 text-gray-400 group-hover:border-gray-300"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
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
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-12 md:pl-16 pr-4 pb-4 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] text-lg leading-relaxed", children: step.content }),
                  step.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-6 rounded-2xl overflow-hidden aspect-video relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Image,
                    {
                      src: step.image,
                      alt: step.title,
                      className: "w-full h-full object-cover",
                      width: 600,
                      height: 338
                    }
                  ) })
                ] })
              }
            ) })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block flex-1 relative h-[500px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-8 w-full h-full rounded-[32px] overflow-hidden bg-gray-100 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 1.05 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Image,
              {
                src: steps[openIndex].image || "/images/optimized/default-bg.webp",
                alt: steps[openIndex].title,
                className: "w-full h-full object-cover",
                width: 800,
                height: 600
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" })
          ]
        },
        openIndex
      ) }) }) })
    ] })
  ] });
}
export {
  AccordionSteps as A
};
