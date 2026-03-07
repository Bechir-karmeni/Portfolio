"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function OpenGeodataDetailPage() {
  const award = {
    place: "2nd Place",
    title: "OpenGeoData Challenge Hackathon",
    organization: "AGEOS (African Association for Geospatial Development)",
    date: "November 11-12, 2023",
    image: "/honors/OPENGEODATA%20Challenge%20Hackathon.jpg",
    secondaryImage: "/honors/OPENGEODATA%20Challenge%20Hackathon.jpg",
    shortDescription:
      "Secured 2nd place for #MEDIMAP, the first Tunisian mobile application to facilitate breast cancer screening.",
    fullDescription: `
      🥈 **Second Prize at OpenGeoData Challenge Hackathon!**
      
      Absolutely thrilled to share that on November 11-12, our exceptional and dedicated team participated in the OPENGEODATA Challenge Hackathon and secured the Second prize! Our win is more than just an achievement—it's a testament to our dedication to making a meaningful difference in Tunisia's Medical sector.
      
      We developed #MEDIMAP, the first Tunisian mobile application to facilitate breast cancer screening. This groundbreaking solution leverages geospatial data and mapping technology to make breast cancer screening more accessible and efficient across Tunisia, connecting patients with healthcare facilities.
      
      MEDIMAP demonstrates how innovative technology combined with geospatial integration can revolutionize healthcare accessibility and improve health outcomes for thousands of Tunisian women. The application will soon be launched to transform breast cancer screening in Tunisia.
    `,
    partners: [
      "AGEOS.Tunisie (African Association for Geospatial Development)",
      "IEEE SUP'COM GRSS Chapter - Sup'Com Student Branch",
      "Innov'i - EU4Innovation",
      "NOVATION CITY",
    ],
    technologies: [
      "React Native",
      "Geospatial APIs",
      "Google Maps",
      "Node.js",
      "Mobile Development",
      "Healthcare Integration",
    ],
    keyFeatures: [
      "Geolocation-based screening facility finder",
      "Patient education resources and awareness",
      "Direct appointment booking system",
      "Healthcare facility mapping and navigation",
      "Real-time availability tracking",
      "Breast cancer screening information hub",
    ],
    impact:
      "Created a transformative solution that demonstrates the potential to significantly improve breast cancer screening accessibility for thousands of Tunisian women. MEDIMAP exemplifies how technology and geospatial innovation can bridge healthcare gaps and empower communities in Tunisia.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="fixed top-0 left-0 right-0 z-40 bg-white backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/#awards"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Awards
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* Award Images */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img src={award.image} alt={award.title} className="w-full h-80 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img
              src={award.secondaryImage}
              alt={`${award.title} Secondary`}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="mb-8">
          <Badge className="mb-4 bg-gray-500/20 text-white border-gray-500/30">
            🥈 {award.place}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{award.title}</h1>
          <p className="text-lg text-black font-medium">{award.shortDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-blue-500/60 shadow-lg shadow-blue-600/20">
            <div className="flex items-center gap-3 mb-3">
              <Building className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-blue-300 font-semibold">Organization</span>
            </div>
            <p className="text-white font-semibold text-lg">{award.organization}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-blue-500/60 shadow-lg shadow-blue-600/20">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-blue-300 font-semibold">Date</span>
            </div>
            <p className="text-white font-semibold">{award.date}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg space-y-4">
            {award.fullDescription.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-white leading-relaxed font-medium">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Partners & Organizers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Partners & Organizers</h2>
          <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-xl p-8 border border-pink-500/20 backdrop-blur-sm">
            <p className="text-white leading-relaxed font-medium mb-4">
              Huge shoutout to all our partners for providing us with the incredible opportunity to
              showcase our innovative project:
            </p>
            <div className="space-y-2">
              {award.partners.map((partner, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                  <span className="text-white font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Target className="h-6 w-6" />
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {award.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-5 border-2 border-blue-400/60 shadow-md hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-start gap-3"
              >
                <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Code className="h-6 w-6" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {award.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                className="bg-blue-100 text-blue-700 border-2 border-blue-300 font-bold px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* LinkedIn Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Community Recognition</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7130109623843340288"
              height="600"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post"
              className="rounded-lg border-2 border-blue-400/60"
            />
          </div>
        </div>

        {/* Impact */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-black">Impact & Legacy</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-white leading-relaxed font-medium text-lg">{award.impact}</p>
          </div>
        </div>
      </div>
    </main>
  );
}







