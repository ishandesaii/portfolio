import { useState } from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { ProjectItem } from '../types';
import { SiTableau } from "react-icons/si";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image + Hover Overlay */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />

                {/* Click Me overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold bg-indigo-600 px-4 py-2 rounded-md shadow-md">
                    Click Me
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="flex gap-2 items-center text-gray-600 hover:text-gray-900"
  onClick={(e) => e.stopPropagation()}
>
  {project.label === "Dashboard" ? (
    <>
      <SiTableau className="w-5 h-5 text-[#E97627]" /> {/* Tableau Orange */}
      <span>Dashboard</span>
    </>
  ) : (
    <>
      <Github className="w-5 h-5" />
      <span>Code</span>
    </>
  )}
</a>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
