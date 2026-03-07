"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, Building, ExternalLink } from "lucide-react"

const awards = [
  {
    place: "1st Place",
    title: "ClimAdapt Hackathon Challenge: OpenGeoAI for Climate Action",
    organization: "AGEOS Tunisie",
    date: "October 2025",
    details: "https://example.com/climadapt",
    slug: "climadapt-hackathon-challenge-opengeoai-for-climate-action"
  },
  {
    place: "1st Place",
    title: "Challenge Revolutionizing Agriculture with AI",
    organization: "ARSII & Centre de Recherche en Microélectronique et Nanotechnologie (CRMN)",
    date: "June 2024",
    details: "https://example.com/agriculture",
    slug: "challenge-revolutionizing-agriculture-with-ai"
  },
  {
    place: "1st Place",
    title: "Challenge on Structural Optimization of Composite Plates with AI",
    organization: "ARSII & EPT/Lamap - University of Carthage",
    date: "May 2024",
    details: "https://example.com/structural",
    slug: "challenge-on-structural-optimization-of-composite-plates-with-ai"
  },
  {
    place: "1st Place",
    title: "IAS TAM 4.0 Technical Challenge",
    organization: "IEEE Industrial Applications Society & DATAVERSE",
    date: "April 2024",
    details: "https://example.com/ias-tam",
    slug: "ias-tam-4-0-technical-challenge"
  },
  {
    place: "1st Place",
    title: "AI Night Challenge",
    organization: "ARSII & Novation City",
    date: "March 2024",
    details: "https://example.com/ai-night",
    slug: "ai-night-challenge"
  },
  {
    place: "2nd Place",
    title: "Mental Health Technical Challenge",
    organization: "Tunisian Students and Young Professionals Congress & IEEE EMBS",
    date: "February 2024",
    details: "https://example.com/mental-health",
    slug: "mental-health-technical-challenge"
  },
  {
    place: "2nd Place",
    title: "AI Impact Challenge",
    organization: "American Corner Sousse",
    date: "January 2024",
    details: "#",
    slug: "ai-impact-challenge"
  },
  {
    place: "3rd Place",
    title: "SIGHT Day Congress Technical Challenge",
    organization: "IEEE Tunisia Section",
    date: "December 2023",
    details: "#",
    slug: "sight-day-congress-technical-challenge"
  },
  {
    place: "2nd Place",
    title: "IEEEXtreme 17.0 Programming Competition",
    organization: "Ecole Polytechnique de Sousse",
    date: "October 2023",
    details: "#",
    slug: "ieeextreme-17-0-programming-competition"
  },
]

export function Awards() {
  const router = useRouter()

  return (
    <section id="awards" className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4 border border-blue-100">
            <Trophy className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">Recognition & Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Honors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized excellence in AI competitions and technical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, idx) => {
            const isFirst = award.place === '1st Place'
            const isSecond = award.place === '2nd Place'
            const isThird = award.place === '3rd Place'
            
            const badgeColor = isFirst 
              ? 'bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 border-amber-200' 
              : isSecond 
              ? 'bg-gradient-to-r from-gray-50 to-slate-50 text-gray-800 border-gray-200' 
              : 'bg-gradient-to-r from-orange-50 to-amber-50 text-orange-800 border-orange-200'
            
            const accentColor = isFirst
              ? 'text-amber-600'
              : isSecond
              ? 'text-gray-600'
              : 'text-orange-600'
            
            const cardBg = isFirst
              ? 'bg-gradient-to-br from-white to-amber-50/30'
              : isSecond
              ? 'bg-gradient-to-br from-white to-gray-50/30'
              : 'bg-gradient-to-br from-white to-orange-50/30'

            return (
              <Card 
                key={idx} 
                className={`${cardBg} border border-gray-200 hover:border-gray-300 transition-all hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden cursor-pointer`}
                onClick={() => award.slug && router.push(`/awards/${award.slug}`)}
              >
                {/* Subtle accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${isFirst ? 'bg-gradient-to-r from-amber-400 to-yellow-400' : isSecond ? 'bg-gradient-to-r from-gray-400 to-slate-400' : 'bg-gradient-to-r from-orange-400 to-amber-400'}`} />
                
                {/* Award Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={`/${award.slug}.jpg`}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-4 pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold border shadow-sm ${badgeColor}`}>
                      <Trophy className={`h-4 w-4 ${accentColor}`} />
                      {award.place}
                    </div>
                    <div className="text-2xl opacity-60 group-hover:scale-110 transition-transform">
                      {isFirst ? '🏆' : isSecond ? '🥈' : isThird ? '🥉' : '🎖️'}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">
                    {award.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2.5 text-sm">
                    <div className="flex items-start gap-3">
                      <div className={`p-1.5 rounded-md ${isFirst ? 'bg-amber-100' : isSecond ? 'bg-gray-100' : 'bg-orange-100'}`}>
                        <Building className={`h-4 w-4 ${accentColor}`} />
                      </div>
                      <span className="text-gray-700 leading-snug">{award.organization}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-md ${isFirst ? 'bg-amber-100' : isSecond ? 'bg-gray-100' : 'bg-orange-100'}`}>
                        <Calendar className={`h-4 w-4 ${accentColor}`} />
                      </div>
                      <span className="text-gray-700">{award.date}</span>
                    </div>
                  </div>

                  {award.slug ? (
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-2 group/link">
                      View Details
                      <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </div>
                  ) : (
                    <a
                      href={award.details}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-2 group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                      <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats summary */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 mb-3">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="text-3xl font-bold text-amber-600">
              {awards.filter(a => a.place === '1st Place').length}
            </div>
            <div className="text-sm text-gray-600 mt-1 font-medium">First Place Awards</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-slate-100 mb-3">
              <span className="text-2xl">🥈</span>
            </div>
            <div className="text-3xl font-bold text-gray-600">
              {awards.filter(a => a.place === '2nd Place').length}
            </div>
            <div className="text-sm text-gray-600 mt-1 font-medium">Second Place Awards</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 mb-3">
              <span className="text-2xl">🥉</span>
            </div>
            <div className="text-3xl font-bold text-orange-600">
              {awards.filter(a => a.place === '3rd Place').length}
            </div>
            <div className="text-sm text-gray-600 mt-1 font-medium">Third Place Awards</div>
          </div>
        </div>
      </div>
    </section>
  )
}
