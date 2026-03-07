"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Award, Calendar, Building2, BookOpen } from "lucide-react";

export default function CertificationDetail() {
  const router = useRouter();

  const cert = {
    title: "PMP EXAM PREP COURSE",
    issuer: "Ben Hamouda Consulting",
    date: "March 2025",
    category: "Project Management",
    description:
      "35-Hour PMP Training with Ahmed Ben Hamouda, PMP®, SCT®, SAFe®. Comprehensive deep dive into essential project management methodologies covering project planning, execution, and risk management. This training brings you one step closer to PMP certification.",
    skills: [
      "PMP",
      "Project Management",
      "PMBOK",
      "Risk Management",
      "Stakeholder Management",
      "Team Leadership",
      "Agile",
    ],
    learnings: [
      "PMBOK Guide principles and knowledge areas",
      "Project initiation and planning methodologies",
      "Scope management and WBS creation",
      "Schedule and resource planning",
      "Budget estimation and cost management",
      "Quality assurance and control",
      "Risk identification and mitigation strategies",
      "Stakeholder engagement and communication",
      "Professional and social responsibility",
      "Change management and integration",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push("/#certifications")}
          className="flex items-center gap-2 px-4 py-2 text-gray-900 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-600 mb-8 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Certifications</span>
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-12 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-lg">
                <Award className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{cert.title}</h1>
                <div className="flex flex-wrap gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {cert.date}
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
              {cert.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-green-600" />
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{cert.description}</p>
            </div>

            {/* Key Learnings */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <div className="grid gap-3">
                {cert.learnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                  >
                    <div className="flex-shrink-0 text-green-600 font-bold">{idx + 1}.</div>
                    <div className="text-gray-700">{learning}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Topics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Technologies & Skills</h2>
              <div className="flex flex-wrap gap-3">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm hover:bg-green-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                This comprehensive training prepares you for PMP certification and leadership roles
                in project management.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                  View Credential
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
