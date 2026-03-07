"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CyberbendersDetailPage() {
  const award = {
    place: "3rd Place",
    title: "CYBERBENDERS AI CHALLENGE",
    organization: "EPI DIGITAL SCHOOL",
    date: "November 2023",
    image: "/honors/CYBERBENDERS%20AI.jpg",
    secondaryImage: "/honors/CYBERBENDERS%20AI.jpg",
    shortDescription:
      "Triumphed in an extraordinary AI and Cybersecurity Hackathon, showcasing innovation and mastery of cutting-edge technologies.",
    fullDescription: `
      🥉 **Third Prize at CYBERBENDERS AI CHALLENGE!**
      
      Thrilled to share that our team triumphed at the CYBERBENDERS AI CHALLENGE, securing 3rd prize in this extraordinary AI and Cybersecurity Hackathon! This incredible competition brought together brilliance and excitement, combining innovation with cutting-edge security technologies.
      
      **🌐 Unlock the Future: Where Artificial Intelligence Meets Cybersecurity!**
      
      Participating in this challenge was an incredible journey through AI adventures and cybersecurity quests. The competition catered to both beginners and tech wizards, offering immersive experiences from playing the role of a digital detective to defending virtual networks. The entire experience was a fusion of innovation and enjoyment, showcasing the power of collaboration and the thrill of mastering cutting-edge technologies.
      
      We demonstrated advanced capabilities in combining AI and cybersecurity to create intelligent threat detection systems and address modern security challenges.
    `,
    teamMembers: [
      { name: "Fradj Dorbez", role: "Team Member" },
      { name: "Koussay Messaoudi", role: "Team Member" },
      { name: "Nour Rouis", role: "Team Member" },
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "Cybersecurity Tools",
      "AI/Deep Learning",
      "Network Security",
    ],
    keyFeatures: [
      "AI-powered threat detection system",
      "Anomaly detection using machine learning",
      "Real-time security monitoring and alerts",
      "Advanced pattern recognition",
      "Automated security response mechanisms",
      "Neural network-based classification",
    ],
    impact:
      "Demonstrated advanced capabilities in combining artificial intelligence and cybersecurity to create intelligent solutions that address modern security challenges. This victory showcases the potential of AI-driven cybersecurity systems to revolutionize digital defense and threat prevention.",
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
        {/* Award Images */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden border-2 border-blue-400/60 shadow-2xl shadow-blue-600/20">
            <img src={award.image} alt={award.title} className="w-full h-80 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-400/60 shadow-2xl shadow-blue-600/20">
            <img
              src={award.secondaryImage}
              alt={`${award.title} Secondary`}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="mb-8">
          <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
            🥉 {award.place}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-blue-900 to-blue-700 bg-clip-text text-transparent border-b border-blue-200 pb-8">
            {award.title}
          </h1>
          <p className="text-lg text-black font-medium">{award.shortDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border-2 border-blue-400/60 backdrop-blur-sm">
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
          <div className="grid md:grid-cols-3 gap-4">
            {award.teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-4 border-2 border-blue-400/60"
              >
                <p className="text-white font-semibold">{member.name}</p>
                <p className="text-sm text-blue-300">{member.role}</p>
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
                className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-lg p-4 border border-emerald-500/20 flex items-start gap-3"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <p className="text-white">{feature}</p>
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
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7134620921138425856"
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
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-blue-500/40 backdrop-blur-sm">
            <p className="text-white leading-relaxed text-lg">{award.impact}</p>
          </div>
        </div>
      </div>
    </main>
  );
}




