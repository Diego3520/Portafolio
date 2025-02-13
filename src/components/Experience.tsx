import { motion } from 'framer-motion'

const experiences = [
    {
        company: 'Boring Ventures.',
        position: 'Internal Developer',
        period: 'Present',
        description: 'Work in training for web development.',
        logo: '/boring.png',
    },
]

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                Work Experience
            </h2>
            <div className="max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mb-8 flex items-center"
                    >
                        <img
                            src="/boring.png"
                            alt={exp.company}
                            width={60}
                            height={60}
                            className=" mr-4 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.position}</h3>
                            <p className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">{exp.company}</p>
                            <p className="text-md mb-2 text-gray-600 dark:text-gray-400">{exp.period}</p>
                            <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience
