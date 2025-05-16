import { useEffect, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

const testimonials = [
  {
    name: "H. Dharma Kwon",
    role: "Professor at UIUC",
    image: "kwon.jpg",
    message: "Ishan consistently delivered exceptional results and demonstrated a deep understanding of data science principles in my class."
  },
  {
    name: "Mohi",
    role: "Peer at UIUC",
    image: "mohi.png",
    message: "Ishan brings clarity and confidence to every group project — an amazing teammate."
  },
];

export default function TestimonialSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const speed = 0.6;
  const isHovered = useRef(false);

  useAnimationFrame(() => {
    if (!isHovered.current && containerRef.current) {
      x.current -= speed;
      containerRef.current.style.transform = `translateX(${x.current}px)`;
      if (Math.abs(x.current) >= containerRef.current.scrollWidth / 2) {
        x.current = 0;
      }
    }
  });

  return (
<section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Testimonials</h2>

        <div className="relative w-full overflow-hidden border-none">
          <div
            className="flex gap-6 border-none"
            ref={containerRef}
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
            style={{ width: 'max-content' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-80 min-w-[20rem] bg-white bg-gradient-to-br from-white to-indigo-50 shadow-xl rounded-3xl px-6 py-8 flex-shrink-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-indigo-100"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-indigo-300 mx-auto mb-4 shadow-md"
                />
                <p className="text-gray-700 text-sm italic mb-4">"{testimonial.message}"</p>
                <h4 className="text-md font-semibold text-indigo-700">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



