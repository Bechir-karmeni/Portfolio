"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Subtle animated background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center space-y-12 relative z-10">
        {/* Terminal Window */}
        <div className="w-full max-w-lg bg-[#1e2937] rounded-lg shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#374151] px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-400 text-sm">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-blue-400">whoami</span>
            </div>
            <div className="text-gray-300">Bechir Karmeni</div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-blue-400">cat about.txt</span>
            </div>
            <div className="text-gray-300">git commit -m 'feat: new feature'</div>
          </div>
        </div>
        {/* Profile Image */}
        <div className="relative w-64 h-64 group">
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
            <Image src="/profile.jpg" alt="Nour Maatouk" fill className="object-cover" priority />
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
        </div>
        {/* Name and Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-blue-600">Bechir Karmeni</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-900 font-medium">
            <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-gray-900">
              Data Engineer | Python, PySpark, SQL
            </span>
          </p>
        </div>
        {/* Description */}
        <div className="max-w-2xl text-center">
          <p className="text-lg text-gray-800 leading-relaxed border border-blue-200 rounded-lg p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            Solution Driven, Detail Oriented, proven competencies in problem solving and Winning
            Culture Mentality.{" "}
            <span className="text-blue-600 font-semibold">
              {" "}
              Persuasive and Effective Communication
            </span>{" "}
            along with Teamwork Spirit.{" "}
            <span className="text-blue-600 font-semibold">
              Strong Analytical and Quantitative skills
            </span>{" "}
            with proficiency in Software Development and robust experience in the{" "}
            <span className="text-blue-600 font-semibold">Data Science</span> and{" "}
            <span className="text-blue-600 font-semibold">and ML space</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Get In Touch
            </a>

            <a
              href="/Nour_Maatouk_CV.pdf"
              download
              className="group relative inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 group-hover:animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v12m0 0l3-3m-3 3l-3-3M21 21H3"
                />
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/nour--maatouk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              {/* LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.85v2.06h.05c.54-1.02 1.86-2.06 3.83-2.06 4.1 0 4.85 2.7 4.85 6.21V24h-4v-7.19c0-1.71-.03-3.91-2.38-3.91-2.38 0-2.75 1.86-2.75 3.79V24h-4V8.5z" />
              </svg>
            </a>

            <a
              href="https://github.com/nourmaatouk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              {/* GitHub */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
              </svg>
            </a>

            <a
              href="mailto:nourmaatouk88@gmail.com"
              className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              {/* Email */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                />
              </svg>
            </a>

            <a
              href="tel:+21694281444"
              className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              aria-label="phone"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 1 .76l.7 3a1 1 0 0 1-.27.92L7.7 10.7a12.05 12.05 0 0 0 5.59 5.59l2.04-1.06a1 1 0 0 1 .92-.27l3 .7a1 1 0 0 1 .76 1V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
