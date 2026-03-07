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
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-400 rounded-2xl overflow-hidden">
              <img
                src="/sight-day-congress-technical-challenge.jpg"
                alt="SIGHT Day Congress Technical Challenge"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Competition Highlight Section */}
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-blue-600">Competition Highlight</h4>
                <button className="text-orange-500">
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
                <Trophy className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold">About This Competition</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">Achievement Details</p>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  IEEE SIGHT (Special Interest Group on Humanitarian Technology) challenge focused on sustainable development. Our team created a smart energy management system for rural communities, using AI to optimize the distribution of renewable energy from solar panels and wind turbines.
                </p>
                
                <p>
                  The system predicts energy demand and adjusts distribution to minimize waste and ensure stable power supply. Field tests showed a 25% improvement in energy utilization efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Award Information */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <Trophy className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-gray-900">Award Information</h2>
              </div>
              
              {/* Information List */}
              <div className="space-y-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-orange-700 mb-2 uppercase tracking-wide">Achievement</p>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-orange-600" />
                    <p className="text-lg font-bold text-orange-800">3rd Place</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-blue-700 mb-2 uppercase tracking-wide">Organization</p>
                  <div className="flex items-start gap-2">
                    <Building className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-blue-900">IEEE Tunisia Section</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-xs font-medium text-purple-700 mb-2 uppercase tracking-wide">Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <p className="text-sm font-semibold text-purple-900">December 2023</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="text-base font-bold text-gray-900 mb-3">Summary</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Third place in the SIGHT Day Congress Technical Challenge, demonstrating technical excellence in developing sustainable technology solutions.
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Renewable Energy</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Energy Management</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Predictive Analytics</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Sustainable Tech</span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">Edge Computing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
