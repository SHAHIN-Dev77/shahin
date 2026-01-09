import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { connectDB } from "@/lib/mongodb"
import Contact from "@/models/Contact"

// ⏱️ In-memory rate limit store
const rateLimitMap = new Map<
  string,
  { count: number; lastRequest: number }
>()

// CONFIG
const LIMIT = 5 // max messages
const WINDOW = 10 * 60 * 1000 // 10 minutes

export async function POST(req: Request) {
  try {
    // 🔐 1️⃣ Auth check (login required)
    const cookieStore = await cookies()
    const authCookie = cookieStore.get("auth")
    if (!authCookie) {
      return NextResponse.json(
        { error: "Login required" },
        { status: 401 }
      )
    }

    const userId = authCookie.value
    const now = Date.now()

    // ⏱️ 2️⃣ Rate limit check (per user)
    const record = rateLimitMap.get(userId)

    if (record) {
      if (now - record.lastRequest < WINDOW) {
        if (record.count >= LIMIT) {
          return NextResponse.json(
            { error: "Too many messages. Try later." },
            { status: 429 }
          )
        }
        record.count++
        rateLimitMap.set(userId, record)
      } else {
        // reset window
        rateLimitMap.set(userId, {
          count: 1,
          lastRequest: now,
        })
      }
    } else {
      rateLimitMap.set(userId, {
        count: 1,
        lastRequest: now,
      })
    }

    // 📨 3️⃣ Validate body
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      )
    }

    // 💾 4️⃣ Save to DB
    await connectDB()
    await Contact.create({
      name,
      email,
      message,
      userId, // optional: track who sent it
    })

    return NextResponse.json(
      { success: true },
      { status: 201 }
    )
  } catch (err) {
    console.error("CONTACT ERROR:", err)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
