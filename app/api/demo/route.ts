import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const required = ['fullName', 'email', 'company', 'industry', 'size', 'workType', 'country'] as const

function row(label: string, value: string) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 12px;font-family:sans-serif;font-size:13px;color:#94a3b8;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:8px 12px;font-family:sans-serif;font-size:13px;color:#0f172a;vertical-align:top;">${value}</td>
    </tr>`
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()

    // Validate required fields
    for (const field of required) {
      if (!body[field] || !String(body[field]).trim()) {
        return NextResponse.json({ error: `${field} is required.` }, { status: 400 })
      }
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: 'Valid work email required.' }, { status: 400 })
    }

    const {
      fullName, email, company, industry, size,
      workType, country, website, linkedin, message,
    } = body

    await resend.emails.send({
      from: process.env.WAITLIST_FROM_EMAIL as string,
      to:   process.env.WAITLIST_NOTIFY_EMAIL as string,
      subject: `Zuko demo request — ${fullName} · ${company}`,
      html: `
        <div style="background:#f8fafc;padding:32px;font-family:sans-serif;">
          <h2 style="margin:0 0 24px;font-size:20px;color:#0f172a;">
            New demo request
          </h2>
          <table style="border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;width:100%;max-width:560px;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
            <tbody>
              ${row('Name',        fullName)}
              ${row('Email',       email)}
              ${row('Company',     company)}
              ${row('Industry',    industry)}
              ${row('Team size',   size)}
              ${row('Type',        workType)}
              ${row('Country',     country)}
              ${row('Website',     website)}
              ${row('LinkedIn',    linkedin)}
              ${message ? row('Message', message) : ''}
            </tbody>
          </table>
          <p style="margin:20px 0 0;font-size:12px;color:#94a3b8;">${new Date().toUTCString()}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[demo]', err)
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
