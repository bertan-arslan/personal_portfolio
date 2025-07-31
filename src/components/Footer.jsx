import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { translations } = useLanguage();
  const { message, contactMe, rights, build } = translations.footer;

  return (
    <footer className="bg-[#E6F0FA] dark:bg-[#1A2A3A]">
      <div className="w-[75vw] mx-auto py-10 flex flex-col gap-5 justify-center md:flex-row md:gap-5">
        <div className="relative md:flex-2">
          <p className="relative z-5 font-medium text-[42px] text-center text-[#1A1A1A] dark:text-[#faf6ed] md:text-right ">
            {message}
          </p>
          <div className="absolute top-10 right-10 bg-[#C1121F]  dark:bg-[#851219] ] w-[30vw] h-[18px] rounded-md"></div>
        </div>
        <div className="relative z-5 flex justify-center gap-3 md:flex-col md:flex-1 md:gap-1">
          <a
            href="https://github.com/bertan-arslan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b5179e] dark:text-[#e66ad3] font-medium text-2xl"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/bertan-arslan-7024a8166/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#480ca8]  dark:text-[#855fc2] font-medium text-2xl"
          >
            Linkedin
          </a>

          <Link
            to="/contact"
            className=" text-[#4895ef] dark:text-[#86b4e7] font-medium text-2xl"
          >
            {contactMe}
          </Link>
        </div>
      </div>
      <div className="w-full mt-auto py-3 border-t border-[#669BBC] dark:border-[#8ECAE6] text-center text-[#1A1A1A] dark:text-[#FAF6ED] text-sm">
        <p>
          © {new Date().getFullYear()} Bertan Arslan. {rights}
        </p>
        <p className="mt-2">{build}</p>
      </div>
    </footer>
  );
}
