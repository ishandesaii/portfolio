import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { gradientText, gradientBg, gradientHover } from '../utils/gradients';
import { fadeInUp, staggerContainer } from '../utils/animations';


export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
  {/* 🔁 Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="/v3.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* 🌫 Overlay for readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-48 -left-48 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold"
            variants={fadeInUp}
          >
            <motion.span 
              className="block text-white opacity-90"
              variants={fadeInUp}
            >
              Hi, I'm
              
            </motion.span>
            <motion.span 
  className={`block ${gradientText}`}
  initial={{ opacity: 0, y: 30, scale: 0.8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.5, ease: 'easeOut' }}
>
  ISHAN DESAI
</motion.span>
            <motion.span 
              className="block text-white opacity-90"
              variants={fadeInUp}
            >
              
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Data Scientist | Business Analyst | Machine Learning Enthusiast
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
          >
            <motion.a
              href="#projects"
              className={`px-8 py-3 rounded-full text-white ${gradientBg} ${gradientHover} transition-all duration-300 shadow-lg shadow-purple-500/25`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="w-6 h-6 text-white/70" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
    </section>
  );
}