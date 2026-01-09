import ProjectCard from "@/components/ProjectCard"
import ContactForm from "@/components/ContactForm"

import { JSX } from "react"

export default function Home(): JSX.Element {
  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col gap-6 mt-16">
        <h1 className="text-4xl font-bold">
          Hi, I'm Shahin 👋
        </h1>

        <p className="text-lg max-w-xl text-gray-600">
          I’m a frontend developer learning Next.js and building fast,
          modern websites.
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="/about"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            About Me
          </a>

          <a
            href="#projects"
            className="border border-black px-6 py-3 rounded hover:bg-gray-800"
          >
            Projects
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="mt-24">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Personal Portfolio"
            description="My personal website built using Next.js, TypeScript, and Tailwind CSS."
            tech={["Next.js", "TypeScript", "Tailwind"]}
          />

          <ProjectCard
            title="Business Website"
            description="A modern business landing page with responsive UI and clean layout."
            tech={["React", "Tailwind", "UI/UX"]}
          />

          <ProjectCard
            title="Future SaaS App"
            description="A planned SaaS product with authentication and dashboard."
            tech={["Next.js", "MongoDB", "Node.js"]}
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mt-24">
  <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

  <p className="text-gray-600 mb-8 max-w-xl">
    Feel free to contact me for projects, collaborations, or
    opportunities.
  </p>

     <ContactForm />
      </section>


    </>
  )
}
