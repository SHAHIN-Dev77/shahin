import { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">About Me</h1>

      <p className="text-gray-600 max-w-2xl">
        My name is Shahin. I am learning frontend development using
        Next.js, React, and Tailwind CSS. I want to build business
        websites and SaaS products.
      </p>

      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>HTML, CSS, JavaScript</li>
          <li>React & Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js (Basic)</li>
        </ul>
      </div>
    </section>
  )
}
