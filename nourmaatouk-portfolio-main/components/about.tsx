import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with creative effects and social links */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex justify-center md:justify-start items-center relative">
              {/* Animated background blobs */}
              <div className="absolute w-72 h-80 opacity-30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <div className="relative w-72 h-80 group">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                {/* Professional image container with effects */}
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-blue-500/50">
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                  <Image
                    src="/profile.jpg"
                    alt="Nour Maatouk"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Social Links under photo */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/nour--maatouk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-semibold">LinkedIn</span>
              </a>

              <a
                href="https://github.com/nourmaatouk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-semibold">GitHub</span>
              </a>
            </div>
          </div>

          {/* Text content - Professional cards */}
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-gray-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profile</h3>
              <p className="text-base leading-relaxed text-gray-700">
                Software Engineering student at the{" "}
                <span className="font-semibold text-gray-900">
                  Polytechnic School of Sousse, Tunisia
                </span>
                , specializing in{" "}
                <span className="font-semibold text-gray-900">AI and Data Science</span>.
                Experienced in machine learning, computer vision, and full-stack development through
                research and real-world projects.
              </p>
            </div>

            {/* Key Skills */}
            <div className="bg-gray-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise</h3>
              <ul className="space-y-2 text-base text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">▪</span>
                  <span>GraphRAG-based Multi-Agent Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">▪</span>
                  <span>Human Motion Analysis using AI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">▪</span>
                  <span>Competition Winner in AI & Tech Challenges</span>
                </li>
              </ul>
            </div>

            {/* Current Objective */}
            <div className="bg-blue-600 p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-white mb-2">Current Objective</h3>
              <p className="text-white text-base">
                Seeking a <span className="font-bold">Final-Year Internship (PFE)</span> to
                contribute to advanced AI-driven projects in an innovative environment.
              </p>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-4 text-sm text-gray-600 pt-2">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span className="font-semibold">English • French • Arabic • German</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
