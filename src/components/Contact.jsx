export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col bg-[#faf6ed] dark:bg-[#003049]">
      <div className="w-[90vw] max-w-3xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-semibold text-center mb-10 text-[#1A1A1A] dark:text-[#FAF6ED]">
          Contact Me
        </h2>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white dark:bg-[#1E293B] text-[#1A1A1A] dark:text-[#faf6ed] placeholder:text-[#666] dark:placeholder:text-[#ccc] p-4 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white dark:bg-[#1E293B] text-[#1A1A1A] dark:text-[#faf6ed] placeholder:text-[#666] dark:placeholder:text-[#ccc] p-4 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC]"
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="bg-white dark:bg-[#1E293B] text-[#1A1A1A] dark:text-[#faf6ed] placeholder:text-[#666] dark:placeholder:text-[#ccc] p-4 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC] resize-none"
          ></textarea>
          <button
            type="submit"
            className="self-end bg-[#669BBC] dark:bg-[#8ECAE6] hover:bg-[#5a8faf] dark:hover:bg-[#a0e1f8] text-white font-semibold py-3 px-8 rounded shadow transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <footer className="w-full mt-auto py-3 border-t border-[#669BBC] dark:border-[#8ECAE6] text-center text-[#1A1A1A] dark:text-[#FAF6ED] text-sm">
        <p>© {new Date().getFullYear()} Bertan Arslan. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind CSS.</p>
      </footer>
    </section>
  );
}
