"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StartItUpDetailPage() {
  const award = {
    place: "1st Place Winner",
    title: "Start It Up Hackathon First Edition",
    organization: "Junior Entreprise ENISo",
    date: "March 2023",
    image: "/honors/startitup.jpg",
    image2: "/honors/startitup3.jpg",
    image3: "/honors/satrtitup2.jpg",
    shortDescription:
      "Emerged as first prize winners in the Start It Up Hackathon, showcasing innovative AI solution development and exceptional teamwork with Koussay Messaoudi.",
    fullDescription: `
      I am thrilled to announce that my friend Koussay Messaoudi and I won the first prize in the Start It Up Hackathon First Edition, organized by Junior Entreprise ENISo! This was an incredible opportunity for us to showcase our skills and creativity, and we are honored to have been chosen as the winners.
      
      Working alongside Koussay was an amazing experience. We collaborated closely to develop a solution that we believed would impress the judges, and our hard work paid off. It was inspiring to see the other participants' ideas and to be part of such a talented and driven group dedicated to innovation and entrepreneurship.
      
      Winning this hackathon has given us a huge boost of confidence and inspiration to pursue our entrepreneurial goals further. We are excited about the possibilities that this achievement has opened up for us and are eager to continue to innovate and create impactful solutions.
    `,
    teamMembers: [{ name: "Koussay Messaoudi", role: "Co-winner & Collaborator" }],
    technologies: [
      "Innovation Strategy",
      "Entrepreneurship",
      "Solution Development",
      "Team Collaboration",
      "Creative Problem-Solving",
      "Project Implementation",
    ],
    keyFeatures: [
      "Award-winning solution development",
      "Outstanding team collaboration",
      "Creative and innovative thinking",
      "Rapid prototyping under pressure",
      "Effective pitching and presentation",
      "Entrepreneurial mindset",
    ],
    impact:
      "Won first prize in the Start It Up Hackathon, validating our approach to innovation and entrepreneurship, while establishing a strong foundation for future entrepreneurial ventures.",
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
          <div className="space-y-4">
            {award.teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-5 border-2 border-blue-500/50 shadow-md hover:shadow-lg hover:shadow-blue-600/20 transition-all hover:-translate-y-1"
              >
                <p className="text-white font-semibold mb-1">{member.name}</p>
                <p className="text-blue-300 text-sm font-semibold">{member.role}</p>
              </div>
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
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7043756914119208960"
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





