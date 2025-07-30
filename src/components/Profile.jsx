import en from "../data/locales/en.json";

export default function Profile() {
  const { basicInfoTitle, basicInfoItems, aboutMeTitle, aboutMeParagraphs } =
    en.profile;
  return (
    <section className="bg-[#faf6ed] dark:bg-[#003049] py-25">
      <p className="font-medium text-4xl text-center mb-10 text-[#669BBC] dark:text-[#8ECAE6]">
        Profile
      </p>
      <div className="w-[70vw] mx-auto flex flex-col md:flex-row justify-between items-center gap-15">
        <div
          className=" p-6 bg-[#FFFFFF] dark:bg-[#1E293B] text-[#1A1A1A] dark:text-[#faf6ed] rounded-lg md:basis-1/2"
          style={{ boxShadow: "8px 8px 0px #669BBC80" }}
        >
          <h2 className="text-[#669BBC] dark:text-[#8ECAE6] text-2xl mb-10">
            {basicInfoTitle}
          </h2>
          <div className="space-y-3">
            {basicInfoItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="w-40 flex-shrink-0 font-semibold text-lg text-[#669BBC] dark:text-[#8ECAE6]">
                  {item.label}
                </span>
                <span className="whitespace-pre-line">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative md:basis-1/2 flex flex-col gap-5 text-[#1A1A1A] dark:text-[#faf6ed]">
          <div className="absolute top-4 -left-4 z-0 w-[90px] h-[18px] bg-[#669BBC] dark:bg-[#8ECAE6] rounded"></div>
          <p className="relative z-10 text-2xl">{aboutMeTitle}</p>
          {aboutMeParagraphs.map((p, i) => (
            <p key={i} className="text-lg text-justify">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
