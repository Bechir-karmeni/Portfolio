
import { Calendar, MapPin } from "lucide-react"

const education = {
  school: "École Polytechnique de Sousse",
  location: "Sousse, Tunisia",
  startDate: "Sep 2021",
  endDate: "Jul 2026",
  logo: "/logos/polytechnique.png", // Place your logo in public/logos/
  degrees: [
    {
      title: "Computer Science Engineering Degree",
      specialization: "Specializing in AI & Data Science",
      period: "Sep 2023 - Jul 2026",
    },
    {
      title: "Preparatory Integrated Program",
      specialization: "Advanced Modeling & Information Technology Track",
      period: "Sep 2021 - May 2023",
    }
  ],
  keyCourses: [
    "Machine Learning",
    "Algorithms and Data Structures",
    "Graphs and Optimization",
    "Artificial Intelligence",
    "Design of Information Systems"
  ]
}

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Education</h2>
        <div className="bg-white dark:bg-background border border-black dark:border-border rounded-2xl p-8 md:p-16 flex flex-col items-center min-h-[80vh]" style={{boxShadow: 'none'}}>
          {/* Logo */}
          <img
            src={education.logo}
            alt="Polytechnique Sousse Logo"
            className="h-24 md:h-32 mb-4"
            style={{ objectFit: 'contain' }}
          />
          {/* School Name */}
          <h3 className="text-3xl md:text-4xl font-bold text-center text-[#2176ff] mb-2">
            {education.school}
          </h3>
          {/* Location and Dates */}
          <div className="flex flex-col items-center justify-center gap-1 mb-8 text-black dark:text-muted-foreground text-center">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{education.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{education.startDate} - {education.endDate}</span>
            </div>
          </div>

          {/* Degrees */}
          <div className="w-full flex flex-col gap-8 mb-12">
            {/* Degree 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-1 bg-[#2176ff] rounded-full h-20 mt-1" />
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-black mb-1">
                  {education.degrees[0].title}
                </h4>
                <p className="text-base text-black mb-1">
                  {education.degrees[0].specialization}
                </p>
                <div className="flex items-center gap-2 text-black text-sm">
                  <Calendar className="inline h-4 w-4 mr-1 align-text-bottom text-[#2176ff]" />
                  <span>{education.degrees[0].period}</span>
                </div>
              </div>
            </div>
            {/* Degree 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-1 bg-[#2176ff] rounded-full h-20 mt-1" />
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-black mb-1">
                  {education.degrees[1].title}
                </h4>
                <p className="text-base text-black mb-1">
                  {education.degrees[1].specialization}
                </p>
                <div className="flex items-center gap-2 text-black text-sm">
                  <Calendar className="inline h-4 w-4 mr-1 align-text-bottom text-[#2176ff]" />
                  <span>{education.degrees[1].period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Courses */}
          <div className="w-full text-center mt-2">
            <p className="font-bold text-lg mb-3">Key Courses</p>
            <div className="flex flex-wrap justify-center gap-3">
              {education.keyCourses.map((course, i) => (
                <span
                  key={i}
                  className="bg-[#2176ff] text-white text-base px-4 py-1 rounded-lg font-semibold shadow-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
