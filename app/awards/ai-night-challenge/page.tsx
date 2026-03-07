"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AINightChallengeDetailPage() {
  const award = {
    place: "1st Place Winner",
    title: "Lung Cancer Detection Challenge",
    organization: "AI Night Challenge - ARSII & Novation City",
    date: "March 2024",
    image: "/honors/ainight.jpg",
    image2: "/honors/ainight2.jpg",
    shortDescription:
      "Champions of the Lung Cancer Detection Challenge at AI Night Challenge, developing an innovative AI solution revolutionizing healthcare diagnostics.",
    fullDescription: `
      Our team emerged victorious in the prestigious "Lung Cancer Detection" challenge at the AI Night Challenge! This intense competition showcased the transformative power of artificial intelligence in healthcare.
      
      We developed an innovative solution that revolutionizes the way lung cancer is detected and diagnosed. The challenge posed a real-world problem at the intersection of AI and medical science, and our team rose to the occasion with cutting-edge technology.
      
      Our approach leveraged state-of-the-art deep learning algorithms and large-scale medical imaging datasets, enabling us to achieve unparalleled accuracy in lung cancer detection. By accurately identifying early-stage malignancies, our system has the potential to save countless lives and enhance patient outcomes across the globe.
      
      This achievement marks just the beginning of our journey to revolutionize healthcare using AI, and we are committed to driving further advancements in the field of medical AI and diagnostic innovation.
    `,
    technologies: [
      "Deep Learning",
      "Medical Imaging",
      "TensorFlow/PyTorch",
      "Computer Vision",
      "Healthcare AI",
      "CNN Architecture",
    ],
    keyFeatures: [
      "State-of-the-art deep learning algorithms",
      "Large-scale medical imaging dataset processing",
      "Unparalleled diagnostic accuracy",
      "Early-stage malignancy detection",
      "Transformative healthcare solution",
      "Real-world clinical problem solving",
    ],
    impact:
      "Won the AI Night Challenge's Lung Cancer Detection competition, demonstrating the potential of AI to revolutionize healthcare diagnostics and save lives through early and accurate disease detection.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-lg shadow-blue-100/50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/#awards"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Awards
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* Image Gallery - 2 Column */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img src={award.image} alt={award.title} className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
            <img
              src={award.image2}
              alt={`${award.title} - 2`}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-2 border-blue-300 font-bold">
            🏆 {award.place}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-blue-900 to-blue-700 bg-clip-text text-transparent border-b border-blue-200 pb-8">
            {award.title}
          </h1>
          <p className="text-lg text-black font-medium">{award.shortDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-blue-500/60 shadow-lg shadow-blue-600/20">
            <div className="flex items-center gap-3 mb-3">
              <Building className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-blue-300 font-semibold">Organization</span>
            </div>
            <p className="text-white font-semibold text-lg">{award.organization}</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-blue-500/60 shadow-lg shadow-blue-600/20">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-blue-300 font-semibold">Date</span>
            </div>
            <p className="text-white font-semibold text-lg">{award.date}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 space-y-4 shadow-lg">
            {award.fullDescription.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-white leading-relaxed font-medium">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Target className="h-6 w-6" />
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {award.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-5 border-2 border-blue-400/60 flex items-start gap-3 shadow-md hover:shadow-lg hover:shadow-blue-600/30 transition-all"
              >
                <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <Code className="h-6 w-6" />
            Focus Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {award.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                className="bg-blue-100 text-blue-700 border-2 border-blue-300 px-4 py-2 text-sm font-semibold"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Impact</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-white leading-relaxed text-lg font-medium">{award.impact}</p>
          </div>
        </div>

        {/* LinkedIn Post */}
        <div className="flex justify-center">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7069333407775805440"
            height="600"
            width="504"
            frameBorder="0"
            allowFullScreen
            title="Embedded LinkedIn post"
            className="rounded-lg border-2 border-blue-400/60"
          />
        </div>
      </div>
    </main>
  );
}






