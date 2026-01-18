import { motion } from "framer-motion";

const tools = [
  {
    name: "Adobe Premiere Pro",
    src: "https://cdn.simpleicons.org/adobepremierepro/white",
  },
  {
    name: "Adobe After Effects",
    src: "https://cdn.simpleicons.org/adobeaftereffects/white",
  },
  {
    name: "Adobe Photoshop",
    src: "https://cdn.simpleicons.org/adobephotoshop/white",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Tools = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-12"
        >
          Tools I Work With
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {tool.icon}
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
