"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code, Users, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EHealthValley2ndDetailPage() {
  const award = {
    place: "3rd Place",
    title: "Tunisia e-Health Valley Hackathon (2nd Edition)",
    organization: "Opalia Recordati, Hackathon Tunisia",
    date: "September 28-29, 2023",
    image: "/honors/e-valley.jpg",
    image2: "/honors/e-valley2.jpg",
    image3: "/honors/e-valley3.jpg",
    image4: "/honors/e-valley4.jpg",
    shortDescription:
      "Created MediGate, a groundbreaking platform for cancer care management with remote patient monitoring capabilities.",
    fullDescription: `
      🥉 **Third Prize at Tunisia e-Health Valley Hackathon (2nd Edition)!**
      
      On September 28-29, our exceptional and dedicated team participated in the Tunisia e-Health Valley Hackathon. Today, I am ecstatic to announce that we secured the third prize! Our journey was an unforgettable experience of tireless collaboration and seamless teamwork to create something truly remarkable.
      
      We are incredibly proud to introduce "MediGate," our winning software solution. MediGate is a groundbreaking platform designed to revolutionize cancer care. It offers innovative features for the management of chemotherapy molecules and enables remote patient monitoring, ultimately enhancing the quality of care and support for cancer patients and healthcare providers.
      
      This hackathon was not just a competition; it was an invaluable learning experience. It pushed us to think outside the box, explore innovative ideas, and refine our technical skills. Our dedication, teamwork, and countless hours of hard work paid off in the form of this remarkable achievement.
      
      Additionally, we had the incredible opportunity to speak about our project live on the radio with Express FM on the day of the hackathon, further amplifying the impact of our innovation.
    `,
    teamMembers: [
      { name: "Koussay Messaoudi", role: "Team Member" },
      { name: "Nour Rouis", role: "Team Member" },
      { name: "Iheb Mejri", role: "Team Member" },
      { name: "Dr Riadh Zekri", role: "Team Member" },
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "Healthcare APIs",
      "Real-time Monitoring",
    ],
    keyFeatures: [
      "Comprehensive patient health record management",
      "Real-time remote patient monitoring",
      "Seamless doctor-patient communication",
      "Chemotherapy molecule management system",
      "Treatment tracking and scheduling",
      "Medical data analytics and insights",
    ],
    impact:
      "Created a comprehensive healthcare solution that demonstrates significant potential to improve cancer patient outcomes through better care coordination. MediGate showcases how innovative technology can revolutionize cancer care and enhance the quality of life for patients and healthcare providers.",
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
        {/* Award Images Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img src={award.image} alt={award.title} className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img
              src={award.image2}
              alt={`${award.title} Image 2`}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img
              src={award.image3}
              alt={`${award.title} Image 3`}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img
              src={award.image4}
              alt={`${award.title} Image 4`}
              className="w-full h-64 object-cover"
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
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-blue-500/60 shadow-lg shadow-blue-600/20">
            <div className="flex items-center gap-3 mb-2">
              <Building className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-blue-300">Organization</span>
            </div>
            <p className="text-white font-semibold text-sm">{award.organization}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-blue-500/60 shadow-lg shadow-blue-600/20">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-blue-300">Date</span>
            </div>
            <p className="text-white font-semibold">{award.date}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 space-y-4 shadow-lg">
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
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-5 border-2 border-blue-400/60 flex items-start gap-3 shadow-md hover:shadow-lg hover:shadow-blue-600/30 transition-all"
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

        {/* Media Coverage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Radio className="h-6 w-6" />
            Media Coverage
          </h2>
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-lg p-6 border border-amber-600/30">
            <div className="flex items-start gap-3">
              <Radio className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold">Express FM - Radio Interview</p>
                <p className="text-sm text-amber-200/70 mt-1">
                  Live broadcast featuring our MediGate project on the day of the hackathon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Community Recognition</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7114157013193887744"
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
            <p className="text-white leading-relaxed text-lg">{award.impact}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
