"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function NuitDinfoDetailPage() {
  const award = {
    place: "Silver Medal 🥈",
    title: "Nuit de l'Info National Competition 2022",
    organization: "C'CIN - C'Chartres Innovations Numériques",
    date: "December 2022",
    image: "/honors/nuitdinfo.jpg",
    image2: "/honors/nuitdinfo2.jpg",
    shortDescription:
      "Brought home a silver medal 🥈 from the national Nuit de l'Info competition in the 'Comme un DevOps tu penseras' challenge, competing against top technical teams.",
    fullDescription: `
      We are thrilled to announce that our team brought home a silver medal 🥈 from the prestigious national competition "Nuit de l'Info" (Night of Code), one of France's most challenging programming competitions.
      
      Our team tackled the challenge "Comme un DevOps tu penseras" (As a DevOps You Shall Think), issued by C'CIN - C'Chartres Innovations Numériques, competing against top technical teams from across the country.
      
      It was an intense and challenging event, but our team worked tirelessly and managed to outperform many of the other top contenders. This achievement demonstrates our deep understanding of DevOps practices, infrastructure automation, and deployment strategies.
      
      We are incredibly proud of this accomplishment and grateful to our mentors and team members for their dedication and support throughout the competition.
    `,
    technologies: [
      "DevOps",
      "Infrastructure Automation",
      "Deployment Strategies",
      "Docker",
      "CI/CD Pipelines",
      "System Management",
    ],
    keyFeatures: [
      "National-level competition excellence",
      "Advanced DevOps expertise",
      "Infrastructure automation mastery",
      "Effective team collaboration under pressure",
      "Innovative problem-solving approach",
      "High-performing technical execution",
    ],
    impact:
      "Earned silver medal at Nuit de l'Info 2022 national competition, validating our DevOps expertise and positioning our team among the country's top technical talent.",
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
        {/* Image Gallery - 2 Column */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img src={award.image} alt={award.title} className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img
              src={award.image2}
              alt={`${award.title} - 2`}
              className="w-full h-64 object-cover"
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

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Impact</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-white leading-relaxed font-medium text-lg">{award.impact}</p>
          </div>
        </div>

        {/* LinkedIn Post */}
        <div className="flex justify-center">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7013579344354668545"
            height="600"
            width="504"
            frameBorder="0"
            allowFullScreen
            title="Embedded LinkedIn post"
            className="rounded-lg border-2 border-blue-400/60"
          />
        </div>
      </div>
    </main>
  );
}





