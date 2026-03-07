"use client";

import { Linkedin } from "lucide-react";

export function Media() {
  const linkedinPosts = [
    {
      id: "1",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7325173399415140353",
      height: 600,
    },
    {
      id: "2",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7325076098784874497",
      height: 520,
    },
    {
      id: "3",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325123888932151298",
      height: 540,
    },
    {
      id: "4",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7303774976313090053?collapsed=1",
      height: 500,
    },
    {
      id: "5",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7325083597411876864",
      height: 520,
    },
    {
      id: "6",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7300667090250657792?collapsed=1",
      height: 650,
    },
    {
      id: "7",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7283322896066752513?collapsed=1",
      height: 560,
    },
    {
      id: "8",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7275536366019506180",
      height: 520,
    },
    {
      id: "9",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7263272657582743552",
      height: 520,
    },
    {
      id: "10",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7187721727638978560",
      height: 520,
    },
    {
      id: "11",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7152118103521308672?collapsed=1",
      height: 480,
    },
    {
      id: "12",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7114157013193887744",
      height: 520,
    },
    {
      id: "13",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7083505869891481601",
      height: 520,
    },
  ];

  return (
    <section id="media" className="py-24 md:py-40 bg-gradient-to-b from-white to-slate-50 w-full">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-20 px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              <Linkedin className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              MEDIA & UPDATES
            </h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
            Stay updated with my latest insights, projects, and achievements shared on LinkedIn
          </p>
        </div>

        {/* LinkedIn Posts Grid - Full Width */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 auto-rows-max px-4 md:px-8 lg:px-16">
          {linkedinPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative"
              style={{
                gridRow: `span ${Math.ceil(post.height / 200)}`,
              }}
            >
              {/* Card Container */}
              <div className="h-full bg-white rounded-3xl border-2 border-blue-200 overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-blue-600/40 hover:border-blue-400 transition-all duration-300 flex flex-col">
                {/* Top Badge */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 flex items-center gap-3">
                  <Linkedin className="h-6 w-6 text-white" />
                  <span className="text-white text-base font-semibold">
                    LinkedIn Post #{index + 1}
                  </span>
                </div>

                {/* Embed Container */}
                <div className="flex-1 overflow-visible bg-gradient-to-b from-blue-50 to-white p-8">
                  <iframe
                    src={post.src}
                    height={post.height}
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={`LinkedIn Post ${index + 1}`}
                    className="rounded-xl w-full"
                    style={{
                      maxWidth: "100%",
                      margin: "0 auto",
                      minHeight: `${post.height}px`,
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center px-4 md:px-8 lg:px-16">
          <a
            href="https://www.linkedin.com/in/bechirkarmeni/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300"
          >
            <Linkedin className="h-6 w-6" />
            Follow Me on LinkedIn
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
