import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Img,
  Link,
  Column,
  Row,
} from '@react-email/components'
import * as React from 'react'

interface ContactNotificationEmailProps {
  inquiry_type: string
  name: string
  email: string
  company?: string
  message: string
}

export const ContactNotificationEmail = ({
  inquiry_type,
  name,
  email,
  company,
  message,
}: ContactNotificationEmailProps) => {
  const previewText = `New ${inquiry_type} Inquiry from ${name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://renoz.energy/images/optimized/logo-renoz.png"
              width="150"
              alt="RENOZ Energy"
              style={logo}
            />
          </Section>

          <Section style={content}>
            <Heading style={h1}>New Website Inquiry</Heading>
            <Text style={text}>
              You have received a new message from the <strong>{inquiry_type}</strong> contact form.
      </Text>

            <Section style={card}>
              <Row style={row}>
                <Column style={columnLabel}>Inquiry Type</Column>
                <Column style={columnValue}>
                  <span style={badge}>{inquiry_type.toUpperCase()}</span>
                </Column>
              </Row>
              <Hr style={divider} />
              <Row style={row}>
                <Column style={columnLabel}>Name</Column>
                <Column style={columnValue}>{name}</Column>
        </Row>
              <Hr style={divider} />
              <Row style={row}>
                <Column style={columnLabel}>Email</Column>
                <Column style={columnValue}>
                  <Link href={`mailto:${email}`} style={link}>
              {email}
            </Link>
          </Column>
        </Row>
        {company && (
                <>
                  <Hr style={divider} />
                  <Row style={row}>
                    <Column style={columnLabel}>Company</Column>
                    <Column style={columnValue}>{company}</Column>
          </Row>
                </>
        )}
      </Section>

            <Heading as="h3" style={h3}>Message</Heading>
            <Section style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Text style={footerText}>
              This email was sent from the RENOZ Energy website contact form.
              <br />
              <Link href="https://renoz.energy" style={footerLink}>
                renoz.energy
              </Link>
            </Text>
        </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const header = {
  padding: '32px 48px',
  backgroundColor: '#000000',
}

const logo = {
  margin: '0 auto',
}

const content = {
  padding: '32px 48px',
}

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 24px',
}

const h3 = {
  color: '#333',
  fontSize: '18px',
  fontWeight: 'bold',
  marginTop: '32px',
  marginBottom: '16px',
}

const text = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
}

const card = {
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
  padding: '24px',
  border: '1px solid #e5e7eb',
}

const row = {
  margin: '8px 0',
}

const columnLabel = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  width: '30%',
}

const columnValue = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: '500',
}

const badge = {
  backgroundColor: '#00cc66',
  color: '#ffffff',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 'bold',
}

const divider = {
  borderColor: '#e5e7eb',
  margin: '12px 0',
}

const link = {
  color: '#00cc66',
  textDecoration: 'underline',
}

const messageBox = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '16px',
}

const messageText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '26px',
  whiteSpace: 'pre-wrap' as const,
  margin: '0',
}

const footerText = {
  color: '#9ca3af',
  fontSize: '14px',
  marginTop: '32px',
  textAlign: 'center' as const,
}

const footerLink = {
  color: '#9ca3af',
  textDecoration: 'underline',
}

export default ContactNotificationEmail
