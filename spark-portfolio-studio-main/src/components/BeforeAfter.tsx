import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const BeforeAfter = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">The Transformation</h2>
          <p className="text-muted-foreground mt-3">See the difference professional editing makes</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="aspect-[9/16] max-h-[500px] mx-auto rounded-2xl overflow-hidden bg-muted relative">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=1000&fit=crop&sat=-100&contrast=0.8"
                alt="Before editing"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/30">
                <div className="w-16 h-16 rounded-full bg-muted-foreground/30 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-7 h-7 text-foreground ml-1" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-muted rounded-full">
              <span className="text-sm font-medium text-muted-foreground">Before Edit</span>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="aspect-[9/16] max-h-[500px] mx-auto rounded-2xl overflow-hidden bg-card relative spark-glow">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=1000&fit=crop"
                alt="After editing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/30">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center spark-glow">
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary rounded-full">
              <span className="text-sm font-medium text-primary-foreground">After Edit</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
