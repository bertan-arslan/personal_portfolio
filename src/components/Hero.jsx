import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { translations } = useLanguage();
  const { greeting, intro, typewriterWords, cta, description } =
    translations.hero;

  return (
    <section className="bg-[#faf6ed] dark:bg-[#003049] overflow-hidden">
      <div className="relative z-5 pt-10 pb-25 flex flex-col items-center justify-center w-[75vw] mx-auto gap-5 md:flex-row md:gap-30">
        <div className="relative flex flex-col gap-10 md:w-[50%]">
          <div>
            <p className="relative z-5 my-5 text-3xl text-[#1A1A1A] dark:text-[#faf6ed]">
              {greeting}
            </p>
            <p className=" relative z-5 text-[42px] font-medium text-[#1A1A1A] dark:text-[#faf6ed]">
              {intro}
            </p>

            <p
              className="relative z-5 text-[42px] font-medium text-[#669BBC] dark:text-[#8ECAE6] inline-block"
              style={{ minWidth: "300px" }}
            >
              <Typewriter
                words={typewriterWords}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </p>

            <p className="text-[42px] font-medium text-[#1A1A1A] dark:text-[#faf6ed]">
              {cta}
            </p>
          </div>

          <div className="absolute -left-5 top-28 bg-[#669BBC] dark:bg-[#8ECAE6] w-[148px] h-[31px] rounded"></div>
          <div>
            <nav className="flex mb-4 text-[#1A1A1A] dark:text-[#faf6ed]">
              <a
                href="https://www.linkedin.com/in/bertan-arslan-7024a8166/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-3xl text-[#669BBC] dark:text-[#8ECAE6]"
                />
              </a>
              <a
                href="https://github.com/bertan-arslan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl text-[#669BBC] dark:text-[#8ECAE6]"
                />
              </a>
            </nav>

            <div className="text-lg text-[#1A1A1A] dark:text-[#faf6ed] flex flex-wrap gap-1">
              {description.map((part, i) => {
                const base = "text-[#1A1A1A] dark:text-[#faf6ed]";
                const strong =
                  "font-semibold text-[#003049] dark:text-[#8ECAE6]";
                const underline = part.underline ? "underline" : "";

                return part.isEmail ? (
                  <a
                    key={i}
                    href={`mailto:${part.text}`}
                    className={`${strong} ${underline}`}
                  >
                    {part.text}
                  </a>
                ) : (
                  <span
                    key={i}
                    className={`${part.emphasis ? strong : base} ${underline}`}
                  >
                    {part.text}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <img
          src="/hero.png"
          className="my-10 w-full object-cover h-[340px] rounded-[21px] md:min-w-[340px] md:w-[340px] transition-y-3"
          style={{
            boxShadow: "-20px -20px 0px #669BBC",
          }}
        />
      </div>
    </section>
  );
}
