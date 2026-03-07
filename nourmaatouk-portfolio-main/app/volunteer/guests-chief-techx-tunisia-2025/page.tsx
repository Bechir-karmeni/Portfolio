"use client"

import { ArrowLeft, Calendar, ExternalLink, FileText, Target } from "lucide-react"
import { useRouter } from "next/navigation"

export default function GuestsChiefPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push("/#volunteer")}
            className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-all duration-300 hover:gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Volunteer Experience</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 mb-8 border border-yellow-500 shadow-lg">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-28 h-28 bg-black rounded-xl p-4 shadow-md border border-yellow-500">
                <img
                  src="/logos/ieee-cs.png"
                  alt="IEEE CS SYP Activities TechX Tunisia 2025 logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                Guests Chief
              </h1>
              <p className="text-xl text-yellow-500 font-semibold mb-3">
                IEEE CS SYP Activities TechX Tunisia 2025
              </p>
              <div className="flex items-center gap-2 text-gray-300 mb-3">
                <Calendar className="w-5 h-5" />
                <span>Aug 2025 - Sep 2025</span>
              </div>
              <a
                href="https://www.linkedin.com/company/techx-tunisia-beyond-the-cloudline"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
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
                src="/techx-main.jpg"
                alt="TechX Tunisia 2025 Event"
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
                  As the Guests Chief for TechX Tunisia 2025, I was responsible for coordinating and managing all guest-related activities for this major tech conference. This role involved directly contacting international speakers, startup founders, and industry experts to invite them to participate in the event. I successfully managed relationships with multiple international speakers, ensuring their participation and coordinating all logistics related to their involvement. My efforts contributed significantly to making TechX Tunisia 2025 a successful event with high-quality speakers and engaging content.
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
                    <span>Contacted and coordinated with international speakers and startups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Managed speaker logistics and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Coordinated directly with international industry experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Ensured successful speaker participation and engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold">•</span>
                    <span>Contributed to overall event success and quality</span>
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
                  src="/techx-gallery-1.jpg"
                  alt="TechX Event 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <img
                  src="/techx-gallery-2.jpg"
                  alt="TechX Event 2"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <img
                  src="/techx-gallery-3.jpg"
                  alt="TechX Event 3"
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
