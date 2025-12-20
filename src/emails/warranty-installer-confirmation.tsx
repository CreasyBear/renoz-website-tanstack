import {
  Heading,
  Section,
  Text,
  Link,
  Row,
  Column,
} from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";
import * as React from "react";

interface WarrantyInstallerConfirmationEmailProps {
  warrantyId: string;
  installerName: string;
  installerEmail: string;
  installerPhone: string;
  companyName?: string;
  batteryModel: string;
  serialNumbers: string[];
  installDate: string;
}

// Inline styles for email compatibility (Spec Sheet Design)
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
  // Header
  headerSection: {
    padding: "32px 24px",
    backgroundColor: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
    textAlign: "center" as const,
  },
  successIcon: {
    fontSize: "48px",
    marginBottom: "16px",
    display: "block",
  },
  mainHeading: {
    margin: "0 0 12px 0",
    fontSize: "24px",
    fontWeight: "bold" as const,
    color: "#111827",
  },
  introText: {
    margin: "0",
    fontSize: "16px",
    color: "#6b7280",
    lineHeight: "1.5",
  },
  // Reference Card
  referenceCard: {
    margin: "24px",
    padding: "24px",
    backgroundColor: "#f0fdf4", // Light green bg
    border: "1px solid #bbf7d0",
    borderRadius: "8px",
    textAlign: "center" as const,
  },
  referenceLabel: {
    margin: "0 0 8px 0",
    fontSize: "13px",
    fontWeight: "600" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    color: "#15803d",
  },
  referenceId: {
    margin: "0",
    fontFamily: "monospace",
    fontSize: "24px",
    fontWeight: "bold" as const,
    letterSpacing: "0.05em",
    color: "#166534",
  },
  // Sections
  section: {
    padding: "0 24px 24px 24px",
  },
  sectionHeading: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#111827",
    textTransform: "uppercase" as const,
    letterSpacing: "0.025em",
    borderBottom: "2px solid #6366f1", // Indigo accent
    paddingBottom: "8px",
  },
  // Data Rows
  row: {
    marginBottom: "8px",
  },
  labelCol: {
    width: "40%",
    verticalAlign: "top" as const,
  },
  valueCol: {
    width: "60%",
    verticalAlign: "top" as const,
  },
  labelText: {
    margin: "0",
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: "500" as const,
  },
  valueText: {
    margin: "0",
    fontSize: "13px",
    color: "#111827",
    fontWeight: "600" as const,
  },
  // Next Steps
  stepsSection: {
    margin: "0 24px 24px 24px",
    padding: "24px",
    backgroundColor: "#f9fafb",
    border: "1px dashed #d1d5db",
    borderRadius: "8px",
  },
  stepsHeading: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#374151",
    textTransform: "uppercase" as const,
  },
  stepRow: {
    marginBottom: "12px",
  },
  stepIcon: {
    width: "24px",
    fontSize: "18px",
    verticalAlign: "top" as const,
  },
  stepText: {
    margin: "0",
    fontSize: "13px",
    color: "#4b5563",
    lineHeight: "1.4",
  },
  // Footer
  footerSection: {
    backgroundColor: "#f3f4f6",
    padding: "24px",
    borderTop: "1px solid #e5e7eb",
    textAlign: "center" as const,
  },
  footerText: {
    margin: "0",
    fontSize: "12px",
    color: "#6b7280",
  },
  link: {
    color: "#059669",
    fontWeight: "600" as const,
    textDecoration: "none",
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

export const WarrantyInstallerConfirmationEmail = ({
  warrantyId,
  installerName,
  installerEmail,
  installerPhone,
  companyName,
  batteryModel,
  serialNumbers,
  installDate,
}: WarrantyInstallerConfirmationEmailProps) => {
  const batteryCount = serialNumbers.filter((s) => s.trim()).length;
  const nominalCapacity = batteryCount * 5.12;
  const usableCapacity = nominalCapacity * 0.9;

  return (
    <EmailLayout preview={`Registration Received - ${warrantyId}`}>
      <Section style={styles.mainSection}>
        {/* Header */}
        <Section style={styles.headerSection}>
          <Text style={styles.successIcon}>✅</Text>
          <Heading style={styles.mainHeading}>Registration Received</Heading>
          <Text style={styles.introText}>
            Thanks, {installerName}. We've received your submission.
          </Text>
        </Section>

        {/* Reference Card */}
        <Section style={styles.referenceCard}>
          <Text style={styles.referenceLabel}>Warranty Reference ID</Text>
          <Text style={styles.referenceId}>{warrantyId}</Text>
        </Section>

        {/* System Configuration */}
        <Section style={styles.section}>
          <Heading as="h3" style={styles.sectionHeading}>
            ⚡ System Configuration
          </Heading>
          <DataRow label="Battery Model" value={batteryModel} />
          <DataRow label="Total Capacity" value={`${nominalCapacity.toFixed(2)} kWh (${usableCapacity.toFixed(2)} kWh usable)`} />
          <DataRow label="Battery Count" value={`${batteryCount}x Units`} />
          <DataRow label="Install Date" value={installDate} />
        </Section>

        {/* Installer Record */}
        <Section style={styles.section}>
          <Heading as="h3" style={{...styles.sectionHeading, borderColor: "#10b981"}}>
            👷 Installer Record
          </Heading>
          <DataRow label="Name" value={installerName} />
          <DataRow label="Company" value={companyName} />
          <DataRow label="Email" value={installerEmail} />
          <DataRow label="Phone" value={installerPhone} />
        </Section>

        {/* Next Steps */}
        <Section style={styles.stepsSection}>
          <Heading as="h4" style={styles.stepsHeading}>What happens next?</Heading>
          <Row style={styles.stepRow}>
            <Column style={styles.stepIcon}>📝</Column>
            <Column>
              <Text style={styles.stepText}>
                <strong>Review:</strong> Our engineering team verifies the installation details (24-48 hrs).
              </Text>
            </Column>
          </Row>
          <Row style={styles.stepRow}>
            <Column style={styles.stepIcon}>✨</Column>
            <Column>
              <Text style={styles.stepText}>
                <strong>Activation:</strong> Once approved, the 10-year warranty is officially active.
              </Text>
            </Column>
          </Row>
          <Row>
            <Column style={styles.stepIcon}>📧</Column>
            <Column>
              <Text style={styles.stepText}>
                <strong>Certificate:</strong> We'll email the official warranty certificate to you.
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Footer */}
        <Section style={styles.footerSection}>
          <Text style={styles.footerText}>
            Questions? Contact Support at{" "}
            <Link href="tel:1800736693" style={styles.link}>
              1800 736 693
            </Link>
          </Text>
        </Section>

      </Section>
    </EmailLayout>
  );
};

export default WarrantyInstallerConfirmationEmail;
