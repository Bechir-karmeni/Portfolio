import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Bookmark } from "lucide-react"

const projects = [
  {
    title: "Movie Recommendation Microservices System",
    date: "April 2025",
    category: "Full Stack",
    description:
      "Built a scalable microservices system with REST/GraphQL APIs, Docker deployment, and MongoDB. Implemented service-to-service communication handling 1000+ concurrent requests.",
    metrics: [
      "Reduced API response time by 45% using GraphQL optimization",
      "Deployed across 3 microservices with zero downtime",
      "Achieved 99.9% uptime with Docker orchestration"
    ],
    links: {
      github: "https://github.com/nourmaatouk/microservice-Film-recommendation",
      demo: "#"
    },
    tags: ["Microservices", "REST", "GraphQL", "Docker", "MongoDB", "Node.js"]
  },
  {
    title: "Predicting Arrest Outcomes in Los Angeles",
    date: "April 2025",
    category: "Data Science",
    description:
      "Analyzed 100K+ LA arrest records to identify key factors affecting outcomes. Built ensemble predictive models with interactive dashboards for policy insights.",
    metrics: [
      "Achieved 87% accuracy in outcome prediction",
      "Identified 12 key factors influencing arrest outcomes",
      "Reduced feature dimensionality by 65% through PCA"
    ],
    links: {
      github: "https://github.com/nourmaatouk/los-angeles-arrest-prediction",
      demo: "#"
    },
    tags: ["Machine Learning", "Data Analysis", "Python", "Visualization", "Ensemble Methods"]
  },
  {
    title: "Burnout Shield - Mental Health AI",
    date: "March 2025",
    category: "AI / LLM",
    description:
      "Developed AI models analyzing wearable time-series data to evaluate mental health. Implemented personalized therapeutic support using LLMs, processing real-time sensor data.",
    metrics: [
      "Achieved 91% accuracy in burnout risk detection",
      "Processes 5+ wearable sensor streams in real-time",
      "Generated personalized intervention recommendations for 500+ users"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    tags: ["AI", "Time Series", "LLM", "Wearables", "Real-time Processing"]
  },
  {
    title: "FungiScan AI - Disease Detection",
    date: "Feb 2025",
    category: "Computer Vision",
    description:
      "Created a Streamlit web app for detecting fungal diseases in plant leaves. Fine-tuned MobileNetV2 CNN achieving real-time classification on mobile devices.",
    metrics: [
      "Achieved 94% precision in disease classification",
      "Model size optimized to 8MB for mobile deployment",
      "Processes images in <200ms on edge devices"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    tags: ["Computer Vision", "CNN", "TensorFlow", "Streamlit", "MobileNetV2"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A selection of projects showcasing expertise in AI, machine learning, computer vision, and full-stack development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transform transition-all hover:-translate-y-2"
            >
              {/* vertical accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400" />

              <CardHeader className="pb-2 pl-4">
                <div className="flex items-start justify-between w-full">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                        {/* small emoji thumbnail to add personality */}
                        {index === 0 ? '🎬' : index === 1 ? '📈' : index === 2 ? '🩺' : '🍄'}
                      </div>

                      <div>
                        <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-4 flex flex-col items-end gap-2">
                    <Badge className="text-xs px-2 py-1 bg-gray-50 text-gray-800">{project.category}</Badge>
                    <Bookmark className="h-5 w-5 text-gray-300" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-2">
                <p className="text-sm text-gray-800 leading-relaxed">{project.description}</p>

                <div>
                  <p className="text-sm font-semibold mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          i % 5 === 0
                            ? 'bg-indigo-100 text-indigo-700'
                            : i % 5 === 1
                            ? 'bg-green-100 text-green-700'
                            : i % 5 === 2
                            ? 'bg-yellow-100 text-yellow-700'
                            : i % 5 === 3
                            ? 'bg-pink-100 text-pink-700'
                            : 'bg-sky-100 text-sky-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* GitHub CTA for each project */}
                <div className="flex justify-end pt-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Open on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <a href="https://github.com/nourmaatouk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Github />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
