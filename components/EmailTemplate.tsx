import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Img,
  Link,
} from "@react-email/components";
import { config } from '@/lib/config';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const baseUrl = config.baseUrl;

export const EmailTemplate = ({ name, email, subject, message }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://www.noonkopirbbc.org/logo.png"
              width="80"
              height="80"
              alt="Noonkopir Baptist Church Logo"
              style={{ borderRadius: 8 }}
            />
            <Heading style={title}>New Contact Message</Heading>
          </Section>

          <Section>
            <Text style={paragraph}><strong>Name:</strong> {name}</Text>
            <Text style={paragraph}><strong>Email:</strong> {email}</Text>
            <Text style={paragraph}><strong>Subject:</strong> {subject}</Text>

            <Hr style={hr} />

            <Text style={{ ...paragraph, whiteSpace: "pre-line" }}>
              {message}
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This message was sent from the contact form on{" "}
              <Link href="https://www.noonkopirbbc.org" style={footerLink}>
                noonkopirbbc.org
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: 12,
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
};

const header = {
  textAlign: "center" as const,
  marginBottom: 20,
};

const title = {
  fontSize: "22px",
  color: "#222",
  marginTop: "10px",
};

const paragraph = {
  fontSize: "16px",
  color: "#333",
  lineHeight: "1.6",
  marginBottom: "10px",
};

const hr = {
  border: "none",
  borderTop: "1px solid #eee",
  margin: "20px 0",
};

const footer = {
  marginTop: "20px",
  borderTop: "1px solid #eee",
  paddingTop: "10px",
};

const footerText = {
  fontSize: "12px",
  color: "#888",
  textAlign: "center" as const,
};

const footerLink = {
  color: "#0066cc",
  textDecoration: "none",
};