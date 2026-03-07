"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Award, Calendar, Building2, BookOpen } from "lucide-react";

export default function CertificationDetail() {
  const router = useRouter();

  const cert = {
    title: "Professional Data Analyst Certificate",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    description:
      "Industry-recognized, portfolio-building credential for experienced professionals. Requires two timed exams (DA101, DA201) and a practical, scenario-based project. Validates advanced skills in SQL, Python/R, and data storytelling, focusing on solving complex business problems.",
    skills: [
      "SQL",
      "Python",
      "Data Analysis",
      "Data Visualization",
      "Business Intelligence",
      "Statistical Analysis",
      "Power BI",
    ],
    learnings: [
      "Advanced SQL queries for complex data manipulation",
      "Statistics and hypothesis testing for data validation",
      "Python/R for advanced data analysis and modeling",
      "Creating compelling data visualizations",
      "Building business intelligence solutions",
      "Data storytelling and communication",
      "Real-world scenario-based problem solving",
      "Data-driven decision making frameworks",
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-white">
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
                <BookOpen className="w-6 h-6 text-blue-600" />
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
                    className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <div className="flex-shrink-0 text-blue-600 font-bold">{idx + 1}.</div>
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
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                This professional certification validates advanced data analysis skills and the
                ability to deliver business insights through data.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
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
