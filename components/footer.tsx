import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Shahin. All rights reserved.
      </div>
    </footer>
  )
}
