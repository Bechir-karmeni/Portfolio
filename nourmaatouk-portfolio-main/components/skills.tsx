import Image from "next/image"

const technologies = [
  { name: "Python", logo: "/logos/python.png", wiki: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
  { name: "Pandas", logo: "/logos/pandas.png", wiki: "https://en.wikipedia.org/wiki/Pandas_(software)" },
  { name: "SQL", logo: "/logos/sql.png", wiki: "https://en.wikipedia.org/wiki/SQL" },
  { name: "Git", logo: "/logos/git.png", wiki: "https://en.wikipedia.org/wiki/Git" },
  { name: "Docker", logo: "/logos/docker.png", wiki: "https://en.wikipedia.org/wiki/Docker_(software)" },
  { name: "XGBoost", logo: "/logos/xgboost.png", wiki: "https://en.wikipedia.org/wiki/XGBoost" },
  { name: "LangChain", logo: "/logos/langchain.png", wiki: "https://en.wikipedia.org/wiki/LangChain" },
  { name: "LLMs", logo: "/logos/llms.png", wiki: "https://en.wikipedia.org/wiki/Large_language_model" },
  { name: "Multi-agent system", logo: "/logos/multi-agent-system.png", wiki: "https://en.wikipedia.org/wiki/Multi-agent_system" },
  { name: "Neo4j", logo: "/logos/neo4j.png", wiki: "https://en.wikipedia.org/wiki/Neo4j" },
  { name: "GraphRAG", logo: "/logos/graphrag.png", wiki: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation" },
  { name: "HTML/CSS/JS", logo: "/logos/html-css-js.png", wiki: "https://en.wikipedia.org/wiki/Web_development" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Technologies & Tools</h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 items-center max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.wiki}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${tech.name}`}
              className="flex items-center justify-center w-auto h-36 transition-transform hover:scale-110 cursor-pointer"
              title={`Learn more about ${tech.name}`}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={180}
                height={100}
                className="object-contain w-36 h-20 md:w-44 md:h-28"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
