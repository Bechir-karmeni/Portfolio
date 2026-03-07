"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function CertificationDetail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f4f7f9] py-6 px-2 sm:px-8">
      <div className="max-w-6xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-xl">
        {/* BACK BUTTON */}
        <button
          onClick={() => router.push('/#certifications')}
          className="flex items-center gap-2 px-4 py-2 text-gray-900 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-600 mb-8 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Portfolio</span>
        </button>

        {/* HEADER SECTION */}
        <header className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-1">Deep Learning</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            Deep Learning Fundamentals
          </h1>
          <div className="flex justify-center items-center text-gray-600 text-sm space-x-4">
            <span className="flex items-center">
              {/* NVIDIA Icon (simple square for placeholder) */}
              <svg className="icon text-blue-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              NVIDIA
            </span>
            <span className="flex items-center">
              {/* Calendar Icon */}
              <svg className="icon text-blue-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Sep 2024
            </span>
          </div>
        </header>

        {/* MAIN CONTENT LAYOUT (Responsive) */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* LEFT PANEL: Certificate Image/Placeholder */}
          <div className="lg:w-3/5 xl:w-7/12 mb-8 lg:mb-0">
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 h-96 sm:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
              <img
                src="/deep-learning-fundamentals.jpg"
                alt="Deep Learning Fundamentals certificate"
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

          {/* RIGHT PANEL: Certificate Information Sidebar */}
          <div className="lg:w-2/5 xl:w-5/12">
            <div className="p-0">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Certificate information</h2>
              {/* Information List */}
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Category:</p>
                  <p className="text-base font-semibold text-gray-700">Deep Learning</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Issuing organization:</p>
                  <p className="text-base font-semibold text-gray-700">NVIDIA</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Issue date:</p>
                  <p className="text-base font-semibold text-gray-700">Sep 2024</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Credential ID:</p>
                  <a href="#" className="credential-link text-base text-[#0078d4] font-medium underline">
                    NVIDIA-DEEP-LEARNING-FUNDAMENTALS
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Description:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Foundational certification covering core concepts of deep learning, neural networks, and practical implementation techniques.
                </p>
              </div>

              {/* Skills & Technologies */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Skills & Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Neural Networks</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">CNN</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">RNN</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">PyTorch</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">TensorFlow</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">GPU Computing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
