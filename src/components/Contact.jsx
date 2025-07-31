import { useForm } from "react-hook-form";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "react-toastify";
import axios from "axios";

export default function Contact() {
  const { translations } = useLanguage();
  const {
    title,
    namePlaceHolder,
    emailPlaceHolder,
    messafePlaceHolder,
    buttonText,
    nameRequired,
    emailRequired,
    messageRequired,
    emailError,
    messageError,
    toastCrash,
    toastSuccess
  } = translations.contact;

  const { rights, build } = translations.footer;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://formsubmit.co/ajax/7a9f7f5123ef079896132a69cedf1ce2",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      toast.success(toastSuccess);
      reset();
    } catch (err) {
      toast.error(toastCrash);
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen flex flex-col bg-[#faf6ed] dark:bg-[#003049]">
      <div className="w-[90vw] max-w-3xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-semibold text-center mb-10 text-[#1A1A1A] dark:text-[#FAF6ED]">
          {title}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div>
            <input
              name="name"
              type="text"
              placeholder={namePlaceHolder}
              {...register("name", { required: nameRequired })}
              className="w-full bg-white dark:bg-[#1E293B] text-[#1A1A1A] dark:text-[#faf6ed] placeholder:text-[#666] dark:placeholder:text-[#ccc] p-4 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder={emailPlaceHolder}
              {...register("email", {
                required: emailRequired,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: emailError,
                },
              })}
              className="w-full bg-white dark:bg-[#1E293B] text-[#1A1A1A] dark:text-[#faf6ed] placeholder:text-[#666] dark:placeholder:text-[#ccc] p-4 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows="6"
              placeholder={messafePlaceHolder}
              {...register("message", {
                required: messageRequired,
                minLength: {
                  value: 10,
                  message: messageError,
                },
              })}
              className="w-full bg-white dark:bg-[#1E293B] text-[#1A1A1A] dark:text-[#faf6ed] placeholder:text-[#666] dark:placeholder:text-[#ccc] p-4 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC] resize-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="self-end bg-[#669BBC] dark:bg-[#8ECAE6] hover:bg-[#5a8faf] dark:hover:bg-[#a0e1f8] text-white dark:text-[#1A1A1A] font-semibold py-3 px-8 rounded shadow transition-all duration-300 cursor-pointer"
          >
            {buttonText}
          </button>
        </form>
      </div>

      <div className="w-full mt-auto py-3 border-t border-[#669BBC] dark:border-[#8ECAE6] text-center text-[#1A1A1A] dark:text-[#FAF6ED] text-sm">
        <p>
          © {new Date().getFullYear()} Bertan Arslan. {rights}
        </p>
        <p className="mt-2">{build}</p>
      </div>
    </section>
  );
}
