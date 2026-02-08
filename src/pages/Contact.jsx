import { useRef, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import ScrollReveal from "../components/ScrollReveal";
import Magnetic from "../components/Magnetic";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qtcp2mn", // 🔴 replace
        "template_ysft8vq", // 🔴 replace
        formRef.current,
        "iW76E7rytjQY7V_2E", // 🔴 replace
      )
      .then(
        () => {
          alert("Message sent successfully ✨");
          formRef.current.reset();
          setLoading(false);
        },
        () => {
          alert("Something went wrong. Try again.");
          setLoading(false);
        },
      );
  };

  return (
    <PageWrapper>
      <Navbar />

      <section className="min-h-screen px-10 pt-40 max-w-5xl mx-auto">
        <ScrollReveal>
          <h1 className="text-7xl font-bold uppercase mb-10">
            Let’s Work
            <br />
            Together
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-xl opacity-70 mb-20 max-w-xl">
            Have a project in mind or just want to say hello? Let’s create
            something meaningful.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-10 max-w-xl"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-transparent border-b py-4 outline-none text-lg focus:border-white transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-transparent border-b py-4 outline-none text-lg focus:border-white transition"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project"
              rows="4"
              required
              className="bg-transparent border-b py-4 outline-none text-lg resize-none focus:border-white transition"
            />

            <Magnetic>
              <button
                type="submit"
                disabled={loading}
                className="mt-10 px-10 py-4 border rounded-full text-lg hover:bg-white hover:text-black transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </Magnetic>
          </form>

          <p className="mt-20 text-lg opacity-70">
            Or email me directly at{" "}
            <a
              href="mailto:spec.m3diawork@gmail.com"
              className="underline hover:opacity-100"
            >
              spec.m3diawork@gmail.com
            </a>
          </p>
        </ScrollReveal>
      </section>
    </PageWrapper>
  );
}
