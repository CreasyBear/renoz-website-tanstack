import { jsx, jsxs } from "react/jsx-runtime";
function PrivacyPage() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--cream)]", children: /* @__PURE__ */ jsx("section", { className: "pt-40 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-12 text-[var(--black)] tracking-tight", children: "Privacy Policy" }),
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
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "1. Overview" }),
        /* @__PURE__ */ jsx("p", { children: 'RENOZ Energy ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This policy outlines how we handle your information when you interact with our website and services.' })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "2. Information Collection" }),
        /* @__PURE__ */ jsx("p", { children: "We collect information necessary to provide our services, including:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 mt-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Identity Data:" }),
            " Name, company name, and job title."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Contact Data:" }),
            " Email address, telephone number, and installation address."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Technical Data:" }),
            " System specifications, warranty registration details, and installation evidence (photos/documents)."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "3. Usage of Information" }),
        /* @__PURE__ */ jsx("p", { children: "Your data is used strictly for:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 mt-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Processing warranty registrations and claims." }),
          /* @__PURE__ */ jsx("li", { children: "Providing customer support and technical assistance." }),
          /* @__PURE__ */ jsx("li", { children: "Communicating product updates or safety notices." }),
          /* @__PURE__ */ jsx("li", { children: "Improving our products and digital services." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "4. Data Security" }),
        /* @__PURE__ */ jsx("p", { children: "We implement industry-standard security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Access to your personal data is limited to employees, agents, contractors, and other third parties who have a business need to know." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "5. Data Retention" }),
        /* @__PURE__ */ jsx("p", { children: "We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Warranty records are retained for the duration of the product warranty period plus a reasonable archive period." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "6. Your Rights" }),
        /* @__PURE__ */ jsx("p", { children: "Under Australian Privacy Principles, you have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact our privacy officer." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "pt-8 border-t border-gray-200", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--black)] mb-3", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For any privacy-related inquiries, please contact:",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("strong", { children: "Privacy Officer" }),
          /* @__PURE__ */ jsx("br", {}),
          "RENOZ Energy Pty Ltd",
          /* @__PURE__ */ jsx("br", {}),
          "Unit 4, 8 Murphy Street",
          /* @__PURE__ */ jsx("br", {}),
          "O'Connor WA 6163",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("a", { href: "mailto:sales@renoz.energy", className: "text-[var(--renoz-green)] hover:underline", children: "sales@renoz.energy" })
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  PrivacyPage as component
};
