"use client";
import { useRouter } from "next/navigation";
import { Award } from "lucide-react";
import React, { useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  skills: string[];
}

const certifications: Certification[] = [
  // Machine Learning & AI
  {
    title: "Practical Computer Vision with PyTorch",
    issuer: "Hasso Plattner Institute",
    date: "May 2025",
    category: "Machine Learning & AI",
    description:
      "Comprehensive introduction to modern computer-vision methods with PyTorch, beginning with convolutional neural networks (CNNs), moving to advanced architectures such as Vision Transformers (ViT), and exploring cutting-edge vision-language models like CLIP and Grounding DINO.",
    skills: ["PyTorch", "Computer Vision", "CNN", "Vision Transformers", "CLIP", "Deep Learning"],
  },
  {
    title: "Unsupervised Learning in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    description:
      "Learn unsupervised learning: clustering, dimension reduction, & more. Use scikit-learn & SciPy. Extract insights from unlabeled data. Build a music recommender.",
    skills: ["Python", "Clustering", "scikit-learn", "SciPy", "Dimension Reduction"],
  },
  {
    title: "Cluster Analysis in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    description:
      "Learn unsupervised learning with SciPy. Master hierarchical & k-means clustering. Analyze FIFA 18 player data. Visualize & interpret clusters.",
    skills: ["Python", "Clustering", "Hierarchical Clustering", "K-means", "SciPy"],
  },
  {
    title: "Machine Learning with Tree-Based Models in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    description:
      "Learn decision trees & ensemble methods with scikit-learn. Build classification & regression models. Understand tree strengths & weaknesses. Master hyperparameter tuning.",
    skills: ["Decision Trees", "Ensemble Methods", "scikit-learn", "Hyperparameter Tuning"],
  },
  {
    title: "Machine Learning for Time Series Data in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    description:
      "Learn ML for time series. Master feature engineering, spectograms, & more. Classify heartbeats & predict stocks.",
    skills: ["Time Series", "Feature Engineering", "Spectograms", "Forecasting"],
  },
  {
    title: "Supervised Learning with scikit-learn",
    issuer: "DataCamp",
    date: "2024",
    category: "Machine Learning & AI",
    description:
      "Learn scikit-learn for ML. Build predictive models with real data, tune parameters, and evaluate performance. Predict churn, diabetes, and more.",
    skills: ["scikit-learn", "Supervised Learning", "Model Tuning", "Model Evaluation"],
  },
  {
    title: "Getting Started with DeepStream for Video Analytics on Jetson Nano",
    issuer: "NVIDIA",
    date: "2024",
    category: "Machine Learning & AI",
    description: "Learn video analytics and deep learning on edge devices using NVIDIA DeepStream.",
    skills: ["NVIDIA DeepStream", "Video Analytics", "Edge Computing", "Jetson Nano"],
  },
  {
    title: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA",
    date: "October 2021",
    category: "Machine Learning & AI",
    description:
      "Comprehensive introduction to AI and deep learning on NVIDIA Jetson Nano edge devices.",
    skills: ["AI", "Deep Learning", "Jetson Nano", "Edge Computing"],
  },

  // Data Science & Analytics
  {
    title: "Associate Data Scientist",
    issuer: "DataCamp",
    date: "March 2022",
    category: "Data Science & Analytics",
    description:
      "DataCamp's Associate Data Scientist career track prepares beginners for entry-level roles by teaching data manipulation, exploratory data analysis (EDA), and machine learning (27-40+ hours). Features interactive lessons covering SQL, Python, and data visualization, culminating in certification-focused projects.",
    skills: ["Data Science", "EDA", "Python", "SQL", "Data Visualization"],
  },
  {
    title: "Professional Data Analyst Certificate",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    description:
      "Industry-recognized certification requiring two timed exams and practical project. Validates advanced skills in SQL, Python/R, and data storytelling, focusing on solving complex business problems and proving ability to turn data into business insights.",
    skills: ["Data Analysis", "SQL", "Python", "Data Storytelling", "Business Intelligence"],
  },
  {
    title: "Introduction to Power BI",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    description:
      "Power BI intro: 3 hrs, hands-on. Learn data load, model, & visuals. Master Power Query, create reports, & tell data stories.",
    skills: ["Power BI", "Power Query", "Data Visualization", "DAX", "Reporting"],
  },
  {
    title: "Introduction to Data Visualization with Matplotlib",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    description:
      "Learn Matplotlib for powerful data visualization. Create diverse plots, customize, automate, & share. Expose data patterns & communicate insights.",
    skills: ["Matplotlib", "Data Visualization", "Python", "Plotting"],
  },
  {
    title: "Introduction to Data Visualization with Seaborn",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    description:
      "Master Seaborn for data visualization. Create diverse plots, customize visuals, and use real datasets. Learn subplots & confidence intervals. Improve data communication.",
    skills: ["Seaborn", "Data Visualization", "Python", "Statistical Graphics"],
  },
  {
    title: "Intermediate Data Visualization with Seaborn",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Science & Analytics",
    description:
      "Learn Seaborn for easy, informative visualizations. Analyze real-world data (housing, tuition, TV shows). Master Seaborn plots & customization.",
    skills: ["Seaborn", "Data Visualization", "Subplots", "Confidence Intervals"],
  },

  // Data Engineering & Tools
  {
    title: "Cleaning Data in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    description:
      "Master data cleaning in Python. Fix data types, ranges, duplicates, & missing values. Learn record linkage for merging datasets. Essential skill for data science.",
    skills: ["Data Cleaning", "Python", "pandas", "Data Quality"],
  },
  {
    title: "Analyzing Police Activity with pandas",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    description:
      "Apply pandas skills to analyze police data. Clean, visualize, join, & reshape data. Explore gender impact on police behavior. Real-world data practice.",
    skills: ["pandas", "Data Analysis", "Data Manipulation", "Real-world Data"],
  },
  {
    title: "Introduction to Importing Data in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    description:
      "Master data import in Python. Load data from files (CSV, Excel, etc.) & databases (SQLite, PostgreSQL). Essential for data science.",
    skills: ["Python", "Data Import", "SQL", "File Handling"],
  },
  {
    title: "Intermediate Importing Data in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    description:
      "Master data import in Python. Learn to pull data from the web & APIs (like Twitter). Extend your skills beyond files & databases.",
    skills: ["Python", "APIs", "Web Scraping", "Data Integration"],
  },
  {
    title: "Joining Data with pandas",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    description:
      "Master pandas data joining! Combine, organize, and reshape DataFrames using real-world datasets from the World Bank and Chicago. Essential for data science.",
    skills: ["pandas", "Data Joining", "Data Manipulation", "DataFrame Operations"],
  },
  {
    title: "Working with Dates and Times in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Data Engineering & Tools",
    description:
      "Master time data in Python. Handle dates, times, zones with pandas & dateutil. Analyze events, durations, & plots.",
    skills: ["Python", "pandas", "DateTime", "Time Series"],
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "2024",
    category: "Data Engineering & Tools",
    description:
      "Advanced SQL course covering topics like query optimization, data modeling, indexing, window functions, and pivots in SQL.",
    skills: ["SQL", "Query Optimization", "Window Functions", "Data Modeling"],
  },

  // Statistics & Advanced Techniques
  {
    title: "Statistical Thinking in Python (Part 2)",
    issuer: "DataCamp",
    date: "2024",
    category: "Statistics & Advanced Techniques",
    description:
      "Advance your stats skills. Learn parameter estimation & hypothesis testing. Analyze real data, including Darwin's finches. Apply statistical inference.",
    skills: ["Statistics", "Python", "Hypothesis Testing", "Parameter Estimation"],
  },
  {
    title: "Extreme Gradient Boosting with XGBoost",
    issuer: "DataCamp",
    date: "2024",
    category: "Statistics & Advanced Techniques",
    description:
      "Master XGBoost for gradient boosting. Build & tune models with pandas & scikit-learn. Solve real-world classification & regression problems.",
    skills: ["XGBoost", "Gradient Boosting", "scikit-learn", "Model Tuning"],
  },
  {
    title: "Linear Classifiers in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Statistics & Advanced Techniques",
    description:
      "Learn linear classifiers (logistic regression, SVM) with scikit-learn. Train, test, tune models. Understand core concepts for broader ML.",
    skills: ["Logistic Regression", "SVM", "scikit-learn", "Classification"],
  },
  {
    title: "Dimensionality Reduction in Python",
    issuer: "DataCamp",
    date: "2024",
    category: "Statistics & Advanced Techniques",
    description:
      "Handle high-dimensional data. Learn advanced visualizations, feature selection, & extraction. Reduce complexity & improve models.",
    skills: ["Dimensionality Reduction", "PCA", "Feature Selection", "Visualization"],
  },

  // Project Management & Agile
  {
    title: "PMP EXAM PREP COURSE",
    issuer: "Ben Hamouda Consulting",
    date: "March 2025",
    category: "Project Management",
    description:
      "Completed 35-Hour PMP Training with Ahmed Ben Hamouda, PMP®, SCT®, SAFe®. Diving deep into essential project management methodologies, enhancing skills in project planning, execution, and risk management—bringing closer to PMP certification!",
    skills: ["PMP", "Project Management", "Risk Management", "PMBOK"],
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    issuer: "Vabro.ai and VMEdu.com",
    date: "2024",
    category: "Project Management",
    description:
      "Global accreditation for Scrum certifications with SBOK® Guide knowledge. Vabro.ai and VMEdu.com (covering Scrum, Kanban, AI, Business Analysis, OKRs, Six Sigma, Sales and Marketing).",
    skills: ["Scrum", "Agile", "Team Collaboration", "Sprint Management"],
  },
  {
    title: "Scrum for Operations and DevOps Fundamentals Certified (SODFC)",
    issuer: "SCRUMstudy",
    date: "2024",
    category: "Project Management",
    description:
      "SCRUMstudy™ is the global accreditation body for Scrum and Agile certifications. Scrum for Ops and DevOps are both practices that aim to improve collaboration, streamline processes, and deliver value efficiently.",
    skills: ["Scrum", "DevOps", "Operations", "CI/CD Practices"],
  },
  {
    title: "PMI Citizen Developer™ Business Architect (CDBA) Introduction",
    issuer: "Project Management Institute",
    date: "2024",
    category: "Project Management",
    description:
      "Tools and methodologies needed to manage citizen development teams, manage the governance processes, oversee the collaboration between stakeholders in IT and the business, and embed the organizational structures that underpin citizen development.",
    skills: ["PMI", "Business Architecture", "Citizen Development", "Governance"],
  },
  {
    title: "Basics of Scrum Course Certificate",
    issuer: "PMI",
    date: "2024",
    category: "Project Management",
    description:
      "Scrum is a management framework that teams use to self-organize, learn from experience, and adapt to change. Principles: Empirical Process Control, Self-Organization, Time-Boxing, Value-Based Prioritization, Iterative Development, and Collaboration.",
    skills: ["Scrum", "Agile", "Team Management", "Iterative Development"],
  },
  {
    title: "Six Sigma Yellow Belt (SSYB)",
    issuer: "6sigmastudy",
    date: "2024",
    category: "Project Management",
    description:
      "The Six Sigma Yellow Belt course helps you understand what Six Sigma is, learn key concepts, and understand how Six Sigma works in improving quality and reducing defects. Confirms basic understanding of Six Sigma methodology.",
    skills: ["Six Sigma", "Quality Management", "Process Improvement", "DMAIC"],
  },

  // Business & Leadership
  {
    title: "Marketing Strategy Fundamentals (SCMS-F)",
    issuer: "SMstudy",
    date: "March 2025",
    category: "Business & Leadership",
    description:
      "The SMstudy® Certified Marketing Strategy Fundamentals course is a foundational certification covering marketing strategy frameworks, targeting, positioning, marketing mix (4Ps/7Ps), sales and marketing alignment, and market analysis. Structured approach for managing marketing efforts in any organization.",
    skills: ["Marketing Strategy", "Market Analysis", "Business Planning", "Sales Alignment"],
  },
  {
    title: "Negotiation Associate Certified",
    issuer: "NGstudy",
    date: "2024",
    category: "Business & Leadership",
    description:
      "Negotiation Associate Certified (NCN-A) offers skills to conduct successful negotiations as defined in the NBOK guide. Global Accreditation Body for Negotiation Certifications.",
    skills: ["Negotiation", "Communication", "Stakeholder Management", "Conflict Resolution"],
  },
  {
    title: "Advanced Program in Entrepreneurship",
    issuer: "Institute of Management, Technology and Finance",
    date: "2024",
    category: "Business & Leadership",
    description:
      "Advanced entrepreneurship program covering business development and innovation strategies from the Institute of Management, Technology and Finance.",
    skills: ["Entrepreneurship", "Business Development", "Innovation", "Leadership"],
  },

  // Problem Solving & Coding
  {
    title: "Problem Solving Intermediate",
    issuer: "HackerRank",
    date: "August 2022",
    category: "Problem Solving",
    description:
      "Covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).",
    skills: ["Problem Solving", "Data Structures", "Algorithms", "Coding"],
  },
];

const categories = [
  "All",
  "Machine Learning & AI",
  "Data Science & Analytics",
  "Data Engineering & Tools",
  "Statistics & Advanced Techniques",
  "Project Management",
  "Business & Leadership",
  "Problem Solving",
];

// PNG certifications (the rest are JPG)
const pngCertifications = [
  "Getting Started with DeepStream for Video Analytics on Jetson Nano",
  "Getting Started with AI on Jetson Nano",
  "Basics of Scrum Course Certificate",
  "PMI Citizen Developer™ Business Architect (CDBA) Introduction",
];

function CertificationModal({
  cert,
  open,
  onClose,
  slugify,
  getImageExt,
}: {
  cert: Certification | null;
  open: boolean;
  onClose: () => void;
  slugify: (text: string) => string;
  getImageExt: (title: string) => string;
}) {
  if (!open || !cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-8 relative border-2 border-blue-300 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-black text-4xl font-bold transition-colors z-10"
        >
          ×
        </button>

        {/* Large Certificate Image */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-1">
          <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            {slugify(cert.title) === "scrum-fundamentals-certified-sfc" ? (
              <img
                src="/certifications/Scrum Fundamentals.jpg"
                alt={cert.title}
                className="w-full h-full object-contain p-4"
              />
            ) : (
              <img
                src={`/certifications/${slugify(cert.title)}.${getImageExt(cert.title)}`}
                alt={cert.title}
                className="w-full h-full object-contain p-4"
              />
            )}
          </div>
        </div>

        {/* Title and Meta Info */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 leading-tight">
            {cert.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-gray-700">
              <span>🏢</span>
              <span className="font-semibold">{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span>📅</span>
              <span>{cert.date}</span>
            </div>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold border-2 border-blue-300">
              {cert.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6 border-2 border-blue-200">
          <h3 className="text-lg font-bold text-blue-700 mb-3">About This Certification</h3>
          <p className="text-gray-700 leading-relaxed text-base">{cert.description}</p>
        </div>

        {/* Skills */}
        <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
          <h3 className="text-lg font-bold text-blue-700 mb-4">Key Skills</h3>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg font-semibold text-sm border-2 border-blue-300 hover:bg-blue-200 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [modalCert, setModalCert] = useState<Certification | null>(null);

  function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
  function getImageExt(title: string): string {
    return pngCertifications.some((cert) => slugify(cert) === slugify(title)) ? "png" : "jpg";
  }

  const filteredCerts = certifications.filter(
    (cert) =>
      (selectedCategory === "All" || cert.category === selectedCategory) &&
      (cert.title.toLowerCase().includes(search.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(search.toLowerCase()) ||
        cert.skills.join(" ").toLowerCase().includes(search.toLowerCase())),
  );

  const categoryIcons: Record<string, string> = {
    "Machine Learning & AI": "🤖",
    "Data Science & Analytics": "📊",
    "Data Engineering & Tools": "⚙️",
    "Statistics & Advanced Techniques": "📈",
    "Project Management": "📋",
    "Business & Leadership": "💼",
    "Problem Solving": "🧩",
  };

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4 tracking-tight">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of professional certifications spanning data science, machine
            learning, project management, and business leadership.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm border-2 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-700 shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCerts.map((cert, index) => {
            const icon = categoryIcons[cert.category] || "📋";
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-600 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-6 min-h-[420px] relative hover:bg-blue-50"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold border-2 border-blue-700">
                  {icon}
                </div>

                {/* Certificate Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-2 border-blue-300 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {slugify(cert.title) === "scrum-fundamentals-certified-sfc" ? (
                    <img
                      src="/certifications/Scrum Fundamentals.jpg"
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={`/certifications/${slugify(cert.title)}.${getImageExt(cert.title)}`}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <h3
                    className="font-bold text-base md:text-lg mb-2 text-black line-clamp-2"
                    title={cert.title}
                  >
                    {cert.title}
                  </h3>
                  <div className="text-gray-600 text-xs mb-2">{cert.issuer}</div>
                  <div className="text-gray-500 text-xs mb-3">{cert.date}</div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1 justify-center mb-4 max-h-12 overflow-hidden">
                    {cert.skills.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                        +{cert.skills.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 mb-4">
                    {cert.description}
                  </p>

                  {/* View Details Button */}
                  <button
                    onClick={() => setModalCert(cert)}
                    className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-blue-600/50"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No certifications found in this category.</p>
          </div>
        )}

        {/* Modal for Details */}
        <CertificationModal
          cert={modalCert}
          open={!!modalCert}
          onClose={() => setModalCert(null)}
          slugify={slugify}
          getImageExt={getImageExt}
        />
      </div>
    </section>
  );
}
