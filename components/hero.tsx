"use client";

import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Animated background shapes - modern subtle gradient */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center space-y-10 relative z-10">
        {/* Terminal Window - Enhanced with modern design */}
        <div className="w-full max-w-2xl bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition"></div>
            </div>
            <span className="ml-4 text-gray-600 text-sm font-mono">bechir_karmeni@portfolio</span>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold">$</span>
              <span className="text-blue-600">whoami</span>
            </div>
            <div className="text-gray-700 ml-6">bechir_karmeni</div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-green-600 font-bold">$</span>
              <span className="text-blue-600">cat role.txt</span>
            </div>
            <div className="text-indigo-600 ml-6 font-semibold">
              Data Engineer specializing in AI
            </div>

            <div className="h-px bg-gray-300 my-2"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center space-y-6 max-w-4xl">
          {/* Name */}
          <div className="space-y-3">
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
              Bechir Karmeni
            </h1>

            {/* Subtitle with animation */}
            <div className="h-12 flex items-center justify-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-700">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Specializing in
                </span>{" "}
                <span className="inline-block animate-pulse text-blue-600">Python</span>
                <span className="text-gray-400 mx-2">•</span>
                <span
                  className="inline-block animate-pulse text-indigo-600"
                  style={{ animationDelay: "0.2s" }}
                >
                  Power BI
                </span>
                <span className="text-gray-400 mx-2">•</span>
                <span
                  className="inline-block animate-pulse text-teal-600"
                  style={{ animationDelay: "0.4s" }}
                >
                  SQL
                </span>
              </p>
            </div>
          </div>

          {/* Professional Description */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Results-driven data engineer specializing in building{" "}
              <span className="font-bold text-blue-600">scalable and robust infrastructures</span>{" "}
              to maximize data potential. Expertise in designing and optimizing{" "}
              <span className="font-bold text-blue-600">complex pipelines</span> to ensure seamless
              data flow and <span className="font-bold text-blue-600">real-time analytics</span> for
              informed decision-making.
            </p>

            <div className="inline-block bg-blue-50 border-2 border-blue-200 rounded-xl px-6 py-3 text-sm text-gray-700">
              <span className="font-semibold text-blue-700">🌍 Languages:</span> English • French •
              Arabic • German
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-8 w-full max-w-xl">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold py-4 px-8 rounded-xl shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>

          {/* CV Downloads */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a
              href="/Bechir_Karmeni_CV.pdf"
              download
              className="group flex-1 bg-gradient-to-r from-purple-500 to-violet-500 border-2 border-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-violet-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="w-5 h-5" />
              <span>CV (English)</span>
            </a>

            <a
              href="/Bechir_Karmeni_CV_DE.pdf"
              download
              className="group flex-1 bg-gradient-to-r from-purple-500 to-violet-500 border-2 border-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-violet-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="w-5 h-5" />
              <span>CV (Deutsch)</span>
            </a>
          </div>

          {/* LinkedIn Professional Badge */}
          <a
            href="https://www.linkedin.com/in/bechirkarmeni/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full block"
          >
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-600 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                {/* LinkedIn Icon & Badge */}
                <div className="flex items-center gap-3 md:min-w-fit">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Linkedin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg">LinkedIn</p>
                    <p className="text-purple-600 font-semibold text-xs">@bechirkarmeni</p>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-900 font-semibold mb-1">Connect & Follow</p>
                  <p className="text-gray-600 text-sm">
                    Join my professional network to see my latest projects and achievements
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:text-purple-700 transition-colors md:flex-shrink-0">
                  <span>Connect</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 pt-4">
          <a
            href="https://www.linkedin.com/in/bechirkarmeni/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/10 border-2 border-purple-500/30 rounded-full hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 backdrop-blur-sm"
          >
            <Linkedin className="w-6 h-6 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://github.com/Bechir-karmeni"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/10 border-2 border-purple-500/30 rounded-full hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 backdrop-blur-sm"
          >
            <Github className="w-6 h-6 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="mailto:bachirkarmeni@gmail.com"
            className="group p-3 bg-white/10 border-2 border-purple-500/30 rounded-full hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 backdrop-blur-sm"
          >
            <Mail className="w-6 h-6 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
