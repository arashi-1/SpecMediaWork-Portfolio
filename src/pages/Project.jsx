import { useParams } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import ScrollReveal from "../components/ScrollReveal";
export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <>
      <PageWrapper>
        <Navbar />
        <section className="pt-32 px-10">
          <ScrollReveal>
            <h1 className="text-7xl font-bold mb-6">{project.title}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="max-w-xl text-lg opacity-80 mb-16">
              {project.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            )}
          </ScrollReveal>
        </section>
      </PageWrapper>
    </>
  );
}
