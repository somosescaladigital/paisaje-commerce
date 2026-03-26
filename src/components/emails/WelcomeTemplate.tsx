import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Hr,
  Img
} from '@react-email/components'
import * as React from 'react'

interface WelcomeTemplateProps {
  nombre: string
}

export const WelcomeTemplate = ({ nombre }: WelcomeTemplateProps) => (
  <Html>
    <Head />
    <Preview>Bienvenido/a a la Escuela de Paisajismo Digital 🌿</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
            {/* Logo placeholder - Reemplazar con URL real en prod */}
            <Text style={logoText}>ESCALA DIGITAL</Text>
        </Section>
        
        <Section style={content}>
          <Heading style={h1}>¡Hola {nombre}!</Heading>
          <Text style={paragraph}>
            Es un honor darte la bienvenida a nuestra comunidad. Has dado el primer paso para transformar tu visión del paisaje en proyectos con propósito.
          </Text>
          <Text style={paragraph}>
            En tu **Dashboard**, encontrarás todas las herramientas y recursos que adquieras para potenciar tu carrera.
          </Text>
          
          <Section style={buttonContainer}>
            <Link style={button} href={`${process.env.NEXT_PUBLIC_SITE_URL}/commerce/dashboard`}>
              Ir a mi Panel
            </Link>
          </Section>
          
          <Hr style={hr} />
          
          <Text style={footerText}>
            Con cariño,<br/>
            <strong>Mariana</strong><br/>
            Fundadora de Paisajismo y Sentidos
          </Text>
        </Section>

        <Section style={footer}>
          <Text style={footerMeta}>
            © 2026 Escala Digital. Todos los derechos reservados.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: '#f6f9f7',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '40px auto',
  padding: '0 0 40px',
  borderRadius: '24px',
  overflow: 'hidden',
}

const header = {
  padding: '40px',
  backgroundColor: '#1A3C34',
  textAlign: 'center' as const,
}

const logoText = {
  color: '#EDF4F2',
  fontSize: '24px',
  fontWeight: 'bold' as const,
  letterSpacing: '2px',
}

const content = {
  padding: '40px',
}

const h1 = {
  color: '#1A3C34',
  fontSize: '28px',
  fontWeight: 'bold' as const,
  margin: '0 0 20px',
}

const paragraph = {
  color: '#444',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px',
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#D1A272',
  borderRadius: '12px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold' as const,
  padding: '16px 32px',
  textDecoration: 'none',
  display: 'inline-block',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '40px 0',
}

const footerText = {
  color: '#1A3C34',
  fontSize: '16px',
  fontStyle: 'italic',
}

const footer = {
  padding: '0 40px',
  textAlign: 'center' as const,
}

const footerMeta = {
  color: '#888',
  fontSize: '12px',
}
