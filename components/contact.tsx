"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=bachirkarmeni@gmail.com";
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
            CONTACT
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto"></div>
        </div>

        {/* Two Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {/* Left Card - Profile */}
          <Card className="border-2 border-gray-900 rounded-2xl p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bechir Karmeni</h3>
              <p className="text-sm text-gray-600 mb-8">
                Data Engineer | AI & Machine Learning Specialist
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mb-6">
                <a
                  href="https://github.com/Bechir-karmeni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bechirkarmeni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <button
                  onClick={handleEmailClick}
                  className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>

              {/* LinkedIn Badge */}
              <a
                href="https://www.linkedin.com/in/bechirkarmeni/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </CardContent>
          </Card>

          {/* Right Card - Contact Info */}
          <Card className="border-2 border-gray-900 rounded-2xl p-8">
            <CardContent className="p-0 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Berlin, Germany</p>
                  <p className="text-sm text-gray-600">Data Engineer & AI Specialist</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <button
                    onClick={handleEmailClick}
                    className="font-semibold text-gray-900 hover:text-blue-600 transition-colors text-left"
                  >
                    bachirkarmeni@gmail.com
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <a
                    href="tel:+491575796215"
                    className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    +49 157 57962158
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* LinkedIn Professional Card */}
        <div className="mb-20">
          <a
            href="https://www.linkedin.com/in/bechirkarmeni/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-600 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Side - LinkedIn Icon & Badge */}
                <div className="flex items-center gap-4 md:min-w-fit">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Linkedin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-xl">LinkedIn</p>
                    <p className="text-blue-600 font-semibold text-sm">@bechirkarmeni</p>
                  </div>
                </div>

                {/* Right Side - Description */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-900 font-semibold text-lg mb-1">Let's Connect</p>
                  <p className="text-gray-600 text-sm">
                    Connect with me on LinkedIn to stay updated on my latest projects, achievements,
                    and industry insights.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors md:flex-shrink-0">
                  <span>View Profile</span>
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
        <div className="mb-20">
          <a
            href="https://www.linkedin.com/in/bechirkarmeni/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 border-2 border-blue-500/60 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 max-w-2xl w-full group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Badge Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Badge Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-white font-bold text-2xl mb-1">LinkedIn</p>
                  <p className="text-blue-300 font-semibold text-lg">Bechir Karmeni</p>
                  <p className="text-blue-200/70 text-sm mt-2">
                    Data Engineer | AI & Machine Learning Specialist
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex text-blue-400 group-hover:text-blue-300 transition-colors">
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
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

              {/* Gradient Bottom Accent */}
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-300 pt-8 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm text-gray-900 mb-1">
            © Copyright <strong>Bechir Karmeni</strong>. All Rights Reserved
          </p>
          <p className="text-xs text-gray-600">
            Designed by{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Bechir Karmeni
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}
