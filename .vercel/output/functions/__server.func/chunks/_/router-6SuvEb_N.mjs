import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, notFound, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Analytics } from "@vercel/analytics/react";
import * as React from "react";
import React__default, { forwardRef, createElement, useState, useEffect, useRef } from "react";
import { clsx } from "clsx";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { createClient } from "@supabase/supabase-js";
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$m = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$m);
const __iconNode$l = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$l);
const __iconNode$k = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$k);
const __iconNode$j = [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
];
const Coins = createLucideIcon("coins", __iconNode$j);
const __iconNode$i = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$i);
const __iconNode$h = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$h);
const __iconNode$g = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$g);
const __iconNode$f = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$f);
const __iconNode$e = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$e);
const __iconNode$d = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$d);
const __iconNode$c = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$c);
const __iconNode$b = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$a);
const __iconNode$9 = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
];
const Network = createLucideIcon("network", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$6);
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
];
const Thermometer = createLucideIcon("thermometer", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function GoogleAnalytics({ measurementId }) {
  useEffect(() => {
    if (!measurementId || typeof window === "undefined") return;
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args) {
        window.dataLayer.push(args);
      };
      window.gtag("js", /* @__PURE__ */ new Date());
    }
    window.gtag("config", measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_features: false,
      custom_map: {
        custom_parameter_1: "page_location"
      }
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    return () => {
      const existingScript = document.querySelector(
        `script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [measurementId]);
  return null;
}
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-[var(--black)] text-white pt-16 pb-8 font-sans border-t border-white/5 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1 flex flex-col justify-between h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: "inline-block opacity-90 hover:opacity-100 transition-opacity",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/optimized/logo-white-natural.webp",
                  alt: "RENOZ Energy",
                  className: "h-8 w-auto",
                  onError: (e) => {
                    const target = e.target;
                    target.src = "/images/optimized/logo-white-natural.webp";
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed max-w-xs", children: "Building Western Australia's battery capability for a resilient, renewable future." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-4 mt-8 lg:mt-0", children: [
          { icon: Linkedin, href: "#", label: "LinkedIn" },
          { icon: Facebook, href: "#", label: "Facebook" },
          { icon: Instagram, href: "#", label: "Instagram" }
        ].map((social, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: social.href,
            "aria-label": social.label,
            className: "text-gray-500 hover:text-[var(--renoz-green)] transition-colors",
            children: /* @__PURE__ */ jsx(social.icon, { size: 20, strokeWidth: 1.5 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-xs uppercase tracking-widest text-gray-600 mb-6", children: "Product" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          { label: "Residential", to: "/products/residential" },
          { label: "Rural", to: "/products/rural" },
          { label: "Commercial", to: "/products/commercial" },
          { label: "All Systems", to: "/products" }
        ].map((link, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            className: "text-gray-400 hover:text-white text-sm transition-colors",
            children: link.label
          }
        ) }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-xs uppercase tracking-widest text-gray-600 mb-6", children: "For" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          { label: "Homeowners", to: "/homeowners" },
          { label: "Installers", to: "/installers" }
        ].map((link, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            className: "text-gray-400 hover:text-white text-sm transition-colors",
            children: link.label
          }
        ) }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-xs uppercase tracking-widest text-gray-600 mb-6", children: "Company" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          { label: "About", to: "/about" },
          { label: "Case Studies", to: "/case-studies" },
          { label: "Resources", to: "/resources" }
        ].map((link, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            className: "text-gray-400 hover:text-white text-sm transition-colors",
            children: link.label
          }
        ) }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-xs uppercase tracking-widest text-gray-600 mb-6", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:sales@renoz.energy",
              className: "flex items-center gap-3 text-gray-400 hover:text-white transition-colors group",
              children: [
                /* @__PURE__ */ jsx(
                  Mail,
                  {
                    size: 16,
                    className: "text-[var(--renoz-green)] group-hover:text-white transition-colors"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "sales@renoz.energy" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:1800736693",
              className: "flex items-center gap-3 text-gray-400 hover:text-white transition-colors group",
              children: [
                /* @__PURE__ */ jsx(
                  Phone,
                  {
                    size: 16,
                    className: "text-[var(--renoz-green)] group-hover:text-white transition-colors"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "1800 736 693" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-gray-400 group", children: [
            /* @__PURE__ */ jsx(
              MapPin,
              {
                size: 16,
                className: "text-[var(--renoz-green)] mt-0.5 shrink-0"
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "text-sm leading-relaxed text-gray-500", children: [
              "Unit 4, 8 Murphy Street",
              /* @__PURE__ */ jsx("br", {}),
              "O'Connor WA 6163"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 pt-8 border-t border-white/10", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/warranty",
            className: "inline-flex items-center gap-2 text-[var(--renoz-green)] hover:text-white transition-colors group",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-bold", children: "Register Your Warranty" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-4 h-4 group-hover:translate-x-1 transition-transform",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M9 5l7 7-7 7"
                    }
                  )
                }
              )
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-600", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "© ",
          currentYear,
          " RENOZ Energy Pty Ltd."
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline text-gray-800", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Engineered in Western Australia" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6 text-xs text-gray-600", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/privacy",
            className: "hover:text-gray-400 transition-colors",
            children: "Privacy"
          }
        ),
        /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-gray-400 transition-colors", children: "Terms" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/cookies",
            className: "hover:text-gray-400 transition-colors",
            children: "Cookies"
          }
        )
      ] })
    ] })
  ] }) });
}
function Image({ src, fallback, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const handleError = () => {
    if (fallback && !hasError) {
      setImgSrc(fallback);
      setHasError(true);
    }
  };
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: imgSrc,
      alt,
      onError: handleError,
      loading: "lazy",
      decoding: "async",
      fetchPriority: props.fetchPriority || "auto",
      ...props
    }
  );
}
function cn$1(...inputs) {
  return twMerge(clsx(inputs));
}
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    {
      to: "/products",
      label: "Products",
      items: [
        { to: "/products/residential", label: "Residential" },
        { to: "/products/rural", label: "Rural" },
        { to: "/products/commercial", label: "Commercial" }
      ]
    },
    {
      label: "For",
      items: [
        { to: "/homeowners", label: "Homeowners" },
        { to: "/installers", label: "Installers" }
      ]
    },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/resources", label: "Resources" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "header",
      {
        className: cn$1(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "glass-dark py-3 shadow-lg" : "bg-transparent py-5 bg-gradient-to-b from-black/80 to-transparent"
        ),
        children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center group", children: /* @__PURE__ */ jsx(
            Image,
            {
              src: "/images/optimized/logo-white-natural.webp",
              fallback: "/images/optimized/logo-white-natural.webp",
              alt: "RENOZ Energy",
              width: 160,
              height: 40,
              className: "h-10 w-auto transition-transform duration-300 group-hover:scale-105",
              fetchPriority: "high"
            }
          ) }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group h-full flex items-center",
              onMouseEnter: () => setHovered(link.label),
              onMouseLeave: () => setHovered(null),
              children: [
                link.to ? /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: link.to,
                    className: "text-sm font-medium text-white/90 hover:text-[var(--renoz-green)] transition-colors relative py-2",
                    activeProps: {
                      className: "!text-[var(--renoz-green)]"
                    },
                    children: [
                      link.label,
                      /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--renoz-green)] transition-all duration-300 group-hover:w-full" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-white/90 hover:text-[var(--renoz-green)] transition-colors relative py-2 cursor-default", children: [
                  link.label,
                  /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--renoz-green)] transition-all duration-300 group-hover:w-full" })
                ] }),
                link.items && /* @__PURE__ */ jsx(AnimatePresence, { children: hovered === link.label && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: { opacity: 0, y: 10, scale: 0.95 },
                    transition: { duration: 0.2 },
                    className: "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48",
                    children: /* @__PURE__ */ jsx("div", { className: "bg-[var(--black)]/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl p-2 flex flex-col gap-1", children: link.items.map((item) => /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: item.to,
                        className: "block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors",
                        activeProps: {
                          className: "bg-[var(--renoz-green)]/10 text-[var(--renoz-green)]"
                        },
                        children: item.label
                      },
                      item.to
                    )) })
                  }
                ) })
              ]
            },
            link.label
          )) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsOpen(true),
              className: "md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors",
              "aria-label": "Open menu",
              children: /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setIsOpen(false),
          className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.aside,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { type: "spring", damping: 25, stiffness: 200 },
          className: "fixed top-0 right-0 h-full w-80 bg-[var(--black)] text-[var(--text-on-dark)] shadow-2xl z-50 flex flex-col border-l border-white/10",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 border-b border-white/10", children: [
              /* @__PURE__ */ jsx(
                Image,
                {
                  src: "/images/optimized/logo-white-natural.webp",
                  fallback: "/images/optimized/logo-white-natural.webp",
                  alt: "RENOZ Energy",
                  width: 128,
                  height: 32,
                  className: "h-8 w-auto"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsOpen(false),
                  className: "p-2 hover:bg-white/10 rounded-lg transition-colors text-white",
                  "aria-label": "Close menu",
                  children: /* @__PURE__ */ jsx(X, { size: 24 })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("nav", { className: "flex-1 p-6 overflow-y-auto", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: navLinks.map((link, i) => /* @__PURE__ */ jsx(
              motion.li,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.1 },
                children: link.items ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-4 rounded-xl bg-white/5 font-medium text-lg text-[var(--renoz-green)]", children: link.label }),
                  /* @__PURE__ */ jsx("ul", { className: "pl-4 space-y-1 border-l border-white/10 ml-4", children: link.items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: item.to,
                      onClick: () => setIsOpen(false),
                      className: "block p-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all",
                      activeProps: {
                        className: "text-[var(--renoz-green)] font-medium"
                      },
                      children: item.label
                    }
                  ) }, item.to)) })
                ] }) : /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: link.to,
                    onClick: () => setIsOpen(false),
                    className: "flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all active:scale-95",
                    activeProps: {
                      className: "bg-[var(--renoz-green)] hover:bg-[var(--renoz-green-dark)] text-white shadow-lg"
                    },
                    children: /* @__PURE__ */ jsx("span", { className: "font-medium text-lg", children: link.label })
                  }
                )
              },
              link.label
            )) }) }),
            /* @__PURE__ */ jsx("div", { className: "p-6 border-t border-white/10", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 text-center", children: "© 2025 RENOZ Energy" }) })
          ]
        }
      )
    ] }) })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function SkipLinks() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 3e3);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-lg",
        "transform transition-transform duration-200"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setIsVisible(false);
              document.getElementById("main-content")?.focus();
            },
            className: "px-4 py-2 bg-[var(--renoz-green)] text-white rounded-md hover:bg-[var(--renoz-green-dark)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
            children: "Skip to main content"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setIsVisible(false);
              document.getElementById("navigation")?.focus();
            },
            className: "px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
            children: "Skip to navigation"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setIsVisible(false);
              document.getElementById("footer")?.focus();
            },
            className: "px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
            children: "Skip to footer"
          }
        )
      ] })
    }
  );
}
class ErrorBoundary extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  resetError = () => {
    this.setState({ hasError: false, error: void 0 });
  };
  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return /* @__PURE__ */ jsx(
        FallbackComponent,
        {
          error: this.state.error,
          resetError: this.resetError
        }
      );
    }
    return this.props.children;
  }
}
function DefaultErrorFallback({
  error,
  resetError
}) {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--cream)] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-md", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold text-[var(--black)] mb-4", children: "Oops!" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[var(--black)] mb-4", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "text-[var(--text-muted)] mb-8", children: "We encountered an unexpected error. Please try refreshing the page." }),
    error && process.env.NODE_ENV === "development" && /* @__PURE__ */ jsxs("details", { className: "mb-8 text-left bg-white p-4 rounded-lg border", children: [
      /* @__PURE__ */ jsx("summary", { className: "cursor-pointer font-semibold mb-2", children: "Error Details (Development)" }),
      /* @__PURE__ */ jsxs("pre", { className: "text-xs text-red-600 whitespace-pre-wrap", children: [
        error.message,
        error.stack && `

${error.stack}`
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 justify-center", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: resetError,
          className: "px-6 py-3 bg-[var(--renoz-green)] text-white font-bold rounded-full hover:bg-[var(--renoz-green-dark)] transition-colors",
          children: "Try Again"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.reload(),
          className: "px-6 py-3 border-2 border-[var(--renoz-green)] text-[var(--renoz-green)] font-bold rounded-full hover:bg-[var(--renoz-green)] hover:text-white transition-colors",
          children: "Refresh Page"
        }
      )
    ] })
  ] }) });
}
function WebVitals() {
  useEffect(() => {
    import("web-vitals").then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      const sendToAnalytics = (metric) => {
        if (window.plausible) {
          window.plausible("Web Vitals", {
            props: {
              metric: metric.name,
              value: Math.round(metric.value),
              rating: metric.rating
            }
          });
        }
      };
      onCLS(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
      onINP(sendToAnalytics);
    });
  }, []);
  return null;
}
const baseUrl$f = "https://renoz.energy";
const Route$i = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default"
      },
      {
        name: "apple-mobile-web-app-title",
        content: "RENOZ Energy"
      },
      {
        title: "RENOZ Energy - Perth's Own Battery Manufacturer"
      },
      {
        name: "description",
        content: "Building Western Australia's Battery Capability. Perth-based OEM of residential and commercial battery systems."
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:site_name",
        content: "RENOZ Energy"
      },
      {
        property: "og:title",
        content: "RENOZ Energy - Perth's Own Battery Manufacturer"
      },
      {
        property: "og:description",
        content: "Building Western Australia's Battery Capability. Perth-based OEM of residential and commercial battery systems."
      },
      {
        property: "og:image",
        content: `${baseUrl$f}/images/optimized/og-image.webp`
      },
      {
        property: "og:url",
        content: baseUrl$f
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: "RENOZ Energy - Perth's Own Battery Manufacturer"
      },
      {
        name: "twitter:description",
        content: "Building Western Australia's Battery Capability. Perth-based OEM of residential and commercial battery systems."
      },
      {
        name: "twitter:image",
        content: `${baseUrl$f}/images/optimized/twitter-card.jpg`
      },
      {
        name: "theme-color",
        content: "#00B140"
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      },
      {
        name: "googlebot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      }
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/images/optimized/apple-icon.webp"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/images/optimized/logo-renoz-ios.webp"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/images/optimized/logo-renoz-ios.webp"
      },
      {
        rel: "alternate",
        type: "text/plain",
        href: "/llms.txt",
        title: "LLM-friendly company information"
      }
    ],
    scripts: [
      // Plausible Analytics (Privacy-focused, GDPR compliant, no cookies)
      {
        src: "https://plausible.io/js/script.js",
        defer: true,
        "data-domain": "renoz.energy"
      },
      // Structured Data - LocalBusiness (better for local SEO than Organization)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": baseUrl$f,
          name: "RENOZ Energy",
          alternateName: "RENOZ Energy Pty Ltd",
          url: baseUrl$f,
          logo: `${baseUrl$f}/images/optimized/logo-renoz.webp`,
          image: `${baseUrl$f}/images/optimized/og-image.webp`,
          description: "Perth-based OEM manufacturer of residential and commercial battery energy storage systems",
          priceRange: "$$",
          telephone: "+611800736693",
          email: "sales@renoz.energy",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit 4, 8 Murphy Street",
            addressLocality: "O'Connor",
            addressRegion: "WA",
            postalCode: "6163",
            addressCountry: "AU"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -32.0501,
            longitude: 115.7997
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              opens: "08:00",
              closes: "17:00"
            }
          ],
          sameAs: [
            "https://www.linkedin.com/company/renoz-energy",
            "https://www.facebook.com/renozenergy",
            "https://www.instagram.com/renozenergy"
          ],
          areaServed: {
            "@type": "State",
            name: "Western Australia"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Battery Energy Storage Systems",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Residential Battery Systems",
                  description: "10-50kWh lithium battery systems for homes"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Rural Battery Systems",
                  description: "50-200kWh battery systems for farms and off-grid properties"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Commercial Battery Systems",
                  description: "200kWh+ battery systems for businesses and industry"
                }
              }
            ]
          }
        })
      },
      // Structured data for organization
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "RENOZ Energy",
          description: "Perth-based OEM manufacturer of residential and commercial battery systems",
          url: baseUrl$f,
          logo: `${baseUrl$f}/images/optimized/logo-renoz.webp`,
          image: `${baseUrl$f}/images/optimized/og-image.webp`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit 4, 8 Murphy Street",
            addressLocality: "O'Connor",
            addressRegion: "WA",
            postalCode: "6163",
            addressCountry: "AU"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+61-8-7366-9393",
            contactType: "customer service",
            availableLanguage: "English",
            contactOption: "TollFree"
          },
          foundingDate: "2024",
          founders: [
            {
              "@type": "Person",
              name: "Simon Chan",
              jobTitle: "CEO"
            }
          ],
          knowsAbout: [
            "Renewable Energy",
            "Battery Storage Systems",
            "Solar Energy",
            "Energy Storage",
            "Clean Energy Technology"
          ],
          sameAs: [
            "https://www.linkedin.com/company/renoz-energy",
            "https://www.facebook.com/renozenergy"
          ]
        })
      },
      // Structured data for website
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "RENOZ Energy",
          url: baseUrl$f,
          description: "Perth-based OEM manufacturer of residential and commercial battery systems",
          publisher: {
            "@type": "Organization",
            name: "RENOZ Energy"
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${baseUrl$f}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })
      }
    ]
  }),
  notFoundComponent: NotFoundComponent,
  shellComponent: RootDocument
});
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--cream)] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-md", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold text-[var(--black)] mb-4", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[var(--black)] mb-4", children: "Page Not Found" }),
    /* @__PURE__ */ jsx("p", { className: "text-[var(--text-muted)] mb-8", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/",
        className: "inline-block px-8 py-3 bg-[var(--renoz-green)] text-white font-bold rounded-full hover:bg-[var(--renoz-green-dark)] transition-colors",
        children: "Return Home"
      }
    )
  ] }) });
}
function RootDocument({ children }) {
  if (typeof window !== "undefined") {
    if (!globalThis.AsyncLocalStorage) {
      globalThis.AsyncLocalStorage = class AsyncLocalStorage {
        run(callback) {
          return callback();
        }
        getStore() {
          return null;
        }
        enterWith() {
        }
        exit() {
        }
      };
    }
  }
  if (typeof window !== "undefined" && true) {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {
        });
      });
    }
  }
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(WebVitals, {}),
      /* @__PURE__ */ jsx(SkipLinks, {}),
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(Header, {}) }),
      /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx("main", { children }) }),
      /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx(Footer, {}) }),
      /* @__PURE__ */ jsx(
        GoogleAnalytics,
        {
          measurementId: "G-YQWK79E0Z9"
        }
      ),
      /* @__PURE__ */ jsx(Analytics, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$c = () => import("./warranty-Csd0TpoE.mjs");
const baseUrl$e = "https://renoz.energy";
const Route$h = createFileRoute("/warranty")({
  head: () => ({
    meta: [{
      title: "Register Your Warranty - RENOZ Energy"
    }, {
      name: "description",
      content: "Register your RENOZ battery system warranty. Get official documentation and faster warranty service. Upload photos of your installation for faster approval."
    }, {
      property: "og:title",
      content: "Register Your Warranty - RENOZ Energy"
    }, {
      property: "og:description",
      content: "Register your RENOZ battery system warranty. Get official documentation and faster warranty service."
    }, {
      property: "og:url",
      content: `${baseUrl$e}/warranty`
    }, {
      name: "twitter:title",
      content: "Register Your Warranty - RENOZ Energy"
    }, {
      name: "twitter:description",
      content: "Register your RENOZ battery system warranty. Get official documentation and faster warranty service."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const optionalString = z.string().optional().or(z.literal(""));
z.object({
  // On behalf of homeowner
  onBehalfOfHomeowner: z.boolean().default(false),
  // Contact Information (Installer)
  installerName: z.string().min(2, "Installer name is required"),
  installerEmail: z.string().email("Valid installer email required"),
  installerPhone: z.string().min(8, "Valid installer phone required"),
  // Company Information
  companyName: optionalString,
  electricalLicence: optionalString,
  // Installation Address
  installStreet: z.string().min(3, "Street address is required"),
  installSuburb: z.string().min(2, "Suburb is required"),
  installPostcode: z.string().regex(/^\d{4}$/, "Valid WA postcode required"),
  // Homeowner Contact (if registering on behalf)
  homeownerName: optionalString,
  homeownerEmail: optionalString,
  // Custom validation in superRefine
  homeownerPhone: optionalString,
  homeownerAddress: optionalString,
  // System Information
  batteryModel: z.string().min(2, "Battery model is required"),
  phases: z.enum(["Single", "Three"]),
  gridStatus: z.enum(["on-grid", "off-grid"]).default("on-grid"),
  pvSystem: z.boolean().default(false),
  backupGenset: z.boolean().default(false),
  inverterBrand: optionalString,
  inverterModel: optionalString,
  inverterSerial: optionalString,
  // Serial Numbers (multiple batteries)
  serialNumbers: z.array(z.string().min(3, "Valid serial number required")).min(1, "At least one serial number required"),
  // Dates
  installDate: z.string().min(1, "Installation date is required"),
  commissioningDate: z.string().min(1, "Commissioning date is required"),
  // Purchase Info
  retailer: optionalString,
  purchaseDate: optionalString,
  // Installation Notes
  installationNotes: optionalString,
  // Declarations
  installationDeclaration: z.boolean().refine((val) => val === true, {
    message: "You must confirm proper installation according to manufacturer requirements"
  }),
  marketingPermission: z.boolean().default(false)
}).superRefine((data, ctx) => {
  if (data.onBehalfOfHomeowner) {
    if (!data.homeownerName || data.homeownerName.trim().length === 0) {
      ctx.addIssue({
        path: ["homeownerName"],
        code: z.ZodIssueCode.custom,
        message: "Homeowner name is required when registering for homeowner"
      });
    }
    if (!data.homeownerEmail || data.homeownerEmail.trim().length === 0) {
      ctx.addIssue({
        path: ["homeownerEmail"],
        code: z.ZodIssueCode.custom,
        message: "Homeowner email is required when registering for homeowner"
      });
    } else {
      const emailResult = z.string().email().safeParse(data.homeownerEmail);
      if (!emailResult.success) {
        ctx.addIssue({
          path: ["homeownerEmail"],
          code: z.ZodIssueCode.custom,
          message: "Valid homeowner email is required"
        });
      }
    }
    if (!data.homeownerPhone || data.homeownerPhone.trim().length === 0) {
      ctx.addIssue({
        path: ["homeownerPhone"],
        code: z.ZodIssueCode.custom,
        message: "Homeowner phone is required when registering for homeowner"
      });
    }
  }
});
const $$splitComponentImporter$b = () => import("./terms-Di08Y8hg.mjs");
const baseUrl$d = "https://renoz.energy";
const Route$g = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms of Service - RENOZ Energy"
    }, {
      name: "description",
      content: "RENOZ Energy terms of service. Read our terms and conditions for using our website and services."
    }, {
      property: "og:title",
      content: "Terms of Service - RENOZ Energy"
    }, {
      property: "og:url",
      content: `${baseUrl$d}/terms`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./resources-WNzDPY1F.mjs");
const baseUrl$c = "https://renoz.energy";
const Route$f = createFileRoute("/resources")({
  head: () => ({
    meta: [{
      title: "Resources - RENOZ Energy"
    }, {
      name: "description",
      content: "Access technical specifications, installation guides, warranty documentation, and datasheets for all RENOZ battery systems."
    }, {
      property: "og:title",
      content: "Resources - RENOZ Energy"
    }, {
      property: "og:description",
      content: "Access technical specifications, installation guides, warranty documentation, and datasheets for all RENOZ battery systems."
    }, {
      property: "og:url",
      content: `${baseUrl$c}/resources`
    }, {
      name: "twitter:title",
      content: "Resources - RENOZ Energy"
    }, {
      name: "twitter:description",
      content: "Access technical specifications, installation guides, warranty documentation, and datasheets for all RENOZ battery systems."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./privacy-BSdukeHs.mjs");
const baseUrl$b = "https://renoz.energy";
const Route$e = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy - RENOZ Energy"
    }, {
      name: "description",
      content: "RENOZ Energy privacy policy. Learn how we collect, use, and protect your personal information."
    }, {
      property: "og:title",
      content: "Privacy Policy - RENOZ Energy"
    }, {
      property: "og:url",
      content: `${baseUrl$b}/privacy`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./installers-DcRdxLxG.mjs");
const baseUrl$a = "https://renoz.energy";
const Route$d = createFileRoute("/installers")({
  head: () => ({
    meta: [{
      title: "Installer Partnership - RENOZ Energy"
    }, {
      name: "description",
      content: "Join WA's leading battery OEM network. Local stock, direct engineer support, and competitive wholesale pricing for certified installers."
    }, {
      property: "og:title",
      content: "Installer Partnership - RENOZ Energy"
    }, {
      property: "og:description",
      content: "Join WA's leading battery OEM network. Local stock, direct engineer support, and competitive wholesale pricing."
    }, {
      property: "og:url",
      content: `${baseUrl$a}/installers`
    }, {
      name: "twitter:title",
      content: "Installer Partnership - RENOZ Energy"
    }, {
      name: "twitter:description",
      content: "Join WA's leading battery OEM network. Local stock, direct engineer support, and competitive wholesale pricing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./homeowners-D61bSTt5.mjs");
const baseUrl$9 = "https://renoz.energy";
const Route$c = createFileRoute("/homeowners")({
  head: () => ({
    meta: [{
      title: "Home Battery Storage - RENOZ Energy"
    }, {
      name: "description",
      content: "Secure your home with 10-50kWh battery systems. Store solar power and use it when it's worth 30c/kWh instead of selling for 5c/kWh."
    }, {
      property: "og:title",
      content: "Home Battery Storage - RENOZ Energy"
    }, {
      property: "og:description",
      content: "Secure your home with 10-50kWh battery systems. Store solar power and use it when it's worth 30c/kWh instead of selling for 5c/kWh."
    }, {
      property: "og:url",
      content: `${baseUrl$9}/homeowners`
    }, {
      name: "twitter:title",
      content: "Home Battery Storage - RENOZ Energy"
    }, {
      name: "twitter:description",
      content: "Secure your home with 10-50kWh battery systems. Store solar power and use it when it's worth 30c/kWh."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./cookies-CZ6C_8ET.mjs");
const baseUrl$8 = "https://renoz.energy";
const Route$b = createFileRoute("/cookies")({
  head: () => ({
    meta: [{
      title: "Cookie Policy - RENOZ Energy"
    }, {
      name: "description",
      content: "RENOZ Energy cookie policy. Understanding how we use cookies to improve your experience."
    }, {
      property: "og:title",
      content: "Cookie Policy - RENOZ Energy"
    }, {
      property: "og:url",
      content: `${baseUrl$8}/cookies`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-ESil41dy.mjs");
const baseUrl$7 = "https://renoz.energy";
const Route$a = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact RENOZ Energy - Perth Battery OEM"
    }, {
      name: "description",
      content: "Get in touch with our Perth team. Call 1800 736 693 or email sales@renoz.energy. Located at Unit 4, 8 Murphy Street, O'Connor WA 6163."
    }, {
      property: "og:title",
      content: "Contact RENOZ Energy - Perth Battery OEM"
    }, {
      property: "og:description",
      content: "Get in touch with our Perth team. Call 1800 736 693 or email sales@renoz.energy. Located at Unit 4, 8 Murphy Street, O'Connor WA 6163."
    }, {
      property: "og:url",
      content: `${baseUrl$7}/contact`
    }, {
      name: "twitter:title",
      content: "Contact RENOZ Energy - Perth Battery OEM"
    }, {
      name: "twitter:description",
      content: "Get in touch with our Perth team. Call 1800 736 693 or email sales@renoz.energy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  validateSearch: (search) => {
    return {
      type: search.type
    };
  }
});
const $$splitComponentImporter$4 = () => import("./admin-qzgEogO3.mjs");
const Route$9 = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-IDCmXkH8.mjs");
const baseUrl$6 = "https://renoz.energy";
const Route$8 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About RENOZ Energy - Perth Battery OEM"
    }, {
      name: "description",
      content: "Perth-based OEM building Western Australia's battery capability. Learn about our mission, team, and plans for future local manufacturing."
    }, {
      property: "og:title",
      content: "About RENOZ Energy - Perth Battery OEM"
    }, {
      property: "og:description",
      content: "Perth-based OEM building Western Australia's battery capability. Learn about our mission, team, and plans for future local manufacturing."
    }, {
      property: "og:url",
      content: `${baseUrl$6}/about`
    }, {
      name: "twitter:title",
      content: "About RENOZ Energy - Perth Battery OEM"
    }, {
      name: "twitter:description",
      content: "Perth-based OEM manufacturer building Western Australia's battery capability."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DSFDywN5.mjs");
const baseUrl$5 = "https://renoz.energy";
const Route$7 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Perth's Battery OEM - RENOZ Energy"
    }, {
      name: "description",
      content: "OEM battery systems engineered for Australian conditions. Residential, rural, and commercial energy storage from Perth's own OEM."
    }, {
      name: "keywords",
      content: "battery storage Perth, home battery backup WA, solar battery Western Australia, off-grid battery system, RENOZ Energy, lithium battery Perth, energy storage Australia, residential battery, rural battery, commercial battery"
    }, {
      property: "og:title",
      content: "Perth's Battery OEM - RENOZ Energy"
    }, {
      property: "og:description",
      content: "OEM battery systems engineered for Australian conditions. Residential, rural, and commercial energy storage from Perth's own OEM."
    }, {
      property: "og:url",
      content: baseUrl$5
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:title",
      content: "Perth's Battery OEM - RENOZ Energy"
    }, {
      name: "twitter:description",
      content: "OEM battery systems engineered for Australian conditions. Residential, rural, and commercial energy storage."
    }, {
      name: "geo.region",
      content: "AU-WA"
    }, {
      name: "geo.placename",
      content: "Perth"
    }, {
      name: "geo.position",
      content: "-32.0501;115.7997"
    }],
    scripts: [
      // AggregateRating Schema for SEO (shows stars in Google)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "RENOZ Energy",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "45",
            bestRating: "5",
            worstRating: "1"
          }
        })
      }
    ]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-LlOK3OPp.mjs");
const baseUrl$4 = "https://renoz.energy";
const Route$6 = createFileRoute("/products/")({
  head: () => ({
    meta: [{
      title: "Battery Systems - RENOZ Energy"
    }, {
      name: "description",
      content: "Residential, rural, and commercial battery energy storage systems. From 10kWh home systems to multi-megawatt industrial solutions."
    }, {
      property: "og:title",
      content: "Battery Systems - RENOZ Energy"
    }, {
      property: "og:description",
      content: "Residential, rural, and commercial battery energy storage systems. From 10kWh home systems to multi-megawatt industrial solutions."
    }, {
      property: "og:url",
      content: `${baseUrl$4}/products`
    }, {
      name: "twitter:title",
      content: "Battery Systems - RENOZ Energy"
    }, {
      name: "twitter:description",
      content: "Residential, rural, and commercial battery energy storage systems. From 10kWh home systems to multi-megawatt industrial solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-[var(--renoz-green)] text-white hover:bg-[var(--renoz-green-dark)] shadow-md hover:shadow-lg border border-transparent"
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3 min-h-[44px]",
        // iOS touch target: 44px minimum
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 min-h-[44px]",
        // Still meets iOS requirements
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4 min-h-[44px]",
        icon: "size-11 min-h-[44px] min-w-[44px]",
        // Ensure square touch targets
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, to, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    if (to && !asChild) {
      return /* @__PURE__ */ jsx(
        Link,
        {
          to,
          className: cn(buttonVariants({ variant, size, className })),
          ...props
        }
      );
    }
    return /* @__PURE__ */ jsx(
      Comp,
      {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
function MasonryGallery({
  images,
  title,
  showRating = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: "w-full py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-end mb-12 gap-6", children: [
      title && /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-[var(--black)]", children: title }),
      showRating && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ jsx("div", { className: "flex text-yellow-400", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-current" }, i)) }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-sm text-[var(--black)]", children: "4.9/5 from Local Installers" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6", children: images.map((img, index) => {
      const imageElement = /* @__PURE__ */ jsx(
        Image,
        {
          src: img.src,
          alt: img.alt,
          className: "w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105",
          width: 400,
          height: 300
        }
      );
      const overlayElement = (img.caption || img.location) && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6", children: [
        img.location && /* @__PURE__ */ jsx("span", { className: "text-[var(--renoz-green)] text-xs font-bold uppercase tracking-widest mb-1", children: img.location }),
        img.caption && /* @__PURE__ */ jsx("p", { className: "text-white font-medium text-lg leading-tight", children: img.caption })
      ] });
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: index * 0.1 },
          className: "break-inside-avoid relative group rounded-[24px] overflow-hidden bg-gray-100 mb-6",
          children: img.link ? /* @__PURE__ */ jsxs(
            Link,
            {
              to: img.link,
              className: "block w-full h-full cursor-pointer",
              children: [
                imageElement,
                overlayElement
              ]
            }
          ) : /* @__PURE__ */ jsxs(Fragment, { children: [
            imageElement,
            overlayElement
          ] })
        },
        index
      );
    }) })
  ] });
}
const caseStudies = [
  {
    id: "1",
    slug: "harvey-farm",
    title: "Dream Home Journey: Off-Grid Family Living",
    location: "Western Australia",
    systemSize: "35 kWh",
    summary: "Discover how a young family turned their construction shed into a comfortable off-grid haven, powered by West State Electrics' thoughtfully designed solar battery system that grows with their dreams.",
    description: "A young family needed reliable off-grid power during a 2+ year home construction project, requiring modern conveniences and a scalable energy solution. Living in their construction shed while building their dream home, they sought complete energy independence without compromising on comfort or future expansion capabilities.",
    image: "/images/case-studies/Harvey-35kWh.webp",
    challenges: [
      "Reliable off-grid power during 2+ year home construction project",
      "Modern conveniences in temporary accommodation",
      "Scalable energy solution for future home expansion",
      "Complete energy independence requirement"
    ],
    solution: [
      "RENOZ Energy 35.8kWh LV Stackable System with 7 units",
      "21kWp solar system with AC-coupled Fronius inverters",
      "DC-coupled AERL MPPT charging for black-start capability",
      "Selectronic SPMC482 + Fronius Primo inverter system"
    ],
    outcome: "Complete energy independence achieved with all modern conveniences in the construction shed. Zero generator operation during normal use. Reliable black-start capability ensures uninterrupted power. Upgradeable system ready to power the new home with future expansion capabilities.",
    date: "2025-08-01",
    quote: "The RENOZ system transformed our construction shed into a comfortable home. We had reliable power for everything - from running the washing machine to charging our devices. The quiet operation was a game-changer.",
    story: {
      challenge: "Living in a construction shed for 2+ years with unreliable generator power that was noisy, expensive, and limited our modern conveniences.",
      solution: "RENOZ provided a quiet, scalable battery system that gave us all the power we needed without the generator noise and fumes."
    },
    results: [
      { label: "Generator Runtime", value: "Reduced by 95%", icon: "VolumeX" },
      { label: "Power Reliability", value: "100% uptime", icon: "Shield" },
      {
        label: "Energy Cost Savings",
        value: "$2,500/year",
        icon: "DollarSign"
      }
    ]
  },
  {
    id: "2",
    slug: "bally-bally",
    title: "Bally Bally Off-Grid Case Study",
    location: "Bally Bally, Western Australia",
    systemSize: "30 kWh",
    summary: "A remote hobby farm in Bally Bally sought a reliable, low-noise solution to reduce diesel use and avoid high grid connection fees.",
    description: "Significant grid-connection fees and high diesel costs created both financial and operational strain for this remote hobby farm. The property required a reliable off-grid solution that could reduce generator dependence while avoiding the substantial costs of grid connection.",
    image: "/images/case-studies/Bally-Bally-LV30kWH.webp",
    challenges: [
      "Significant grid-connection fees and high diesel costs",
      "Remote location requiring reliable off-grid operation",
      "Need for quiet operation without constant generator noise",
      "Financial and operational strain from fuel costs"
    ],
    solution: [
      "RENOZ Energy 30 kWh LV Stackable System",
      "Modular LV stackable system with existing solar integration",
      "Diesel generator backup with remote monitoring",
      "Commissioned by WA-certified installer"
    ],
    outcome: "Generator reliance reduced by 95%, ~5 year payback period achieved. Network fees of $125,000 avoided. No generator noise during standard operation, reliable power for farm and residential needs, improved comfort and operational efficiency.",
    date: "2025-06-01",
    quote: "The quiet operation of the RENOZ system was incredible. We went from constant generator noise to peaceful farm living. The reliability during storms has given us complete peace of mind.",
    story: {
      challenge: "Constant generator noise, high diesel costs, and unreliable power during storms made farm life stressful and expensive.",
      solution: "RENOZ provided a quiet, reliable battery system that eliminated generator dependence and provided stable power even during severe weather."
    },
    results: [
      { label: "Diesel Savings", value: "$8,000/year", icon: "DollarSign" },
      { label: "Generator Runtime", value: "Reduced by 95%", icon: "VolumeX" },
      { label: "Power Reliability", value: "100% uptime", icon: "Shield" }
    ]
  },
  {
    id: "3",
    slug: "simon-oeij",
    title: "Home Energy Power User",
    location: "Perth, Western Australia",
    systemSize: "60 kWh",
    summary: "A high-demand household with floor heating and EVs sought energy independence, bill reduction, and reliable backup power.",
    description: "High electricity usage from whole-house AC/heating and EV charging drove high bills and exposure during grid events. This high-demand household required a comprehensive energy storage solution to achieve energy independence, reduce electricity costs, and ensure reliable backup power.",
    image: "/images/case-studies/Simon-Oeij-HV60kWh.webp",
    challenges: [
      "High electricity usage from whole-house AC/heating and EV charging",
      "High utility bills and exposure during grid events",
      "Need for energy independence and reliable backup power",
      "Demand for significant energy storage capacity"
    ],
    solution: [
      "RENOZ Energy 60 kWh HV Stackable System",
      "Modular battery system integrated with existing large solar array",
      "Remote monitoring by WA-certified installer",
      "Premium installation quality with full regulatory compliance"
    ],
    outcome: "45-65% average bill reduction achieved with improved self-consumption. Reliable backup capability during peak demand and outages. Premium installation quality with 24/7 system oversight and predictive maintenance.",
    date: "2025-02-01",
    quote: "The RENOZ system pays for itself through our energy bill savings alone. During peak summer demand, we stayed cool without worrying about power costs or reliability.",
    story: {
      challenge: "Skyrocketing energy bills from whole-house AC/heating and EV charging, with unreliable grid power during peak times and outages.",
      solution: "RENOZ provided substantial energy storage capacity that eliminated peak demand charges and provided reliable backup power for our high-energy household."
    },
    results: [
      { label: "Bill Reduction", value: "45-65%", icon: "DollarSign" },
      { label: "Peak Demand Savings", value: "$300/month", icon: "Zap" },
      { label: "Backup Power", value: "60kWh capacity", icon: "Shield" }
    ]
  }
];
const caseStudyImages = [
  {
    src: "/images/case-studies/Harvey-35kWh.webp",
    alt: "Harvey Off-Grid Family Living Installation",
    caption: "35kWh Off-Grid Family Living",
    location: "Harvey",
    systemSize: "35kWh"
  },
  {
    src: "/images/case-studies/Bally-Bally-LV30kWH.webp",
    alt: "Bally Bally Remote Farm Installation",
    caption: "30kWh Remote Farm Installation",
    location: "Bally Bally",
    systemSize: "30kWh"
  },
  {
    src: "/images/case-studies/Simon-Oeij-HV60kWh.webp",
    alt: "Bibra Lake High-Energy Household Installation",
    caption: "60kWh High-Energy Household",
    location: "Bibra Lake",
    systemSize: "60kWh"
  },
  {
    src: "/images/case-studies/M-Singh-30kWh.webp",
    alt: "East Fremantle Residential Energy Solution",
    caption: "30kWh Residential Energy Solution",
    location: "East Fremantle",
    systemSize: "30kWh"
  },
  {
    src: "/images/case-studies/R-Woon-LV20kWh.webp",
    alt: "South Perth Compact Residential System",
    caption: "20kWh Compact Residential System",
    location: "South Perth",
    systemSize: "20kWh"
  },
  {
    src: "/images/case-studies/J-Doss-LV35kWh.webp",
    alt: "Perth Metro Family Home Installation",
    caption: "35kWh Family Home Installation",
    location: "Perth Metro",
    systemSize: "35kWh"
  },
  {
    src: "/images/case-studies/K-Fairman 15kWh.webp",
    alt: "Perth Metro Starter Residential System",
    caption: "15kWh Starter Residential System",
    location: "Perth Metro",
    systemSize: "15kWh"
  },
  {
    src: "/images/case-studies/H-Collins-LV-25kWh.webp",
    alt: "Applecross Mid-Size Residential Setup",
    caption: "25kWh Mid-Size Residential Setup",
    location: "Applecross",
    systemSize: "25kWh"
  },
  {
    src: "/images/case-studies/Waroona Reporter.webp",
    alt: "Local Media Coverage - Waroona Installation",
    caption: "Featured in Local Media",
    location: "Waroona",
    systemSize: "35kWh"
  }
];
const getCaseStudySubset = (count = 6) => {
  return caseStudyImages.slice(0, count);
};
const baseUrl$3 = "https://renoz.energy";
const Route$5 = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies - RENOZ Energy Installations" },
      {
        name: "description",
        content: "Real results from real installations across Western Australia. See how RENOZ battery systems are powering homes, farms, and businesses."
      },
      {
        name: "keywords",
        content: "battery case studies Perth, energy storage installations WA, solar battery examples, RENOZ Energy projects, lithium battery installations Australia"
      },
      {
        property: "og:title",
        content: "Case Studies - RENOZ Energy Installations"
      },
      {
        property: "og:description",
        content: "Real results from real installations across Western Australia. See how RENOZ battery systems are powering homes, farms, and businesses."
      },
      { property: "og:url", content: `${baseUrl$3}/case-studies` },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: "Case Studies - RENOZ Energy Installations"
      },
      {
        name: "twitter:description",
        content: "Real results from real installations across Western Australia. RENOZ battery systems powering homes, farms, and businesses."
      }
    ]
  }),
  component: CaseStudiesIndexPage
});
function CaseStudiesIndexPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[var(--white)]", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: isExpanded && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsExpanded(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm cursor-zoom-out",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            className: "relative max-w-7xl max-h-full",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setIsExpanded(false),
                  className: "absolute -top-12 right-0 text-white hover:text-[var(--renoz-green)] transition-colors",
                  children: /* @__PURE__ */ jsx(X, { className: "w-8 h-8" })
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/case-studies/Waroona Reporter.webp",
                  alt: "Waroona Reporter newspaper featuring RENOZ energy installation project",
                  className: "w-full h-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[var(--black)] text-white pt-32 pb-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center max-w-3xl mx-auto",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "Provenance" }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight", children: "Real Results." }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 leading-relaxed", children: "From the Wheatbelt to the Perth Hills, see how RENOZ systems are powering Western Australia." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 md:mb-14 lg:mb-16", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "Featured Stories" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[var(--black)]", children: "In-Depth Case Studies" })
      ] }),
      /* @__PURE__ */ jsx(
        MasonryGallery,
        {
          title: "",
          showRating: false,
          images: caseStudies.map((study) => ({
            src: study.image,
            alt: study.title,
            caption: study.title,
            location: study.location,
            link: `/case-studies/${study.slug}`
          }))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-16 md:py-20 lg:py-24 bg-[var(--black)] text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--renoz-green)]/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            children: [
              /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-[var(--renoz-green)]/20 border border-[var(--renoz-green)]/30 text-[var(--renoz-green)] rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm", children: "In the News" }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight", children: [
                "Empowering Regional ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-[var(--renoz-green)]", children: "Communities." })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8 leading-relaxed", children: "Our installation in Waroona isn't just about saving money; it's about energy security for the entire region. Featured in the Waroona Reporter, this project highlights how local manufacturing is solving local grid challenges." }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4", children: /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "secondary",
                  size: "lg",
                  to: "/contact",
                  className: "bg-white text-[var(--black)] hover:bg-gray-100 border-none rounded-full",
                  children: [
                    "Get a Quote",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.8, delay: 0.2 },
            className: "relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-zoom-in",
            onClick: () => setIsExpanded(true),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/case-studies/Waroona Reporter.webp",
                  alt: "Waroona Reporter newspaper featuring RENOZ energy installation project",
                  className: "w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-transparent to-transparent opacity-60" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6", children: [
                /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm font-medium uppercase tracking-widest", children: "Featured Article" }),
                /* @__PURE__ */ jsx("p", { className: "text-white text-lg font-bold", children: "Waroona Reporter" })
              ] })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 lg:py-24 bg-[var(--cream)]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 md:mb-14 lg:mb-16", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "Our Work" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[var(--black)] mb-4", children: "Installation Gallery" }),
        /* @__PURE__ */ jsx("p", { className: "text-[var(--text-muted)] text-lg max-w-2xl mx-auto", children: "Every system we install is built to last. Browse real installations across Western Australia." })
      ] }),
      /* @__PURE__ */ jsx(
        MasonryGallery,
        {
          showRating: true,
          images: caseStudyImages.slice(0, 6)
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 lg:py-24 bg-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Have a similar project?" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "primary",
          size: "lg",
          to: "/contact",
          className: "rounded-full",
          children: "Talk to an Engineer"
        }
      )
    ] }) })
  ] });
}
const supabaseUrl = "https://tcrpfwxfsbkrwqielhfg.supabase.co";
const supabaseAnonKey = "sb_publishable_y8Vro117yYqQIMCBHvffVA_rDCXg4Sz";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
async function generateSitemap() {
  const [products, posts] = await Promise.all([
    supabase.from("website_products").select("slug, updated_at").eq("featured", true),
    supabase.from("posts").select("slug, updated_at").eq("published", true)
  ]);
  const urls = [
    { url: "/", priority: 1, changefreq: "weekly" },
    { url: "/about", priority: 0.9, changefreq: "monthly" },
    { url: "/contact", priority: 0.8, changefreq: "monthly" },
    { url: "/products", priority: 0.9, changefreq: "weekly" },
    { url: "/products/residential", priority: 0.8, changefreq: "weekly" },
    { url: "/products/rural", priority: 0.8, changefreq: "weekly" },
    { url: "/products/commercial", priority: 0.8, changefreq: "weekly" },
    { url: "/case-studies", priority: 0.8, changefreq: "weekly" },
    { url: "/resources", priority: 0.7, changefreq: "weekly" },
    { url: "/homeowners", priority: 0.7, changefreq: "monthly" },
    { url: "/installers", priority: 0.7, changefreq: "monthly" },
    { url: "/warranty", priority: 0.6, changefreq: "monthly" },
    { url: "/privacy", priority: 0.3, changefreq: "yearly" },
    { url: "/terms", priority: 0.3, changefreq: "yearly" },
    { url: "/cookies", priority: 0.3, changefreq: "yearly" },
    ...products.data?.map((p) => ({
      url: `/products/${p.slug}`,
      priority: 0.8,
      changefreq: "weekly",
      lastmod: p.updated_at
    })) || [],
    ...posts.data?.map((p) => ({
      url: `/blog/${p.slug}`,
      priority: 0.7,
      changefreq: "monthly",
      lastmod: p.updated_at
    })) || []
  ];
  return urls;
}
const Route$4 = createFileRoute("/sitemap/xml")({
  server: {
    handlers: {
      GET: async () => {
        const sitemapData = await generateSitemap();
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.map(
          (entry) => `  <url>
    <loc>${entry.url.startsWith("http") ? entry.url : `https://renoz.energy${entry.url}`}</loc>
    <lastmod>${entry.lastmod || (/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>${entry.changefreq || "monthly"}</changefreq>
    <priority>${entry.priority || 0.5}</priority>
  </url>`
        ).join("\n")}
</urlset>`;
        return new Response(sitemapXml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
            // Cache for 1 hour
          }
        });
      }
    }
  }
});
const $$splitComponentImporter = () => import("./rural-Dynv4LuM.mjs");
const baseUrl$2 = "https://renoz.energy";
const Route$3 = createFileRoute("/products/rural")({
  head: () => ({
    meta: [{
      title: "Rural Battery Storage - RENOZ Energy"
    }, {
      name: "description",
      content: "Rural & off-grid battery storage systems from 50-200kWh+. Engineered for harsh Australian conditions. Perth's own OEM battery systems for farms and remote properties."
    }, {
      name: "keywords",
      content: "rural battery storage Perth, off-grid battery WA, farm battery system, remote property battery, RENOZ Energy rural, lithium battery rural Perth, energy storage farm"
    }, {
      property: "og:title",
      content: "Rural Battery Storage - RENOZ Energy"
    }, {
      property: "og:description",
      content: "Rural & off-grid battery storage systems from 50-200kWh+. Engineered for harsh Australian conditions. Perth's own OEM battery systems."
    }, {
      property: "og:url",
      content: `${baseUrl$2}/products/rural`
    }, {
      property: "og:type",
      content: "product"
    }, {
      name: "twitter:title",
      content: "Rural Battery Storage - RENOZ Energy"
    }, {
      name: "twitter:description",
      content: "Rural & off-grid battery storage systems from 50-200kWh+. Perth's own OEM battery systems for farms and remote properties."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
function InverterMarquee({ className }) {
  const brands = [
    {
      name: "Selectronic",
      logo: "/images/partners/inverters/selectronic-logo.webp"
    },
    {
      name: "Victron Energy",
      logo: "/images/partners/inverters/Victron-logo.webp"
    },
    { name: "Sungrow", logo: "/images/partners/inverters/sungrow-logo.webp" },
    { name: "SMA", logo: "/images/partners/inverters/SMA-Logo.webp" },
    { name: "Deye", logo: "/images/partners/inverters/Deye-Logo.webp" },
    { name: "GoodWe", logo: "/images/partners/inverters/goodwe-logo.webp" },
    { name: "Growatt", logo: "/images/partners/inverters/growatt-logo.webp" },
    { name: "Sinexcel", logo: "/images/partners/inverters/sinexcel-logo.webp" },
    { name: "CE+T", logo: "/images/partners/inverters/ce-plus-t-logo.webp" }
  ];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative flex overflow-hidden w-full group mask-linear-fade",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex animate-marquee min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500", children: brands.map((brand, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex-shrink-0 flex items-center justify-center w-[120px] md:w-[160px] h-20",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: brand.logo,
                alt: `${brand.name} logo`,
                className: "max-h-12 max-w-[120px] md:max-w-[140px] w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              }
            )
          },
          i
        )) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "flex animate-marquee min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500",
            children: brands.map((brand, i) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex-shrink-0 flex items-center justify-center w-[120px] md:w-[160px] h-20",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: brand.logo,
                    alt: `${brand.name} logo`,
                    className: "max-h-12 max-w-[120px] md:max-w-[140px] w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  }
                )
              },
              `dup-${i}`
            ))
          }
        )
      ]
    }
  );
}
function BentoFeatures({
  title,
  subtitle,
  features
}) {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 lg:py-32 px-4 bg-zinc-50 dark:bg-zinc-950", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-white", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-zinc-500 dark:text-zinc-400", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]", children: features.map((feature, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: cn(
          "group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500",
          feature.className
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6 z-20", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-6 h-6 text-zinc-900 dark:text-white" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex-1 p-8 flex flex-col justify-end", children: [
            feature.image && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: feature.image,
                  alt: feature.title,
                  className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90" })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "relative z-10",
                  feature.image ? "text-white" : "text-zinc-900 dark:text-white"
                ),
                children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: feature.title }),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: cn(
                        "text-lg leading-relaxed",
                        feature.image ? "text-zinc-200" : "text-zinc-500 dark:text-zinc-400"
                      ),
                      children: feature.description
                    }
                  )
                ]
              }
            )
          ] })
        ]
      },
      i
    )) })
  ] }) });
}
function ProductHero({
  title,
  description,
  badgeText,
  badgeColor = "bg-[var(--renoz-green)]",
  imageSrc,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  onSecondaryCtaClick
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: targetRef,
      className: "relative h-screen min-h-[800px] flex flex-col justify-center items-center text-center overflow-hidden bg-black",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 z-0",
            style: { opacity: heroOpacity, scale: heroScale },
            children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "absolute inset-0",
                initial: { scale: 1.15 },
                animate: { scale: 1 },
                transition: { duration: 15, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: imageSrc,
                      alt: "Hero Background",
                      className: "w-full h-full object-cover opacity-60"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "relative z-10 max-w-5xl px-4 mt-[-5vh] flex flex-col items-center",
            style: { y: textY },
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  className: "inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 mb-8",
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `w-2 h-2 rounded-full ${badgeColor} animate-pulse`
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-medium tracking-wide uppercase", children: badgeText })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.h1,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
                  className: "text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-white drop-shadow-2xl leading-tight",
                  children: title
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                  className: "text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md mb-12",
                  children: description
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.5 },
                  className: "flex flex-col sm:flex-row gap-4",
                  children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "primary",
                        size: "lg",
                        to: primaryCtaLink,
                        className: "rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all min-w-[200px]",
                        children: primaryCtaText
                      }
                    ),
                    onSecondaryCtaClick ? /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "lg",
                        onClick: onSecondaryCtaClick,
                        className: "rounded-full px-10 py-7 text-lg backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white hover:text-black transition-all min-w-[200px]",
                        children: secondaryCtaText
                      }
                    ) : /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "lg",
                        to: secondaryCtaLink,
                        className: "rounded-full px-10 py-7 text-lg backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white hover:text-black transition-all min-w-[200px]",
                        children: secondaryCtaText
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.2, duration: 1 },
            className: "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce",
            children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-8 h-8 text-white/30" })
          }
        )
      ]
    }
  );
}
function SolarEconomics() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-[var(--black)] text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[var(--renoz-green)] font-bold tracking-widest uppercase text-xs mb-4 block", children: "The Problem" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6", children: [
              "The Solar Math ",
              /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Doesn't Add Up." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: "You're selling your power for pennies and buying it back for dollars." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 },
            className: "relative overflow-hidden rounded-[32px] group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100/50" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-multiply" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-300/40 to-orange-500/0 blur-[60px] rounded-full mix-blend-overlay pointer-events-none group-hover:scale-110 transition-transform duration-700" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-8 md:p-12 h-[450px] flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center border border-yellow-500/30", children: /* @__PURE__ */ jsx(Sun, { className: "w-5 h-5 text-yellow-600" }) }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-sm uppercase tracking-wider text-yellow-700", children: "Day Time" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-6xl md:text-8xl font-bold tracking-tighter text-gray-900", children: "5c" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gray-400", children: "/kWh" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-yellow-700/80 mt-2", children: "Export Rate" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-8 h-4 w-1/6 bg-yellow-400 rounded-full shadow-inner" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-yellow-900/5", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-gray-600 font-medium", children: `"You're giving away your gold for dust."` }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-2 leading-relaxed", children: "Solar peaks when you aren't home. This energy is fed to the grid for pennies." })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.4 },
            className: "relative overflow-hidden rounded-[32px] group bg-[#0A0A0A] border border-white/10",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black opacity-80" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full pointer-events-none" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-8 md:p-12 h-[450px] flex flex-col justify-between text-white", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]", children: /* @__PURE__ */ jsx(Moon, { className: "w-5 h-5 text-blue-300" }) }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-sm uppercase tracking-wider text-blue-300 shadow-glow", children: "Night Time" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl", children: "30c" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gray-600", children: "/kWh" })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "font-medium text-red-400 mt-2 flex items-center gap-2", children: [
                    "Import Rate",
                    /* @__PURE__ */ jsx("span", { className: "text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30", children: "+600% Mark-up" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-8 h-4 w-full bg-gradient-to-r from-red-500 to-orange-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)] relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/20 animate-pulse" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-white/10", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-gray-200 font-medium", children: `"You're buying back your own power."` }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mt-2 leading-relaxed", children: "When the sun sets, you pay peak rates for the electricity you generated hours ago." })
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: 0.6 },
          className: "max-w-5xl mx-auto mt-8",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-[var(--renoz-green)] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-[0_0_50px_rgba(0,255,100,0.2)]", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-2", children: "Stop renting your own power." }),
              /* @__PURE__ */ jsx("p", { className: "text-[#0a3f25] font-medium text-lg", children: "Store your 5c energy. Use it when it's worth 30c." })
            ] }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/case-studies",
                className: "inline-flex items-center px-6 py-3 bg-white text-[var(--renoz-green)] rounded-full font-bold transition-transform hover:scale-105",
                children: [
                  "See how others did it ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                ]
              }
            )
          ] })
        }
      )
    ] })
  ] });
}
function TechSpecs({
  title = "Technical Specifications",
  description = "Engineered for performance and reliability.",
  specs,
  downloadLink,
  downloadText = "Download Datasheet"
}) {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-zinc-950 text-white border-t border-white/5", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-16 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6 tracking-tight text-white", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-zinc-400 text-lg mb-10 leading-relaxed", children: description }),
      downloadLink && /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          to: downloadLink,
          className: "w-full sm:w-auto flex items-center gap-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all",
          children: [
            /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
            downloadText
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-x-12 gap-y-12", children: specs.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2 group-hover:text-zinc-400 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[var(--renoz-green)] transition-colors" }),
        item.label
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 group-hover:border-white/20 transition-colors", children: item.value }),
      item.subtext && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors", children: item.subtext })
    ] }, i)) }) })
  ] }) }) });
}
const baseUrl$1 = "https://renoz.energy";
const Route$2 = createFileRoute("/products/residential")({
  head: () => ({
    meta: [
      { title: "Residential Battery Storage - RENOZ Energy" },
      {
        name: "description",
        content: "Home battery storage systems from 10-50kWh. Store solar power at 30c/kWh instead of selling for 5c/kWh. Perth's own OEM battery systems for Western Australian homes."
      },
      {
        name: "keywords",
        content: "home battery storage Perth, residential battery WA, solar battery home, off-grid home battery, RENOZ Energy residential, lithium battery home Perth, energy storage residential"
      },
      {
        property: "og:title",
        content: "Residential Battery Storage - RENOZ Energy"
      },
      {
        property: "og:description",
        content: "Home battery storage systems from 10-50kWh. Store solar power at 30c/kWh instead of selling for 5c/kWh. Perth's own OEM battery systems."
      },
      { property: "og:url", content: `${baseUrl$1}/products/residential` },
      { property: "og:type", content: "product" },
      {
        name: "twitter:title",
        content: "Residential Battery Storage - RENOZ Energy"
      },
      {
        name: "twitter:description",
        content: "Home battery storage systems from 10-50kWh. Perth's own OEM battery systems for Western Australian homes."
      }
    ]
  }),
  component: ResidentialProductsPage
});
function ResidentialProductsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-zinc-50 font-sans text-zinc-900", children: [
    /* @__PURE__ */ jsx(
      ProductHero,
      {
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Genuine ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-[var(--renoz-green)]", children: "Security." })
        ] }),
        description: "The safest, most reliable energy storage for your home. Keep your lights on when the grid goes down.",
        badgeText: "Engineered in Western Australia",
        imageSrc: "/images/stock/garage-renoz-1.webp",
        primaryCtaText: "Get Your Savings Estimate",
        primaryCtaLink: "/contact?type=homeowner",
        secondaryCtaText: "Find Installer",
        secondaryCtaLink: "/installers"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "my-8 md:my-12 lg:my-16", children: /* @__PURE__ */ jsx(SolarEconomics, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white border-b border-gray-100 py-16 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 mb-8 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-gray-400 uppercase tracking-widest", children: "Works with your preferred inverter" }) }),
      /* @__PURE__ */ jsx(InverterMarquee, {})
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 lg:py-24 bg-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "order-2 lg:order-1 relative aspect-square bg-zinc-100 rounded-[48px] overflow-hidden group",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/products/RENOZ Energy Garage Render.webp",
              alt: "RENOZ LV System in Garage",
              className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6", children: "The Solution" }),
        /* @__PURE__ */ jsxs("h3", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: [
          "Infrastructure, ",
          /* @__PURE__ */ jsx("br", {}),
          " not Gadgets."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-zinc-500 leading-relaxed mb-8", children: "Most batteries are built like consumer electronics—fragile, plastic, and prone to overheating." }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl text-zinc-500 leading-relaxed mb-8", children: [
          "We build ",
          /* @__PURE__ */ jsx("strong", { children: "energy infrastructure" }),
          ". Heavy-gauge steel enclosures. LFP chemistry that doesn't catch fire. Thermal ratings for the Pilbara. This is a vault for your energy."
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "gap-2", children: [
          "Explore Features ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      BentoFeatures,
      {
        title: "Engineered for Reality.",
        subtitle: "We don't build gadgets. We build infrastructure designed to last 15+ years in Australian conditions.",
        features: [
          {
            title: "Non-Volatile Chemistry",
            description: "We use Lithium Iron Phosphate (LFP) - the safest and most stable lithium technology available. 0% Cobalt, 0% Fire Risk.",
            icon: Shield,
            className: "md:col-span-2",
            image: "/images/products/RENOZ Energy LV Deconstructed.webp"
          },
          {
            title: "Plug-and-Play Scale",
            description: "Start with 5kWh and stack up to 40kWh. No rewind required.",
            icon: Zap,
            className: "md:col-span-1",
            image: "/images/products/LV-Stackable-White.webp"
          },
          {
            title: "Rated to 55°C",
            description: "Most batteries derate at 40°C. Ours maintain performance up to 45°C and survive 55°C. Built for the Pilbara.",
            icon: Thermometer,
            className: "md:col-span-1",
            image: "/images/stock/coastal-home-storm-1.webp"
          },
          {
            title: "Local Support",
            description: "Headquartered in O'Connor, WA. Speak to the engineers who designed the system, not a call centre.",
            icon: Shield,
            // Reusing shield icon for support
            className: "md:col-span-2",
            image: "/images/stock/renoz-ccs.webp"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 lg:py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
      MasonryGallery,
      {
        title: "Installation Gallery",
        showRating: true,
        images: getCaseStudySubset(6)
      }
    ) }) }),
    /* @__PURE__ */ jsx(
      TechSpecs,
      {
        specs: [
          { label: "Nominal Voltage", value: "51.2 V" },
          { label: "Usable Capacity", value: "5.12 kWh" },
          { label: "Stackable up to", value: "80 kWh" },
          { label: "Max Charge/Discharge", value: "100 A (1C)" },
          { label: "Depth of Discharge", value: "100%" },
          { label: "Cycle Life", value: "6,000+ Cycles" },
          { label: "Communication", value: "CAN / RS485" },
          {
            label: "Warranty",
            value: "10 Years",
            subtext: ">80% retention after 6,000 cycles"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 lg:py-32 text-center bg-zinc-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-zinc-900", children: "Ready to switch?" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "primary",
            size: "lg",
            to: "/contact?type=homeowner",
            className: "rounded-full px-12 py-6 text-lg shadow-xl min-w-[200px]",
            children: "Request a Quote"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            to: "/installers",
            className: "rounded-full px-12 py-6 text-lg min-w-[200px]",
            children: "Find Installer"
          }
        )
      ] })
    ] }) })
  ] });
}
function CommercialEconomics() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-[var(--black)] text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block", children: "The Financial Reality" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6", children: [
              "Liability vs ",
              /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Asset." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed", children: "Is your grid connection a fixed cost dragging down your bottom line, or a tradable asset generating revenue?" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 },
            className: "relative overflow-hidden rounded-[32px] group bg-[#0A0A0A] border border-white/10 h-[500px] flex flex-col justify-between p-8 md:p-12",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-black opacity-80" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30", children: /* @__PURE__ */ jsx(TrendingDown, { className: "w-5 h-5 text-red-500" }) }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-sm uppercase tracking-wider text-red-500", children: "Status Quo" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Sunk Cost." }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-gray-400 font-medium", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-500" }),
                    "Unpredictable Spot Prices"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-500" }),
                    "Peak Demand Charges"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-red-500" }),
                    "Zero Backup Protection"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full h-32 mt-8 opacity-50 group-hover:opacity-100 transition-opacity", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full flex items-end gap-1 h-full", children: [40, 60, 30, 80, 20, 90, 40].map((h, i) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "flex-1 bg-red-900/40 rounded-t-sm relative overflow-hidden group-hover:bg-red-500/20 transition-colors",
                    style: { height: `${h}%` }
                  },
                  i
                )) }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-0 w-full h-px border-t border-dashed border-red-500/30" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.4 },
            className: "relative overflow-hidden rounded-[32px] group h-[500px] flex flex-col justify-between p-8 md:p-12",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0A0A0A] to-blue-900/20" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 border border-blue-500/30 rounded-[32px]" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-sm uppercase tracking-wider text-blue-400 shadow-glow", children: "RENOZ BESS" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-4xl md:text-5xl font-bold mb-4 text-white", children: "Managed Asset." }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-gray-300 font-medium", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-blue-400" }),
                    "Arbitrage Energy Markets"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(Coins, { className: "w-4 h-4 text-blue-400" }),
                    "Flatten Demand Peaks"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-blue-400" }),
                    "FCAS Revenue Streams"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full h-32 mt-8", children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full flex items-end gap-1 h-full", children: [20, 30, 45, 60, 75, 85, 100].map((h, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex-1 bg-gradient-to-t from-blue-900 to-blue-500 rounded-t-sm relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)]",
                  style: { height: `${h}%` },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute inset-0 bg-white/20 animate-pulse",
                      style: { animationDelay: `${i * 0.1}s` }
                    }
                  )
                },
                i
              )) }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto mt-8 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 uppercase tracking-widest font-bold", children: "ROI typically 3-5 years for commercial systems > 200kWh" }) })
    ] })
  ] });
}
function ImageAccordion({ items, className }) {
  const [activeId, setActiveId] = useState(items[0]?.id || null);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex flex-col lg:flex-row gap-4 h-[600px] w-full",
        className
      ),
      children: items.map((item) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          layout: true,
          onClick: () => setActiveId(item.id),
          onMouseEnter: () => setActiveId(item.id),
          className: cn(
            "relative overflow-hidden rounded-[24px] cursor-pointer transition-all duration-500 ease-out",
            activeId === item.id ? "flex-[3]" : "flex-[1]",
            "h-[300px] lg:h-full"
          ),
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image,
                alt: item.title,
                className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent",
                  activeId === item.id ? "opacity-80" : "opacity-60 hover:opacity-70"
                )
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-8", children: [
              /* @__PURE__ */ jsx(
                motion.h3,
                {
                  layout: "position",
                  className: cn(
                    "font-bold text-white mb-2 leading-tight",
                    activeId === item.id ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"
                  ),
                  children: item.title
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: {
                    opacity: activeId === item.id ? 1 : 0,
                    height: activeId === item.id ? "auto" : 0
                  },
                  transition: { duration: 0.3 },
                  children: /* @__PURE__ */ jsx("p", { className: "text-gray-200 text-lg leading-relaxed max-w-xl", children: item.description })
                }
              )
            ] })
          ]
        },
        item.id
      ))
    }
  );
}
const baseUrl = "https://renoz.energy";
const Route$1 = createFileRoute("/products/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Battery Storage - RENOZ Energy" },
      {
        name: "description",
        content: "Commercial & industrial battery storage systems from 100kWh to multi-MW. Perth's own OEM battery systems for businesses, microgrids, and grid services."
      },
      {
        name: "keywords",
        content: "commercial battery storage Perth, industrial battery WA, business battery system, microgrid battery, RENOZ Energy commercial, lithium battery commercial Perth, energy storage business"
      },
      {
        property: "og:title",
        content: "Commercial Battery Storage - RENOZ Energy"
      },
      {
        property: "og:description",
        content: "Commercial & industrial battery storage systems from 100kWh to multi-MW. Perth's own OEM battery systems for businesses and microgrids."
      },
      { property: "og:url", content: `${baseUrl}/products/commercial` },
      { property: "og:type", content: "product" },
      {
        name: "twitter:title",
        content: "Commercial Battery Storage - RENOZ Energy"
      },
      {
        name: "twitter:description",
        content: "Commercial & industrial battery storage systems from 100kWh to multi-MW. Perth's own OEM battery systems for businesses."
      }
    ]
  }),
  component: CommercialProductsPage
});
const commercialApplications = [
  {
    id: "community",
    title: "Community Energy",
    description: "Support local grid stability in high-penetration solar zones. Manage voltage constraints and defer network upgrades.",
    image: "/images/stock/solar-microgrid-bess-drone-shot.webp"
  },
  {
    id: "mining",
    title: "Mining & Remote",
    description: "Displace expensive diesel generation in off-grid camps. Engineered for high-ambient temperatures and remote reliability.",
    image: "/images/stock/homestead-rural-2.webp"
  },
  {
    id: "agri",
    title: "Agri-Industrial",
    description: "Secure power for seasonal processing and cold storage. Manage peak demand charges without grid upgrades.",
    image: "/images/stock/shed-with-solar-wheat-field.webp"
  },
  {
    id: "c-and-i",
    title: "Commercial & Industrial",
    description: "Guarantee uptime for critical automation. Sub-10ms UPS protection against brownouts and grid disturbances.",
    image: "/images/stock/winery-bess-1.webp"
  }
];
function CommercialProductsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-zinc-50 font-sans text-zinc-900", children: [
    /* @__PURE__ */ jsx(
      ProductHero,
      {
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Turn Energy into a ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "Managed Asset." })
        ] }),
        description: "Energy is no longer a fixed cost—it's a market. Secure critical operations and arbitrage spot prices with an industrial BESS.",
        badgeText: "Industrial Grade Intelligence",
        badgeColor: "bg-blue-500",
        imageSrc: "/images/stock/solar-microgrid-bess-drone-shot.webp",
        primaryCtaText: "Reduce Your Peak Demand Costs",
        primaryCtaLink: "/contact",
        secondaryCtaText: "View Datasheets",
        secondaryCtaLink: "#"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "my-8 md:my-12 lg:my-16", children: /* @__PURE__ */ jsx(CommercialEconomics, {}) }),
    /* @__PURE__ */ jsx("section", { className: "pb-32 px-4 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(ImageAccordion, { items: commercialApplications }) }),
    /* @__PURE__ */ jsx(
      BentoFeatures,
      {
        title: "The Heavy Lifter.",
        subtitle: "Scalable, liquid-cooled energy storage for demanding industrial applications.",
        features: [
          {
            title: "Giga-Series Container",
            description: "A fully integrated, liquid-cooled BESS in a standard 20ft ISO footprint. 2.1MWh - 5MWh capacity.",
            icon: ChartColumn,
            className: "md:col-span-2",
            image: "/images/products/Commercial/brill-power-system.webp"
          },
          {
            title: "Liquid Cooled",
            description: "Advanced thermal management ensures consistent cell temperature for maximum cycle life in harsh Australian heat.",
            icon: Lock,
            className: "md:col-span-1",
            image: "/images/stock/winery-bess-1.webp"
          },
          {
            title: "Open Protocol",
            description: "Native Modbus TCP/IP support. Integrates with your BMS or VPP out of the box.",
            icon: Network,
            className: "md:col-span-1",
            image: "/images/stock/renoz-ccs.webp"
          },
          {
            title: "High Density Safety",
            description: "Integrated fire suppression and Tier 1 LFP cells pack more energy into less space safely.",
            icon: Lock,
            className: "md:col-span-2",
            image: "/images/products/Commercial/brill-power-system-detail.webp"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      TechSpecs,
      {
        title: "Palmer Giga-Series",
        description: "High-density, liquid-cooled, containerised BESS.",
        specs: [
          { label: "System Capacity", value: "2.1 - 5MWh" },
          { label: "Container", value: "20ft ISO" },
          { label: "Thermal Mgmt", value: "Liquid Cooled" },
          { label: "Compliance", value: "IP55 / C5" },
          { label: "Chemistry", value: "LFP (Tier 1)" },
          { label: "Fire Safety", value: "Integrated Suppression" }
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 lg:py-24 text-center bg-zinc-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-6 text-zinc-900", children: [
        "Industrial Reliability. ",
        /* @__PURE__ */ jsx("br", {}),
        " Grid Ready."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-zinc-500 mb-10 text-lg", children: "Secure your operations with market-leading energy density and reliability." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "primary",
          size: "lg",
          to: "/contact",
          className: "rounded-full px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all bg-blue-700 hover:bg-blue-800 border-none",
          children: "Enquire Now"
        }
      )
    ] }) })
  ] });
}
const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((s) => s.slug === params.slug);
    if (!study) {
      throw notFound();
    }
    return { study };
  }
});
const WarrantyRoute = Route$h.update({
  id: "/warranty",
  path: "/warranty",
  getParentRoute: () => Route$i
});
const TermsRoute = Route$g.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$i
});
const ResourcesRoute = Route$f.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$i
});
const PrivacyRoute = Route$e.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$i
});
const InstallersRoute = Route$d.update({
  id: "/installers",
  path: "/installers",
  getParentRoute: () => Route$i
});
const HomeownersRoute = Route$c.update({
  id: "/homeowners",
  path: "/homeowners",
  getParentRoute: () => Route$i
});
const CookiesRoute = Route$b.update({
  id: "/cookies",
  path: "/cookies",
  getParentRoute: () => Route$i
});
const ContactRoute = Route$a.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$i
});
const AdminRoute = Route$9.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$i
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$i
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$i
});
const ProductsIndexRoute = Route$6.update({
  id: "/products/",
  path: "/products/",
  getParentRoute: () => Route$i
}).lazy(
  () => import("./index.lazy-ageMlm4D.mjs").then((d) => d.Route)
);
const CaseStudiesIndexRoute = Route$5.update({
  id: "/case-studies/",
  path: "/case-studies/",
  getParentRoute: () => Route$i
});
const SitemapXmlRoute = Route$4.update({
  id: "/sitemap/xml",
  path: "/sitemap/xml",
  getParentRoute: () => Route$i
});
const ProductsRuralRoute = Route$3.update({
  id: "/products/rural",
  path: "/products/rural",
  getParentRoute: () => Route$i
});
const ProductsResidentialRoute = Route$2.update({
  id: "/products/residential",
  path: "/products/residential",
  getParentRoute: () => Route$i
});
const ProductsCommercialRoute = Route$1.update({
  id: "/products/commercial",
  path: "/products/commercial",
  getParentRoute: () => Route$i
});
const CaseStudiesSlugRoute = Route.update({
  id: "/case-studies/$slug",
  path: "/case-studies/$slug",
  getParentRoute: () => Route$i
}).lazy(
  () => import("./_slug.lazy-CPL_X090.mjs").then((d) => d.Route)
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  ContactRoute,
  CookiesRoute,
  HomeownersRoute,
  InstallersRoute,
  PrivacyRoute,
  ResourcesRoute,
  TermsRoute,
  WarrantyRoute,
  CaseStudiesSlugRoute,
  ProductsCommercialRoute,
  ProductsResidentialRoute,
  ProductsRuralRoute,
  SitemapXmlRoute,
  CaseStudiesIndexRoute,
  ProductsIndexRoute
};
const routeTree = Route$i._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
const router6SuvEb_N = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  B: Button,
  I: Image,
  M: MasonryGallery,
  P: ProductHero,
  R: Route$a,
  S: SolarEconomics,
  T: TechSpecs,
  a: InverterMarquee,
  b: buttonVariants,
  c: cn,
  d: BentoFeatures,
  g: getCaseStudySubset,
  r: router,
  s: supabase
});
export {
  ArrowRight as A,
  Button as B,
  ChevronDown as C,
  Download as D,
  Image as I,
  MasonryGallery as M,
  Network as N,
  Phone as P,
  Route$a as R,
  Shield as S,
  TrendingUp as T,
  X,
  Zap as Z,
  cn as a,
  buttonVariants as b,
  createLucideIcon as c,
  SolarEconomics as d,
  Sun as e,
  Moon as f,
  getCaseStudySubset as g,
  Mail as h,
  MapPin as i,
  Thermometer as j,
  InverterMarquee as k,
  Star as l,
  ProductHero as m,
  BentoFeatures as n,
  TechSpecs as o,
  router6SuvEb_N as r,
  supabase as s
};
