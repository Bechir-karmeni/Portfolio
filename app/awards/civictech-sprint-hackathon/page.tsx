"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CivicTechDetailPage() {
  const award = {
    place: "2nd Place",
    title: "CivicTech Sprint Hackathon",
    organization: "The World Bank, Ministry of Interior Tunisia, EY, Deloitte, Impact Partner",
    date: "December 2024",
    image: "/honors/CivicTech%20Sprint%20Hackathon.jpg",
    secondaryImage: "/honors/CivicTech%20Sprint%20Hackathon1.jpg",
    tertiaryImage: "/honors/CivicTech%20Sprint%20Hackathon3.jpg",
    shortDescription:
      "Secured 2nd place in a 48-hour hackathon focused on enhancing transparency, efficiency, and citizen engagement in public services.",
    fullDescription: `
      🥈 **Second Place at CivicTech Sprint Hackathon!**
      
      Over an intense 48 hours, our team had the incredible opportunity to participate in the CivicTech Sprint Hackathon, hosted by The World Bank Group and Ministry of Interior of Tunisia, in partnership with EY, Deloitte, and Impact Partner. This was more than a competition—it was a platform to create meaningful solutions for Tunisia's local governance and citizen participation.
      
      Our team proudly secured 2nd place with a solution focused on enhancing transparency, efficiency, and citizen engagement, aiming to transform how Tunisians interact with public services.
      
      We developed innovative solutions to improve transparency, efficiency, and citizen engagement in public administration and government services, demonstrating how technology can bridge the gap between citizens and their local governance.
    `,
    teamMembers: [
      { name: "Riadh Zekri", role: "Team Member" },
      { name: "Abir TABARKI", role: "Team Member" },
      { name: "Mohamed Ali Ben Ameur", role: "Team Member" },
      { name: "Touihri Amine", role: "Team Member" },
    ],
    organizers: [
      "Ichraf Jarray",
      "Ahlem GHAZOUANI",
      "Mehdi El Batti",
      "Khoubeib Djemai",
      "yesser kadhi",
    ],
    supporters: ["Deloitte", "EY", "Impact Partner"],
    judges: [
      "Helmi Soltani",
      "MTIMET Aymen",
      "Emna JEMMALI, PhD",
      "Dina Ranarifidy",
      "Ferid Kamel",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "APIs",
      "Blockchain",
      "Government Systems",
      "Real-time Analytics",
    ],
    keyFeatures: [
      "Enhanced citizen engagement portal",
      "Government transparency and accountability framework",
      "Public service efficiency optimization",
      "Real-time service tracking and notifications",
      "Secure citizen data handling",
      "Integration with public administration systems",
      "Evidence-based decision support for local governance",
    ],
    impact:
      "Created innovative solutions that demonstrate the potential to significantly improve government service delivery, enhance citizen participation in local governance, and promote transparency in public administration. This solution exemplifies how technology can empower citizens and strengthen democratic participation in Tunisia.",
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
        {/* Award Images Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden border-2 border-blue-400/60 shadow-2xl shadow-blue-600/20">
            <img src={award.image} alt={award.title} className="w-full h-72 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-400/60 shadow-2xl shadow-blue-600/20">
            <img
              src={award.secondaryImage}
              alt={`${award.title} Secondary`}
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-400/60 shadow-2xl shadow-blue-600/20">
            <img
              src={award.tertiaryImage}
              alt={`${award.title} Tertiary`}
              className="w-full h-72 object-cover"
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

        {/* Organizers & Mentors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Organizers & Mentors</h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-8 border border-blue-500/20 backdrop-blur-sm">
            <p className="text-white leading-relaxed mb-4">
              Special gratitude to the incredible mentors who created such an inspiring and
              collaborative environment:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {award.organizers.map((organizer, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <span className="text-white">{organizer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Supporting Partners</h2>
          <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-xl p-8 border border-emerald-500/20 backdrop-blur-sm">
            <p className="text-white leading-relaxed mb-4">
              Huge thanks to our supporting partners for their generous support and engagement. The
              trainings on design thinking, go-to-market strategy, and business planning were
              invaluable:
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {award.supporters.map((supporter, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                  <span className="text-white">{supporter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Judges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Judging Panel</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-blue-500/40 backdrop-blur-sm">
            <p className="text-white leading-relaxed mb-4">
              Deeply grateful for the distinguished jury members who recognized the value of our
              solution and provided valuable insights:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {award.judges.map((judge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-violet-400"></div>
                  <span className="text-white">{judge}</span>
                </div>
              ))}
            </div>
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

        {/* LinkedIn Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Community Recognition</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7275536366019506180"
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




