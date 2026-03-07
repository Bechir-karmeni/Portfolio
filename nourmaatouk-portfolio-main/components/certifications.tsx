"use client";
import { useRouter } from "next/navigation"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "May 2024",
    category: "Cloud AI",
  },
  {
    title: "Building Transformer-Based Natural Language Processing Applications",
    issuer: "NVIDIA",
    date: "Sep 2024",
    category: "Deep Learning",
  },
  {
    title: "Deep Learning Fundamentals",
    issuer: "NVIDIA",
    date: "Sep 2024",
    category: "Deep Learning",
  },
  {
    title: "Applications of AI for Predictive Maintenance",
    issuer: "NVIDIA",
    date: "Sep 2024",
    category: "AI Applications",
  },
  {
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    date: "Sep 2024",
    category: "AI Applications",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "May 2024",
    category: "Machine Learning",
  },
  {
    title: "DevNet Associate",
    issuer: "Cisco Networking Academy",
    date: "Aug 2024",
    category: "Networking",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 2024",
    category: "Networking",
  },
]

export function Certifications() {
  const router = useRouter();
  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Certifications</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-[#2176ff] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-lg hover:border-[#2176ff] group"
            >
              {/* Certificate Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={`/${slugify(cert.title)}.jpg`}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#e3f0ff] text-[#2176ff] flex items-center justify-center group-hover:bg-[#e3f0ff] group-hover:text-[#2176ff]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-base leading-tight text-black mb-1 group-hover:text-black">{cert.title}</div>
                    <div className="text-sm text-black/70 mb-2 group-hover:text-black/70">{cert.issuer} • {cert.date}</div>
                    <div className="font-medium text-black text-sm mb-4 group-hover:text-black">{cert.category}</div>
                  </div>
                </div>
                <button
                  className="mt-auto bg-white border border-[#2176ff] text-[#2176ff] rounded-md px-4 py-2 flex items-center gap-2 text-base font-semibold transition-colors w-full justify-center focus:outline-none focus:ring-2 focus:ring-[#2176ff] focus:ring-offset-2 hover:bg-[#2176ff] hover:text-white hover:border-[#2176ff]"
                  type="button"
                  tabIndex={0}
                  onClick={() => router.push(`/certifications/${slugify(cert.title)}`)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-7.5A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5h10.5A2.25 2.25 0 0019.5 17.25V12.75M16.5 10.5l-9 9m9-9h-6.75" />
                  </svg>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
