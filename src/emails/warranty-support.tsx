import {
  Heading,
  Section,
  Text,
  Link,
  Row,
  Column,
  Img,
  Container,
} from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";
import * as React from "react";

interface WarrantyThumbnail {
  dataUrl: string;
  name?: string;
}

interface WarrantyPayload {
  warrantyId?: string;
  installer?: {
    technicianName?: string;
    company?: string;
    licence?: string;
    email?: string;
    phone?: string;
  };
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: {
      street?: string;
      suburb?: string;
      state?: string;
      postcode?: string;
    };
  };
  system?: {
    model?: string;
    installDate?: string;
    commissioningDate?: string;
    serials?: string[];
    capacity?: string;
    phases?: string;
    gridStatus?: string;
    pvSystem?: boolean;
    backupGenset?: boolean;
    inverter?: {
      brand?: string;
      model?: string;
      serial?: string;
    };
  };
  notes?: string;
  installationNotes?: string;
  thumbnails?: WarrantyThumbnail[];
  purchaseDate?: string;
  retailer?: string;
}

export interface WarrantySupportEmailProps {
  payload: WarrantyPayload;
}

// Styles adapted for React Email components
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
    padding: "24px 24px 16px",
    backgroundColor: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
  },
  headerTitle: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#111827",
  },
  idBadge: {
    backgroundColor: "#e5e7eb",
    color: "#374151",
    fontSize: "12px",
    fontWeight: "600" as const,
    padding: "4px 8px",
    borderRadius: "4px",
    marginLeft: "12px",
    fontFamily: "monospace",
    display: "inline-block",
  },
  // Content Sections
  contentSection: {
    padding: "20px 24px 8px",
  },
  sectionTitle: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#111827",
    textTransform: "uppercase" as const,
    letterSpacing: "0.025em",
    borderBottom: "2px solid #6366f1", // Default accent
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
  link: {
    color: "#059669",
    textDecoration: "underline",
  },
  // Notes
  notesContainer: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    padding: "16px",
    marginTop: "8px",
  },
  notesText: {
    margin: "0",
    fontSize: "13px",
    color: "#374151",
    lineHeight: "1.5",
  },
  // Storage Box
  storageContainer: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    padding: "16px",
    marginTop: "16px",
  },
  storageText: {
    margin: "0 0 8px 0",
    fontSize: "13px",
    color: "#1e293b",
  },
  storageValue: {
    fontFamily: "monospace",
    color: "#334155",
    backgroundColor: "#e2e8f0",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "12px",
  },
  storageHint: {
    margin: "8px 0 0 0",
    fontSize: "11px",
    color: "#64748b",
    fontStyle: "italic" as const,
  },
  // Footer
  footerSection: {
    backgroundColor: "#f3f4f6",
    padding: "24px",
    borderTop: "1px solid #e5e7eb",
    marginTop: "24px",
  },
  footerText: {
    margin: "0 0 8px 0",
    fontSize: "11px",
    color: "#6b7280",
    lineHeight: "1.5",
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

export const WarrantySupportEmail = ({ payload }: WarrantySupportEmailProps) => {
  const p = payload || {};
  const batteryCount = p.system?.serials?.length || 0;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <EmailLayout preview={`Warranty: ${p.warrantyId} - ${p.customer?.name}`}>
      {/* Main Document Container */}
      <Section style={styles.mainSection}>

        {/* Header */}
        <Section style={styles.headerSection}>
          <Text style={styles.headerTitle}>
            🔋 RENOZ Warranty Registration
            <span style={styles.idBadge}>ID: {p.warrantyId}</span>
          </Text>
        </Section>

        {/* Installer Details */}
        <Section style={styles.contentSection}>
          <Heading as="h3" style={styles.sectionTitle}>
            👷 Installer Details
          </Heading>
          <DataRow label="Technician Name" value={p.installer?.technicianName} />
          <DataRow label="Company" value={p.installer?.company} />
          <DataRow label="Electrical Licence" value={p.installer?.licence} />
          <DataRow
            label="Email"
            value={<Link href={`mailto:${p.installer?.email}`} style={styles.link}>{p.installer?.email}</Link>}
          />
          <DataRow label="Phone" value={p.installer?.phone} />
        </Section>

        {/* Customer & Site */}
        <Section style={styles.contentSection}>
          <Heading as="h3" style={{...styles.sectionTitle, borderColor: "#10b981"}}>
            🏠 Customer & Installation Site
          </Heading>
          <DataRow label="Customer Name" value={p.customer?.name} />
          <DataRow
            label="Customer Email"
            value={<Link href={`mailto:${p.customer?.email}`} style={styles.link}>{p.customer?.email}</Link>}
          />
          <DataRow label="Customer Phone" value={p.customer?.phone} />
          <DataRow
            label="Installation Address"
            value={
              p.customer?.address &&
              `${p.customer.address.street}, ${p.customer.address.suburb}, ${p.customer.address.state} ${p.customer.address.postcode}`
            }
          />
        </Section>

        {/* Battery System */}
        <Section style={styles.contentSection}>
          <Heading as="h3" style={{...styles.sectionTitle, borderColor: "#6366f1"}}>
            ⚡ Battery System Configuration
          </Heading>
          <DataRow label="Battery Model" value={p.system?.model} />
          <DataRow label="Battery Count" value={`${batteryCount} batteries`} />
          <DataRow label="System Capacity" value={p.system?.capacity} />
          <DataRow label="Power Type" value={p.system?.phases ? `${p.system.phases} Phase` : "—"} />
          <DataRow label="Grid Connection" value={p.system?.gridStatus} />
          <DataRow label="PV System Connected" value={p.system?.pvSystem ? "Yes" : "No"} />
          <DataRow label="Backup Generator" value={p.system?.backupGenset ? "Yes" : "No"} />
          <DataRow
            label="Inverter"
            value={`${p.system?.inverter?.brand || ''} ${p.system?.inverter?.model || ''}`.trim() || "Not Specified"}
          />
        </Section>

        {/* Installation Details */}
        <Section style={styles.contentSection}>
          <Heading as="h3" style={{...styles.sectionTitle, borderColor: "#f59e0b"}}>
            📅 Installation Details
          </Heading>
          <DataRow label="Installation Date" value={formatDate(p.system?.installDate)} />
          <DataRow label="Commissioning Date" value={formatDate(p.system?.commissioningDate)} />
          <Row style={styles.row}>
            <Column style={styles.labelCol}>
              <Text style={styles.labelText}>Serial Numbers</Text>
            </Column>
            <Column style={styles.valueCol}>
              <Text style={{...styles.valueText, fontFamily: "monospace", fontSize: "11px", lineHeight: "1.4"}}>
                {p.system?.serials?.join(", ")}
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Additional Info */}
        <Section style={styles.contentSection}>
          <Heading as="h3" style={{...styles.sectionTitle, borderColor: "#6b7280"}}>
            📝 Additional Information
          </Heading>
          <Container style={styles.notesContainer}>
            <Text style={styles.notesText}>
              <strong>Installation Notes:</strong> {p.installationNotes || "None provided."}
            </Text>
            {p.retailer && (
              <Text style={{...styles.notesText, marginTop: "4px"}}>
                <strong>Purchased From:</strong> {p.retailer}
              </Text>
            )}
            {p.purchaseDate && (
              <Text style={{...styles.notesText, marginTop: "4px"}}>
                <strong>Purchase Date:</strong> {formatDate(p.purchaseDate)}
              </Text>
            )}
          </Container>
        </Section>

        {/* File Storage */}
        <Section style={styles.contentSection}>
          <Heading as="h3" style={{...styles.sectionTitle, borderColor: "#3b82f6"}}>
            📁 File Storage Location
          </Heading>
          <Container style={styles.storageContainer}>
            <Text style={styles.storageText}>
              <strong>Supabase Bucket:</strong> <span style={styles.storageValue}>warranty-uploads</span>
            </Text>
            <Text style={{...styles.storageText, marginBottom: 0}}>
              <strong>Folder Path:</strong> <span style={styles.storageValue}>warranty-files/{p.warrantyId}</span>
            </Text>
            <Text style={styles.storageHint}>
              💡 All files for this warranty are organized in the above folder for easy access and management.
            </Text>
          </Container>

          {/* Thumbnails */}
          {p.thumbnails && p.thumbnails.length > 0 && (
            <Section style={{marginTop: "16px"}}>
              <Row>
                {p.thumbnails.map((thumb, i) => (
                  <Column key={i} style={{ paddingRight: "8px", width: "60px" }}>
                    <Link href={thumb.dataUrl} target="_blank">
                      <Img
                        src={thumb.dataUrl}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          border: "1px solid #ddd"
                        }}
                      />
                    </Link>
                  </Column>
                ))}
              </Row>
            </Section>
          )}
        </Section>

        {/* Footer */}
        <Section style={styles.footerSection}>
          <Text style={styles.footerText}>
            📧 <strong>Email Recipients:</strong> Support team, installer, and homeowner (if applicable) have all received copies of this warranty registration.
          </Text>
          <Text style={styles.footerText}>
            🔍 For warranty terms and your Australian Consumer Law rights, visit <Link href="https://renoz.energy/resources" style={styles.link}>renoz.energy/resources</Link>.
          </Text>
          <Text style={{...styles.footerText, marginBottom: 0}}>
            🛠️ <strong>For Support Team:</strong> Access files via direct links above or through the Supabase Storage dashboard.
          </Text>
        </Section>

      </Section>
    </EmailLayout>
  );
};

export default WarrantySupportEmail;
