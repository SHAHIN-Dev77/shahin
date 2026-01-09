import Link from "next/link"
import { JSX } from "react"

export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-gray-500 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>

        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </div>
      </div>
    </nav>
  )
}
