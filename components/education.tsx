import { Calendar, MapPin, Award, BookOpen, Users, Trophy } from "lucide-react";
import Image from "next/image";

const education = {
  school: "École Polytechnique de Sousse",
  location: "Sousse, Tunisia",
  website: "https://www.eps.rnu.tn/",
  degree: "Bachelor's Degree in Computer Software Engineering",
  specialization: "Specializing in AI & Data Science",
  startDate: "Sep 2021",
  endDate: "Jul 2024",
  grade: "With Honors",
  logo: "/logos/polytechnique.png",
  keyCourses: [
    "Machine Learning",
    "Algorithms & Data Structures",
    "Graphs & Optimization",
    "Artificial Intelligence",
    "Virtualization & Cloud",
    "Design of Information Systems",
  ],
  activities: [
    { title: "Web Master", org: "IEEE RAS ISSATSo Student Branch" },
    { title: "Judge Coordinator", org: "Hult Prize in Tunisia" },
    { title: "Member", org: "IEEE RAS ISSATSo Student Branch" },
    { title: "Ambassador", org: "National Robotics Weekend" },
    { title: "Member", org: "Lions Clubs International" },
    { title: "Member", org: "Google Developer Student" },
  ],
  hackathonInfo: {
    count: 25,
    title: "Schwifty",
    description:
      "Participated in 25+ national and international hackathons as an integral team member, achieving numerous victories and earning the reputation as formidable competitors.",
  },
};

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Academic Foundation & Professional Development
        </p>

        {/* Main Education Card */}
        <div className="bg-white border-2 border-blue-300 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Left Section - Logo & Basic Info */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="relative h-40 w-40 mb-6 flex items-center justify-center">
                <Image
                  src={education.logo}
                  alt={education.school}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-4">
                {education.school}
              </h3>
              <div className="flex flex-col gap-3 text-sm text-gray-700 w-full">
                <div className="flex items-center gap-2 justify-center">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>
                    {education.startDate} – {education.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center bg-blue-200 rounded-full py-2 px-3">
                  <Award className="w-4 h-4 text-blue-700" />
                  <span className="font-semibold text-blue-700">{education.grade}</span>
                </div>
              </div>
            </div>

            {/* Right Section - Degree Details */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {education.degree}
              </h4>
              <p className="text-lg text-blue-600 font-semibold mb-6">{education.specialization}</p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <p className="text-xs font-semibold text-gray-600 uppercase">Duration</p>
                  <p className="text-lg font-bold text-blue-700">3 Years</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <p className="text-xs font-semibold text-gray-600 uppercase">Status</p>
                  <p className="text-lg font-bold text-green-700">Graduated</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Comprehensive engineering program with specialized focus on AI and Data Science,
                combining theoretical foundations with practical project-based learning and industry
                collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Key Courses Card */}
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Key Courses</h3>
            </div>
            <div className="space-y-2">
              {education.keyCourses.map((course, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span className="text-blue-600 font-bold mt-0.5">▸</span>
                  <span className="text-gray-700 text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathon Achievement Card */}
          <div className="group bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Trophy className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hackathon Achievements</h3>
            </div>
            <div className="mb-4">
              <p className="text-4xl font-bold text-orange-600 mb-2">
                {education.hackathonInfo.count}+
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                National & International Hackathons
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {education.hackathonInfo.description}
              </p>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg border border-orange-200">
              <p className="text-xs text-gray-600 uppercase font-semibold">Team Name</p>
              <p className="text-lg font-bold text-orange-600">{education.hackathonInfo.title}</p>
            </div>
          </div>

          {/* Leadership & Activities Card */}
          <div className="group bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Leadership Roles</h3>
            </div>
            <div className="space-y-2 max-h-72 overflow-y-auto pr-2">
              {education.activities.map((activity, i) => (
                <div key={i} className="p-2 bg-white rounded-lg hover:shadow-md transition-all">
                  <p className="text-sm font-semibold text-green-700">{activity.title}</p>
                  <p className="text-xs text-gray-600">{activity.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Professional Summary</h3>
          <p className="text-lg leading-relaxed">
            Engineering graduate with a strong foundation in computer science, AI, and data
            engineering. Demonstrated leadership through multiple roles in student organizations,
            and proven problem-solving abilities through extensive hackathon participation. Equipped
            with both technical expertise and teamwork skills to drive innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
