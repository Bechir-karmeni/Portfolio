"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AIHackTunisia2DetailPage() {
  const award = {
    place: "Participant",
    title: "AI Hack Tunisia 2nd Edition",
    organization: "InstaDeep",
    date: "September 2022",
    image: "/honors/Aihacktunisia.jpg",
    image2: "/honors/Aihacktunisia1.jpg",
    image3: "/honors/Aihacktunisia2.jpg",
    shortDescription:
      "Participated in the biggest AI/ML hackathon in the MEA region, competing in both individual and startup tracks while networking with industry leaders including InstaDeep CEO.",
    fullDescription: `
      I had the incredible privilege of participating in AI Hack Tunisia 2nd Edition, the largest and most prestigious AI and Machine Learning hackathon in the Middle East and Africa (MEA) region, organized by InstaDeep.
      
      This was an amazing three-day experience where I met many inspiring and ambitious AI experts and participants. From the individual track to the startup challenge, it was a great opportunity for my partner Koussay Messaoudi and me to improve our knowledge and pitching skills.
      
      Meeting all those lovely people and sharing our common interests about Tech and AI was simply amazing. The event proved to be transformative for our entrepreneurial journey as we had the honour of meeting with the CEO of InstaDeep Ltd, Mr Karim Beguir, who was impressed by our idea.
      
      Throughout the hackathon, we were introduced to various professionals and industry leaders, including the minister of economy, to whom we had the opportunity to present our startup idea. This exposure to high-level decision-makers and market leaders was invaluable for understanding the potential of our solution and the broader AI/ML landscape in the region.
      
      Big thanks to the entire InstaDeep team for organizing such an inspiring event! I look forward to attending the next edition and continuing to push the boundaries of what's possible with AI.
    `,
    teamMembers: [{ name: "Koussay Messaoudi", role: "Co-founder & Partner" }],
    technologies: [
      "Machine Learning",
      "Python",
      "TensorFlow",
      "Data Science",
      "Startup Development",
      "Pitch & Presentation",
    ],
    keyFeatures: [
      "Participation in MEA's largest AI/ML hackathon",
      "Individual and startup competition tracks",
      "Networking with regional AI experts",
      "Mentorship from industry leaders",
      "Pitch presentation to CEO-level executives",
      "Meeting government decision-makers",
    ],
    impact:
      "Gained invaluable experience competing at one of the region's most prestigious AI hackathons, established valuable connections with MEA tech leaders, and presented innovative ideas to top-level executives and government officials.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-lg shadow-blue-100/50">
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
        {/* Image Gallery - 3 Column */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
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
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img
              src={award.image3}
              alt={`${award.title} - 3`}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-2 border-blue-300 font-bold">
            🎖️ {award.place}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-blue-900 to-blue-700 bg-clip-text text-transparent border-b border-blue-200 pb-8">
            {award.title}
          </h1>
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
            <p className="text-white font-semibold text-lg">{award.date}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 space-y-4 shadow-lg">
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
          <div className="space-y-4">
            {award.teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-5 border-2 border-blue-500/50 shadow-md hover:shadow-lg hover:shadow-blue-600/20 transition-all hover:-translate-y-1"
              >
                <p className="text-white font-semibold text-lg mb-1">{member.name}</p>
                <p className="text-blue-300 text-sm font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Target className="h-6 w-6" />
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {award.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-5 border-2 border-blue-400/60 flex items-start gap-3 shadow-md hover:shadow-lg hover:shadow-blue-600/30 transition-all"
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
            Focus Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {award.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                className="bg-blue-100 text-blue-700 border-2 border-blue-300 px-4 py-2 text-sm font-semibold"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Impact</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-white leading-relaxed text-lg font-medium">{award.impact}</p>
          </div>
        </div>

        {/* LinkedIn Post */}
        <div className="flex justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7074401475661115392"
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





