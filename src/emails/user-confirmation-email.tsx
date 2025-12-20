import {
  Heading,
  Section,
  Text,
  Link,
  Row,
  Column,
} from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";

interface UserConfirmationEmailProps {
  formType: "general" | "technical";
  firstName: string;
  lastName: string;
  email: string;
  // Technical fields (optional)
  systemId?: string;
  issueCategory?: string;
}

const baseUrl = process.env.VITE_SITE_URL || "https://renoz.energy";

export const UserConfirmationEmail = ({
  formType,
  firstName,
  email,
  systemId,
  issueCategory,
}: UserConfirmationEmailProps) => {
  const isTechnical = formType === "technical";
  const previewText = isTechnical
    ? `Your RENOZ Energy support request has been received`
    : `Your RENOZ Energy inquiry has been received`;

  const headingText = isTechnical
    ? "Support Request Received"
    : "Thanks for getting in touch";

  const mainContent = isTechnical
    ? `We've received your technical support request${systemId ? ` for system ID: ${systemId}` : ""}${issueCategory ? ` regarding ${issueCategory}` : ""}. A member of our support team will review your request and contact you shortly.`
    : `Thank you for reaching out to RENOZ Energy. We've received your inquiry and a member of our team will get back to you within 1-2 business days.`;

  return (
    <EmailLayout preview={previewText}>
      <Heading className="mb-4 text-center text-2xl font-bold text-black">
        {headingText}
      </Heading>

      <Text className="mb-4 text-base text-gray">
        Hi {firstName},
      </Text>

      <Text className="mb-8 text-base leading-relaxed text-gray">
        {mainContent}
      </Text>

      {/* Summary Card */}
      <Section className="mb-8 rounded-lg bg-gray-light p-6">
        <Heading as="h3" className="mb-4 text-sm font-bold uppercase text-gray">
          Request Summary
        </Heading>
        <Row className="mb-2">
          <Column className="w-1/3 text-sm text-gray">Type</Column>
          <Column className="font-medium text-black">
            {isTechnical ? "Technical Support" : "General Inquiry"}
          </Column>
        </Row>
        <Row className="mb-2">
          <Column className="w-1/3 text-sm text-gray">Email</Column>
          <Column className="font-medium text-black">{email}</Column>
        </Row>
        {systemId && (
          <Row className="mb-2">
            <Column className="w-1/3 text-sm text-gray">System ID</Column>
            <Column className="font-medium text-black">{systemId}</Column>
          </Row>
        )}
        {issueCategory && (
          <Row className="mb-2">
            <Column className="w-1/3 text-sm text-gray">Category</Column>
            <Column className="font-medium text-black">{issueCategory}</Column>
          </Row>
        )}
      </Section>

      {/* Helpful Links */}
      <Section className="border-t border-gray-border pt-6">
        <Heading as="h3" className="mb-4 text-lg font-bold text-black">
          While you wait...
        </Heading>
        <ul className="pl-5 text-sm text-gray">
          <li className="mb-2">
            Check our <Link href={`${baseUrl}/resources`} className="text-primary underline">Knowledge Base</Link> for common solutions.
          </li>
          <li className="mb-2">
            View our latest <Link href={`${baseUrl}/products`} className="text-primary underline">product updates</Link>.
          </li>
          <li>
            Follow us on <Link href="https://linkedin.com/company/renoz-energy" className="text-primary underline">LinkedIn</Link>.
          </li>
        </ul>
      </Section>
    </EmailLayout>
  );
};

export default UserConfirmationEmail;
