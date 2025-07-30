import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import skills from "../data/skills";
import { useRef } from "react";

import en from "../data/locales/en.json";

export default function Skills() {
  const { skillsTitle } = en.skills;

  const autoplay = useRef(
    Autoplay(
      { delay: 2500, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    autoplay.current,
  ]);

  return (
    <section className="bg-[#E6F0FA] dark:bg-[#1A2A3A]">
      <div className="py-20 w-[75vw] mx-auto flex flex-col gap-15">
        <div className="text-5xl font-medium text-center text-[#1A1A1A] dark:text-[#faf6ed]">
          {skillsTitle}
        </div>
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <div className="flex justify-between">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[140px] flex flex-col items-center"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-[120px] h-[120px] object-contain rounded-xl"
                />
                <span className="mt-2 text-center text-[#1A1A1A] dark:text-[#E5E7EB]">
                  {skill.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
