import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Bookmark } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "MediMap",
    date: "2023 - 2024",
    category: "AI / Healthcare",
    description:
      "A pioneering mobile and web application designed to enhance breast cancer screening accessibility in Tunisia. Leverages geolocation and AI technology to streamline healthcare processes and provide critical patient data insights.",
    metrics: [
      "First Prize in hackathon competition",
      "Integrated AI-powered screening tools",
      "Geo-location based hospital finder",
    ],
    links: {
      github: "#",
      demo: "#",
    },
    tags: ["AI", "Healthcare", "Mobile App", "Web Platform", "Geolocation"],
  },
  {
    title: "MedoPad",
    date: "2023 - 2024",
    category: "Machine Learning",
    description:
      "An advanced health monitoring application using artificial intelligence to detect 7 different diseases. Designed to improve accessibility and convenience of medical testing for users with real-time health insights.",
    metrics: [
      "Detects 7 different diseases",
      "Real-time health monitoring",
      "User-friendly interface",
    ],
    links: {
      github: "#",
      demo: "#",
    },
    tags: ["Machine Learning", "Healthcare", "Python", "TensorFlow"],
  },
  {
    title: "Lung Cancer Prediction",
    date: "2023",
    category: "Computer Vision",
    description:
      "AI-powered system for lung cancer detection from X-ray images. Utilizes deep learning models (UNet, AlexNet, VGG) for accurate prediction and comparison of different architectures.",
    metrics: [
      "First Prize in AI Night II Competition",
      "Multiple model architectures tested",
      "High accuracy disease detection",
    ],
    links: {
      github: "#",
      demo: "#",
    },
    tags: ["Computer Vision", "Deep Learning", "UNet", "AlexNet", "VGG"],
  },
  {
    title: "Self-Driving Car",
    date: "2023",
    category: "AI / Autonomous Systems",
    description:
      "Implemented autonomous vehicle control system utilizing computer vision and machine learning. Demonstrates vehicle guidance using sensor data and deep learning models.",
    metrics: ["Vision-based navigation", "Decision-making algorithms", "Real-time processing"],
    links: {
      github: "#",
      demo: "#",
    },
    tags: ["Autonomous Systems", "Computer Vision", "Deep Learning", "Python"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A selection of projects showcasing expertise in AI, machine learning, computer vision,
            and full-stack development.
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
                        {index === 0 ? "🎬" : index === 1 ? "📈" : index === 2 ? "🩺" : "🍄"}
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
                    <Badge className="text-xs px-2 py-1 bg-gray-50 text-gray-800">
                      {project.category}
                    </Badge>
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
                            ? "bg-indigo-100 text-indigo-700"
                            : i % 5 === 1
                              ? "bg-green-100 text-green-700"
                              : i % 5 === 2
                                ? "bg-yellow-100 text-yellow-700"
                                : i % 5 === 3
                                  ? "bg-pink-100 text-pink-700"
                                  : "bg-sky-100 text-sky-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* GitHub and See Details CTAs for each project */}
                <div className="flex justify-end pt-3 gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Open on GitHub
                    </a>
                  </Button>
                  <Button asChild variant="default" size="sm">
                    <Link
                      href={`/projects/${project.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)+/g, "")}`}
                    >
                      See Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <a
              href="https://github.com/Bechir-karmeni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
