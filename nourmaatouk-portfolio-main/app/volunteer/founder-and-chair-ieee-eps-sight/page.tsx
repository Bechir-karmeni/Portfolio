"use client"

import { ArrowLeft, Calendar, ExternalLink, FileText, Target } from "lucide-react"
import { useRouter } from "next/navigation"

export default function FounderChairSIGHTPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-orange-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-300 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push("/#volunteer")}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-all duration-300 hover:gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Volunteer Experience</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-2xl p-8 mb-8 border border-red-300 shadow-lg">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-xl p-3 shadow-md border border-gray-300">
                <img
                  src="/logos/ieee-eps-sight.png"
                  alt="IEEE EPS SIGHT logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Founder and Chair
              </h1>
              <p className="text-xl text-red-600 font-semibold mb-3">
                IEEE EPS SIGHT
              </p>
              <div className="flex items-center gap-2 text-gray-900 mb-3">
                <Calendar className="w-5 h-5" />
                <span>Jun 2024 - Feb 2025</span>
              </div>
              <a
                href="https://ieeeht.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
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
                src="/sight-main.jpg"
                alt="IEEE EPS SIGHT Team Event"
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
                  As the Founder and Chair of IEEE EPS SIGHT (Special Interest Group on Humanitarian Technology), I established and led the chapter from its inception. This role involved creating the chapter's vision, organizing humanitarian technology-focused events, and coordinating regular meetings to advance the chapter's mission. I was responsible for strategic planning, team leadership, and ensuring the chapter's activities aligned with IEEE's humanitarian technology goals. Under my leadership, the chapter successfully launched multiple initiatives and established itself as a key player in the local tech community.
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
                    <span>Founded and established IEEE EPS SIGHT chapter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Developed chapter vision and strategic direction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Organized humanitarian technology events and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Coordinated and led regular team meetings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Managed chapter operations and member engagement</span>
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
                  src="/sight-gallery-1.jpg"
                  alt="SIGHT Event 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <img
                  src="/sight-gallery-2.jpg"
                  alt="SIGHT Event 2"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <img
                  src="/sight-gallery-3.jpg"
                  alt="SIGHT Event 3"
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
