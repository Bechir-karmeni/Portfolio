"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Award, Calendar, Building2, BookOpen } from "lucide-react";
import certificationDetails from "@/lib/certification-details";

// All certifications data
const allCertifications = [
  {
    title: "MedoPad",
    issuer: "Personal Project",
    date: "Sep 2023 – Jan 2024",
    category: "Machine Learning & AI",
    skills: ["Python", "AI", "CNN", "VGG-16", "Random Forest", "XGBoost", "Healthcare"],
    video: "/Certifs/MedoPad.webm",
    report: "/Certifs/Report MedoPad.pdf",
    github: "https://github.com/Bechir-karmeni/MedoPad",
    description: `🩺 MedoPad\n\nSep 2023 – Jan 2024\n\n🎯Objective: The primary objective of MedoPad project is to create a unified, AI-driven platform that facilitates the detection of multiple diseases, offering instant home-based testing. This project aims to transform healthcare by making diagnostic processes more accessible, efficient, and prompt, empowering individuals to manage their health directly from their homes.\n\n💡Features : 1.𝙐𝙣𝙞𝙛𝙞𝙚𝙙 𝘿𝙞𝙨𝙚𝙖𝙨𝙚 𝘿𝙚𝙩𝙚𝙘𝙩𝙞𝙤𝙣 𝙋𝙡𝙖𝙩𝙛𝙤𝙧𝙢 : Combines the capabilities to detect seven different diseases through a single interface, simplifying user interaction and streamlining diagnostics.\n2.𝘾𝙪𝙨𝙩𝙤𝙢 𝘼𝙄 𝙈𝙤𝙙𝙚𝙡𝙨 :\n𝘾𝙪𝙨𝙩𝙤𝙢-𝙢𝙖𝙙𝙚 𝘾𝙉𝙉𝙨: Specifically designed for high accuracy in detecting COVID-19, brain tumors, and pneumonia.\n𝙑𝙂𝙂-16 𝙐𝙩𝙞𝙡𝙞𝙯𝙖𝙩𝙞𝙤𝙣 : Employed for feature extraction in brain tumor detection to enhance diagnostic precision.\n𝙍𝙖𝙣𝙙𝙤𝙢 𝙁𝙤𝙧𝙚𝙨𝙩 : Used for breast cancer and diabetes detection, providing robust predictive power.\n𝐗𝐆𝐁𝐨𝐨𝐬𝐭 : Implemented for heart disease detection, known for its effectiveness in handling diverse datasets.\n3.𝙃𝙞𝙜𝙝 𝘼𝙘𝙘𝙪𝙧𝙖𝙘𝙮 𝙍𝙖𝙩𝙚𝙨 : The AI models have been tested to deliver high accuracy rates across various diseases, demonstrating their effectiveness in medical diagnostics.\n4.𝐈𝐧𝐬𝐭𝐚𝐧𝐭 𝐓𝐞𝐬𝐭 𝐑𝐞𝐬𝐪𝐥𝐭𝐬 : Delivers diagnostic results instantly, making the testing process quick and efficient, which is crucial for early disease management and treatment planning.\n5.𝐑𝐞𝐦𝐨𝐭𝐞 𝐀𝐜𝐜𝐞𝐬𝐬𝐢𝐛𝐢𝐥𝐢𝐭𝐲 :Allows users to perform tests and receive results from the comfort of their homes, reducing the need for physical clinical visits.\n\nThese features highlight the project's innovation in integrating AI technology into healthcare, providing a comprehensive, efficient, and user-friendly medical diagnostic tool.\n\nSkills: Python\n\nGitHub link :https://github.com/Bechir-karmeni/MedoPad`,
  },
  {
    title: "Practical Computer Vision with PyTorch",
    issuer: "Hasso Plattner Institute",
    date: "May 2025",
    category: "Machine Learning & AI",
    skills: ["PyTorch", "Computer Vision", "CNN", "Vision Transformers", "CLIP"],
  },
  {
    title: "Unsupervised Learning in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    skills: ["Python", "Clustering", "scikit-learn", "SciPy"],
  },
  {
    title: "Cluster Analysis in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    skills: ["Python", "Clustering", "K-means", "SciPy"],
  },
  {
    title: "Machine Learning with Tree-Based Models in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    skills: ["Decision Trees", "Ensemble Methods", "scikit-learn"],
  },
  {
    title: "Machine Learning for Time Series Data in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    skills: ["Time Series", "Feature Engineering", "Forecasting"],
  },
  {
    title: "Supervised Learning with scikit-learn",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    skills: ["scikit-learn", "Supervised Learning", "Classification"],
  },
  {
    title: "Getting Started with DeepStream for Video Analytics on Jetson Nano",
    issuer: "NVIDIA",
    date: "2024",
    category: "Machine Learning & AI",
    skills: ["NVIDIA DeepStream", "Video Analytics", "Edge Computing"],
  },
  {
    title: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA",
    date: "October 2021",
    category: "Machine Learning & AI",
    skills: ["AI", "Deep Learning", "Jetson Nano"],
  },
  {
    title: "Associate Data Scientist",
    issuer: "DataCamp",
    date: "March 2022",
    category: "Data Science & Analytics",
    skills: ["Data Science", "EDA", "Python", "SQL"],
  },
  {
    title: "Professional Data Analyst Certificate",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    skills: ["Data Analysis", "SQL", "Python", "Data Storytelling"],
  },
  {
    title: "Introduction to Power BI",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    skills: ["Power BI", "Power Query", "Data Visualization"],
  },
  {
    title: "Introduction to Data Visualization with Matplotlib",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    skills: ["Matplotlib", "Data Visualization", "Python"],
  },
  {
    title: "Introduction to Data Visualization with Seaborn",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    skills: ["Seaborn", "Data Visualization", "Python"],
  },
  {
    title: "Intermediate Data Visualization with Seaborn",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    skills: ["Seaborn", "Data Visualization"],
  },
  {
    title: "Cleaning Data in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    skills: ["Data Cleaning", "Python", "pandas"],
  },
  {
    title: "Analyzing Police Activity with pandas",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    skills: ["pandas", "Data Analysis", "Data Manipulation"],
  },
  {
    title: "Introduction to Importing Data in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    skills: ["Python", "Data Import", "SQL"],
  },
  {
    title: "Intermediate Importing Data in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    skills: ["Python", "APIs", "Web Scraping"],
  },
  {
    title: "Joining Data with pandas",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    skills: ["pandas", "Data Joining", "Data Manipulation"],
  },
  {
    title: "Working with Dates and Times in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    skills: ["Python", "pandas", "DateTime"],
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "2024",
    category: "Data Engineering & Tools",
    skills: ["SQL", "Query Optimization", "Window Functions"],
  },
  {
    title: "Statistical Thinking in Python (Part 2)",
    issuer: "DataCamp",
    date: "2024",
    category: "Statistics & Advanced Techniques",
    skills: ["Statistics", "Python", "Hypothesis Testing"],
  },
  {
    title: "Extreme Gradient Boosting with XGBoost",
    issuer: "DataCamp",
    date: "2024",
    category: "Statistics & Advanced Techniques",
    skills: ["XGBoost", "Gradient Boosting", "scikit-learn"],
  },
  {
    title: "Linear Classifiers in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Statistics & Advanced Techniques",
    skills: ["Logistic Regression", "SVM", "scikit-learn"],
  },
  {
    title: "Dimensionality Reduction in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Statistics & Advanced Techniques",
    skills: ["Dimensionality Reduction", "PCA", "Feature Selection"],
  },
  {
    title: "PMP EXAM PREP COURSE",
    issuer: "Ben Hamouda Consulting",
    date: "March 2025",
    category: "Project Management",
    skills: ["PMP", "Project Management", "Risk Management"],
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "2024",
    category: "Project Management",
    skills: ["Scrum", "Agile", "Team Collaboration"],
  },
  {
    title: "Scrum for Operations and DevOps Fundamentals Certified (SODFC)",
    issuer: "SCRUMstudy",
    date: "2024",
    category: "Project Management",
    skills: ["Scrum", "DevOps", "CI/CD"],
  },
  {
    title: "PMI Citizen Developer™ Business Architect (CDBA) Introduction",
    issuer: "Project Management Institute",
    date: "2024",
    category: "Project Management",
    skills: ["PMI", "Business Architecture", "Governance"],
  },
  {
    title: "Basics of Scrum Course Certificate",
    issuer: "Scrum Methodology",
    date: "2024",
    category: "Project Management",
    skills: ["Scrum", "Agile", "Team Management"],
  },
  {
    title: "Six Sigma Yellow Belt (SSYB)",
    issuer: "6sigmastudy",
    date: "2024",
    category: "Project Management",
    skills: ["Six Sigma", "Quality Management", "Process Improvement"],
  },
  {
    title: "Marketing Strategy Fundamentals (SCMS-F)",
    issuer: "SMstudy",
    date: "March 2025",
    category: "Business & Leadership",
    skills: ["Marketing Strategy", "Market Analysis", "Business Planning"],
  },
  {
    title: "Negotiation Associate Certified",
    issuer: "NGstudy",
    date: "2024",
    category: "Business & Leadership",
    skills: ["Negotiation", "Communication", "Stakeholder Management"],
  },
  {
    title: "Advanced Program in Entrepreneurship",
    issuer: "Institute of Management, Technology and Finance",
    date: "2024",
    category: "Business & Leadership",
    skills: ["Entrepreneurship", "Business Development", "Innovation"],
  },
  {
    title: "Problem Solving Intermediate",
    issuer: "HackerRank",
    date: "August 2022",
    category: "Problem Solving",
    skills: ["Problem Solving", "Data Structures", "Algorithms"],
  },
];

// ModalImage component for full-size viewing
function ModalImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain max-h-96 bg-gray-100 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-3xl max-h-[90vh] rounded-2xl border-4 border-green-300 shadow-2xl bg-white"
          />
        </div>
      )}
    </>
  );
}

export default function CertificationDetail() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  const cert = allCertifications.find((c) => slugify(c.title) === slug) as any;
  // Use custom description for MedoPad
  const fullDescription =
    slug === "medopad"
      ? cert?.description
      : certificationDetails[slug] || cert?.skills.join(", ") || "";

  if (!cert) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Certification Not Found</h1>
          <button
            onClick={() => router.push("/#certifications")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Back to Certifications
          </button>
        </div>
      </div>
    );
  }

  const colorScheme: Record<
    string,
    { header: string; accent: string; bg: string; border: string; badge: string; button: string }
  > = {
    "Machine Learning & AI": {
      header: "from-blue-600 to-blue-700",
      accent: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    "Data Science & Analytics": {
      header: "from-cyan-600 to-cyan-700",
      accent: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      badge: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200",
      button: "bg-cyan-600 hover:bg-cyan-700",
    },
    "Data Engineering & Tools": {
      header: "from-indigo-600 to-indigo-700",
      accent: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      badge: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
      button: "bg-indigo-600 hover:bg-indigo-700",
    },
    "Statistics & Advanced Techniques": {
      header: "from-purple-600 to-purple-700",
      accent: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      badge: "bg-purple-100 text-purple-700 hover:bg-purple-200",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    "Project Management": {
      header: "from-green-600 to-green-700",
      accent: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      badge: "bg-green-100 text-green-700 hover:bg-green-200",
      button: "bg-green-600 hover:bg-green-700",
    },
    "Business & Leadership": {
      header: "from-amber-600 to-amber-700",
      accent: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-700 hover:bg-amber-200",
      button: "bg-amber-600 hover:bg-amber-700",
    },
    "Problem Solving": {
      header: "from-red-600 to-red-700",
      accent: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      badge: "bg-red-100 text-red-700 hover:bg-red-200",
      button: "bg-red-600 hover:bg-red-700",
    },
  };

  const colors = colorScheme[cert.category] || colorScheme["Machine Learning & AI"];

  function getImageExt(title: string) {
    if (slug === "scrum-fundamentals-certified-sfc") return "custom";
    const pngCerts = [
      "Getting Started with DeepStream for Video Analytics on Jetson Nano",
      "Getting Started with AI on Jetson Nano",
      "Basics of Scrum Course Certificate",
      "PMI Citizen Developer™ Business Architect (CDBA) Introduction",
    ];
    return pngCerts.some((c) => slugify(c) === slug) ? "png" : "jpg";
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => router.push("/#certifications")}
          className="flex items-center gap-2 px-4 py-2 text-white hover:text-blue-400 border border-white/20 hover:border-white/40 rounded-lg mb-12 transition-all group backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Certifications</span>
        </button>

        {/* Hero Section */}
        <div
          className={`bg-gradient-to-br ${colors.header} rounded-3xl p-12 mb-12 shadow-2xl relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30">
                <Award className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tight">
                  {cert.title}
                </h1>
                <div className="flex flex-col sm:flex-row gap-6 text-white/90">
                  <div className="flex items-center gap-3 text-lg">
                    <Building2 className="w-6 h-6 flex-shrink-0" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <Calendar className="w-6 h-6 flex-shrink-0" />
                    <span className="font-medium">{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold border border-white/30 hover:bg-white/30 transition-all">
                {cert.category}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Certificate Media for MedoPad */}
          {slug === "medopad" ? (
            <div className="lg:col-span-2 space-y-6">
              {/* Video Section */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 shadow-xl">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                  <video controls className="w-full h-full">
                    <source src={cert.video} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description Section */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <BookOpen className={`w-8 h-8 ${colors.accent}`} />
                  Project Overview
                </h3>
                <p className="text-white/80 leading-relaxed whitespace-pre-line text-lg">
                  {fullDescription}
                </p>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 overflow-hidden shadow-xl hover:border-white/20 transition-all duration-300">
                <div className="relative rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-white/10 to-white/5 p-4">
                  {slug === "scrum-fundamentals-certified-sfc" ? (
                    <ModalImage src="/certifications/Scrum Fundamentals.jpg" alt={cert.title} />
                  ) : (
                    <img
                      src={`/certifications/${slug}.${getImageExt(cert.title)}`}
                      alt={cert.title}
                      className="w-full h-auto object-contain rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Sidebar */}
          <div className="space-y-6">
            {/* PDF Report Card (for MedoPad) */}
            {slug === "medopad" && cert?.report && (
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-blue-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Project Report</h3>
                <a
                  href={cert.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 mb-3"
                >
                  <span>📄</span>
                  <span>View PDF Report</span>
                </a>
                <p className="text-white/60 text-sm">Open the project report in a new window</p>
              </div>
            )}

            {/* GitHub Link Card */}
            {slug === "medopad" && cert?.github && (
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-green-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">GitHub Repository</h3>
                <a
                  href={cert.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
                >
                  <span>🔗</span>
                  <span>View Code</span>
                </a>
              </div>
            )}

            {/* Skills Card */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {cert.skills.map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${colors.badge} border border-white/20`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category Badge Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
              <p className="text-white/70 text-sm mb-2">Certification Category</p>
              <p className="text-white font-bold text-lg">{cert.category}</p>
            </div>
          </div>
        </div>

        {/* Description Section (for non-MedoPad) */}
        {slug !== "medopad" && (
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl mt-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BookOpen className={`w-8 h-8 ${colors.accent}`} />
              Overview
            </h3>
            <p className="text-white/80 leading-relaxed text-lg">{fullDescription}</p>
          </div>
        )}
        {/* Recognition Section */}
        <div className="mt-12 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
          <p className="text-white/80 text-center text-lg">
            ✨ This certification validates expertise in{" "}
            <span className="font-bold text-white">{cert.category.toLowerCase()}</span> and
            demonstrates professional proficiency in related technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
