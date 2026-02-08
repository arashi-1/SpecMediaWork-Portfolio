import React from "react";
import ScrollReveal from "./ScrollReveal";

const SocialMedia = () => {
  return (
    <>
      <hr className="border-gray-700" />

      <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-16 uppercase text-[#2b0d3e]">
            Social Media Growth
          </h2>
          <p className="max-w-2xl text-xl text-gray-700 mb-20">
            Helping brands grow organically with consistent content, creative
            strategy, and audience-focused storytelling.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/sm1.jpeg"
                  alt="Poet4y Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <a
                href="https://www.instagram.com/buzzpostindia?igsh=MXJuMWN0ZnI4YTNyNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm uppercase tracking-widest text-[#7a3f91] border border-gray-500 px-6 py-3 rounded-full transition hover:bg-white hover:text-black"
              >
                Check now
              </a>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/sm2.jpeg"
                  alt="BuzzPost India Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <a
                href="https://www.instagram.com/poet4y?igsh=cWpoNzE1MDAzMXhx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm uppercase tracking-widest text-[#7a3f91] border border-gray-500 px-6 py-3 rounded-full transition hover:bg-white hover:text-black"
              >
                Check now
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default SocialMedia;
