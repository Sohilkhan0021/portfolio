import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js","NEXT JS", "MySQL", "MongoDB"],
  },
  {
    category: "DevOps",
    skills: [ "AWS", "GitHub"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Canva", "Photoshop", "GitHub", "Vercel"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card
          key={tech.category}
          className="p-6 border border-border/40 hover:border-primary/20 transition-all hover:shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {tech.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

