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

interface AdminSaleTemplateProps {
  clienteNombre: string
  clienteEmail: string
  items: Array<{
    nombre: string
    precio: number
    pago_tipo?: string
  }>
  total: number
}

export const AdminSaleTemplate = ({ clienteNombre, clienteEmail, items, total }: AdminSaleTemplateProps) => (
  <Html>
    <Head />
    <Preview>¡Nueva venta realizada! 🌿💰</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
            <Text style={logoText}>NUEVA VENTA - ESCALA DIGITAL</Text>
        </Section>
        
        <Section style={content}>
          <Heading style={h1}>¡Felicidades Mariana!</Heading>
          <Text style={paragraph}>
            Tienes un nuevo alumno en la escuela. Aquí están los detalles de la operación:
          </Text>

          <Section style={itemsContainer}>
            <Text style={subheading}>Datos del Cliente:</Text>
            <Text style={infoText}><strong>Nombre:</strong> {clienteNombre}</Text>
            <Text style={infoText}><strong>Email:</strong> {clienteEmail}</Text>
            
            <Hr style={hrSmall} />
            
            <Text style={subheading}>Detalle del Pedido:</Text>
            {items.map((item, i) => (
              <div key={i} style={itemStyle}>
                <Text style={itemName}>{item.nombre}</Text>
                <Text style={itemMeta}>
                   {item.pago_tipo ? (item.pago_tipo === 'mensual' ? 'Suscripción Mensual' : 'Pago Total Plan') : 'Recurso Digital'}
                </Text>
              </div>
            ))}
          </Section>
          
          <Section style={totalContainer}>
             <Text style={totalLabel}>Monto Bruto:</Text>
             <Text style={totalValue}>${total.toLocaleString('es-AR')}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={paragraph}>
            El dashboard del alumno ya ha sido actualizado y se le ha enviado su mail de bienvenida y confirmación.
          </Text>
        </Section>

        <Section style={footer}>
          <Text style={footerMeta}>
            Generado automáticamente por el sistema de Escala Digital.
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
  color: '#EDF4F2',
  fontSize: '12px',
  fontWeight: 'bold' as const,
  letterSpacing: '2px',
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

const subheading = {
  fontSize: '14px',
  fontWeight: 'bold' as const,
  color: '#1A3C34',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  margin: '0 0 10px',
}

const infoText = {
  fontSize: '15px',
  color: '#444',
  margin: '4px 0',
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
  marginBottom: '10px',
}

const itemName = {
  fontSize: '15px',
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
  color: '#1A3C34',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '40px 0',
}

const hrSmall = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}

const footer = {
  padding: '0 40px',
  textAlign: 'center' as const,
}

const footerMeta = {
  color: '#888',
  fontSize: '12px',
}
