import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company: "Talan",
    logo: "/logos/talan.png",
    url: "https://www.talan.com/",
    location: "Onsite - Tunisia",
    period: "July 2025 – Aug 2025",
    description:
      "• Gathered and integrated structured and unstructured business data for analysis.\n• Designed and implemented a graph-based architecture leveraging GraphRAG to connect and reason over data relationships.\n• Applied multi-agent reasoning to improve pattern detection, enhance decision support, and uncover non-obvious correlations.\n• Built intelligent queries and visualization tools to transform raw data into actionable business insights.\n• Evaluated platform performance by comparing results with traditional analytics methods.",
    highlights: [],
    keywords: ["Python", "GraphRAG", "Multi-agent", "Knowledge Graph", "Neo4j"],
  },
  {
    title: "AI Research Intern – Computer Vision & Human Motion Analysis",
    company: "EPT/Lasmap - Université de Carthage",
    logo: "/logos/lasmap.png",
    url: "https://ept.tn/lasmap",
    location: "Remote",
    period: "May 2025 – Jun 2025",
    description:
      "• Research on human motion analysis, focusing on automatic posture detection using AI and computer vision.\n• Evaluation of 2D/3D pose estimation algorithms (OpenPose, Mediapipe), and application to workplace ergonomics.\n• Predict postures and reduce musculoskeletal disorder risks.",
    highlights: [],
    keywords: ["Python", "Matplotlib", "OpenCV", "Mediapipe", "OpenPose", "BlazePose"],
  },
  {
    title: "Machine Learning Intern",
    company: "Ozeol.com",
    logo: "/logos/ozeol.png",
    url: "https://www.ozeol.com/",
    location: "Onsite - Tunisia",
    period: "Jun 2024 – Aug 2024",
    description:
      "• Gathered and cleaned supplier-related data to prepare it for modeling.\n• Used Python (Pandas, Seaborn, Matplotlib) to understand the data distribution, detect outliers, and generate insights.\n• Built and compared several classification models including Logistic Regression, Random Forest, SVM, XGBoost, and Neural Networks to predict the potential of suppliers.\n• Assessed models using metrics such as accuracy, F1-score, precision, and recall. Helped choose the best-performing model.\n• Created dashboards and visual reports to communicate findings and model results to the business team.\n• Worked closely with IT staff to ensure the solution met business requirements.",
    highlights: [],
    keywords: ["Python", "ML", "Scikit-learn", "TensorFlow", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-2 border-border rounded-2xl p-6 hover:border-accent/50 transition-colors bg-white hover:shadow-lg">
              {/* Logo */}
              <div className="mb-4 flex justify-center items-start" style={{ height: '9rem' }}>
                <div
                  className={
                    exp.company === "EPT/Lasmap - Université de Carthage"
                      ? "h-24 w-40 relative flex items-center justify-center"
                      : "h-36 w-60 relative flex items-center justify-center"
                  }
                >
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Position, Company, and Details */}
              <div className="mb-4 flex flex-col items-center">
                {/* Position */}
                <span className="text-base font-semibold text-center block whitespace-pre-line mb-3" style={{ color: '#007FFF' }}>{exp.title}</span>
                {/* Company */}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-800 hover:underline focus:underline flex items-center gap-1 text-base mb-2"
                >
                  {exp.company}
                  <span role="img" aria-label="external link">🔗</span>
                </a>
                {/* Internship type, period, location */}
                <div className="w-full flex flex-row items-center justify-start">
                  <span className="text-sm text-black">
                    Internship · {exp.period} · {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              {exp.description && (
                <ul className="text-sm text-foreground leading-relaxed mb-4 list-disc list-outside pl-4 space-y-1">
                  {exp.description.split(/\n|• /)
                    .filter(line => line.trim() !== "")
                    .map((line, idx) => {
                      // Remove leading space if present
                      const text = line.startsWith(' ') ? line.slice(1) : line;
                      return <li key={idx}>{text}</li>;
                    })}
                </ul>
              )}

              {/* Highlights with metrics */}
              <div className="mb-4 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="text-xs text-foreground flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {exp.keywords.map((keyword, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-blue-50 border border-blue-300 text-blue-700 hover:bg-blue-100 text-xs font-medium rounded-md px-3 py-1 shadow-none"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
