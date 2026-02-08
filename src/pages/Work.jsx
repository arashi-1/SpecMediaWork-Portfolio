import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import PageWrapper from "../components/PageWrapper";
import ScrollReveal from "../components/ScrollReveal";

export default function Work() {
  return (
    <PageWrapper>
      <Navbar />
      <section className="pt-32 px-10">
        <ScrollReveal>
          <h2 className="text-6xl font-bold mb-16 text-[#2b0d3e] uppercase">
            Selected Works
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
