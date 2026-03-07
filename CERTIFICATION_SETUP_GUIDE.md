/\*\*

- INSTRUCTIONS FOR CREATING REMAINING CERTIFICATION DETAIL PAGES
-
- You already have 3 template pages created:
- 1.  practical-computer-vision-with-pytorch (Blue theme - Machine Learning)
- 2.  professional-data-analyst-certificate (Blue theme - Data Science)
- 3.  pmp-exam-prep-course (Green theme - Project Management)
-
- QUICK STEPS FOR EACH REMAINING CERTIFICATION:
- ================================================
-
- 1.  Use the certifications-data.ts file in /lib folder
- 2.  Each certification has everything you need (title, description, learnings, skills)
- 3.  Create folder: /app/certifications/[slugified-cert-name]/page.tsx
- 4.  Use the template below, replacing:
- - cert object with data from certifications-data.ts
- - Color theme based on category (see theme mapping below)
-
- FOLDER NAMING (Slugified):
- ==========================
- Replace:
- - Spaces with hyphens: "Machine Learning" → "machine-learning"
- - Remove special chars: "(Part 2)" removed, "®™©" removed
- - Lowercase everything
-
- Examples:
- - "Practical Computer Vision with PyTorch" → practical-computer-vision-with-pytorch
- - "Associate Data Scientist" → associate-data-scientist
- - "Scrum Fundamentals Certified (SFC)" → scrum-fundamentals-certified-sfc
-
- COLOR THEMES BY CATEGORY:
- ==========================
- Machine Learning & AI: Blue (from-blue-600 to-blue-700)
- Data Science & Analytics: Blue (from-blue-600 to-blue-700)
- Data Engineering & Tools: Indigo (from-indigo-600 to-indigo-700)
- Statistics & Techniques: Purple (from-purple-600 to-purple-700)
- Project Management: Green (from-green-600 to-green-700)
- Business & Leadership: Amber (from-amber-600 to-amber-700)
- Problem Solving: Red (from-red-600 to-red-700)
-
- COPY TEMPLATE:
- ==============
- After copying, just update these variables with data from certifications-data.ts:
- \*/

// Template copy the code below and paste into new page.tsx file
/\*
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Award, Calendar, Building2, BookOpen } from "lucide-react";

export default function CertificationDetail() {
const router = useRouter();

const cert = {
title: "[TITLE FROM DATA]",
issuer: "[ISSUER FROM DATA]",
date: "[DATE FROM DATA]",
category: "[CATEGORY FROM DATA]",
description: "[DESCRIPTION FROM DATA]",
skills: [/* SKILLS ARRAY FROM DATA */],
learnings: [/* LEARNINGS ARRAY FROM DATA */],
};

// Change colors based on category:
const themeColor = "blue"; // Change to: indigo, purple, green, amber, red based on category
const colorClasses = {
header: `bg-gradient-to-r from-${themeColor}-600 to-${themeColor}-700`,
accent: `text-${themeColor}-600`,
bg: `bg-${themeColor}-50`,
border: `border-${themeColor}-200`,
badge: `bg-${themeColor}-100 text-${themeColor}-700 hover:bg-${themeColor}-200`,
button: `bg-${themeColor}-600 hover:bg-${themeColor}-700`,
};

return (
<div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4">
<div className="max-w-4xl mx-auto">
{/_ Back Button _/}
<button
onClick={() => router.push("/#certifications")}
className="flex items-center gap-2 px-4 py-2 text-gray-900 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-600 mb-8 transition-all group" >
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
              <p className="text-gray-700 leading-relaxed text-lg">
                {cert.description}
              </p>
            </div>

            {/* Key Learnings */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <div className="grid gap-3">
                {cert.learnings.map((learning, idx) => (
                  <div key={idx} className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
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
                [ADD A RELEVANT STATEMENT ABOUT THIS CERTIFICATION]
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
\*/

// COMPLETE LIST OF CERTIFICATIONS TO CREATE:
// ==========================================

const remainingCertifications = [
// Machine Learning & AI (6 more needed)
"unsupervised-learning-in-python",
"cluster-analysis-in-python",
"machine-learning-with-tree-based-models-in-python",

// Data Science & Analytics (4 more needed)
"associate-data-scientist",
"introduction-to-power-bi",
"introduction-to-data-visualization-with-matplotlib",
"introduction-to-data-visualization-with-seaborn",
"intermediate-data-visualization-with-seaborn",

// Data Engineering & Tools (7 needed)
"cleaning-data-in-python",
"analyzing-police-activity-with-pandas",
"introduction-to-importing-data-in-python",
"intermediate-importing-data-in-python",
"joining-data-with-pandas",
"working-with-dates-and-times-in-python",

// Statistics (3 needed)
"statistical-thinking-in-python-part-2",
"extreme-gradient-boosting-with-xgboost",
"linear-classifiers-in-python",
"dimensionality-reduction-in-python",

// Project Management (3 more needed)
"scrum-fundamentals-certified-sfc",
"scrum-for-operations-and-devops-fundamentals-certified-sodfc",
"pmi-citizen-developer-business-architect-cdba-introduction",
"basics-of-scrum-course-certificate",
"six-sigma-yellow-belt-ssyb",

// Business & Leadership (2 more needed)
"marketing-strategy-fundamentals-scms-f",
"negotiation-associate-certified",
"advanced-program-in-entrepreneurship",

// Problem Solving (0 more - already has 1)
// Total: ~23 more pages to create (3 already done + 23 = 26 total)
];

export default remainingCertifications;
