import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { WelcomeEmail } from '@/components/emails/welcome-email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, category, interview, timestamp } = body

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // 1. Send welcome email to the user
    let emailSent = false
    if (process.env.RESEND_API_KEY && process.env.FROM_EMAIL) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: process.env.FROM_EMAIL,
          to: email,
          subject: "Welcome to Siimba - You're on the waitlist! 🎉",
          react: WelcomeEmail({ 
            userEmail: email, 
            category: category || 'personal' 
          }),
        })
        emailSent = true
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the whole request if email fails
      }
    }

    // 2. Send to Google Sheets
    let sheetSaved = false
    const sheetURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL
    
    if (sheetURL) {
      try {
        await fetch(sheetURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            category,
            interview,
            timestamp,
          }),
        })
        sheetSaved = true
      } catch (sheetError) {
        console.error('Google Sheets save failed:', sheetError)
        // Don't fail the whole request if sheets fails
      }
    }

    return NextResponse.json({
      success: true,
      emailSent,
      sheetSaved,
      message: 'Successfully joined the waitlist!',
    })
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
