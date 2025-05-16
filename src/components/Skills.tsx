import { Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'SQL', 'R', 'C', 'C++', 'JavaScript', 'React', 'HTML', 'CSS', 'TailwindCSS'],
  },
  {
    category: 'Data Tools',
    icon: Database,
    skills: ['MySQL', 'Tableau', 'Power BI', 'Excel', 'PostgreSQL', 'MongoDB', 'neo4j', 'InfluxDB', 'MATLAB'],
  },
  {
    category: 'Application Software',
    icon: Server,
    skills: ['AWS', 'Microsoft Azure', 'MS Office', 'Github', 'SAP Business Objects', 'Atlassian', 'Jira', 'PySpark'],
  },
  
];

export default function Skills() {
  const slideDirections = [
    { x: -60, opacity: 0 },
    { y: 60, opacity: 0 },
    { x: 60, opacity: 0 },
    { y: -60, opacity: 0 },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => {
            const Icon = category.icon;
            const slideFrom = slideDirections[index % slideDirections.length];

            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={slideFrom}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.2 }} // Adjust the viewport amount as needed
              >
                <motion.div
                  className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-indigo-600" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.1 }}
                  viewport={{ once: false }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm shadow-sm hover:shadow-md"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, backgroundColor: '#e0e7ff' }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      viewport={{ once: false }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

