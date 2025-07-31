import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { translations } = useLanguage();
  const { highligthedProjectsTitle, highligthedProjects, github, app } =
    translations.projects;

  return (
    <section className="bg-[#E6F0FA] dark:bg-[#1A2A3A]">
      <div className="w-screen md:w-[75vw] mx-auto py-20 px-10">
        <p className="text-4xl font-medium text-center mb-10 text-[#1A1A1A] dark:text-[#faf6ed]">
          {highligthedProjectsTitle}
        </p>
        <div className="flex flex-col gap-10 md:flex-row sm:gap-15 justify-center">
          {highligthedProjects.map((projects, i) => (
            <div
              key={i}
              className={`relative md:w-[50vw] md:h-auto flex flex-col gap-2 rounded-xl ${projects.bgColor} text-[#1A1A1A] dark:text-[#E5E7EB] transition-transform duration-300 transform hover:scale-105 hover:shadow-xl`}
            >
              <div className="mb-5 pt-10 px-10">
                <p className="text-3xl mb-5">{projects.title}</p>
                <p>{projects.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5 px-10">
                {projects.techStack.map((tech, i) => (
                  <p
                    key={i}
                    className="font-bold py-2 px-5 bg-white rounded-[76px] dark:bg-[#1A2A3A] "
                  >
                    {tech.toLowerCase()}
                  </p>
                ))}
              </div>
              <nav className="flex flex-wrap justify-between text-xl font-semibold px-10 pb-5">
                <a
                  href={projects.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:font-normal"
                >
                  {github}
                </a>
                <a
                  href={projects.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:font-normal"
                >
                  {app} {"->"}{" "}
                </a>
              </nav>

              <div className="mt-auto">
                <img
                  src={projects.image}
                  alt="project"
                  className="w-full mt-10 rounded-b-xl border-t-10 border-[#E6F0FA] dark:border-[#1A2A3A]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
