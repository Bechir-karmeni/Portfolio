import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const experiences = [
  {
    title: "Software Designer",
    company: "ACTIA ENGINEERING SERVICES",
    logo: "/Actia Engineering Services.webp",
    url: "https://www.actia.com/division-engineering-services/",
    location: "Onsite, Tunisia",
    period: "Feb 2024 – Jun 2024",
    type: "Internship",
    highlights: [
      "Developed a centralized tool for automating and streamlining component obsolescence management, resulting in increased productivity, less manual labor and errors, and significantly reduced processing time.",
      "Created the KPI dashboard with PowerBI to deliver meaningful data visualizations and performance metrics, allowing stakeholders to effectively monitor key performance indicators and make better strategic decisions.",
      "Developed a centralized solution for converting PDF documents to Excel files to aid in data analysis, increase data accessibility, and streamline the analytical process.",
      "Developed dynamic user interfaces for data visualization with PowerBI linked into a web platform, radically boosting decision-making through real-time data insights.",
      "Utilized Angular to develop a responsive and intuitive interface for the frontend, which increased application usability and user engagement.",
      "Employed Spring Boot to build a robust backend API, enabling efficient database interactions and data processing, which led to improved application performance and faster server response times.",
      "Enhanced data management capabilities by automating the conversion process and integrating advanced visualization tools, which streamlined data workflows and reduced operational delays.",
    ],
    keywords: [
      "Python",
      "Power BI",
      "Angular",
      "Spring Boot",
      "Data Processing",
      "Component Management",
    ],
  },
  {
    title: "Artificial Intelligence Developer",
    company: "CodeClause",
    logo: "/Code-Clause.png",
    url: "https://codeclause.com/",
    location: "Remote",
    period: "Aug 2023 – Sep 2023",
    type: "Internship",
    highlights: [
      "Created a model to detect road lanes, enhancing the accuracy and reliability of lane detection systems, which improved overall navigation and safety.",
      "Developed a self-driving car using Udacity simulation, demonstrating advanced autonomous driving capabilities and showcasing practical application of machine learning and computer vision techniques.",
    ],
    keywords: ["Python", "Machine Learning", "Computer Vision", "Deep Learning"],
  },
  {
    title: "Front-End Developer",
    company: "VECTEUR INDUSTRIE",
    logo: "/vecteur industrie.png",
    url: "http://vecteurindustrie.com/",
    location: "Hybrid, Tunisia",
    period: "Jan 2023 – Jul 2023",
    type: "Part-time",
    highlights: [
      "Developed and implemented user interface components, creating a seamless and responsive user experience, which improved overall user satisfaction and engagement.",
      "Profiled and improved front-end performance, enhancing application speed and efficiency, providing a smoother, more reliable user experience.",
      "Documented the front-end codebase, maintaining clarity and ease of future development, facilitating smoother handovers and more efficient ongoing maintenance.",
    ],
    keywords: [
      "HTML",
      "CSS",
      "JavaScript",
      "User Experience (UX)",
      "User Interface Design",
      "Responsive Design",
    ],
  },
  {
    title: "Machine Learning Developer",
    company: "ADN EXPERTISE",
    logo: "/adn expertise.png",
    url: "https://www.adn-expertise.fr/",
    location: "Hybrid, Tunisia",
    period: "Jul 2022 – Sep 2022",
    type: "Internship",
    highlights: [
      "Extracted comprehensive data from complex databases, enabling informed, strategic decision-making by providing clear, detailed, and interactive reports that drove business insights and operational improvements.",
      "Developed a sophisticated recommender system using advanced machine learning algorithms, significantly enhancing user engagement and satisfaction by delivering highly personalized recommendations tailored to individual preferences.",
      "Designed the KPI dashboard using PowerBI, which provided insightful data visualizations and performance metrics, facilitating enhanced decision-making and strategic planning across the organization.",
    ],
    keywords: [
      "Machine Learning",
      "Data Analysis",
      "Power BI",
      "SQL",
      "Recommender Systems",
      "Data Mining",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Building scalable solutions across diverse technologies and industries
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Logo Section - Left */}
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-64 w-80 flex items-center justify-center group/logo"
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain p-4 group-hover/logo:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/logo:bg-black/10 rounded-xl transition-colors duration-300"></div>
                  </a>
                </div>

                {/* Content Section - Right */}
                <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-1 group-hover:text-black transition-colors">
                          {exp.title}
                        </h3>
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-black font-semibold hover:text-black transition-colors group/link"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 border border-blue-300 font-medium px-4 py-1.5 text-sm">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-black">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-black" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-black" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-black uppercase tracking-wider mb-3">
                      Key Accomplishments
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-black">
                          <span className="text-black font-bold mt-0.5 flex-shrink-0">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <p className="text-xs font-semibold text-black uppercase tracking-wider mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.keywords.map((keyword, i) => (
                        <Badge
                          key={i}
                          className="bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 transition-colors text-xs font-medium rounded-full px-3 py-1"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
