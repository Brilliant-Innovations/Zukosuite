import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
    }

    await resend.emails.send({
      from: process.env.WAITLIST_FROM_EMAIL as string,   // e.g. waitlist@zukosuite.com
      to:   process.env.WAITLIST_NOTIFY_EMAIL as string, // your own inbox
      subject: `Zuko waitlist — ${email}`,
      html: `
        <p style="font-family:sans-serif;font-size:15px;color:#0f172a;">
          New waitlist signup:
        </p>
        <p style="font-family:monospace;font-size:18px;color:#4f46e5;">
          ${email}
        </p>
        <p style="font-family:sans-serif;font-size:13px;color:#64748b;">
          ${new Date().toUTCString()}
        </p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[waitlist]', err)
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
