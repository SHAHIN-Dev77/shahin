import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="min-h-screen items-center justify-center px-6 py-12 bg-cyan-50 text-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
