"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Trophy,
  Calendar,
  Building,
  Users,
  Target,
  Code,
  ExternalLink,
  Radio,
  Newspaper,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MutualHackDetailPage() {
  const award = {
    place: "1st Place",
    title: "MutualHack by MAE 2.0",
    organization: "MAE ASSURANCES and MAZAM",
    date: "May 2025",
    image: "/honors/MutualHack%20by%20MAE%202.0%202.jpg",
    secondaryImage: "/honors/MutualHack%20by%20MAE%202.0.jpg",
    shortDescription:
      "Won the first prize for developing a centralized HR management platform promoting employee well-being and mental health with scientifically approved psychometric tools.",
    fullDescription: `
      🥇 **First Place at MutualHack by MAE 2.0!**
      
      Proud to announce that our team won the first prize at the MutualHack Hackathon, organized by MAE ASSURANCES and MAZAM as part of the MAE 2.0 initiative. This prestigious event provided an exceptional opportunity to work on innovative HR solutions.
      
      Our project focuses on a comprehensive centralized management platform that revolutionizes employee well-being and mental health initiatives. The platform integrates scientifically approved psychometric tools to provide accurate mental health assessments and personalized wellness recommendations for employees.
      
      The platform features real-time analytics dashboards for HR departments to track well-being metrics across the entire organization, enabling data-driven decision-making for employee wellness programs. It enables seamless HR department integration to support organizational mental health strategies.
    `,
    teamMembers: [
      { name: "Abir TABARKI", role: "Team Member" },
      { name: "Riadh Zekri", role: "Team Member" },
    ],
    supporters: [
      "Besma Ismail (MAE)",
      "Yasmin Kacem",
      "Dhia Ayari",
      "Zarrouk Lassaad",
      "Karim Gharbi",
      "Helmi JEBALI",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Psychometric APIs",
      "Real-time Analytics",
      "HR Integration",
    ],
    keyFeatures: [
      "Centralized employee wellness management system",
      "Scientifically-backed psychometric assessments",
      "Real-time mental health analytics & reporting",
      "Personalized wellness dashboards for employees",
      "HR analytics & organizational metrics",
      "Seamless HR system integration",
      "Data-driven wellness program insights",
    ],
    impact:
      "Created an innovative solution that demonstrates the intersection of HR technology and mental health. The platform has the potential to significantly improve employee well-being awareness and support organizational mental health strategies across companies.",
    mediaLinks: [
      {
        title: "Radio Podcast - Deep Mind IA au service de la santé",
        url: "https://radioexpressfm.com/ar/podcast/deep-mind-lia-au-service-de-la-sante-avec-bechir-karmeni-equipe-deep-mind-1er-prix-du-mutualhack-2025/",
        icon: Radio,
      },
      {
        title: "ilBoursa - MAE ASSURANCES celebre les lauréats",
        url: "https://www.ilboursa.com/marches/mae-assurances-celebre-les-laureats-de-la-deuxieme-edition-de-son-mutualhack_52456",
        icon: Newspaper,
      },
      {
        title: "Managers.tn - MutualHack 2025: Innovation Challenge",
        url: "https://managers.tn/2025/05/05/la-mae-assurances-annonce-la-2%e1%b5%89-edition-du-mutualhack/",
        icon: Newspaper,
      },
      {
        title: "Managers.tn - Des étudiants transforment leurs idées en startups",
        url: "https://managers.tn/2025/05/05/mutualhack-2025-des-etudiants-transforment-leurs-idees-en-startups-en-48h/",
        icon: Newspaper,
      },
    ],
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
        {/* Award Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-5 border-2 border-blue-500/50 shadow-md hover:shadow-lg hover:shadow-blue-600/20 transition-all hover:-translate-y-1"
              >
                <p className="text-white font-bold text-lg">{member.name}</p>
                <p className="text-blue-300 text-sm font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporters & Judges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Special Thanks</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-white leading-relaxed mb-6 text-lg font-medium">
              Big thanks to everyone who guided, challenged, and supported us throughout this
              journey:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {award.supporters.map((supporter, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <span className="text-white font-medium">{supporter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Target className="h-6 w-6" />
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {award.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-5 border-2 border-blue-400/60 flex items-start gap-3 shadow-md hover:shadow-lg hover:shadow-blue-600/30 transition-all"
              >
                <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <p className="text-gray-800 font-medium">{feature}</p>
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

        {/* Media Coverage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Media Coverage</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {award.mediaLinks.map((media, idx) => {
              const IconComponent = media.icon;
              return (
                <a
                  key={idx}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-6 border-2 border-blue-500/50 hover:border-blue-400/100 transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <IconComponent className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold group-hover:text-blue-300 transition-colors leading-snug">
                        {media.title}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-blue-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* LinkedIn Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Community Recognition</h2>
          <div className="flex justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325123888932151298"
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
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-gray-800 leading-relaxed text-lg font-medium">{award.impact}</p>
          </div>
        </div>
      </div>
    </main>
  );
}



