import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`}>
      <motion.div
        whileHover={{ scale: 0.97 }}
        className="relative overflow-hidden cursor-pointer h-[500px]"
      >
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

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
        >
          <h3 className="text-2xl font-bold text-gray-300">{project.title}</h3>
          <p className="text-sm opacity-70 text-gray-400">{project.category}</p>
        </motion.div>
      </motion.div>
    </Link>
  );
}
