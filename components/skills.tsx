import Image from "next/image";

const technologies = [
  {
    name: "Python",
    logo: "/Tech/lg-661dcd777c196-Python-Programming-Language.webp",
    wiki: "https://en.wikipedia.org/wiki/Python_(programming_language)",
  },
  {
    name: "PyTorch",
    logo: "/Tech/pytorch.webp",
    wiki: "https://en.wikipedia.org/wiki/PyTorch",
  },
  {
    name: "TensorFlow",
    logo: "/Tech/TensorFlow_logo.svg.png",
    wiki: "https://en.wikipedia.org/wiki/TensorFlow",
  },
  {
    name: "AWS",
    logo: "/Tech/aws logo.png",
    wiki: "https://en.wikipedia.org/wiki/Amazon_Web_Services",
  },
  {
    name: "Flask",
    logo: "/Tech/flask-logo-icon.webp",
    wiki: "https://en.wikipedia.org/wiki/Flask_(web_framework)",
  },
  {
    name: "Django",
    logo: "/Tech/django-python-logo.webp",
    wiki: "https://en.wikipedia.org/wiki/Django_(web_framework)",
  },
  {
    name: "React",
    logo: "/Tech/react-logo.jpg",
    wiki: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
  },
  {
    name: "Power BI",
    logo: "/Tech/pwerbi logo.svg",
    wiki: "https://en.wikipedia.org/wiki/Power_BI",
  },
  {
    name: "Java",
    logo: "/Tech/java.svg",
    wiki: "https://en.wikipedia.org/wiki/Java_(programming_language)",
  },
  { name: "SQL", logo: "/Tech/sql logo.jpg", wiki: "https://en.wikipedia.org/wiki/SQL" },
  {
    name: "Docker",
    logo: "/Tech/docker logo (2).png",
    wiki: "https://en.wikipedia.org/wiki/Docker_(software)",
  },
  {
    name: "Angular",
    logo: "/Tech/angular logo.png",
    wiki: "https://en.wikipedia.org/wiki/Angular_(web_framework)",
  },
  {
    name: "Spring Boot",
    logo: "/Tech/spring-boot-logo.png",
    wiki: "https://en.wikipedia.org/wiki/Spring_Framework",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-40 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
            Technologies & Tools
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.wiki}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${tech.name}`}
              title={`Learn more about ${tech.name}`}
              className="group h-full"
            >
              <div className="h-full flex flex-col items-center justify-between p-8 md:p-10 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-400 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 relative overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                {/* Icon container */}
                <div className="flex items-center justify-center w-full mb-4">
                  <div className="relative w-40 h-32 flex items-center justify-center">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={160}
                      height={120}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110 filter group-hover:brightness-110"
                    />
                  </div>
                </div>

                {/* Tech name - always visible */}
                <div className="text-center w-full mt-2">
                  <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
