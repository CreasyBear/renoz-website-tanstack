import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as Button } from "./router-6SuvEb_N.mjs";
import "@vercel/analytics/react";
import "react";
import "clsx";
import "framer-motion";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@supabase/supabase-js";
function CookiePage() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--cream)]", children: /* @__PURE__ */ jsx("section", { className: "pt-40 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-12 text-[var(--black)] tracking-tight", children: "Cookie Policy" }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none text-[var(--text-muted)] space-y-8 leading-relaxed", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 font-medium", children: [
        "Last updated:",
        " ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("en-AU", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "1. What are cookies?" }),
        /* @__PURE__ */ jsx("p", { children: "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "2. How we use cookies" }),
        /* @__PURE__ */ jsx("p", { children: "We use cookies for the following purposes:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 mt-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Essential Cookies:" }),
            " Required for the website to function properly (e.g., secure warranty registration forms)."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Analytics Cookies:" }),
            " Help us understand how visitors interact with the website by collecting and reporting information anonymously."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Functionality Cookies:" }),
            " Allow the website to remember choices you make (such as your preferred language or region)."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "3. Managing Cookies" }),
        /* @__PURE__ */ jsx("p", { children: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-4", children: "Cookie Preferences" }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-sm", children: "We respect your privacy. You can choose to reject non-essential cookies. Essential cookies required for site functionality cannot be disabled." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => window.history.back(), children: "Reject All Non-Essential" }),
          /* @__PURE__ */ jsx(Button, { variant: "primary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Accept All & Continue" }) })
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  CookiePage as component
};
