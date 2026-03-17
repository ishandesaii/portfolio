import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';

export default function Timeline() {
  const renderCard = (item: (typeof timelineData)[number]) => (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-left max-w-xl w-full transition-all duration-300"
    >
      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2">
        {item.year}
      </span>

      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>

      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline font-semibold"
        >
          {item.company}
        </a>
      ) : (
        <p className="text-indigo-600 font-semibold">{item.company}</p>
      )}

      <p className="text-gray-600 mt-2">{item.description}</p>
    </motion.div>
  );

const renderLogo = (item: (typeof timelineData)[number]) => {
  if (!item.logo) {
    return <div className="w-32 h-32 shrink-0" />;
  }

  const logoContent = (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ duration: 0.25 }}
      className="w-32 h-32 shrink-0 flex items-center justify-center cursor-pointer"
    >
      <div className="w-28 h-28 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-3">
        <img
          src={item.logo}
          alt={item.logoAlt || `${item.company} logo`}
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );

  // If URL exists → make it clickable
  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${item.company}`}
      >
        {logoContent}
      </a>
    );
  }

  return logoContent;
};

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          Experience & Education
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeftCard = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeftCard ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-[1fr_48px_1fr] items-center gap-8"
                >
                  {/* LEFT COLUMN */}
                  <div className="flex items-center justify-end gap-6">
                    {isLeftCard ? renderCard(item) : renderLogo(item)}
                  </div>

                  {/* CENTER ICON */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10 shadow-md"
                  >
                    {item.icon === 'work' ? (
                      <Briefcase className="w-6 h-6 text-white" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-white" />
                    )}
                  </motion.div>

                  {/* RIGHT COLUMN */}
                  <div className="flex items-center justify-start gap-6">
                    {isLeftCard ? renderLogo(item) : renderCard(item)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Experience */}
        <h2 className="text-3xl font-bold text-center mt-16 mb-8 md:hidden">Experience</h2>
        {timelineData
          .filter((item) => item.type === 'experience')
          .map((item, index) => (
            <motion.div
              key={`exp-${index}`}
              className="mb-6 md:hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>

                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline font-semibold"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <p className="text-indigo-600 font-semibold">{item.company}</p>
                    )}

                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>

                  {item.logo && (
                    <div className="w-16 h-16 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2 shrink-0">
                      <img
                        src={item.logo}
                        alt={item.logoAlt || `${item.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        {/* Mobile Education */}
        <h2 className="text-3xl font-bold text-center mt-16 mb-8 md:hidden">Education</h2>
        {timelineData
          .filter((item) => item.type === 'education')
          .map((item, index) => (
            <motion.div
              key={`edu-${index}`}
              className="mb-6 md:hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>

                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline font-semibold"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <p className="text-indigo-600 font-semibold">{item.company}</p>
                    )}

                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>

                  {item.logo && (
                    <div className="w-16 h-16 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2 shrink-0">
                      <img
                        src={item.logo}
                        alt={item.logoAlt || `${item.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
