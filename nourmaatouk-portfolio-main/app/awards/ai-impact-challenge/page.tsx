"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Trophy, Calendar, Building } from "lucide-react";

export default function AwardDetail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* BACK BUTTON */}
        <button
          onClick={() => router.push('/#awards')}
          className="flex items-center gap-2 px-4 py-2 text-gray-900 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-600 mb-8 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Portfolio</span>
        </button>

        {/* MAIN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT PANEL: Award Image */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-400 rounded-2xl overflow-hidden">
              <img
                src="/ai-impact-challenge.jpg"
                alt="AI Impact Challenge"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Competition Highlight Section */}
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-blue-600">Competition Highlight</h4>
                <button className="text-gray-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                    <circle cx="19" cy="12" r="1" fill="currentColor"/>
                    <circle cx="5" cy="12" r="1" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* About This Competition Section */}
            <div className="mt-6 bg-gray-800 text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-gray-400" />
                <h3 className="text-xl font-bold">About This Competition</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">Achievement Details</p>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Participated in a challenge focused on using AI for social good. Our team developed an environmental monitoring system that uses satellite imagery and machine learning to track deforestation, water pollution, and urban sprawl.
                </p>
                
                <p>
                  The system provides automated alerts and detailed analytics to help environmental organizations and policymakers make data-driven decisions. Our solution processed over 10,000 satellite images and achieved 90% accuracy in change detection.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Award Information */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <Trophy className="w-6 h-6 text-gray-500" />
                <h2 className="text-xl font-bold text-gray-900">Award Information</h2>
              </div>
              
              {/* Information List */}
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">Achievement</p>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-gray-600" />
                    <p className="text-lg font-bold text-gray-800">2nd Place</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-blue-700 mb-2 uppercase tracking-wide">Organization</p>
                  <div className="flex items-start gap-2">
                    <Building className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-blue-900">American Corner Sousse</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-purple-700 mb-2 uppercase tracking-wide">Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <p className="text-sm font-semibold text-purple-900">January 2024</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="text-base font-bold text-gray-900 mb-3">Summary</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Runner-up in the AI Impact Challenge, focusing on creating AI solutions that address real-world social and environmental challenges.
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Satellite Imagery</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Environmental AI</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Change Detection</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Geographic Information Systems</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">PyTorch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
