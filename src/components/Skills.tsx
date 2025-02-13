import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPython, SiElectron  } from 'react-icons/si'

const skills = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Electron', icon: SiElectron  },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Python', icon: SiPython },
]

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                Skills
            </h2>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <skill.icon className="text-5xl mb-2 text-blue-500 dark:text-blue-400" />
                            <p className="text-center text-gray-700 dark:text-gray-300">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills