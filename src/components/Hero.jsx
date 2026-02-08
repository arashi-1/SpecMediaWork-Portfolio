import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

const title = ["Graphic", "Designer"];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -80]);

  return (
    <section className="h-screen flex flex-col justify-center px-10">
      <motion.div style={{ y }}>
        <h1 className="text-[9vw] leading-none text-[#2b0d3e] font-bold uppercase">
          {title.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="block overflow-hidden"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-xl opacity-70  max-w-xl"
        >
          Crafting bold identities and digital experiences with clarity,
          emotion, and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <Magnetic>
            <a
              href="/work"
              className="inline-block px-10 py-5 border uppercase tracking-widest"
            >
              View Work
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
