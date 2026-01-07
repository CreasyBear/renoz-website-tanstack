import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useId, useCallback } from "react";
import { z } from "zod";
import { c as createLucideIcon, R as Route$a, a as cn, B as Button, A as ArrowRight, P as Phone, h as Mail, i as MapPin, C as ChevronDown, S as Shield } from "./router-6SuvEb_N.mjs";
import { C as Card } from "./Card-BYhoWMQ1.mjs";
import { T as Turnstile, C as ChevronUp } from "./Turnstile-CicOKJFT.mjs";
import { V as VerticalTimeline } from "./VerticalTimeline-RbR3gdNq.mjs";
import { H as HardHat } from "./hard-hat.mjs";
import { B as Building } from "./building.mjs";
import "@vercel/analytics/react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@supabase/supabase-js";
import "./check.mjs";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function sanitizeText(input) {
  if (!input || typeof input !== "string") return "";
  return input.replace(/[<>]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").trim();
}
class RateLimiter {
  attempts = /* @__PURE__ */ new Map();
  isRateLimited(key, maxAttempts = 5, windowMs = 6e4) {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    const recentAttempts = attempts.filter((time) => now - time < windowMs);
    if (recentAttempts.length >= maxAttempts) {
      return true;
    }
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return false;
  }
  reset(key) {
    this.attempts.delete(key);
  }
}
const rateLimiter = new RateLimiter();
function generateCsrfToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}
function validateFormInput(input, rules) {
  const errors = [];
  let value = input;
  if (input === null || input === void 0) {
    if (rules.required) {
      errors.push("This field is required");
    }
    return { isValid: errors.length === 0, value: input, errors };
  }
  const stringValue = String(input);
  if (rules.maxLength && stringValue.length > rules.maxLength) {
    errors.push(`Maximum length is ${rules.maxLength} characters`);
  }
  if (rules.pattern && !rules.pattern.test(stringValue)) {
    errors.push("Invalid format");
  }
  if (rules.sanitize && typeof input === "string") {
    value = sanitizeText(input);
  }
  return {
    isValid: errors.length === 0,
    value,
    errors
  };
}
function useSecureForm(options) {
  const { rateLimitKey = "form-submit", csrfProtection = true } = options;
  const [csrfToken] = useState(() => generateCsrfToken());
  const [submitStatus, setSubmitStatus] = useState("idle");
  const secureSubmit = useCallback(
    async (values) => {
      if (rateLimiter.isRateLimited(rateLimitKey)) {
        throw new Error(
          "Too many submissions. Please wait before trying again."
        );
      }
      setSubmitStatus("submitting");
      try {
        const sanitizedValues = Object.keys(values).reduce(
          (acc, key) => {
            const value = values[key];
            if (typeof value === "string") {
              acc[key] = sanitizeText(value);
            } else {
              acc[key] = value;
            }
            return acc;
          },
          {}
        );
        const submitData = csrfProtection ? { ...sanitizedValues, _csrf: csrfToken } : sanitizedValues;
        if (options.onSubmit) {
          await options.onSubmit(submitData);
        }
        setSubmitStatus("success");
      } catch (error) {
        setSubmitStatus("error");
        throw error;
      } finally {
        setSubmitStatus("idle");
      }
    },
    [rateLimitKey, csrfProtection, csrfToken, options.onSubmit]
  );
  return {
    secureSubmit,
    submitStatus,
    csrfToken: csrfProtection ? csrfToken : void 0
  };
}
const secureValidators = {
  email: (value) => {
    const { isValid } = validateFormInput(value, {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    });
    return isValid || "Please enter a valid email address";
  },
  required: (fieldName = "This field") => (value) => {
    const { isValid } = validateFormInput(value, { required: true });
    return isValid || `${fieldName} is required`;
  },
  maxLength: (max, fieldName = "This field") => (value) => {
    const { isValid } = validateFormInput(value, { maxLength: max });
    return isValid || `${fieldName} must be less than ${max} characters`;
  },
  sanitize: (value) => sanitizeText(value)
};
const inquirySchema = z.object({
  name: z.string().min(1, "Please enter your full name so we can address you properly"),
  email: z.string().email("Invalid email address"),
  company: z.string(),
  inquiry_type: z.string(),
  message: z.string().min(10, "Please provide more details about your energy needs (minimum 10 characters)"),
  turnstileToken: z.string().min(1, "Please complete the spam check")
});
function ContactPage() {
  const search = Route$a.useSearch();
  const [openFaq, setOpenFaq] = useState(null);
  const containerRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const {
    secureSubmit,
    submitStatus
  } = useSecureForm({
    rateLimitKey: "contact-form",
    csrfProtection: true
  });
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      inquiry_type: search.type || "residential",
      message: "",
      turnstileToken: ""
    },
    // @ts-expect-error Types mismatch in tanstack form adapter
    validatorAdapter: zodValidator(),
    validators: {
      onSubmit: inquirySchema
    },
    onSubmit: async ({
      value
    }) => {
      await secureSubmit(value);
    }
  });
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const messageId = useId();
  const faqs = [{
    q: "Where are RENOZ batteries manufactured?",
    a: "RENOZ battery systems are engineered and designed in Perth, Western Australia. We partner with world-class manufacturers to produce our systems to the highest standards. We are proud to be Perth's own battery OEM."
  }, {
    q: "What is the warranty period?",
    a: "We offer a standard 10-year performance warranty on all our battery modules, guaranteeing at least 80% capacity retention after 6,000 cycles."
  }, {
    q: "Do you sell directly to homeowners?",
    a: "We primarily work through a network of certified installers to ensure safe and compliant installation. However, you can contact us directly for a system sizing consultation, and we can recommend a local partner."
  }, {
    q: "Are your systems compatible with existing solar setups?",
    a: "Yes, RENOZ systems are designed to be inverter-agnostic and can be retrofitted to most existing solar PV installations, including AC-coupled and DC-coupled configurations."
  }];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[var(--cream)]", ref: containerRef, children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-[var(--black)] text-white", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "absolute inset-0 z-0", style: {
        y
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-60", style: {
          backgroundImage: "url('/images/about/hero-wa-energy.webp')"
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--cream)] via-transparent to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-10", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg", children: [
          "Let's start a ",
          /* @__PURE__ */ jsx("br", {}),
          " conversation."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-md", children: "Whether you're a homeowner, installer, or developer, our Perth-based engineering team is ready to help." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-24 relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsx(motion.div, { className: "lg:col-span-7", initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, children: /* @__PURE__ */ jsx(Card, { className: "shadow-2xl border-none rounded-[32px] overflow-hidden bg-white p-8 md:p-10", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }, children: [
          /* @__PURE__ */ jsx(form.Field, { name: "inquiry_type", children: (field) => {
            const inquiryType = field.state.value;
            const getTitle = () => {
              if (inquiryType === "partnership") return "Apply for Trade Account";
              if (inquiryType === "commercial") return "Discuss Commercial Project";
              return "Get Expert Advice";
            };
            const getDesc = () => {
              if (inquiryType === "partnership") return "Join our partner network for wholesale pricing and direct engineering support.";
              if (inquiryType === "commercial") return "Tell us about your project requirements (capacity, voltage, application).";
              return "Let us know your energy needs and we will connect you with a certified installer.";
            };
            return /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex bg-gray-100 p-1 rounded-xl mb-8", children: [
                /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => field.handleChange("residential"), className: cn("flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all", inquiryType === "residential" ? "bg-white text-[var(--black)] shadow-sm" : "text-gray-500 hover:text-gray-700"), children: [
                  /* @__PURE__ */ jsx(User, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Homeowner" })
                ] }),
                /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => field.handleChange("partnership"), className: cn("flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all", inquiryType === "partnership" ? "bg-white text-[var(--black)] shadow-sm" : "text-gray-500 hover:text-gray-700"), children: [
                  /* @__PURE__ */ jsx(HardHat, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Installer" })
                ] }),
                /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => field.handleChange("commercial"), className: cn("flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all", inquiryType === "commercial" ? "bg-white text-[var(--black)] shadow-sm" : "text-gray-500 hover:text-gray-700"), children: [
                  /* @__PURE__ */ jsx(Building, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Commercial" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[var(--black)] mb-2", children: getTitle() }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: getDesc() })
              ] })
            ] });
          } }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsx(form.Field, { name: "name", children: (field) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: nameId, className: "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500", children: "Name *" }),
                /* @__PURE__ */ jsx("input", { id: nameId, value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(secureValidators.sanitize(e.target.value)), className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400", placeholder: "John Doe", required: true, "aria-invalid": field.state.meta.errors.length > 0, "aria-describedby": field.state.meta.errors.length > 0 ? `${nameId}-error` : void 0, minLength: 2, maxLength: 100 }),
                field.state.meta.errors ? /* @__PURE__ */ jsx("p", { id: `${nameId}-error`, className: "text-red-500 text-sm mt-1", role: "alert", "aria-live": "polite", children: field.state.meta.errors.join(", ") }) : null
              ] }) }),
              /* @__PURE__ */ jsx(form.Field, { name: "email", children: (field) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: emailId, className: "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500", children: "Email *" }),
                /* @__PURE__ */ jsx("input", { id: emailId, type: "email", value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(e.target.value), className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400", placeholder: "john@example.com" }),
                field.state.meta.errors ? /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: field.state.meta.errors.join(", ") }) : null
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(form.Field, { name: "company", children: (field) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(form.Subscribe, { selector: (state) => [state.values.inquiry_type], children: ([inquiryType]) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: companyId, className: "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500", children: inquiryType === "residential" ? "Address (Optional)" : "Company Name" }),
              /* @__PURE__ */ jsx("input", { id: companyId, value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(e.target.value), className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400", placeholder: inquiryType === "residential" ? "Your suburb or address" : "Your business name" })
            ] }) }) }) }),
            /* @__PURE__ */ jsx(form.Field, { name: "message", children: (field) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: messageId, className: "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500", children: "Message *" }),
              /* @__PURE__ */ jsx("textarea", { id: messageId, rows: 5, value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(e.target.value), className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400", placeholder: "Tell us about your project requirements..." }),
              field.state.meta.errors ? /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: field.state.meta.errors.join(", ") }) : null
            ] }) }),
            submitStatus === "success" && /* @__PURE__ */ jsxs(motion.div, { initial: {
              opacity: 0,
              height: 0
            }, animate: {
              opacity: 1,
              height: "auto"
            }, className: "p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3", role: "alert", "aria-live": "polite", "aria-atomic": "true", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-200 rounded-full flex items-center justify-center shrink-0", "aria-hidden": "true", children: "✓" }),
              /* @__PURE__ */ jsx("div", { children: "Thanks for reaching out! Our energy experts will respond within 24 hours with your custom solution." })
            ] }),
            submitStatus === "error" && /* @__PURE__ */ jsx(motion.div, { initial: {
              opacity: 0,
              height: 0
            }, animate: {
              opacity: 1,
              height: "auto"
            }, className: "p-4 bg-red-50 border border-red-200 rounded-xl text-red-800", role: "alert", "aria-live": "assertive", "aria-atomic": "true", children: "We encountered an issue sending your message. Please try again or contact us directly or call us directly." }),
            /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(form.Field, { name: "turnstileToken", children: (field) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Turnstile, { siteKey: "0x4AAAAAABHX5BtfeC3UIcgA", onVerify: (token) => field.handleChange(token), onError: () => field.handleChange(""), theme: "auto", size: "normal", className: "flex justify-center" }),
              field.state.meta.errors ? /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-2 text-center", children: field.state.meta.errors.join(", ") }) : null
            ] }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
              /* @__PURE__ */ jsx(form.Subscribe, { selector: (state) => [state.canSubmit], children: ([canSubmit]) => /* @__PURE__ */ jsxs(Button, { type: "submit", variant: "primary", size: "lg", className: "w-full rounded-xl py-4 text-lg shadow-lg shadow-[var(--renoz-green)]/20", disabled: !canSubmit || false || submitStatus === "submitting", "aria-describedby": "submit-status", children: [
                submitStatus === "submitting" ? "Sending..." : "Get Expert Advice",
                submitStatus !== "submitting" && /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "sr-only", "aria-live": "polite", "aria-atomic": "true", children: [
                submitStatus === "submitting" && "Sending your message...",
                submitStatus === "success" && "Message sent successfully",
                submitStatus === "error" && "Failed to send message"
              ] })
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
          /* @__PURE__ */ jsxs(motion.a, { href: "tel:1800736693", className: "block bg-[var(--black)] text-white rounded-[32px] p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden", initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.3
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-white/10 rounded-[20px]", children: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-[var(--renoz-green)]" }) }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-gray-500 group-hover:text-white transition-colors" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 font-bold uppercase tracking-wider mb-1", children: "Call Us" }),
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold mb-4", children: "1800 736 693" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-400", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { children: "Mon-Fri, 8am - 5pm AWST" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.a, { href: "mailto:sales@renoz.energy", className: "block bg-white text-[var(--black)] rounded-[32px] p-8 shadow-soft hover:shadow-lg transition-all duration-300 group", initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.4
          }, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-100 rounded-[20px] group-hover:bg-[var(--renoz-green)]/10 transition-colors", children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-[var(--black)] group-hover:text-[var(--renoz-green)] transition-colors" }) }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-gray-300 group-hover:text-[var(--black)] transition-colors" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 font-bold uppercase tracking-wider mb-1", children: "Email Us" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold break-all", children: "sales@renoz.energy" })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { className: "bg-[var(--renoz-green)] text-white rounded-[32px] p-8 shadow-xl relative overflow-hidden", initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.5
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-8 h-8 text-white mb-6" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-white/60 font-bold uppercase tracking-wider mb-1", children: "Head Office & Factory" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xl font-bold leading-tight", children: [
                "Unit 4, 8 Murphy Street",
                /* @__PURE__ */ jsx("br", {}),
                "O'Connor WA 6163"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-6 pt-6 border-t border-white/20", children: /* @__PURE__ */ jsxs("a", { href: "https://maps.google.com/?q=8+Murphy+Street+O'Connor+WA", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center text-sm font-bold hover:text-white/80 transition-colors", children: [
                "Get Directions ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
              ] }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-32", children: /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, children: /* @__PURE__ */ jsx(VerticalTimeline, { title: "What happens next?", steps: [{
        title: "Initial Review",
        description: "Our admin team reviews your inquiry within 24 hours (Mon-Fri) and routes it to the correct department."
      }, {
        title: "Technical Sizing (Optional)",
        description: "For complex projects, our engineers may request additional info (switchboard photos, load profiles) to provide an accurate quote."
      }, {
        title: "Connection",
        description: "We'll either provide a direct quote or introduce you to a certified local partner who can handle the installation."
      }] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "mt-32 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.8
        }, className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4", children: /* @__PURE__ */ jsx(CircleQuestionMark, { className: "w-6 h-6 text-[var(--renoz-green)]" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[var(--black)]", children: "Frequently Asked Questions" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.5,
          delay: i * 0.1
        }, className: "bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(openFaq === i ? null : i), className: "w-full flex justify-between items-center text-left font-bold text-[var(--black)] p-6 md:p-8", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg", children: faq.q }),
            openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-[var(--renoz-green)] shrink-0 ml-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-gray-400 shrink-0 ml-4" })
          ] }),
          /* @__PURE__ */ jsx(AnimatePresence, { children: openFaq === i && /* @__PURE__ */ jsx(motion.div, { initial: {
            height: 0,
            opacity: 0
          }, animate: {
            height: "auto",
            opacity: 1
          }, exit: {
            height: 0,
            opacity: 0
          }, className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 md:px-8 md:pb-8 text-[var(--text-muted)] leading-relaxed border-t border-gray-50 pt-4", children: faq.a }) }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "mt-32", children: /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-[var(--black)] to-gray-800 text-white p-12 md:p-16 rounded-[32px] border-none shadow-2xl relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--renoz-green)]/20 border border-[var(--renoz-green)]/30 mb-6", children: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-[var(--renoz-green)]" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Already a RENOZ Customer?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8 leading-relaxed", children: "Activate your 10-year replacement warranty in minutes. Simple online registration for peace of mind." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "primary", size: "lg", to: "/warranty", className: "rounded-full px-8 shadow-glow", children: [
              "Register Your Warranty",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/resources", className: "inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/20 hover:border-white/40 rounded-full font-bold transition-all hover:bg-white/5", children: "View Resources" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 mt-6", children: [
            "Need help? Email",
            " ",
            /* @__PURE__ */ jsx("a", { href: "mailto:support@renoz.energy", className: "text-[var(--renoz-green)] hover:underline", children: "support@renoz.energy" })
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
}
export {
  ContactPage as component
};
