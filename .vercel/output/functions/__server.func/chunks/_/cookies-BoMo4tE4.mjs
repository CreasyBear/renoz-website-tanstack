import { o as jsxRuntimeExports } from "./server.mjs";
import { B as Button, L as Link } from "./router-CUuRAMEk.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./types-RbEUnDjD.mjs";
function CookiePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[var(--cream)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-12 text-[var(--black)] tracking-tight", children: "Cookie Policy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none text-[var(--text-muted)] space-y-8 leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 font-medium", children: [
        "Last updated:",
        " ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("en-AU", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "1. What are cookies?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "2. How we use cookies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We use cookies for the following purposes:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-2 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Essential Cookies:" }),
            " Required for the website to function properly (e.g., secure warranty registration forms)."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Analytics Cookies:" }),
            " Help us understand how visitors interact with the website by collecting and reporting information anonymously."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Functionality Cookies:" }),
            " Allow the website to remember choices you make (such as your preferred language or region)."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "3. Managing Cookies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-4", children: "Cookie Preferences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm", children: "We respect your privacy. You can choose to reject non-essential cookies. Essential cookies required for site functionality cannot be disabled." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => window.history.back(), children: "Reject All Non-Essential" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Accept All & Continue" }) })
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  CookiePage as component
};
