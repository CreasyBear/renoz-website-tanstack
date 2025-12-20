import {
  Heading,
  Section,
  Text,
  Link,
  Row,
  Column,
  Button,
  Container,
} from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";
import * as React from "react";

interface WarrantyHomeownerConfirmationEmailProps {
  warrantyId: string;
  homeownerName: string;
  homeownerEmail: string;
  installerName: string;
  installerCompany?: string;
  batteryModel: string;
  serialNumbers: string[];
  installDate: string;
}

const baseUrl = process.env.VITE_SITE_URL || "https://renoz.energy";

// Inline styles for email compatibility
const styles = {
  // Main Container
  mainSection: {
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden" as const,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    margin: "0 auto",
  },
  // Hero Section
  heroSection: {
    backgroundColor: "#166534", // Dark green
    padding: "40px 32px",
    textAlign: "center" as const,
  },
  heroHeading: {
    margin: "0 0 16px 0",
    fontSize: "28px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    lineHeight: "1.2",
  },
  heroText: {
    margin: "0",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: "1.5",
  },
  // Status Card (Overlapping hero slightly in concept, but kept simple here)
  statusSection: {
    padding: "32px 24px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
  },
  statusLabel: {
    margin: "0 0 8px 0",
    fontSize: "12px",
    fontWeight: "bold" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: "#166534",
    textAlign: "center" as const,
  },
  warrantyId: {
    margin: "0 auto",
    fontSize: "24px",
    fontFamily: "monospace",
    fontWeight: "bold" as const,
    color: "#111827",
    backgroundColor: "#f3f4f6",
    padding: "8px 16px",
    borderRadius: "4px",
    display: "inline-block",
  },
  centerContainer: {
    textAlign: "center" as const,
  },
  // Content
  contentSection: {
    padding: "32px 24px",
  },
  sectionTitle: {
    margin: "0 0 20px 0",
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
    borderBottom: "2px solid #22c55e",
    paddingBottom: "8px",
  },
  // Data Rows
  row: {
    marginBottom: "12px",
    borderBottom: "1px solid #f3f4f6",
    paddingBottom: "12px",
  },
  labelCol: {
    width: "40%",
  },
  valueCol: {
    width: "60%",
    textAlign: "right" as const,
  },
  labelText: {
    margin: "0",
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "500" as const,
  },
  valueText: {
    margin: "0",
    fontSize: "14px",
    color: "#111827",
    fontWeight: "600" as const,
  },
  // CTA Box
  ctaBox: {
    marginTop: "32px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    padding: "24px",
    textAlign: "center" as const,
    border: "1px solid #e5e7eb",
  },
  ctaHeading: {
    margin: "0 0 12px 0",
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
  },
  ctaText: {
    margin: "0 0 20px 0",
    fontSize: "14px",
    color: "#4b5563",
    lineHeight: "1.5",
  },
  button: {
    backgroundColor: "#166534",
    color: "#ffffff",
    fontWeight: "bold" as const,
    fontSize: "14px",
    padding: "12px 24px",
    borderRadius: "9999px",
    textDecoration: "none",
    display: "inline-block",
  },
  // Footer
  footerSection: {
    backgroundColor: "#f3f4f6",
    padding: "24px",
    textAlign: "center" as const,
    borderTop: "1px solid #e5e7eb",
  },
  footerText: {
    margin: "0",
    fontSize: "12px",
    color: "#6b7280",
    lineHeight: "1.5",
  },
  link: {
    color: "#166534",
    textDecoration: "underline",
    fontWeight: "600" as const,
  },
};

const DataRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <Row style={styles.row}>
    <Column style={styles.labelCol}>
      <Text style={styles.labelText}>{label}</Text>
    </Column>
    <Column style={styles.valueCol}>
      <Text style={styles.valueText}>{value || "—"}</Text>
    </Column>
  </Row>
);

export const WarrantyHomeownerConfirmationEmail = ({
  warrantyId,
  homeownerName,
  installerName,
  installerCompany,
  batteryModel,
  serialNumbers,
  installDate,
}: WarrantyHomeownerConfirmationEmailProps) => {
  const batteryCount = serialNumbers.filter((s) => s.trim()).length;
  const nominalCapacity = batteryCount * 5.12;

  return (
    <EmailLayout preview={`Welcome to the Family - Warranty ${warrantyId}`}>
      <Section style={styles.mainSection}>

        {/* Hero */}
        <Section style={styles.heroSection}>
          <Heading style={styles.heroHeading}>Welcome to the Family.</Heading>
          <Text style={styles.heroText}>
            Hi {homeownerName}, your new RENOZ energy storage system is officially protected.
          </Text>
        </Section>

        {/* Status Bar */}
        <Section style={styles.statusSection}>
          <Container style={styles.centerContainer}>
            <Text style={styles.statusLabel}>Warranty Active</Text>
            <Text style={styles.warrantyId}>{warrantyId}</Text>
          </Container>
        </Section>

        {/* System Details */}
        <Section style={styles.contentSection}>
          <Heading as="h3" style={styles.sectionTitle}>
            System Snapshot
          </Heading>

          <DataRow label="System Capacity" value={`${nominalCapacity.toFixed(1)} kWh`} />
          <DataRow label="Battery Model" value={`${batteryModel} (${batteryCount}x)`} />
          <DataRow label="Installed By" value={installerCompany || installerName} />
          <DataRow label="Installation Date" value={installDate} />

          {/* Resources CTA */}
          <Section style={styles.ctaBox}>
            <Heading as="h4" style={styles.ctaHeading}>
              Maximize Your System
            </Heading>
            <Text style={styles.ctaText}>
              Access user manuals, safety guides, and tips for maintaining your battery health in our resource center.
            </Text>
            <Button href={`${baseUrl}/resources`} style={styles.button}>
              View Owner Resources
            </Button>
          </Section>
        </Section>

        {/* Footer */}
        <Section style={styles.footerSection}>
          <Text style={styles.footerText}>
            Please keep this email for your records. If you ever need support, just reply to this email
            or call us at <Link href="tel:1800736693" style={styles.link}>1800 736 693</Link>.
          </Text>
        </Section>

      </Section>
    </EmailLayout>
  );
};

export default WarrantyHomeownerConfirmationEmail;
