"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Building, Target, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AINightDetailPage() {
  const award = {
    place: "1st Place",
    title: "Artificial Intelligence Night II Edition",
    organization: "ARSII (Association for Scientific Research and Innovation)",
    date: "April 2023",
    image: "/honors/ainight.jpg",
    shortDescription:
      "Won the AI competition using Unet, Alexnet, and VGG models to detect lung cancer from x-ray images with Python.",
    fullDescription: `
      Triumphed in the Artificial Intelligence Night II Edition competition organized by ARSII (Association for Scientific Research and Innovation).
      
      Built a sophisticated deep learning solution that leverages advanced neural network architectures (Unet, Alexnet, VGG) to accurately detect lung cancer from medical x-ray images, showcasing excellence in medical imaging and AI research.
    `,
    technologies: ["Python", "TensorFlow", "Keras", "Unet", "Alexnet", "VGG", "OpenCV", "NumPy"],
    keyFeatures: [
      "Multi-architecture ensemble learning",
      "Medical image preprocessing",
      "Deep neural network models",
      "High accuracy lung cancer detection",
      "Data augmentation techniques",
      "Model validation and testing",
    ],
    impact:
      "Developed an AI solution that could assist healthcare professionals in early lung cancer detection and diagnosis.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
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
        <div className="mb-8 rounded-2xl overflow-hidden border-2 border-blue-300 shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300">
          <img src={award.image} alt={award.title} className="w-full h-96 object-cover" />
        </div>

        <div className="mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-2 border-blue-300 font-bold">
            🎖️ {award.place}
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

        <div>
          <h2 className="text-2xl font-bold mb-6 text-black">Impact</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border-2 border-blue-500/40 shadow-lg">
            <p className="text-white leading-relaxed text-lg">{award.impact}</p>
          </div>
        </div>
      </div>
    </main>
  );
}





