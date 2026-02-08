import ScrollReveal from "./ScrollReveal";

const awards = [
  "Content Planner",
  "Growth Strategist ",
  "AI Workflow Manager",
  "Scripting",
  "Storytelling",
];

export default function Awards() {
  return (
    <section className="px-10 pb-40">
      <ScrollReveal>
        <div className="flex flex-wrap gap-12 text-xl text-[#7a3f91] uppercase opacity-70">
          {awards.map((award, index) => (
            <span key={index}>{award}</span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
