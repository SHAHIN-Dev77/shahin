"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  async function signup() {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) router.push("/login")
    else alert("Signup failed")
  }

  return (
    <div className="flex items-center max-w-sm mx-auto flex-col justify-center p-6 space-y-4 bg-cyan-200 rounded-2xl">
      <h1 className="text-xl font-bold">Sign Up</h1>
      <input className="border p-2 w-full" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-gray-500 font-bold hover:bg-cyan-700 text-white py-2 rounded-lg p-4" onClick={signup}>
        Sign Up
      </button>
    </div>
  )
}
