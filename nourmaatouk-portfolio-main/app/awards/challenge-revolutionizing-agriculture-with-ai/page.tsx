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
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-2xl overflow-hidden">
              <img
                src="/challenge-revolutionizing-agriculture-with-ai.jpg"
                alt="Challenge Revolutionizing Agriculture with AI"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Competition Highlight Section */}
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-blue-600">Competition Highlight</h4>
                <button className="text-yellow-500">
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
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold">About This Competition</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">Achievement Details</p>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  This challenge brought together teams from across Tunisia to develop cutting-edge AI solutions for modern agriculture. Our team developed a comprehensive system that uses machine learning to predict crop yields, optimize irrigation schedules, and detect plant diseases early.
                </p>
                
                <p>
                  The solution incorporated computer vision for real-time crop monitoring and predictive analytics for resource management. Our approach demonstrated significant improvements in crop yield predictions (92% accuracy) and reduced water consumption by 30% in pilot studies.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Award Information */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-bold text-gray-900">Award Information</h2>
              </div>
              
              {/* Information List */}
              <div className="space-y-6 mb-8">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-yellow-700 mb-2 uppercase tracking-wide">Achievement</p>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    <p className="text-lg font-bold text-yellow-800">1st Place</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-blue-700 mb-2 uppercase tracking-wide">Organization</p>
                  <div className="flex items-start gap-2">
                    <Building className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-blue-900">ARSII & Centre de Recherche en Microélectronique et Nanotechnologie (CRMN)</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-purple-700 mb-2 uppercase tracking-wide">Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <p className="text-sm font-semibold text-purple-900">June 2024</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="text-base font-bold text-gray-900 mb-3">Summary</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  First place in a competitive challenge focused on revolutionizing agriculture through artificial intelligence solutions. Developed innovative AI models to optimize crop management and resource allocation.
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Machine Learning</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Computer Vision</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">IoT</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Data Analytics</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
