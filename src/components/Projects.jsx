import en from "../data/locales/en.json";

export default function Projects() {
  const { highligthedProjectsTitle, highligthedProjects } = en;

  return (
    <section className="bg-[#E6F0FA] dark:bg-[#1A2A3A]">
      <div className="w-[75vw] mx-auto py-20 ">
        <p className="text-4xl font-medium text-center mb-10 text-[#1A1A1A] dark:text-[#faf6ed]">
          {highligthedProjectsTitle}
        </p>
        <div className="flex flex-col gap-30 sm:flex-row sm:gap-15 justify-center">
          {highligthedProjects.map((projects, i) => (
            <div
              key={i}
              className={`relative w-[500px] h-[668px] flex flex-col gap-2 rounded-xl p-10 ${projects.bgColor} text-[#1A1A1A] text-justify dark:text-[#E5E7EB]`}
            >
              <div className="mb-5">
                <p className="text-3xl mb-5">{projects.title}</p>
                <p>{projects.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {projects.techStack.map((tech, i) => (
                  <p
                    key={i}
                    className="font-bold py-2 px-5 bg-white rounded-[76px] dark:bg-[#1A2A3A]"
                  >
                    {tech.toLowerCase()}
                  </p>
                ))}
              </div>
              <nav className="flex justify-between text-xl font-semibold">
                <a
                  href={projects.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:font-normal"
                >
                  View on Github
                </a>
                <a
                  href={projects.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:font-normal"
                >
                  Go to app {"->"}{" "}
                </a>
              </nav>
              <div>
                <img
                  src="/pc.png"
                  className="absolute -bottom-10 -right-0 z-2"
                />
                <div className="absolute left-18 bottom-2 w-[355px] h-[221px]">
                  <img
                    src={projects.image}
                    className="w-full h-full object-cover object-[center_0%]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
