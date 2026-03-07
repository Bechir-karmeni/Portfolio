"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AwardDetailPage() {
  const award = {
    place: "2nd Place",
    title: "AI Impact Challenge",
    organization: "American Corner Sousse",
    date: "January 2024",
    image: "/ai-impact-challenge.jpg",
    shortDescription:
      "Runner-up in the AI Impact Challenge, focusing on creating AI solutions that address real-world social and environmental challenges.",
    fullDescription: `
      Participated in a challenge focused on using AI for social good. Our team developed an environmental monitoring system that uses satellite imagery and machine learning to track deforestation, water pollution, and urban sprawl.
      
      The system provides automated alerts and detailed analytics to help environmental organizations and policymakers make data-driven decisions. Our solution processed over 10,000 satellite images and achieved 90% accuracy in change detection.
    `,
    technologies: [
      "Satellite Imagery",
      "Environmental AI",
      "Change Detection",
      "Geographic Information Systems",
      "PyTorch",
    ],
    keyFeatures: [
      "Satellite imagery processing and analysis",
      "Machine learning for environmental monitoring",
      "Real-time deforestation tracking",
      "Water pollution detection",
      "Urban sprawl assessment",
      "Automated alert system",
    ],
    impact:
      "Created an innovative environmental monitoring solution that leverages AI to detect and track environmental changes, providing critical insights for conservation efforts and policy-making.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Header Navigation */}
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* Award Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
          <img src={award.image} alt={award.title} className="w-full h-96 object-cover" />
        </div>

        {/* Award Header */}
        <div className="mb-10 border-b border-blue-200 pb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-2 border-blue-300 font-bold">
            🏆 {award.place}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-black via-blue-900 to-blue-700 bg-clip-text text-transparent mb-4">
            {award.title}
          </h1>
          <p className="text-lg text-black font-medium">{award.shortDescription}</p>
        </div>

        {/* Key Information Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
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

        {/* Full Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Project Overview</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 space-y-4 shadow-lg">
            {award.fullDescription.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-white leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Key Features</h2>
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

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Code className="h-6 w-6" />
            Technologies Used
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

        {/* Impact */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-black">Impact & Legacy</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-white leading-relaxed text-lg font-medium">{award.impact}</p>
          </div>
        </div>
      </div>
    </main>
  );
}





