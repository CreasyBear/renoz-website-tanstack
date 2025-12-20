import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
}

const baseUrl = process.env.VITE_SITE_URL || "https://renoz.energy";

// Inline styles for email compatibility
const styles = {
  body: {
    backgroundColor: "#ffffff",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    color: "#1A1A1A",
    WebkitFontSmoothing: "antialiased" as const,
  },
  container: {
    margin: "0 auto",
    padding: "32px",
    maxWidth: "600px",
    borderRadius: "8px",
    border: "1px solid #E5E5E5",
  },
  logoSection: {
    marginBottom: "32px",
    textAlign: "center" as const,
  },
  hr: {
    borderColor: "#E5E5E5",
    marginTop: "32px",
    marginBottom: "32px",
  },
  footer: {
    textAlign: "center" as const,
    fontSize: "12px",
    color: "#666666",
  },
  footerText: {
    marginBottom: "16px",
  },
  footerLinks: {
    textAlign: "center" as const,
  },
  footerLink: {
    color: "#00B140",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    marginLeft: "8px",
    marginRight: "8px",
  },
};

export const EmailLayout = ({ preview, children }: EmailLayoutProps) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Logo Header */}
          <Section style={styles.logoSection}>
            <Img
              src={`${baseUrl}/images/optimized/logo-renoz.png`}
              width="180"
              height="auto"
              alt="RENOZ Energy"
              style={{ margin: "0 auto" }}
            />
          </Section>

          {/* Main Content */}
          {children}

          {/* Footer */}
          <Hr style={styles.hr} />
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              &copy; {new Date().getFullYear()} RENOZ Energy. All rights reserved.
              <br />
              Unit 4, 8 Murphy Street, O'Connor WA 6163
            </Text>
            <Section style={styles.footerLinks}>
              <Link href={`${baseUrl}`} style={styles.footerLink}>
                Website
              </Link>
              <Link href={`${baseUrl}/contact`} style={styles.footerLink}>
                Contact Support
              </Link>
              <Link href={`${baseUrl}/privacy`} style={styles.footerLink}>
                Privacy Policy
              </Link>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailLayout;
