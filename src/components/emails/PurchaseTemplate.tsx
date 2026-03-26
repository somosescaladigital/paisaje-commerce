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
  Hr
} from '@react-email/components'
import * as React from 'react'

interface PurchaseTemplateProps {
  nombre: string
  items: Array<{
    nombre: string
    precio: number
    pago_tipo?: string
  }>
  total: number
}

export const PurchaseTemplate = ({ nombre, items, total }: PurchaseTemplateProps) => (
  <Html>
    <Head />
    <Preview>Confirmación de tu compra en Escala Digital 🛒</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
            <Text style={logoText}>PAGO CONFIRMADO</Text>
        </Section>
        
        <Section style={content}>
          <Heading style={h1}>¡Gracias por tu confianza, {nombre}!</Heading>
          <Text style={paragraph}>
            Tu pago ha sido procesado con éxito. Ya tienes acceso total a los siguientes recursos en tu biblioteca digital:
          </Text>

          <Section style={itemsContainer}>
            {items.map((item, i) => (
              <div key={i} style={itemStyle}>
                <Text style={itemName}>{item.nombre}</Text>
                <Text style={itemMeta}>
                   {item.pago_tipo ? (item.pago_tipo === 'mensual' ? 'Modalidad Mensual' : 'Pago Total Plan') : 'Recurso Digital'}
                </Text>
              </div>
            ))}
          </Section>
          
          <Hr style={hr} />
          
          <Section style={totalContainer}>
             <Text style={totalLabel}>Total abonado:</Text>
             <Text style={totalValue}>${total.toLocaleString('es-AR')}</Text>
          </Section>

          <Section style={buttonContainer}>
            <Link style={button} href={`${process.env.NEXT_PUBLIC_SITE_URL}/commerce/dashboard`}>
              Acceder a mis Recursos
            </Link>
          </Section>
          
          <Text style={paragraph}>
            Si tienes alguna duda con el acceso o el material, no dudes en responder a este correo.
          </Text>
        </Section>

        <Section style={footer}>
          <Text style={footerMeta}>
            Recuerda que si adquiriste una membresía de acceso al Classroom, los materiales se irán habilitando mes a mes.
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
  padding: '30px',
  backgroundColor: '#1A3C34',
  textAlign: 'center' as const,
}

const logoText = {
  color: '#D1A272',
  fontSize: '14px',
  fontWeight: 'bold' as const,
  letterSpacing: '3px',
}

const content = {
  padding: '40px',
}

const h1 = {
  color: '#1A3C34',
  fontSize: '24px',
  fontWeight: 'bold' as const,
  margin: '0 0 20px',
}

const paragraph = {
  color: '#444',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0 0 20px',
}

const itemsContainer = {
  margin: '24px 0',
  backgroundColor: '#f9f9f9',
  padding: '24px',
  borderRadius: '16px',
}

const itemStyle = {
  marginBottom: '12px',
}

const itemName = {
  fontSize: '16px',
  fontWeight: 'bold' as const,
  color: '#1A3C34',
  margin: '0',
}

const itemMeta = {
  fontSize: '12px',
  color: '#888',
  margin: '2px 0 0',
}

const totalContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0',
}

const totalLabel = {
  fontSize: '16px',
  fontWeight: 'bold' as const,
  color: '#1A3C34',
}

const totalValue = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  color: '#D1A272',
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#1A3C34',
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

const footer = {
  padding: '0 40px',
  textAlign: 'center' as const,
}

const footerMeta = {
  color: '#888',
  fontSize: '12px',
  fontStyle: 'italic',
}
