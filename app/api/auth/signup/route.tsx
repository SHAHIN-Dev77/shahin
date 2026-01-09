import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  await connectDB()

  const exists = await User.findOne({ email })
  if (exists) {
    return NextResponse.json({ error: "User exists" }, { status: 409 })
  }

  const hashed = await bcrypt.hash(password, 10)
  await User.create({ email, password: hashed })

  return NextResponse.json({ success: true })
}
