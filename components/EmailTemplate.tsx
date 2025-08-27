import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Img
} from '@react-email/components';
import { config } from '@/lib/config';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const baseUrl = config.baseUrl;

export const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>📩 New message from {name} via NBBC Contact Form</Preview>
    <Body style={main}>
      <Container style={container}>
      <Img
          src={`${baseUrl}/images/logo.png`}
          width="32"
          height="32"
          alt="NBBC"
        />

        <Text style={title}>📨 You have a new message from {name}</Text>

        <Section style={section}>
          <Text style={text}><strong>Name:</strong> {name}</Text>
          <Text style={text}><strong>Email:</strong> {email}</Text>
          <Text style={text}><strong>Subject:</strong> {subject}</Text>
          <Text style={text}><strong>Message:</strong> {message}</Text>
        </Section>

        <Text style={footer}>
          This message was sent from the contact form on your church website.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};
