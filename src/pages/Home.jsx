import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PageWrapper from "../components/PageWrapper";
import About from "../components/About";
import Awards from "../components/Awards";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <Hero />
        <SocialMedia />
        <About />
        <Awards />
      </PageWrapper>
    </>
  );
}
