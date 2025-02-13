import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
    {
        title: 'Billar Manager',
        description: 'A simple manager to see the price of renting pool tables for a venue.',
        image: '/img.png',
        technologies: ['Electron', 'Typescript'],
    },
    {
        title: 'NextJs Tutorial',
        description: 'Nextjs tutorial.',
        image: '/nextjs.png',
        technologies: ['NextJs', 'Typescript'],
    },
]

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                My Projects
            </h2>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                        >
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects