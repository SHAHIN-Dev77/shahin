"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  async function login() {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) router.push("/")
    else alert("Login failed")
  }

  return (
    <div className="w-full max-w-sm bg-cyan-400 p-6 rounded-lg shadow-lg">
      <h1 className="text-center text-xl font-bold">Login</h1>
      <input className="border p-2 w-full" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-cyan-400 text-white w-full py-2" onClick={login}>
        Login
      </button>
    </div>
  )
}
