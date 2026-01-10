import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cyan-400 text-gray-900">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
