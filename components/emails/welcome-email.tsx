import * as React from 'react'

interface WelcomeEmailProps {
  userEmail: string
  category: string
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({
  userEmail,
  category,
}) => {
  return (
    <html>
      <body style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#f9fafb',
        margin: 0,
        padding: '40px 20px',
      }}>
        <table 
          width="100%" 
          cellPadding="0" 
          cellSpacing="0" 
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <tr>
            <td style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '40px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}>
              {/* Header */}
              <h1 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#111827',
                marginTop: 0,
                marginBottom: '24px',
              }}>
                Welcome to Siimba! 🎉
              </h1>

              {/* Body */}
              <p style={{
                fontSize: '16px',
                lineHeight: '24px',
                color: '#374151',
                margin: '0 0 16px 0',
              }}>
                Hi there,
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '24px',
                color: '#374151',
                margin: '0 0 16px 0',
              }}>
                Thanks for joining our early access waitlist! You&apos;re officially on the list for Siimba — the AI assistant that helps you review and approve your day in just a few swipes.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: '24px',
                color: '#374151',
                margin: '0 0 24px 0',
              }}>
                We&apos;re building Siimba to reduce decision fatigue and help busy brains stay in control. You&apos;ll be among the first to know when we&apos;re ready to launch.
              </p>

              {/* Callout Box */}
              <div style={{
                backgroundColor: '#f3f4f6',
                borderLeft: '4px solid #3b82f6',
                padding: '16px 20px',
                marginBottom: '24px',
                borderRadius: '4px',
              }}>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#111827',
                  margin: 0,
                  fontWeight: '600',
                }}>
                  What happens next?
                </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#374151',
                  margin: '8px 0 0 0',
                }}>
                  We&apos;ll email you when the demo is ready. No spam, no sales pitches — just a simple heads-up when it&apos;s your turn to try Siimba.
                </p>
              </div>

              {/* Footer */}
              <p style={{
                fontSize: '14px',
                lineHeight: '20px',
                color: '#6b7280',
                margin: '24px 0 0 0',
              }}>
                Questions? Just reply to this email — we read every message.
              </p>

              <p style={{
                fontSize: '14px',
                lineHeight: '20px',
                color: '#6b7280',
                margin: '8px 0 0 0',
              }}>
                — The Siimba Team
              </p>

              <hr style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                margin: '32px 0 24px 0',
              }} />

              {/* Footer Info */}
              <p style={{
                fontSize: '12px',
                lineHeight: '16px',
                color: '#9ca3af',
                margin: 0,
              }}>
                You signed up as a <strong>{category}</strong> user with {userEmail}
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}

export default WelcomeEmail
