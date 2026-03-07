"use client"

import { Calendar, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

const volunteerExperiences = [
  {
    title: "Guests Chief",
    organization: "IEEE CS SYP Activities TechX Tunisia 2025",
    startDate: "Aug 2025",
    endDate: "Sep 2025",
    description: "Responsible for contacting international speakers and startups. Coordinated directly with international speakers and contributed to making the event a success.",
    logo: "/logos/ieee-cs.png",
    slug: "guests-chief-techx-tunisia-2025",
  },
  {
    title: "Founder and Chair",
    organization: "IEEE EPS SIGHT",
    startDate: "Jun 2024",
    endDate: "Feb 2025",
    description: "Led the chapter, organized events, and coordinated regular meetings.",
    logo: "/logos/ieee-eps-sight.png",
    slug: "founder-and-chair-ieee-eps-sight",
  },
  {
    title: "Founder and General Secretary",
    organization: "IEEE EPS CS SBC (Student Branch Chapter)",
    startDate: "Jan 2024",
    endDate: "Jan 2025",
    description: "Managed chapter operations, documented meetings, and wrote detailed reports.",
    logo: "/logos/ieee-eps-cs.png",
    slug: "founder-and-general-secretary-ieee-eps-cs-sbc",
  },
  {
    title: "Technical Team Volunteer",
    organization: "ACM EPS",
    startDate: "Oct 2022",
    endDate: "Jul 2023",
    description: "Participated in TCPC 2023 and TCPC 2025, supporting technical events.",
    logo: "/logos/acm-eps.png",
    slug: "technical-team-volunteer-acm-eps",
  }
]

export function Volunteer() {
  const router = useRouter()

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <header className="space-y-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Volunteer Experience
          </h2>
          <p className="text-base text-gray-600">
            Contributing to the tech community through leadership and volunteer work
          </p>
        </header>

        {/* Experience Cards */}
        <div className="space-y-6">
          {volunteerExperiences.map((exp, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-6 items-start">
                {/* Logo */}
                <div className="flex-shrink-0 w-20 h-20 rounded-lg flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                  <img
                    src={exp.logo}
                    alt={`${exp.organization} logo`}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-sm mb-2">
                    <p className="text-blue-600 font-medium">{exp.organization}</p>
                    <div className="flex items-center gap-1.5 text-gray-500 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <button 
                    onClick={() => exp.slug && router.push(`/volunteer/${exp.slug}`)}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-sm hover:shadow-md group-hover:gap-2"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
