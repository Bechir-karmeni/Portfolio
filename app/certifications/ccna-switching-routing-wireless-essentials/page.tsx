"use client";

export default function CertificationDetail() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <header className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase mb-3">Networking</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CCNA: Switching, Routing, and Wireless Essentials
          </h1>
          <div className="flex justify-center items-center text-gray-700 text-base space-x-6">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Cisco Networking Academy
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Aug 2024
            </span>
          </div>
        </header>

        {/* MAIN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT PANEL: Certificate Image */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 h-[500px] flex items-center justify-center">
              <img
                src="/ccna-switching-routing-and-wireless-essentials.jpg"
                alt="CCNA: Switching, Routing, and Wireless Essentials certificate"
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.closest('div');
                  if (parent) parent.innerHTML = "<p class='text-gray-500'>Certificate image unavailable.</p>";
                }}
              />
            </div>
          </div>

          {/* RIGHT PANEL: Certificate Information */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Certificate information</h2>
              
              {/* Information List */}
              <div className="space-y-5 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Category:</p>
                  <p className="text-base text-gray-900">Networking</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Issuing organization:</p>
                  <p className="text-base text-gray-900">Cisco Networking Academy</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Issue date:</p>
                  <p className="text-base text-gray-900">Aug 2024</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Credential ID:</p>
                  <a href="#" className="text-base text-[#0066cc] hover:underline">
                    CISCO-CCNA-SWITCHING-ROUTING-WIRELESS
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-base font-bold text-gray-900 mb-3">Description:</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Certification covering essential networking concepts including switching, routing, and wireless network technologies.
                </p>
              </div>

              {/* Skills & Technologies */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Skills & Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#e6f2ff] text-[#0066cc] text-xs font-medium rounded">Network Switching</span>
                  <span className="px-3 py-1.5 bg-[#e6f2ff] text-[#0066cc] text-xs font-medium rounded">Routing Protocols</span>
                  <span className="px-3 py-1.5 bg-[#e6f2ff] text-[#0066cc] text-xs font-medium rounded">Wireless Networks</span>
                  <span className="px-3 py-1.5 bg-[#e6f2ff] text-[#0066cc] text-xs font-medium rounded">Network Security</span>
                  <span className="px-3 py-1.5 bg-[#e6f2ff] text-[#0066cc] text-xs font-medium rounded">Troubleshooting</span>
                  <span className="px-3 py-1.5 bg-[#e6f2ff] text-[#0066cc] text-xs font-medium rounded">Cisco IOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
