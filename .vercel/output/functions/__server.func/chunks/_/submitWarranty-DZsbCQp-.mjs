import { c as createServerRpc, a as createServerFn } from "./server.mjs";
import { render, Section, Text, Heading, Link, Row, Column, Container, Img, Button, Html, Head, Preview, Body, Hr } from "@react-email/components";
import { createClient } from "@supabase/supabase-js";
import { createElement } from "react";
import { Resend } from "resend";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "node:stream";
import "react-dom/server";
import "isbot";
import "@tanstack/react-store";
const baseUrl$1 = process.env.VITE_SITE_URL || "https://renoz.energy";
const styles$3 = {
  body: {
    backgroundColor: "#ffffff",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    color: "#1A1A1A",
    WebkitFontSmoothing: "antialiased"
  },
  container: {
    margin: "0 auto",
    padding: "32px",
    maxWidth: "600px",
    borderRadius: "8px",
    border: "1px solid #E5E5E5"
  },
  logoSection: {
    marginBottom: "32px",
    textAlign: "center"
  },
  hr: {
    borderColor: "#E5E5E5",
    marginTop: "32px",
    marginBottom: "32px"
  },
  footer: {
    textAlign: "center",
    fontSize: "12px",
    color: "#666666"
  },
  footerText: {
    marginBottom: "16px"
  },
  footerLinks: {
    textAlign: "center"
  },
  footerLink: {
    color: "#00B140",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    marginLeft: "8px",
    marginRight: "8px"
  }
};
const EmailLayout = ({ preview, children }) => {
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: preview }),
    /* @__PURE__ */ jsx(Body, { style: styles$3.body, children: /* @__PURE__ */ jsxs(Container, { style: styles$3.container, children: [
      /* @__PURE__ */ jsx(Section, { style: styles$3.logoSection, children: /* @__PURE__ */ jsx(
        Img,
        {
          src: `${baseUrl$1}/images/optimized/logo-renoz.webp`,
          width: "180",
          height: "auto",
          alt: "RENOZ Energy",
          style: { margin: "0 auto" }
        }
      ) }),
      children,
      /* @__PURE__ */ jsx(Hr, { style: styles$3.hr }),
      /* @__PURE__ */ jsxs(Section, { style: styles$3.footer, children: [
        /* @__PURE__ */ jsxs(Text, { style: styles$3.footerText, children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " RENOZ Energy. All rights reserved.",
          /* @__PURE__ */ jsx("br", {}),
          "Unit 4, 8 Murphy Street, O'Connor WA 6163"
        ] }),
        /* @__PURE__ */ jsxs(Section, { style: styles$3.footerLinks, children: [
          /* @__PURE__ */ jsx(Link, { href: `${baseUrl$1}`, style: styles$3.footerLink, children: "Website" }),
          /* @__PURE__ */ jsx(Link, { href: `${baseUrl$1}/contact`, style: styles$3.footerLink, children: "Contact Support" }),
          /* @__PURE__ */ jsx(Link, { href: `${baseUrl$1}/privacy`, style: styles$3.footerLink, children: "Privacy Policy" })
        ] })
      ] })
    ] }) })
  ] });
};
const baseUrl = process.env.VITE_SITE_URL || "https://renoz.energy";
const styles$2 = {
  // Main Container
  mainSection: {
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    margin: "0 auto"
  },
  // Hero Section
  heroSection: {
    backgroundColor: "#166534",
    // Dark green
    padding: "40px 32px",
    textAlign: "center"
  },
  heroHeading: {
    margin: "0 0 16px 0",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ffffff",
    lineHeight: "1.2"
  },
  heroText: {
    margin: "0",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: "1.5"
  },
  // Status Card (Overlapping hero slightly in concept, but kept simple here)
  statusSection: {
    padding: "32px 24px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb"
  },
  statusLabel: {
    margin: "0 0 8px 0",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#166534",
    textAlign: "center"
  },
  warrantyId: {
    margin: "0 auto",
    fontSize: "24px",
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "#111827",
    backgroundColor: "#f3f4f6",
    padding: "8px 16px",
    borderRadius: "4px",
    display: "inline-block"
  },
  centerContainer: {
    textAlign: "center"
  },
  // Content
  contentSection: {
    padding: "32px 24px"
  },
  sectionTitle: {
    margin: "0 0 20px 0",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#111827",
    borderBottom: "2px solid #22c55e",
    paddingBottom: "8px"
  },
  // Data Rows
  row: {
    marginBottom: "12px",
    borderBottom: "1px solid #f3f4f6",
    paddingBottom: "12px"
  },
  labelCol: {
    width: "40%"
  },
  valueCol: {
    width: "60%",
    textAlign: "right"
  },
  labelText: {
    margin: "0",
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "500"
  },
  valueText: {
    margin: "0",
    fontSize: "14px",
    color: "#111827",
    fontWeight: "600"
  },
  // CTA Box
  ctaBox: {
    marginTop: "32px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    padding: "24px",
    textAlign: "center",
    border: "1px solid #e5e7eb"
  },
  ctaHeading: {
    margin: "0 0 12px 0",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#111827"
  },
  ctaText: {
    margin: "0 0 20px 0",
    fontSize: "14px",
    color: "#4b5563",
    lineHeight: "1.5"
  },
  button: {
    backgroundColor: "#166534",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "14px",
    padding: "12px 24px",
    borderRadius: "9999px",
    textDecoration: "none",
    display: "inline-block"
  },
  // Footer
  footerSection: {
    backgroundColor: "#f3f4f6",
    padding: "24px",
    textAlign: "center",
    borderTop: "1px solid #e5e7eb"
  },
  footerText: {
    margin: "0",
    fontSize: "12px",
    color: "#6b7280",
    lineHeight: "1.5"
  },
  link: {
    color: "#166534",
    textDecoration: "underline",
    fontWeight: "600"
  }
};
const DataRow$2 = ({
  label,
  value
}) => /* @__PURE__ */ jsxs(Row, { style: styles$2.row, children: [
  /* @__PURE__ */ jsx(Column, { style: styles$2.labelCol, children: /* @__PURE__ */ jsx(Text, { style: styles$2.labelText, children: label }) }),
  /* @__PURE__ */ jsx(Column, { style: styles$2.valueCol, children: /* @__PURE__ */ jsx(Text, { style: styles$2.valueText, children: value || "—" }) })
] });
const WarrantyHomeownerConfirmationEmail = ({
  warrantyId,
  homeownerName,
  installerName,
  installerCompany,
  batteryModel,
  serialNumbers,
  installDate
}) => {
  const batteryCount = serialNumbers.filter((s) => s.trim()).length;
  const nominalCapacity = batteryCount * 5.12;
  return /* @__PURE__ */ jsx(EmailLayout, { preview: `Welcome to the Family - Warranty ${warrantyId}`, children: /* @__PURE__ */ jsxs(Section, { style: styles$2.mainSection, children: [
    /* @__PURE__ */ jsxs(Section, { style: styles$2.heroSection, children: [
      /* @__PURE__ */ jsx(Heading, { style: styles$2.heroHeading, children: "Welcome to the Family." }),
      /* @__PURE__ */ jsxs(Text, { style: styles$2.heroText, children: [
        "Hi ",
        homeownerName,
        ", your new RENOZ energy storage system is officially protected."
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { style: styles$2.statusSection, children: /* @__PURE__ */ jsxs(Container, { style: styles$2.centerContainer, children: [
      /* @__PURE__ */ jsx(Text, { style: styles$2.statusLabel, children: "Warranty Active" }),
      /* @__PURE__ */ jsx(Text, { style: styles$2.warrantyId, children: warrantyId })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { style: styles$2.contentSection, children: [
      /* @__PURE__ */ jsx(Heading, { as: "h3", style: styles$2.sectionTitle, children: "System Snapshot" }),
      /* @__PURE__ */ jsx(
        DataRow$2,
        {
          label: "System Capacity",
          value: `${nominalCapacity.toFixed(1)} kWh`
        }
      ),
      /* @__PURE__ */ jsx(
        DataRow$2,
        {
          label: "Battery Model",
          value: `${batteryModel} (${batteryCount}x)`
        }
      ),
      /* @__PURE__ */ jsx(
        DataRow$2,
        {
          label: "Installed By",
          value: installerCompany || installerName
        }
      ),
      /* @__PURE__ */ jsx(DataRow$2, { label: "Installation Date", value: installDate }),
      /* @__PURE__ */ jsxs(Section, { style: styles$2.ctaBox, children: [
        /* @__PURE__ */ jsx(Heading, { as: "h4", style: styles$2.ctaHeading, children: "Maximize Your System" }),
        /* @__PURE__ */ jsx(Text, { style: styles$2.ctaText, children: "Access user manuals, safety guides, and tips for maintaining your battery health in our resource center." }),
        /* @__PURE__ */ jsx(Button, { href: `${baseUrl}/resources`, style: styles$2.button, children: "View Owner Resources" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { style: styles$2.footerSection, children: /* @__PURE__ */ jsxs(Text, { style: styles$2.footerText, children: [
      "Please keep this email for your records. If you ever need support, just reply to this email or call us at",
      " ",
      /* @__PURE__ */ jsx(Link, { href: "tel:1800736693", style: styles$2.link, children: "1800 736 693" }),
      "."
    ] }) })
  ] }) });
};
const styles$1 = {
  // Main Container
  mainSection: {
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    margin: "0 auto"
  },
  // Header
  headerSection: {
    padding: "32px 24px",
    backgroundColor: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
    textAlign: "center"
  },
  successIcon: {
    fontSize: "48px",
    marginBottom: "16px",
    display: "block"
  },
  mainHeading: {
    margin: "0 0 12px 0",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#111827"
  },
  introText: {
    margin: "0",
    fontSize: "16px",
    color: "#6b7280",
    lineHeight: "1.5"
  },
  // Reference Card
  referenceCard: {
    margin: "24px",
    padding: "24px",
    backgroundColor: "#f0fdf4",
    // Light green bg
    border: "1px solid #bbf7d0",
    borderRadius: "8px",
    textAlign: "center"
  },
  referenceLabel: {
    margin: "0 0 8px 0",
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#15803d"
  },
  referenceId: {
    margin: "0",
    fontFamily: "monospace",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    color: "#166534"
  },
  // Sections
  section: {
    padding: "0 24px 24px 24px"
  },
  sectionHeading: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#111827",
    textTransform: "uppercase",
    letterSpacing: "0.025em",
    borderBottom: "2px solid #6366f1",
    // Indigo accent
    paddingBottom: "8px"
  },
  // Data Rows
  row: {
    marginBottom: "8px"
  },
  labelCol: {
    width: "40%",
    verticalAlign: "top"
  },
  valueCol: {
    width: "60%",
    verticalAlign: "top"
  },
  labelText: {
    margin: "0",
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: "500"
  },
  valueText: {
    margin: "0",
    fontSize: "13px",
    color: "#111827",
    fontWeight: "600"
  },
  // Next Steps
  stepsSection: {
    margin: "0 24px 24px 24px",
    padding: "24px",
    backgroundColor: "#f9fafb",
    border: "1px dashed #d1d5db",
    borderRadius: "8px"
  },
  stepsHeading: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#374151",
    textTransform: "uppercase"
  },
  stepRow: {
    marginBottom: "12px"
  },
  stepIcon: {
    width: "24px",
    fontSize: "18px",
    verticalAlign: "top"
  },
  stepText: {
    margin: "0",
    fontSize: "13px",
    color: "#4b5563",
    lineHeight: "1.4"
  },
  // Footer
  footerSection: {
    backgroundColor: "#f3f4f6",
    padding: "24px",
    borderTop: "1px solid #e5e7eb",
    textAlign: "center"
  },
  footerText: {
    margin: "0",
    fontSize: "12px",
    color: "#6b7280"
  },
  link: {
    color: "#059669",
    fontWeight: "600",
    textDecoration: "none"
  }
};
const DataRow$1 = ({
  label,
  value
}) => /* @__PURE__ */ jsxs(Row, { style: styles$1.row, children: [
  /* @__PURE__ */ jsx(Column, { style: styles$1.labelCol, children: /* @__PURE__ */ jsx(Text, { style: styles$1.labelText, children: label }) }),
  /* @__PURE__ */ jsx(Column, { style: styles$1.valueCol, children: /* @__PURE__ */ jsx(Text, { style: styles$1.valueText, children: value || "—" }) })
] });
const WarrantyInstallerConfirmationEmail = ({
  warrantyId,
  installerName,
  installerEmail,
  installerPhone,
  companyName,
  batteryModel,
  serialNumbers,
  installDate
}) => {
  const batteryCount = serialNumbers.filter((s) => s.trim()).length;
  const nominalCapacity = batteryCount * 5.12;
  const usableCapacity = nominalCapacity * 0.9;
  return /* @__PURE__ */ jsx(EmailLayout, { preview: `Registration Received - ${warrantyId}`, children: /* @__PURE__ */ jsxs(Section, { style: styles$1.mainSection, children: [
    /* @__PURE__ */ jsxs(Section, { style: styles$1.headerSection, children: [
      /* @__PURE__ */ jsx(Text, { style: styles$1.successIcon, children: "✅" }),
      /* @__PURE__ */ jsx(Heading, { style: styles$1.mainHeading, children: "Registration Received" }),
      /* @__PURE__ */ jsxs(Text, { style: styles$1.introText, children: [
        "Thanks, ",
        installerName,
        ". We've received your submission."
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles$1.referenceCard, children: [
      /* @__PURE__ */ jsx(Text, { style: styles$1.referenceLabel, children: "Warranty Reference ID" }),
      /* @__PURE__ */ jsx(Text, { style: styles$1.referenceId, children: warrantyId })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles$1.section, children: [
      /* @__PURE__ */ jsx(Heading, { as: "h3", style: styles$1.sectionHeading, children: "⚡ System Configuration" }),
      /* @__PURE__ */ jsx(DataRow$1, { label: "Battery Model", value: batteryModel }),
      /* @__PURE__ */ jsx(
        DataRow$1,
        {
          label: "Total Capacity",
          value: `${nominalCapacity.toFixed(2)} kWh (${usableCapacity.toFixed(2)} kWh usable)`
        }
      ),
      /* @__PURE__ */ jsx(DataRow$1, { label: "Battery Count", value: `${batteryCount}x Units` }),
      /* @__PURE__ */ jsx(DataRow$1, { label: "Install Date", value: installDate })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles$1.section, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          as: "h3",
          style: { ...styles$1.sectionHeading, borderColor: "#10b981" },
          children: "👷 Installer Record"
        }
      ),
      /* @__PURE__ */ jsx(DataRow$1, { label: "Name", value: installerName }),
      /* @__PURE__ */ jsx(DataRow$1, { label: "Company", value: companyName }),
      /* @__PURE__ */ jsx(DataRow$1, { label: "Email", value: installerEmail }),
      /* @__PURE__ */ jsx(DataRow$1, { label: "Phone", value: installerPhone })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles$1.stepsSection, children: [
      /* @__PURE__ */ jsx(Heading, { as: "h4", style: styles$1.stepsHeading, children: "What happens next?" }),
      /* @__PURE__ */ jsxs(Row, { style: styles$1.stepRow, children: [
        /* @__PURE__ */ jsx(Column, { style: styles$1.stepIcon, children: "📝" }),
        /* @__PURE__ */ jsx(Column, { children: /* @__PURE__ */ jsxs(Text, { style: styles$1.stepText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Review:" }),
          " Our engineering team verifies the installation details (24-48 hrs)."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Row, { style: styles$1.stepRow, children: [
        /* @__PURE__ */ jsx(Column, { style: styles$1.stepIcon, children: "✨" }),
        /* @__PURE__ */ jsx(Column, { children: /* @__PURE__ */ jsxs(Text, { style: styles$1.stepText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Activation:" }),
          " Once approved, the 10-year warranty is officially active."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Row, { children: [
        /* @__PURE__ */ jsx(Column, { style: styles$1.stepIcon, children: "📧" }),
        /* @__PURE__ */ jsx(Column, { children: /* @__PURE__ */ jsxs(Text, { style: styles$1.stepText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Certificate:" }),
          " We'll email the official warranty certificate to you."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { style: styles$1.footerSection, children: /* @__PURE__ */ jsxs(Text, { style: styles$1.footerText, children: [
      "Questions? Contact Support at",
      " ",
      /* @__PURE__ */ jsx(Link, { href: "tel:1800736693", style: styles$1.link, children: "1800 736 693" })
    ] }) })
  ] }) });
};
const styles = {
  // Main Container
  mainSection: {
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    margin: "0 auto"
  },
  // Header
  headerSection: {
    padding: "24px 24px 16px",
    backgroundColor: "#f9fafb",
    borderBottom: "1px solid #e5e7eb"
  },
  headerTitle: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#111827"
  },
  idBadge: {
    backgroundColor: "#e5e7eb",
    color: "#374151",
    fontSize: "12px",
    fontWeight: "600",
    padding: "4px 8px",
    borderRadius: "4px",
    marginLeft: "12px",
    fontFamily: "monospace",
    display: "inline-block"
  },
  // Content Sections
  contentSection: {
    padding: "20px 24px 8px"
  },
  sectionTitle: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#111827",
    textTransform: "uppercase",
    letterSpacing: "0.025em",
    borderBottom: "2px solid #6366f1",
    // Default accent
    paddingBottom: "8px"
  },
  // Data Rows
  row: {
    marginBottom: "8px"
  },
  labelCol: {
    width: "40%",
    verticalAlign: "top"
  },
  valueCol: {
    width: "60%",
    verticalAlign: "top"
  },
  labelText: {
    margin: "0",
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: "500"
  },
  valueText: {
    margin: "0",
    fontSize: "13px",
    color: "#111827",
    fontWeight: "600"
  },
  link: {
    color: "#059669",
    textDecoration: "underline"
  },
  // Notes
  notesContainer: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    padding: "16px",
    marginTop: "8px"
  },
  notesText: {
    margin: "0",
    fontSize: "13px",
    color: "#374151",
    lineHeight: "1.5"
  },
  // Storage Box
  storageContainer: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    padding: "16px",
    marginTop: "16px"
  },
  storageText: {
    margin: "0 0 8px 0",
    fontSize: "13px",
    color: "#1e293b"
  },
  storageValue: {
    fontFamily: "monospace",
    color: "#334155",
    backgroundColor: "#e2e8f0",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "12px"
  },
  storageHint: {
    margin: "8px 0 0 0",
    fontSize: "11px",
    color: "#64748b",
    fontStyle: "italic"
  },
  // Footer
  footerSection: {
    backgroundColor: "#f3f4f6",
    padding: "24px",
    borderTop: "1px solid #e5e7eb",
    marginTop: "24px"
  },
  footerText: {
    margin: "0 0 8px 0",
    fontSize: "11px",
    color: "#6b7280",
    lineHeight: "1.5"
  }
};
const DataRow = ({
  label,
  value
}) => /* @__PURE__ */ jsxs(Row, { style: styles.row, children: [
  /* @__PURE__ */ jsx(Column, { style: styles.labelCol, children: /* @__PURE__ */ jsx(Text, { style: styles.labelText, children: label }) }),
  /* @__PURE__ */ jsx(Column, { style: styles.valueCol, children: /* @__PURE__ */ jsx(Text, { style: styles.valueText, children: value || "—" }) })
] });
const WarrantySupportEmail = ({
  payload
}) => {
  const p = payload || {};
  const batteryCount = p.system?.serials?.length || 0;
  const formatDate = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ jsx(EmailLayout, { preview: `Warranty: ${p.warrantyId} - ${p.customer?.name}`, children: /* @__PURE__ */ jsxs(Section, { style: styles.mainSection, children: [
    /* @__PURE__ */ jsx(Section, { style: styles.headerSection, children: /* @__PURE__ */ jsxs(Text, { style: styles.headerTitle, children: [
      "🔋 RENOZ Warranty Registration",
      /* @__PURE__ */ jsxs("span", { style: styles.idBadge, children: [
        "ID: ",
        p.warrantyId
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { style: styles.contentSection, children: [
      /* @__PURE__ */ jsx(Heading, { as: "h3", style: styles.sectionTitle, children: "👷 Installer Details" }),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Technician Name",
          value: p.installer?.technicianName
        }
      ),
      /* @__PURE__ */ jsx(DataRow, { label: "Company", value: p.installer?.company }),
      /* @__PURE__ */ jsx(DataRow, { label: "Electrical Licence", value: p.installer?.licence }),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Email",
          value: /* @__PURE__ */ jsx(Link, { href: `mailto:${p.installer?.email}`, style: styles.link, children: p.installer?.email })
        }
      ),
      /* @__PURE__ */ jsx(DataRow, { label: "Phone", value: p.installer?.phone })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles.contentSection, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          as: "h3",
          style: { ...styles.sectionTitle, borderColor: "#10b981" },
          children: "🏠 Customer & Installation Site"
        }
      ),
      /* @__PURE__ */ jsx(DataRow, { label: "Customer Name", value: p.customer?.name }),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Customer Email",
          value: /* @__PURE__ */ jsx(Link, { href: `mailto:${p.customer?.email}`, style: styles.link, children: p.customer?.email })
        }
      ),
      /* @__PURE__ */ jsx(DataRow, { label: "Customer Phone", value: p.customer?.phone }),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Installation Address",
          value: p.customer?.address && `${p.customer.address.street}, ${p.customer.address.suburb}, ${p.customer.address.state} ${p.customer.address.postcode}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles.contentSection, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          as: "h3",
          style: { ...styles.sectionTitle, borderColor: "#6366f1" },
          children: "⚡ Battery System Configuration"
        }
      ),
      /* @__PURE__ */ jsx(DataRow, { label: "Battery Model", value: p.system?.model }),
      /* @__PURE__ */ jsx(DataRow, { label: "Battery Count", value: `${batteryCount} batteries` }),
      /* @__PURE__ */ jsx(DataRow, { label: "System Capacity", value: p.system?.capacity }),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Power Type",
          value: p.system?.phases ? `${p.system.phases} Phase` : "—"
        }
      ),
      /* @__PURE__ */ jsx(DataRow, { label: "Grid Connection", value: p.system?.gridStatus }),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "PV System Connected",
          value: p.system?.pvSystem ? "Yes" : "No"
        }
      ),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Backup Generator",
          value: p.system?.backupGenset ? "Yes" : "No"
        }
      ),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Inverter",
          value: `${p.system?.inverter?.brand || ""} ${p.system?.inverter?.model || ""}`.trim() || "Not Specified"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles.contentSection, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          as: "h3",
          style: { ...styles.sectionTitle, borderColor: "#f59e0b" },
          children: "📅 Installation Details"
        }
      ),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Installation Date",
          value: formatDate(p.system?.installDate)
        }
      ),
      /* @__PURE__ */ jsx(
        DataRow,
        {
          label: "Commissioning Date",
          value: formatDate(p.system?.commissioningDate)
        }
      ),
      /* @__PURE__ */ jsxs(Row, { style: styles.row, children: [
        /* @__PURE__ */ jsx(Column, { style: styles.labelCol, children: /* @__PURE__ */ jsx(Text, { style: styles.labelText, children: "Serial Numbers" }) }),
        /* @__PURE__ */ jsx(Column, { style: styles.valueCol, children: /* @__PURE__ */ jsx(
          Text,
          {
            style: {
              ...styles.valueText,
              fontFamily: "monospace",
              fontSize: "11px",
              lineHeight: "1.4"
            },
            children: p.system?.serials?.join(", ")
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles.contentSection, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          as: "h3",
          style: { ...styles.sectionTitle, borderColor: "#6b7280" },
          children: "📝 Additional Information"
        }
      ),
      /* @__PURE__ */ jsxs(Container, { style: styles.notesContainer, children: [
        /* @__PURE__ */ jsxs(Text, { style: styles.notesText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Installation Notes:" }),
          " ",
          p.installationNotes || "None provided."
        ] }),
        p.retailer && /* @__PURE__ */ jsxs(Text, { style: { ...styles.notesText, marginTop: "4px" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Purchased From:" }),
          " ",
          p.retailer
        ] }),
        p.purchaseDate && /* @__PURE__ */ jsxs(Text, { style: { ...styles.notesText, marginTop: "4px" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Purchase Date:" }),
          " ",
          formatDate(p.purchaseDate)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles.contentSection, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          as: "h3",
          style: { ...styles.sectionTitle, borderColor: "#3b82f6" },
          children: "📁 File Storage Location"
        }
      ),
      /* @__PURE__ */ jsxs(Container, { style: styles.storageContainer, children: [
        /* @__PURE__ */ jsxs(Text, { style: styles.storageText, children: [
          /* @__PURE__ */ jsx("strong", { children: "Supabase Bucket:" }),
          " ",
          /* @__PURE__ */ jsx("span", { style: styles.storageValue, children: "warranty-uploads" })
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: { ...styles.storageText, marginBottom: 0 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Folder Path:" }),
          " ",
          /* @__PURE__ */ jsxs("span", { style: styles.storageValue, children: [
            "warranty-files/",
            p.warrantyId
          ] })
        ] }),
        /* @__PURE__ */ jsx(Text, { style: styles.storageHint, children: "💡 All files for this warranty are organized in the above folder for easy access and management." })
      ] }),
      p.thumbnails && p.thumbnails.length > 0 && /* @__PURE__ */ jsx(Section, { style: { marginTop: "16px" }, children: /* @__PURE__ */ jsx(Row, { children: p.thumbnails.map((thumb, i) => /* @__PURE__ */ jsx(
        Column,
        {
          style: { paddingRight: "8px", width: "60px" },
          children: /* @__PURE__ */ jsx(Link, { href: thumb.dataUrl, target: "_blank", children: /* @__PURE__ */ jsx(
            Img,
            {
              src: thumb.dataUrl,
              style: {
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "4px",
                border: "1px solid #ddd"
              }
            }
          ) })
        },
        i
      )) }) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: styles.footerSection, children: [
      /* @__PURE__ */ jsxs(Text, { style: styles.footerText, children: [
        "📧 ",
        /* @__PURE__ */ jsx("strong", { children: "Email Recipients:" }),
        " Support team, installer, and homeowner (if applicable) have all received copies of this warranty registration."
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: styles.footerText, children: [
        "🔍 For warranty terms and your Australian Consumer Law rights, visit",
        " ",
        /* @__PURE__ */ jsx(Link, { href: "https://renoz.energy/resources", style: styles.link, children: "renoz.energy/resources" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: { ...styles.footerText, marginBottom: 0 }, children: [
        "🛠️ ",
        /* @__PURE__ */ jsx("strong", { children: "For Support Team:" }),
        " Access files via direct links above or through the Supabase Storage dashboard."
      ] })
    ] })
  ] }) });
};
const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://tcrpfwxfsbkrwqielhfg.supabase.co";
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_y8Vro117yYqQIMCBHvffVA_rDCXg4Sz";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const resend = new Resend(process.env.RESEND_API_KEY || void 0);
const submitWarrantySchema = z.object({
  warrantyId: z.string(),
  turnstileToken: z.string(),
  // Installer
  installerName: z.string(),
  installerEmail: z.string(),
  installerPhone: z.string(),
  companyName: z.string().optional(),
  electricalLicence: z.string().optional(),
  // Installation Address
  installStreet: z.string(),
  installSuburb: z.string(),
  installPostcode: z.string(),
  // Homeowner (optional)
  onBehalfOfHomeowner: z.boolean(),
  homeownerName: z.string().optional(),
  homeownerEmail: z.string().optional(),
  homeownerPhone: z.string().optional(),
  homeownerAddress: z.string().optional(),
  // System
  batteryModel: z.string(),
  serialNumbers: z.array(z.string()),
  phases: z.string(),
  gridStatus: z.string(),
  pvSystem: z.boolean(),
  backupGenset: z.boolean(),
  inverterBrand: z.string().optional(),
  inverterModel: z.string().optional(),
  inverterSerial: z.string().optional(),
  // Dates
  installDate: z.string(),
  // ISO date string
  commissioningDate: z.string(),
  // ISO date string
  // Purchase Info
  retailer: z.string().optional(),
  purchaseDate: z.string().optional(),
  // ISO date string
  // Notes
  installationNotes: z.string().optional(),
  // Files
  evidenceFiles: z.array(z.object({
    url: z.string(),
    name: z.string(),
    type: z.string()
  })),
  // Declarations
  installationDeclaration: z.boolean(),
  marketingPermission: z.boolean()
});
const submitWarranty_createServerFn_handler = createServerRpc("e668dc8b9b007de076ba6b2b95484a4584a4c72e8cf4a28d131c8736c7d552a7", (opts, signal) => submitWarranty.__executeServer(opts, signal));
const submitWarranty = createServerFn({
  method: "POST"
}).inputValidator(submitWarrantySchema).handler(submitWarranty_createServerFn_handler, async ({
  data
}) => {
  const {
    warrantyId,
    turnstileToken,
    installerName,
    installerEmail,
    installerPhone,
    companyName,
    electricalLicence,
    installStreet,
    installSuburb,
    installPostcode,
    onBehalfOfHomeowner,
    homeownerName,
    homeownerEmail,
    homeownerPhone,
    homeownerAddress,
    batteryModel,
    serialNumbers,
    phases,
    gridStatus,
    pvSystem,
    backupGenset,
    inverterBrand,
    inverterModel,
    inverterSerial,
    installDate,
    commissioningDate,
    retailer,
    purchaseDate,
    installationNotes,
    evidenceFiles,
    installationDeclaration,
    marketingPermission
  } = data;
  if (!turnstileToken) {
    return {
      success: false,
      error: "Turnstile verification required"
    };
  }
  if (turnstileToken === "mock-token") {
    console.warn("⚠️ Skipping Turnstile verification (mock token provided)");
  } else {
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY || void 0;
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY not configured");
      return {
        success: false,
        error: "Server configuration error"
      };
    }
    const turnstileResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken
      })
    });
    const turnstileResult = await turnstileResponse.json();
    if (!turnstileResult.success) {
      return {
        success: false,
        error: "Spam verification failed. Please try again."
      };
    }
  }
  const batteryCount = serialNumbers.filter((s) => s.trim()).length;
  const nominalCapacity = batteryCount * 5.12;
  const usableCapacity = nominalCapacity * 0.9;
  const {
    error: dbError,
    data: warrantyData
  } = await supabase.from("warranty_registrations").insert([{
    warranty_id: warrantyId,
    installer_name: installerName,
    installer_email: installerEmail,
    installer_phone: installerPhone,
    company_name: companyName || null,
    electrical_licence: electricalLicence || null,
    install_street: installStreet,
    install_suburb: installSuburb,
    install_postcode: installPostcode,
    on_behalf_of_homeowner: onBehalfOfHomeowner,
    homeowner_name: homeownerName || null,
    homeowner_email: homeownerEmail || null,
    homeowner_phone: homeownerPhone || null,
    homeowner_address: homeownerAddress || null,
    battery_model: batteryModel,
    serial_numbers: serialNumbers.filter((s) => s.trim()),
    phases,
    grid_status: gridStatus,
    pv_system: pvSystem,
    backup_genset: backupGenset,
    inverter_brand: inverterBrand || null,
    inverter_model: inverterModel || null,
    inverter_serial: inverterSerial || null,
    install_date: installDate,
    commissioning_date: commissioningDate,
    retailer: retailer || null,
    purchase_date: purchaseDate || null,
    installation_notes: installationNotes || null,
    evidence_files: evidenceFiles,
    installation_declaration: installationDeclaration,
    marketing_permission: marketingPermission
  }]);
  if (dbError) {
    console.error("Database error:", dbError);
    return {
      success: false,
      error: "Failed to save warranty registration. Please try again."
    };
  }
  const emailPayload = {
    warrantyId,
    installer: {
      technicianName: installerName,
      company: companyName,
      licence: electricalLicence,
      email: installerEmail,
      phone: installerPhone
    },
    customer: {
      name: onBehalfOfHomeowner && homeownerName ? homeownerName : installerName,
      email: onBehalfOfHomeowner && homeownerEmail ? homeownerEmail : installerEmail,
      phone: onBehalfOfHomeowner && homeownerPhone ? homeownerPhone : installerPhone,
      address: {
        street: installStreet,
        suburb: installSuburb,
        state: "WA",
        postcode: installPostcode
      }
    },
    system: {
      model: batteryModel,
      installDate,
      commissioningDate,
      serials: serialNumbers.filter((s) => s.trim()),
      capacity: `${nominalCapacity.toFixed(2)} kWh nominal / ${usableCapacity.toFixed(2)} kWh usable`,
      phases,
      gridStatus,
      pvSystem,
      backupGenset,
      inverter: {
        brand: inverterBrand || "Not specified",
        model: inverterModel || "Not specified",
        serial: inverterSerial || "Not specified"
      },
      retailer,
      purchaseDate
    },
    notes: `Installation Notes: ${onBehalfOfHomeowner ? "Registration on behalf of homeowner. " : ""}System Details: ${batteryModel} - Nominal: ${nominalCapacity.toFixed(2)} kWh, Usable: ${usableCapacity.toFixed(2)} kWh - ${phases} phase${pvSystem ? " with PV system" : ""}${backupGenset ? " with backup generator" : ""}. Purchase: ${retailer || "Not specified"}${purchaseDate ? ` on ${new Date(purchaseDate).toLocaleDateString()}` : ""}`,
    installationNotes,
    thumbnails: evidenceFiles.map((file) => ({
      dataUrl: file.url,
      name: file.name
    }))
  };
  const warrantyToEmail = process.env.WARRANTY_TO_EMAIL || void 0 || "support@renoz.energy";
  const warrantyFromEmail = process.env.WARRANTY_FROM_EMAIL || void 0 || "RENOZ Energy <noreply@renoz.energy>";
  const resendApiKey = process.env.RESEND_API_KEY || void 0;
  if (resendApiKey) {
    try {
      const supportEmailHtml = await render(createElement(WarrantySupportEmail, {
        payload: emailPayload
      }));
      console.log(`📧 Generating Support Email for ${warrantyId}`);
      console.log(`Email HTML length: ${supportEmailHtml.length}`);
      if (supportEmailHtml.length < 100) {
        console.error("⚠️ Generated HTML is suspiciously short:", supportEmailHtml);
      }
      await resend.emails.send({
        from: warrantyFromEmail,
        to: [warrantyToEmail],
        replyTo: installerEmail,
        subject: `New Warranty Registration: ${warrantyId}`,
        html: supportEmailHtml
      });
      const installerEmailHtml = await render(createElement(WarrantyInstallerConfirmationEmail, {
        warrantyId,
        installerName,
        installerEmail,
        installerPhone,
        companyName,
        batteryModel,
        serialNumbers: serialNumbers.filter((s) => s.trim()),
        installDate
      }));
      await resend.emails.send({
        from: warrantyFromEmail,
        to: [installerEmail],
        replyTo: warrantyToEmail,
        subject: `Warranty Registration Confirmed - ${warrantyId}`,
        html: installerEmailHtml
      });
      if (onBehalfOfHomeowner && homeownerEmail && homeownerName) {
        const homeownerEmailHtml = await render(createElement(WarrantyHomeownerConfirmationEmail, {
          warrantyId,
          homeownerName,
          homeownerEmail,
          installerName,
          installerCompany: companyName,
          batteryModel,
          serialNumbers: serialNumbers.filter((s) => s.trim()),
          installDate
        }));
        await resend.emails.send({
          from: warrantyFromEmail,
          to: [homeownerEmail],
          replyTo: warrantyToEmail,
          subject: `Your RENOZ Battery Warranty Has Been Registered - ${warrantyId}`,
          html: homeownerEmailHtml
        });
      }
    } catch (emailError) {
      console.error("Email error:", emailError);
    }
  } else {
    console.warn("RESEND_API_KEY not configured - skipping email notifications");
  }
  return {
    success: true,
    data: warrantyData
  };
});
export {
  submitWarranty_createServerFn_handler
};
