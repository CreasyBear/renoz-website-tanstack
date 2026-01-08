import { a as reactExports, o as jsxRuntimeExports } from "./server.mjs";
import { a as createLucideIcon, D as Download, S as Shield, B as Button, A as ArrowRight } from "./router-CQGIo6hj.mjs";
import { C as Card } from "./Card-DHVZZoji.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./types-RbEUnDjD.mjs";
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$1);
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const documents = [
  // Datasheets
  {
    id: "ds-1",
    title: "RENOZ Energy LV-5KWH100AH Technical Specifications",
    category: "Datasheet",
    filename: "/documents/datasheets/[250801] - RENOZ Energy LV-5KWH100AH Technical Specifications.pdf",
    size: "1.2 MB",
    date: "2025-08-01"
  },
  // Installation
  {
    id: "inst-1",
    title: "RENOZ Energy LV-5KWH100AH Installation and User Manual",
    category: "Manual",
    filename: "/documents/installation/[250801] - RENOZ Energy LV-5KWH100AH Installation and User Manual.pdf",
    size: "5.6 MB",
    date: "2025-08-01"
  },
  {
    id: "guide-1",
    title: "RENOZ Energy LV Stackable Installation Compliance Guide",
    category: "Guide",
    filename: "/documents/guides/[250620] - RENOZ Energy LV Stackable Installation Compliance Guide.pdf",
    size: "850 KB",
    date: "2025-06-20"
  },
  // Warranty
  {
    id: "war-1",
    title: "RENOZ Energy LV-5KWH100AH Product Warranty",
    category: "Warranty",
    filename: "/documents/warranty/[250801] - RENOZ Energy LV-5KWH100AH Product Warranty.pdf",
    size: "450 KB",
    date: "2025-08-01"
  },
  // Technical / Declarations
  {
    id: "tech-1",
    title: "RENOZ Energy LV-5KWH100AH MSDS",
    category: "Technical",
    filename: "/documents/technical/RENOZ Energy LV-5KWH100AH MSDS.pdf",
    size: "320 KB",
    date: "2025-06-20"
  },
  {
    id: "dec-1",
    title: "Signed Declaration of Compliance",
    category: "Declaration",
    filename: "/documents/declarations/[250620] - RENOZ Energy Signed Declaration of Compliance.pdf",
    size: "150 KB",
    date: "2025-06-20"
  },
  {
    id: "dec-2",
    title: "Signed Inverter Compatibility Statement",
    category: "Declaration",
    filename: "/documents/declarations/[250620] - RENOZ Energy LV-5KWH100AH Signed Inverter Compatibility Statement.pdf",
    size: "180 KB",
    date: "2025-06-20"
  }
];
function ResourcesPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const categories = ["All", "Datasheet", "Manual", "Warranty", "Guide", "Declaration", "Technical"];
  const filteredDocs = documents.filter((doc) => {
    const matchesCategory = filter === "All" || doc.category === filter;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--cream)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-[var(--black)] text-white pt-32 pb-24 rounded-b-[40px] shadow-lg mb-16 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-[var(--renoz-green)]/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Resource Centre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-400 mb-10 max-w-2xl mx-auto", children: "Access technical specifications, installation guides, and warranty documentation for all RENOZ systems." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search documents...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full pl-12 pr-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-white focus:outline-none transition-all backdrop-blur-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-12", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(cat), className: `px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? "bg-[var(--renoz-green)] text-white shadow-lg" : "bg-white text-gray-500 hover:bg-gray-100 hover:text-black"}`, children: cat }, cat)) }),
      filteredDocs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredDocs.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { hover: true, className: "flex flex-col h-full bg-white border-none shadow-sm hover:shadow-md transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-xl ${doc.category === "Warranty" ? "bg-amber-50 text-amber-600" : doc.category === "Manual" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100", children: doc.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2 flex-grow text-[var(--black)] leading-snug", children: doc.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-400 mb-6 flex justify-between items-center border-t border-gray-50 pt-4 mt-2 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: doc.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs bg-gray-100 px-2 py-0.5 rounded", children: doc.size })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: doc.filename, download: true, className: "w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:border-[var(--renoz-green)] hover:text-[var(--renoz-green)] hover:bg-[var(--renoz-green)]/5 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 group-hover:-translate-y-1 transition-transform" }),
          "Download PDF"
        ] })
      ] }, doc.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-spacing text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "No documents found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Try adjusting your search or filter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setFilter("All");
          setSearchQuery("");
        }, className: "mt-4 text-[var(--renoz-green)] font-bold hover:underline", children: "Clear filters" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 bg-gradient-to-br from-[var(--black)] to-[#2d2d2d] text-white rounded-[32px] p-12 md:p-16 shadow-2xl relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--renoz-green)]/20 border border-[var(--renoz-green)]/30 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-[var(--renoz-green)]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Activate Your Warranty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 mb-8 leading-relaxed", children: "Register your RENOZ system to activate your 10-year replacement warranty. Quick and easy online registration." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "lg", to: "/warranty", className: "rounded-full px-8 shadow-glow", children: [
            "Register Now",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-center bg-white rounded-[32px] p-12 border border-gray-100 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Can't find what you're looking for?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mb-8", children: "Our engineering team can provide specific drawings and compliance documents upon request." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@renoz.energy", className: "px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--black)] font-bold rounded-full transition-colors", children: "Email Support" }) })
      ] })
    ] })
  ] });
}
export {
  ResourcesPage as component
};
