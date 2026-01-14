import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Customer from "@/models/customer"




export async function POST(req: Request) {
  try {
     

    // 📨 3️⃣ Validate body
    const { name, email, phone, service, status } = await req.json()
    if (!name || !email || !phone || !service || !status) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      )
    }

    // 💾 4️⃣ Save to DB
    await connectDB()
    await Customer.create({
      name,
      email,
      phone,
      service,
      status,
    })

    return NextResponse.json(
      { success: true },
      { status: 201 }
    )
  } catch (err) {
    console.error("Customer info ERROR:", err)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
