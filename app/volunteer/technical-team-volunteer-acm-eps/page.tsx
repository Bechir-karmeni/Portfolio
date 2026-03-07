"use client"

import { ArrowLeft, Calendar, ExternalLink, Users, Target, FileText } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ACMTechnicalVolunteerPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push("/#volunteer")}
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Volunteer Experience</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-2xl p-8 mb-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-xl p-3 shadow-md border border-purple-200 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <img
                  src="/logos/acm-eps.png"
                  alt="ACM EPS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-2">
                Technical Team Volunteer
              </h1>
              <p className="text-xl text-purple-600 font-semibold mb-3">
                ACM EPS (Association for Computing Machinery - École Polytechnique de Sousse)
              </p>
              <div className="flex items-center gap-2 text-gray-700 mb-3">
                <Calendar className="w-5 h-5" />
                <span>Oct 2022 - Jul 2023</span>
              </div>
              <a
                href="https://www.facebook.com/acm.polytecsousse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Visit Organization Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Featured Event Image */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-300 shadow-md">
              <img
                src="/acm-main.jpg"
                alt="ACM EPS TCPC Event"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Right Column - About & Responsibilities */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-md">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                About & Responsibilities
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  As a Technical Team Volunteer at ACM EPS, I provided essential technical support for various ACM events and competitions. I was actively involved in the Tunisian Collegiate Programming Contest (TCPC) for both 2023 and 2025 editions, helping to organize and support these prestigious programming competitions. This role involved setting up technical infrastructure, assisting participants with technical issues, managing competition platforms, and ensuring smooth technical operations during events. Working with ACM gave me the competitive programming community and helped me develop strong problem-solving and technical support skills.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Provided technical support for ACM events and activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Assisted in organizing TCPC 2023 and TCPC 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Set up and managed technical infrastructure for competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Supported participants with technical issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Ensured smooth technical operations during events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Event Gallery Section */}
        <div className="mt-8">
          <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Event Gallery</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <img
                  src="/acm-gallery-1.jpg"
                  alt="ACM Event 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <img
                  src="/acm-gallery-2.jpg"
                  alt="ACM Event 2"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <img
                  src="/acm-gallery-3.jpg"
                  alt="ACM Event 3"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
