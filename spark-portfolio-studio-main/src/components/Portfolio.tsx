import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const shortFormVideos = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=711&fit=crop", title: "Lifestyle Reel" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=711&fit=crop", title: "Gaming Short" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=711&fit=crop", title: "Music Clip" },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=711&fit=crop", title: "Travel Edit" },
  { id: 5, thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=711&fit=crop", title: "Fashion Reel" },
  { id: 6, thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=711&fit=crop", title: "Film Teaser" },
];

const wideVideos = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=640&h=360&fit=crop", title: "Brand Documentary" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=640&h=360&fit=crop", title: "YouTube Review" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=640&h=360&fit=crop", title: "Product Launch" },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=640&h=360&fit=crop", title: "Cinematic Vlog" },
  { id: 5, thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=640&h=360&fit=crop", title: "Music Video" },
  { id: 6, thumbnail: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=640&h=360&fit=crop", title: "Commercial Spot" },
];

export const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg">Short-form & wide video edits</p>
        </motion.div>

        {/* Short-Form Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Short-Form Videos</h3>
              <p className="text-muted-foreground text-sm mt-1">Reels · TikTok · Shorts</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
          >
            {shortFormVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 relative group cursor-pointer"
              >
                <div className="w-44 md:w-52 rounded-2xl overflow-hidden bg-card" style={{ aspectRatio: '9/16' }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center spark-glow">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium bg-primary/90 text-primary-foreground px-2 py-1 rounded-full">
                      9:16
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{video.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wide Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold">Wide Videos</h3>
            <p className="text-muted-foreground text-sm mt-1">YouTube · Cinematic · Brand</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wideVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden bg-card" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center spark-glow">
                      <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium bg-primary/90 text-primary-foreground px-2 py-1 rounded-full">
                      16:9
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{video.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
