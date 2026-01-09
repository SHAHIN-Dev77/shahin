"use client"

import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const CONTACT_FORM_SECRET = "MySuperSecretKey123" // same as backend

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [status, setStatus] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!captchaToken) {
      setStatus("Please complete the CAPTCHA ✅")
      return
    }

    setStatus("Sending...")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": CONTACT_FORM_SECRET,
      },
      body: JSON.stringify({ name, email, message, token: captchaToken }),
    })

    const data = await res.json()

    if (res.ok) {
      setStatus("Message sent successfully ✅")
      setName("")
      setEmail("")
      setMessage("")
      setCaptchaToken(null)
    } else {
      setStatus(data.error || "Something went wrong ❌")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        className="w-full border p-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="w-full border p-2"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <ReCAPTCHA
        sitekey="6LcycUQsAAAAAJJoBIEuL7mF4X8w501zLtYWn1s-"
        onChange={(token) => setCaptchaToken(token)}
      />
      <button type="submit" className="bg-black text-white px-4 py-2">
        Send
      </button>
      {status && <p>{status}</p>}
    </form>
  )
}
