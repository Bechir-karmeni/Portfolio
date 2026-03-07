"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Calendar, Building, ExternalLink } from "lucide-react";

const awards = [
  {
    place: "1st Place",
    title: "MutualHack by MAE 2.0",
    organization: "MAE ASSURANCES and MAZAM",
    date: "May 2025",
    description:
      "Won the first prize for a centralized management platform promoting employee well-being and mental health with scientifically approved psychometric tools.",
    slug: "mutualhack-mae-2-0",
    image: "/honors/MutualHack%20by%20MAE%202.0%202.jpg",
  },
  {
    place: "2nd Place",
    title: "CivicTech Sprint Hackathon",
    organization: "The World Bank, Ministry of Interior Tunisia, EY, Deloitte",
    date: "December 2024",
    description:
      "Secured 2nd place in a 48-hour hackathon focused on enhancing transparency, efficiency, and citizen engagement in public services.",
    slug: "civictech-sprint-hackathon",
    image: "/honors/CivicTech%20Sprint%20Hackathon.jpg",
  },
  {
    place: "1st Place",
    title: "SWAFYTHON",
    organization: "SWAFY (Science With And For Youth), EU4Youth - Tunisia",
    date: "November 2024",
    description:
      "Won the first prize at the SWAFYTHON HACKATHON in Tunis, one of the biggest hackathon events of the year.",
    slug: "swafython",
    image: "/honors/SWAFYTHON.jpg",
  },
  {
    place: "3rd Place",
    title: "Tunisia e-Health Valley Hackathon (3rd Edition)",
    organization: "OPALIA RECORDATI, Union of Pharmacists of Tunisia",
    date: "September 2024",
    description:
      "Developed AsthmaSafe, a software solution designed to enhance asthma management through innovative digital tools.",
    slug: "ehealth-valley-hackathon-3rd",
    image: "/honors/third%20edition%20of%20the%20Tunisia%20e-Health%20Valley%20Hackathon.jpg",
  },
  {
    place: "2nd Place",
    title: "OpenGeoData Challenge Hackathon",
    organization: "AGEOS (African Association for Geospatial Development)",
    date: "November 2023",
    description:
      "Secured 2nd place for #MEDIMAP, the first Tunisian mobile application to facilitate breast cancer screening.",
    slug: "opengeodata-challenge-hackathon",
    image: "/honors/OPENGEODATA%20Challenge%20Hackathon1.jpg",
  },
  {
    place: "3rd Place",
    title: "CYBERBENDERS AI CHALLENGE",
    organization: "EPI DIGITAL SCHOOL",
    date: "November 2023",
    description:
      "Triumphed in an extraordinary AI and Cybersecurity Hackathon, showcasing innovation and mastery of cutting-edge technologies.",
    slug: "cyberbenders-ai-challenge",
    image: "/honors/CYBERBENDERS%20AI.jpg",
  },
  {
    place: "3rd Place",
    title: "Tunisia e-Health Valley Hackathon (2nd Edition)",
    organization: "Opalia Recordati, Hackathon Tunisia",
    date: "September 2023",
    description:
      "Created MediGate, a groundbreaking platform for cancer care management with remote patient monitoring capabilities.",
    slug: "ehealth-valley-hackathon-2nd",
    image: "/honors/e-valley.jpg",
  },
  {
    place: "Training",
    title: "SolLab TUN (#4)",
    organization: "Fraunhofer Institute, Federal Ministry of Education and Research Germany",
    date: "July 2023",
    description:
      "Participated in an exceptional training program focused on creative problem-solving, innovation management, and intercultural cooperation.",
    slug: "sollab-tun",
    image: "/honors/sollab.jpg",
  },
  {
    place: "1st Place",
    title: "Artificial Intelligence Night II Edition",
    organization: "ARSII (Association for Scientific Research and Innovation)",
    date: "April 2023",
    description:
      "Won the AI competition using Unet, Alexnet, and VGG models to detect lung cancer from x-ray images with Python.",
    slug: "ai-night-challenge-2",
    image: "/honors/ainight.jpg",
  },
  {
    place: "1st Place",
    title: "Start It Up Hackathon First Edition",
    organization: "Junior Entreprise ENISo",
    date: "March 2023",
    description:
      "Emerged as first prize winners in a 24-hour hackathon focused on creating innovative AI solutions with teammate Koussay Messaoudi.",
    slug: "start-it-up-hackathon",
    image: "/honors/startitup3.jpg",
  },
  {
    place: "Top 4",
    title: "Eniso Entreprises Convergence Forum (11th Edition)",
    organization: "National School of Engineers in Sousse",
    date: "December 2022",
    description:
      "Competed in 'INNOVATE FOR SOCIETY V 4.0' competition, presenting innovative ideas for positive social change.",
    slug: "eniso-convergence-forum",
    image: "/honors/eniso.jpg",
  },
  {
    place: "1st Place",
    title: "GIZ Hackathon First Edition",
    organization: "IEEE FST SB (Faculty of Science Tunis)",
    date: "December 2022",
    description:
      "Won the GREEN INDUSTRY ZONE 24-hour hackathon tackling Smart City challenges with IoT, IT, and AI solutions for environmental problems.",
    slug: "giz-hackathon",
    image: "/honors/giz.jpg",
  },
  {
    place: "2nd Place",
    title: "Nuit De L'Info 2022",
    organization: "CM'IN (Chartres Métropole Innovations Numériques)",
    date: "December 2022",
    description:
      "Secured silver medal in the national competition with the challenge 'Comme un DevOps tu penseras', competing against top contenders.",
    slug: "nuit-de-l-info-2022",
    image: "/honors/nuitdinfo.jpg",
  },
  {
    place: "Participant",
    title: "AI Hack Tunisia Second Edition",
    organization: "InstaDeep",
    date: "September 2022",
    description:
      "Participated in the biggest AI/ML hackathon in the MEA region, showcasing startup ideas and pitching skills to industry leaders.",
    slug: "ai-hack-tunisia-2",
    image: "/honors/Aihacktunisia1.jpg",
  },
];

export function Awards() {
  const router = useRouter();

  return (
    <section
      id="awards"
      className="py-20 md:py-32 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4 border-2 border-blue-300">
            <Trophy className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Recognition & Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-blue-900 to-blue-700 bg-clip-text text-transparent mb-4">
            Awards & Honors
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Recognized excellence in AI competitions and technical hackathons across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, idx) => {
            const isFirst = award.place === "1st Place";
            const isSecond = award.place === "2nd Place";
            const isThird = award.place === "3rd Place";

            const badgeColor = isFirst
              ? "bg-blue-600 text-white border-blue-600"
              : isSecond
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-blue-400 text-white border-blue-400";

            const cardBg = isFirst
              ? "bg-white border-l-4 border-l-blue-600"
              : isSecond
                ? "bg-white border-l-4 border-l-blue-500"
                : "bg-white border-l-4 border-l-blue-400";

            const shadowColor = isFirst
              ? "hover:shadow-lg hover:shadow-blue-600/20"
              : isSecond
                ? "hover:shadow-lg hover:shadow-blue-500/20"
                : "hover:shadow-lg hover:shadow-blue-400/20";

            const accentColor = isFirst
              ? "text-blue-600"
              : isSecond
                ? "text-blue-500"
                : "text-blue-400";

            return (
              <Card
                key={idx}
                className={`${cardBg} border-2 border-gray-200 ${shadowColor} transition-all hover:-translate-y-1 group relative overflow-hidden cursor-pointer`}
                onClick={() => award.slug && router.push(`/awards/${award.slug}`)}
              >
                {/* Top accent gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${isFirst ? "from-blue-600 to-blue-500" : isSecond ? "from-blue-500 to-blue-400" : "from-blue-400 to-blue-300"}`}
                />

                {/* Award Image */}
                <div className="w-full h-48 overflow-hidden bg-gray-100">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-100"
                  />
                </div>

                <CardHeader className="pb-4 pt-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold border-2 ${badgeColor}`}
                    >
                      <Trophy className={`h-4 w-4`} />
                      {award.place}
                    </div>
                    <div className="text-2xl opacity-100 group-hover:scale-125 transition-transform">
                      {isFirst ? "🏆" : isSecond ? "🥈" : isThird ? "🥉" : "🎖️"}
                    </div>
                  </div>
                  <CardTitle
                    className={`text-xl font-bold ${accentColor} leading-tight group-hover:text-opacity-80 transition-all`}
                  >
                    {award.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-gray-100 flex-shrink-0`}>
                        <Building className={`h-4 w-4 ${accentColor}`} />
                      </div>
                      <span className="text-gray-700 leading-snug">{award.organization}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gray-100 flex-shrink-0`}>
                        <Calendar className={`h-4 w-4 ${accentColor}`} />
                      </div>
                      <span className="text-gray-700">{award.date}</span>
                    </div>
                  </div>

                  {award.description && (
                    <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4 mt-4">
                      {award.description}
                    </p>
                  )}

                  {award.slug ? (
                    <div
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${accentColor} hover:opacity-70 transition-opacity mt-2 group/link`}
                    >
                      View Details
                      <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </div>
                  ) : (
                    <a
                      href={award.details}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${accentColor} hover:opacity-70 transition-opacity mt-2 group/link`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                      <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
