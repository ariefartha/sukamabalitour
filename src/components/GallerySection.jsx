import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const GallerySection = () => {
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const images = [
    "/goarangreng.jpeg",
    "/img-6.jpg",
    "/sukama_slideshow.jpg",
    "/img-7.jpg",
    "/img-2.jpg",
  ];

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section ref={sectionRef} className="p-6 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-6 font-title">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.slice(0, showMore ? images.length : 4).map((src, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow"
            custom={index}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {!showMore && (
        <div className="flex justify-center mt-6">
          <button
            className="btn btn-primary"
            onClick={() => setShowMore(true)}
          >
            See More Photo
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
