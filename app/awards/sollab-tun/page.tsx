"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SolLabDetailPage() {
  const award = {
    place: "Training",
    title: "SolLab TUN (#4)",
    organization:
      "Fraunhofer Center IMW, Fraunhofer Institute ISI, Hochschule für öffentliche Verwaltung Kehl, Federal Ministry of Education and Research Germany",
    date: "July 3–7, 2023",
    image: "/honors/sollab.jpg",
    shortDescription:
      "Participated as a talent in an exceptional international training program focused on creative problem-solving, innovation management, and intercultural cooperation.",
    fullDescription: `
      🌟 **SolLab TUN (#4) Training Experience!**
      
      I am happy to inform you that I have participated in the SolLab Tun (#4) training as a talent. This exceptional training was organized by Fraunhofer Center for International Management and Knowledge Economy IMW, Fraunhofer Institute for Systems and Innovation Research ISI, Hochschule für öffentliche Verwaltung Kehl, Federal Ministry of Education and Research Germany, and Tunisian partners.
      
      I had the incredible opportunity to be part of a great team under the guidance of our competent coach Mrs Andrea Zenker. Throughout the program, we had the chance to develop a variety of essential skills including creative problem-solving, structuring innovation projects, interdisciplinary project management, intercultural cooperation, and innovation management.
      
      This was an enriching experience that combined international collaboration with practical learning experiences, expanding my perspective on innovation and global cooperation.
    `,
    coach: "Mrs Andrea Zenker",
    mentors: ["Nizar Abdelkafi", "Hansjörg Drewello", "Ridha BEN CHEIKH BEN", "Cyrine Tangour"],
    technologies: [
      "Creative Problem-Solving",
      "Innovation Project Structuring",
      "Interdisciplinary Project Management",
      "Intercultural Cooperation",
      "Innovation Management",
      "Design Thinking",
    ],
    keyFeatures: [
      "International collaboration and networking",
      "Creative problem-solving methodologies",
      "Structured innovation project development",
      "Interdisciplinary team management",
      "Intercultural communication skills",
      "Innovation management frameworks",
    ],
    impact:
      "Gained invaluable skills and international experience in innovation management, problem-solving, and collaborative learning. SolLab TUN (#4) provided a transformative experience that enhanced my ability to lead cross-functional teams and develop innovative solutions in a global context.",
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
        <div className="mb-8 rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
          <img src={award.image} alt={award.title} className="w-full h-96 object-cover" />
        </div>

        <div className="mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-2 border-blue-300 font-bold">
            🎖️ {award.place}
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

        {/* Coach & Mentors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Users className="h-6 w-6" />
            Coach & Mentors
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-5 border-2 border-blue-500/50 shadow-md hover:shadow-lg hover:shadow-blue-600/20 transition-all hover:-translate-y-1">
              <p className="text-white font-semibold mb-1">Program Coach</p>
              <p className="text-white font-medium">{award.coach}</p>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-blue-500/60 shadow-lg shadow-blue-600/20">
              <p className="text-white font-semibold mb-3">Mentors & Supporters</p>
              <div className="space-y-2">
                {award.mentors.map((mentor, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                    <span className="text-white font-medium">{mentor}</span>
                  </div>
                ))}
              </div>
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
            Key Topics
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
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7083505869891481601"
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
          <h2 className="text-2xl font-bold mb-6 text-black">Impact & Learning</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-white leading-relaxed font-medium text-lg">{award.impact}</p>
          </div>
        </div>
      </div>
    </main>
  );
}





