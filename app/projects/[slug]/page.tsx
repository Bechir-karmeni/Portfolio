import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    slug: "medimap",
    title: "MediMap",
    date: "Mar 2023 – Mar 2024",
    summary: `MEDIMAP is a software solution to facilitate access to breast cancer screening, developed in partnership with the Ministry of Public Health and the World Bank, and which follows the OpenGovDataHack 2023, an event co-organized by the Presidency of the Government and the e-Government Unit to promote public data.`,
    description: `🎯 Objective: MEDIMAP, a pioneering mobile and web application, aims to enhance breast cancer screening accessibility in Tunisia. It leverages geolocation and AI technology to streamline healthcare processes.\n\n💡 Features:\n- Geolocation of Health Facilities: Provides real-time information on nearby healthcare facilities equipped with mammography machines, detailing equipment status and waiting times.\n- AI-Based Risk Estimation: Utilizes AI to assess breast cancer risk, personalizing screening and preventive measures.\n- Remote Appointment Scheduling: Allows users to book mammography appointments remotely, ensuring timely screenings.\n- Medical Record Digitalization: Ensures the creation and secure access of digital medical records by authorized personnel, maintaining privacy.\n- Decision Support Tools: Offers decision-making support tools for both beneficiaries and policymakers to optimize breast cancer management strategies.\n\n🏆 Achievements and Recognitions:\n- Multiple Hackathon Wins: MEDIMAP's innovative approach has been recognized through multiple hackathon victories.\n- Significant Partnerships: The project is supported by the Ministry of Health and the World Bank, with additional backing from the Electronic Management Unit of the Presidency of the Government.\n\n🌐 Social Impact:\nMEDIMAP is poised to transform breast cancer care in Tunisia by improving screening rates, reducing late-stage cancer diagnoses, and lowering mortality rates. Its innovative use of technology marks a significant advancement in public health initiatives.`,
    issuedBy:
      "Ministry of Health and the World Bank, with additional backing from the Electronic Management Unit of the Presidency of the Government.",
    media: [
      { type: "image", src: "/medimap.jpeg", alt: "MediMap Screenshot" },
      { type: "image", src: "/Medimaplogo.jpeg", alt: "MediMap Logo" },
      { type: "video", src: "/Mobile app.mp4", label: "Mobile App Demo" },
      { type: "video", src: "/web app.mp4", label: "Web App Demo" },
      { type: "pptx", src: "/Presenation Medimap.pptx", label: "Presentation (PPTX)" },
    ],
    github: "#",
  },
  {
    slug: "medopad",
    title: "MedoPad",
    date: "Sep 2023 – Jan 2024",
    summary: `MedoPad is a unified, AI-driven platform for instant home-based detection of multiple diseases, transforming healthcare by making diagnostics accessible, efficient, and prompt.`,
    description: `🎯 Objective: The primary objective of MedoPad project is to create a unified, AI-driven platform that facilitates the detection of multiple diseases, offering instant home-based testing. This project aims to transform healthcare by making diagnostic processes more accessible, efficient, and prompt, empowering individuals to manage their health directly from their homes.\n\n💡 Features:\n1. Unified Disease Detection Platform: Combines the capabilities to detect seven different diseases through a single interface, simplifying user interaction and streamlining diagnostics.\n2. Custom AI Models:\n   - Custom-made CNNs: Specifically designed for high accuracy in detecting COVID-19, brain tumors, and pneumonia.\n   - VGG-16 Utilization: Employed for feature extraction in brain tumor detection to enhance diagnostic precision.\n   - Random Forest: Used for breast cancer and diabetes detection, providing robust predictive power.\n   - XGBoost: Implemented for heart disease detection, known for its effectiveness in handling diverse datasets.\n3. High Accuracy Rates: The AI models have been tested to deliver high accuracy rates across various diseases, demonstrating their effectiveness in medical diagnostics.\n4. Instant Test Results: Delivers diagnostic results instantly, making the testing process quick and efficient, which is crucial for early disease management and treatment planning.\n5. Remote Accessibility: Allows users to perform tests and receive results from the comfort of their homes, reducing the need for physical clinical visits.\n\nThese features highlight the project's innovation in integrating AI technology into healthcare, providing a comprehensive, efficient, and user-friendly medical diagnostic tool.\n\nSkills: Python`,
    issuedBy: "Personal Project",
    media: [
      { type: "video", src: "/Certifs/MedoPad.webm", label: "Video Demo" },
      { type: "pdf", src: "/Certifs/Report MedoPad.pdf", label: "Project Report (PDF)" },
    ],
    github: "https://github.com/Bechir-karmeni/MedoPad",
  },
  {
    slug: "lung-cancer-prediction",
    title: "🫁 Lung Cancer Prediction",
    date: "Apr 2023 – Apr 2023",
    summary: `The project aims to utilize Python and deep learning models (UNet, AlexNet, and VGG) to analyze X-ray images of lung cancer. The goal is to detect and compare carcinogenic regions across different models, providing a comprehensive evaluation of their performance in cancer identification.`,
    description: `🎯 Objective: The project aims to utilize Python and deep learning models (UNet, AlexNet, and VGG) to analyze X-ray images of lung cancer. The goal is to detect and compare carcinogenic regions across different models, providing a comprehensive evaluation of their performance in cancer identification.\n\n💡 Features:\n- Model Variety: Employs three different deep learning models—UNet, AlexNet, and VGG—to identify carcinogenic foci in lung X-ray images, allowing for a broad comparison of their effectiveness.\n- Performance Evaluation: Compares the models based on accuracy, errors, and training-testing times, with results visualized through matplotlib to highlight differences and insights.\n- Advanced Imaging Techniques: Focuses on advanced image processing tasks such as lung segmentation and normalization, crucial for improving model accuracy and reliability in medical imaging.\n- Comprehensive Dataset Use: Utilizes a dataset containing over 1000 CT scans from the LUNA16 challenge, which includes detailed annotations and metadata, enhancing the training and testing phases of model development.\n- Significant Findings and Metrics: Reports metrics such as accuracy, precision, recall, and F1-score to quantify each model's performance, with UNet emerging as the most effective based on the obtained results.\n\n🏆 Award-Winning Recognition:\nThis project won first place at the AI Night competition, highlighting its innovative approach and significant impact in the field of AI-driven medical diagnostics.\n\nSkills: Python, TensorFlow, Keras, Deep Learning, Image Segmentation`,
    issuedBy: "AI Night Competition (1st Place Winner)",
    media: [
      {
        type: "pptx",
        src: "/Certifs/Lung Cancer Prediction Presentation By Team Schwiftyy.pptx",
        label: "Presentation (PPTX)",
      },
    ],
    github: "https://github.com/Bechir-karmeni/Lung-Cancer-Prediction",
  },
  {
    slug: "self-driving-car",
    title: "🚗 Self Driving Car",
    date: "Sep 2022 – Oct 2022",
    summary: `The goal of the project was to train a Deep Network to replicate the human steering behavior while driving, thus being able to drive autonomously on a simulator provided by Udacity. To this purpose, the network takes as input the frame of the frontal camera (say, a roof-mounted camera) and predicts the steering direction at each instant.`,
    description: `🎯 Objective: The goal of the project was to train a Deep Network to replicate the human steering behavior while driving, thus being able to drive autonomously on a simulator provided by Udacity. To this purpose, the network takes as input the frame of the frontal camera (say, a roof-mounted camera) and predicts the steering direction at each instant.\n\n💡 Features:\n- Deep Learning Framework: Utilizes Keras with Convolutional Neural Networks (CNNs), leveraging deep learning to process and interpret visual data for steering control.\n- Visual Input Handling: The network takes input from three different camera perspectives—frontal, left, and right—mounted on the vehicle, allowing it to understand and respond to varying road conditions and angles.\n- Real-Time Steering Prediction: Predicts steering directions frame by frame based on the visual input, enabling dynamic and responsive vehicle control.\n- Behavioral Cloning: The network learns directly from human driving behavior, effectively cloning the steering actions based on visual cues.\n- Training Data Acquisition: Collects data in a controlled environment where a human driver navigates the simulator, capturing both the visual frames and the corresponding steering directions. Utilizes Udacity's pre-built dataset which includes 8036 samples with images from three different camera views and their respective steering directions.\n- Autonomous Simulation: Once trained, the network can independently drive the car in the Udacity simulator, interpreting road scenarios and making steering adjustments without human input.\n\nSkills: Python, Keras, TensorFlow, Convolutional Neural Networks, Behavioral Cloning`,
    issuedBy: "Udacity Autonomous Driving Course",
    media: [{ type: "image", src: "/Certifs/Exemple.gif", alt: "Self Driving Car Demo" }],
    github: "https://github.com/Bechir-karmeni/AutoPilot",
  },
];

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-semibold border border-blue-200 hover:border-blue-400 rounded-lg mb-12 transition-all group backdrop-blur-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-semibold">Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-black via-blue-900 to-blue-700 rounded-3xl p-12 mb-12 shadow-2xl relative overflow-hidden border-2 border-blue-500/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-white/95 text-xl mb-6 max-w-3xl leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-700 border-2 border-blue-300 px-4 py-2 text-base font-semibold">
                {project.date}
              </Badge>
              {project.issuedBy && (
                <Badge className="bg-blue-100 text-blue-700 border-2 border-blue-300 px-4 py-2 text-base font-semibold">
                  {project.issuedBy.split(",")[0]}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Media Gallery */}
            <div className="space-y-6">
              {project.media.map((media, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border-2 border-blue-500/40 shadow-lg hover:border-blue-400/80 transition-all duration-300"
                >
                  {media.type === "image" && (
                    <div className="relative rounded-xl overflow-hidden">
                      <Image
                        src={media.src}
                        alt={media.alt || "Project image"}
                        width={900}
                        height={500}
                        className="w-full h-auto object-cover"
                        priority={i === 0}
                      />
                    </div>
                  )}
                  {media.type === "video" && (
                    <div className="bg-black rounded-xl overflow-hidden">
                      <video
                        controls
                        className="w-full h-auto"
                        style={{
                          aspectRatio: "16/9",
                        }}
                      >
                        {media.src.endsWith(".webm") && (
                          <source src={media.src} type="video/webm" />
                        )}
                        {media.src.endsWith(".mp4") && <source src={media.src} type="video/mp4" />}
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {media.type === "pdf" && (
                    <a
                      href={media.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 w-full justify-center"
                    >
                      <span>📄</span>
                      <span>{media.label || "View Document"}</span>
                    </a>
                  )}
                  {media.type === "pptx" && (
                    <a
                      href={media.src}
                      download
                      className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 w-full justify-center"
                    >
                      <span>📊</span>
                      <span>{media.label || "Download Presentation"}</span>
                    </a>
                  )}
                  {media.label && media.type !== "pptx" && media.type !== "pdf" && (
                    <div className="mt-4 text-center text-blue-400 font-semibold">
                      {media.label}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Description Sections */}
            {project.description && (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border-2 border-blue-500/40 space-y-6 shadow-lg">
                <div className="text-blue-100 leading-relaxed whitespace-pre-line space-y-4">
                  {project.description.split("\n\n").map((section, idx) => {
                    if (section.trim().startsWith("MEDIMAP")) {
                      return (
                        <div
                          key={idx}
                          className="text-blue-100 text-base leading-relaxed border-l-4 border-blue-400 pl-4"
                        >
                          {section}
                        </div>
                      );
                    }
                    if (section.trim().startsWith("🎯")) {
                      return (
                        <div
                          key={idx}
                          className="bg-slate-800/80 border-2 border-blue-500/40 rounded-lg p-4"
                        >
                          <p className="text-blue-100 text-base leading-relaxed font-semibold">
                            {section}
                          </p>
                        </div>
                      );
                    }
                    if (section.trim().startsWith("💡")) {
                      return (
                        <div key={idx} className="space-y-3">
                          <h3 className="text-xl font-bold text-blue-300 flex items-center gap-2">
                            💡 Features
                          </h3>
                          <div className="space-y-2 pl-4 border-l-2 border-blue-400/50">
                            {section
                              .split("\n")
                              .slice(1)
                              .map((feature, fidx) => (
                                <p key={fidx} className="text-blue-100 text-sm leading-relaxed">
                                  {feature}
                                </p>
                              ))}
                          </div>
                        </div>
                      );
                    }
                    if (section.trim().startsWith("🏆")) {
                      return (
                        <div key={idx} className="space-y-3">
                          <h3 className="text-xl font-bold text-blue-300 flex items-center gap-2">
                            🏆 Achievements & Recognitions
                          </h3>
                          <div className="space-y-2 pl-4 border-l-2 border-blue-400/50">
                            {section
                              .split("\n")
                              .slice(1)
                              .map((achievement, aidx) => (
                                <p key={aidx} className="text-blue-100 text-sm leading-relaxed">
                                  {achievement}
                                </p>
                              ))}
                          </div>
                        </div>
                      );
                    }
                    if (section.trim().startsWith("🌐")) {
                      return (
                        <div
                          key={idx}
                          className="bg-slate-800/80 border-2 border-blue-500/40 rounded-lg p-4 space-y-2"
                        >
                          <h3 className="text-xl font-bold text-blue-300 flex items-center gap-2">
                            🌐 Social Impact
                          </h3>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            {section.split("\n").slice(1).join("\n")}
                          </p>
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="text-blue-100 text-base leading-relaxed">
                        {section}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* GitHub Link */}
            {project.github && project.github !== "#" && (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border-2 border-blue-500/40 hover:border-blue-400/80 transition-all duration-300 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-4">Repository</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 justify-center"
                >
                  <span>🔗</span>
                  <span>View on GitHub</span>
                </a>
              </div>
            )}

            {/* Project Info Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border-2 border-blue-500/40 space-y-4 shadow-lg">
              <div>
                <p className="text-blue-400 text-sm mb-1 font-semibold">Project Date</p>
                <p className="text-white font-semibold text-lg">{project.date}</p>
              </div>
              <div className="border-t border-blue-500/20 pt-4">
                <p className="text-blue-400 text-sm mb-2 font-semibold">Issued By</p>
                <p className="text-blue-100 text-sm leading-relaxed">{project.issuedBy}</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border-2 border-blue-500/40 shadow-lg">
              <p className="text-blue-100 text-sm text-center leading-relaxed font-medium">
                ✨ This project showcases innovative solutions to real-world healthcare challenges
                using modern technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
