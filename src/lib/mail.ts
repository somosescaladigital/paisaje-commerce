import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({
  to,
  subject,
  react,
}: {
  to: string | string[]
  subject: string
  react: React.ReactElement
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Escuela Paisajismo <onboarding@resend.dev>', // Cambiar a dominio real en prod
      to,
      subject,
      react,
    })

    if (error) {
       console.error('Error sending email via Resend:', error)
       return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Fatal error sending email:', error)
    return { success: false, error }
  }
}
