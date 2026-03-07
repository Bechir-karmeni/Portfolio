import Image from "next/image";

export function About() {
  const technicalSkills = [
    {
      category: "Data Engineering",
      skills: [
        "PySpark",
        "Apache Kafka",
        "ETL/ELT Pipelines",
        "Big Data Processing",
        "Data Warehouse Design",
      ],
      icon: "⚙️",
    },
    {
      category: "Machine Learning & AI",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Deep Learning",
        "Computer Vision",
        "NLP",
        "Recommender Systems",
      ],
      icon: "🤖",
    },
    {
      category: "Backend Development",
      skills: ["Python", "Spring Boot", "REST APIs", "Cloud Architecture", "Microservices"],
      icon: "🔧",
    },
    {
      category: "Data Analytics & BI",
      skills: ["Power BI", "SQL", "Data Visualization", "KPI Dashboards", "Statistical Analysis"],
      icon: "📊",
    },
    {
      category: "Frontend Development",
      skills: ["Angular", "React", "TypeScript", "Responsive Design", "User Experience"],
      icon: "🎨",
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "CI/CD", "Git", "Cloud Infrastructure"],
      icon: "☁️",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Profile Picture and Social Links */}
          <div className="flex flex-col items-center gap-8 lg:col-span-1">
            {/* Square Profile Picture with enhanced border */}
            <div className="relative w-80 h-80 flex-shrink-0 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-600 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              <Image
                src="/Photo de Bechir Karmeni.jpg"
                alt="Bechir Karmeni"
                fill
                className="rounded-xl object-cover border-4 border-purple-500/30 shadow-2xl group-hover:shadow-2xl group-hover:border-purple-500 transition-all duration-300"
                priority
              />
            </div>

            {/* Social Links - Enhanced Design */}
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <a
                href="https://www.linkedin.com/in/bechirkarmeni/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-semibold">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Bechir-karmeni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-semibold">GitHub</span>
              </a>
            </div>
          </div>

          {/* Text content - Professional cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card - Enhanced */}
            <div className="group bg-white border border-gray-300 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-400 transition-all duration-300 hover:border-black\">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">👤</span>
                <h3 className="text-2xl font-bold text-black">Professional Profile</h3>
              </div>
              <p className="text-base leading-relaxed text-black">
                <span className="font-bold text-black">Results-oriented Data Engineer</span> with
                proven expertise in software development, data science, and machine learning. Adept
                at designing and optimizing scalable data pipelines, developing innovative AI-driven
                solutions, and transforming complex datasets into actionable insights. Recognized
                for strong analytical and quantitative skills, problem-solving ability, and a
                consistent record of achievement in international hackathons and innovation
                challenges. Valued for clear and persuasive communication, collaborative teamwork,
                and a commitment to delivering high-impact, real-world solutions through technology.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="group bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:border-emerald-500/60">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🏆</span>
                <h3 className="text-2xl font-bold text-black">Key Achievements</h3>
              </div>
              <ul className="space-y-3 text-base text-black">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold text-xl">✓</span>
                  <span>
                    <span className="font-semibold">25+ International Hackathon Participant</span> -
                    "Hackathon Hunters" team with multiple victories
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold text-xl">✓</span>
                  <span>
                    <span className="font-semibold">Software Engineering Graduate</span> from École
                    Polytechnique de Sousse with Honors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold text-xl">✓</span>
                  <span>
                    <span className="font-semibold">Innovation Challenge Winner</span> - Multiple
                    awards in AI, Data Science & Tech competitions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold text-xl">✓</span>
                  <span>
                    <span className="font-semibold">Community Leader</span> - IEEE/ACM volunteer,
                    Hult Prize judge coordinator, Developer ambassador
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Expertise Grid */}
        <div className="mt-20 border-t-4 border-gray-300 pt-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            Technical Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-300 rounded-xl p-6 hover:border-black hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h4 className="text-lg font-bold text-black group-hover:text-black transition-colors">
                    {skill.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-black rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
