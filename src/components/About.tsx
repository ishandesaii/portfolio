import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
<motion.section
  id="about"
  className="py-20 bg-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ staggerChildren: 0.3 }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center mb-16"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      About Me
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left side: Image */}
      <motion.div
        initial={{ opacity: 0, x: -100, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="aspect-square rounded-2xl overflow-hidden"
      >
        <img
          src="/ishan.png"
          alt="Ishan Desai"
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>

      {/* Right side: Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        className="space-y-6"
      >
        {[
          "I'm Ishan, a passionate and detail-oriented Data Scientist with a strong foundation in software engineering, analytics, and AI. I thrive at the intersection of data and decision-making.",
          "With hands-on experience in modern web technologies and both frontend/backend development, I help businesses build scalable solutions and mentor aspiring developers.",
          "When I’m not analyzing data or writing code, you’ll find me playing cricket 🏏, hitting the gym 💪, or hunting for food spots 🍽️."
        ].map((text, i) => (
          <motion.p
            key={i}
            className="text-lg text-gray-600"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  </div>
</motion.section>

  );
}
