import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Contact from "@/models/Contact"

// Hardcoded secret key for frontend
const CONTACT_FORM_SECRET = "MySuperSecretKey123"

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; last: number }>()
const RATE_LIMIT = 5 // max submissions
const TIME_WINDOW = 60 * 1000 // 1 minute

// Your real reCAPTCHA secret key
const RECAPTCHA_SECRET = "6LcycUQsAAAAAJJlABj7ql0hl-SnBwx4UIJCePDc"

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown"

    // 1️⃣ Rate limiting
    const record = rateLimitMap.get(ip)
    const now = Date.now()
    if (record) {
      if (now - record.last < TIME_WINDOW) {
        if (record.count >= RATE_LIMIT) {
          return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
        } else {
          record.count++
          rateLimitMap.set(ip, record)
        }
      } else {
        rateLimitMap.set(ip, { count: 1, last: now })
      }
    } else {
      rateLimitMap.set(ip, { count: 1, last: now })
    }

    // 2️⃣ Validate secret key
    const secret = req.headers.get("x-secret-key")
    if (secret !== CONTACT_FORM_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // 3️⃣ Parse request
    const { name, email, message, token } = await req.json()
    if (!name || !email || !message || !token) {
      return NextResponse.json({ error: "All fields and CAPTCHA token required" }, { status: 400 })
    }

    // 4️⃣ Verify reCAPTCHA
    const captchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
      }
    )
    const captchaData = await captchaRes.json()
    if (!captchaData.success) {
      return NextResponse.json({ error: "CAPTCHA verification failed" }, { status: 400 })
    }

    // 5️⃣ Connect DB and save
    await connectDB()
    const saved = await Contact.create({ name, email, message })

    return NextResponse.json({ success: true, id: saved._id }, { status: 201 })
  } catch (err) {
    console.error("ERROR:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
