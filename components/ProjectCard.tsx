import { JSX } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
}

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps): JSX.Element {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-sm bg-gray-500 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
