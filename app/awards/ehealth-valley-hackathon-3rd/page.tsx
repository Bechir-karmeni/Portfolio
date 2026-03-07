"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EHealthValley3rdDetailPage() {
  const award = {
    place: "3rd Place",
    title: "Tunisia e-Health Valley Hackathon (3rd Edition)",
    organization:
      "OPALIA RECORDATI, Syndicat des Pharmaciens d'Officine de Tunisie, Forum de l'Officine",
    date: "September 2024",
    image: "/honors/third%20edition%20of%20the%20Tunisia%20e-Health%20Valley%20Hackathon.jpg",
    secondaryImage:
      "/honors/third%20edition%20of%20the%20Tunisia%20e-Health%20Valley%20Hackathon1.jpg",
    shortDescription:
      "Developed AsthmaSafe, a comprehensive software solution designed to enhance asthma management through innovative digital tools.",
    fullDescription: `
      🥉 **Third Place at Tunisia e-Health Valley Hackathon (3rd Edition)!**
      
      Incredible experience participating in one of the biggest HealthTech events of the year at the 7th edition of the Forum de l'Officine. Our team collaborated with amazing teammates to develop AsthmaSafe, an innovative digital healthcare solution.
      
      AsthmaSafe is a comprehensive software solution designed to enhance asthma management through innovative digital tools, providing patients and healthcare providers with real-time monitoring, personalized care plans, and seamless communication capabilities.
      
      The platform demonstrates the potential of digital health solutions to significantly improve patient outcomes and respiratory health management in Tunisia's healthcare ecosystem.
    `,
    teamMembers: [
      { name: "Riadh Zekri", role: "Team Member" },
      { name: "Koussay Messaoudi", role: "Team Member" },
      { name: "Iheb Mejri", role: "Team Member" },
      { name: "Rania Rekik", role: "Team Member" },
    ],
    organizers: [
      "OPALIA RECORDATI",
      "Syndicat des Pharmaciens d'Officine de Tunisie",
      "Hackathon Tunisia",
    ],
    technologies: [
      "React",
      "Node.js",
      "Healthcare APIs",
      "Data Analytics",
      "Mobile Development",
      "Real-time Monitoring",
    ],
    keyFeatures: [
      "Real-time asthma monitoring and tracking",
      "Personalized treatment and care plans",
      "Seamless patient-provider communication",
      "Health data analytics and insights",
      "Mobile-first responsive design",
      "Integration with pharmacy systems",
      "Emergency alert notifications",
    ],
    impact:
      "Created a scalable healthcare solution that demonstrates the potential to significantly improve asthma management for thousands of patients. AsthmaSafe showcases how digital innovation in healthcare can empower patients and healthcare providers in Tunisia's medical ecosystem.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{award.title}</h1>
          <p className="text-white text-lg">{award.shortDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border-2 border-blue-400/60 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <Building className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-blue-300">Organization</span>
            </div>
            <p className="text-white font-semibold text-sm">{award.organization}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border-2 border-blue-400/60 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-blue-300">Date</span>
            </div>
            <p className="text-white font-semibold">{award.date}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl p-8 border-2 border-blue-400/60 backdrop-blur-sm space-y-4">
            {award.fullDescription.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-white leading-relaxed">
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
                <p className="text-sm text-blue-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Organizers & Partners</h2>
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-8 border border-green-500/20 backdrop-blur-sm">
            <p className="text-white leading-relaxed mb-4">
              Huge thanks to our organizers for creating such an inspiring HealthTech ecosystem:
            </p>
            <div className="space-y-2">
              {award.organizers.map((organizer, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-white">{organizer}</span>
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
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7246443638090592258"
              height="625"
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




