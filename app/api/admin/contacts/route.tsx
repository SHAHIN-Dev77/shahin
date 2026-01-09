import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Contact from "@/models/Contact"

export async function GET() {
  try {
    await connectDB()

    const contacts = await Contact.find({})
      .sort({ createdAt: -1 }) // latest first
      .lean()

    return NextResponse.json(contacts)
  } catch (err) {
    console.error("ERROR FETCHING CONTACTS:", err)
    return NextResponse.json(
      { error: "Unable to fetch contacts" },
      { status: 500 }
    )
  }
}
