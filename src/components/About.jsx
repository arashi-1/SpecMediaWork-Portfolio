import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="px-10 py-40 max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="text-6xl font-bold mb-12 text-[#2b0d3e] uppercase">
          About
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-2xl leading-relaxed opacity-80 max-w-4xl">
          Hi, Spec here. I create meaningful designs with the help of AI to help
          brands grow on social media. Also graphic designer focused on building
          bold identities, thoughtful layouts, and digital experiences that feel
          timeless. My work blends clarity, emotion, and strong visual systems.
        </p>
      </ScrollReveal>
    </section>
  );
}
