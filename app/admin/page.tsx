"use client"

import { useEffect, useState } from "react"

interface Contact {
  _id: string
  name: string
  email: string
  message: string
  createdAt: string
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="p-4">Loading...</p>

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Contacts</h1>

      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-500">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Message</th>
              <th className="border px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{c.name}</td>
                <td className="border px-4 py-2">{c.email}</td>
                <td className="border px-4 py-2">{c.message}</td>
                <td className="border px-4 py-2">
                  {new Date(c.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
