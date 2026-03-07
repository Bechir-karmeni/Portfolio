"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SwafythonDetailPage() {
  const award = {
    place: "1st Place",
    title: "SWAFYTHON",
    organization: "SWAFY (Science With And For Youth), EU4Youth - Tunisia, ANPR",
    date: "November 2024",
    image: "/honors/SWAFYTHON.jpg",
    secondaryImage: "/honors/SWAFYTHON1.jpg",
    shortDescription:
      "Won the first prize at the SWAFYTHON HACKATHON in Tunis, one of the biggest hackathon events of the year.",
    fullDescription: `
      🥇 **First Place at SWAFYTHON!**
      
      Thrilled to announce that our team won the first prize of the SWAFYTHON HACKATHON, which took place in Tunis, the city of culture. This prestigious event brought together innovative thinkers and developers across North Africa to showcase cutting-edge solutions.
      
      The competition was sponsored by the Science With and For Youth (SWAFY) project, funded by EU4Youth - Tunisia and managed by the Agence Nationale de la Promotion de la Recherche scientifique (ANPR). The event showcased cutting-edge solutions in science, technology, and youth empowerment, bringing together talented developers and innovators across the region.
      
      We triumphed among numerous innovative projects, demonstrating our team's ability to deliver exceptional solutions that address real-world challenges in the Tunisian context.
    `,
    teamMembers: [
      { name: "Koussay Messaoudi", role: "Team Member" },
      { name: "Riadh Zekri", role: "Team Member" },
      { name: "Iheb Mejri", role: "Team Member" },
      { name: "Abir TABARKI", role: "Team Member" },
    ],
    sponsors: [
      {
        name: "Science With And For Youth (SWAFY)",
        description: "Project management and organization",
      },
      { name: "EU4Youth - Tunisia", description: "Primary funding partner" },
      {
        name: "ANPR",
        description: "Agence Nationale de la Promotion de la Recherche scientifique",
      },
    ],
    organizers: ["Hackathon Tunisia", "Science With and For Youth"],
    technologies: [
      "React",
      "Python",
      "Node.js",
      "Cloud Services",
      "Machine Learning",
      "Data Analytics",
    ],
    keyFeatures: [
      "Innovative solution addressing real-world challenges",
      "Scalable and robust architecture",
      "Team collaboration and agile development",
      "User-centric design approach",
      "Integration with modern technologies",
      "Data-driven insights and analytics",
    ],
    impact:
      "Recognized as a top innovator in the Tunisian tech ecosystem. This victory demonstrates our team's commitment to excellence and innovation, setting a benchmark for future hackathon competitions. The solution showcases the potential of Tunisian youth to create impactful technological solutions.",
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
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
            🏆 {award.place}
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

        {/* Team Members */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Users className="h-6 w-6" />
            Team Members
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {award.teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-4 border-2 border-blue-400/60"
              >
                <p className="text-white font-semibold">{member.name}</p>
                <p className="text-sm text-blue-300 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors & Organizers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Partners & Sponsors</h2>
          <div className="space-y-4">
            {award.sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-xl p-6 border border-amber-600/30"
              >
                <p className="text-white font-semibold">{sponsor.name}</p>
                <p className="text-sm text-amber-200/70 mt-1">{sponsor.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-8 border border-blue-500/20 backdrop-blur-sm">
            <p className="text-white leading-relaxed font-medium mb-4">
              Big thanks to Hackathon Tunisia and Science With and For Youth for their unmatched
              hospitality and organisation, which keeps getting better over time.
            </p>
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
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7263272657582743552"
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







