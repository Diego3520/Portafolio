import { motion } from 'framer-motion';
import Image from 'next/image';

const educations = [
    {
        degree: 'Bachelor of Systems Engineering ',
        school: 'Universidad Mayor de San Simón',
        period: '2020 - Present',
        logo: '/logo.png',
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                Education
            </h2>
            <div className="max-w-3xl mx-auto">
                {educations.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mb-8 flex items-center space-x-4"
                    >
                        <Image
                            src="/logo.png"
                            alt={`${edu.school} Logo`}
                            width={60}
                            height={60}
                            className="rounded-md shadow-md"
                        />
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                                {edu.degree}
                            </h3>
                            <p className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">
                                {edu.school}
                            </p>
                            <p className="text-md text-gray-600 dark:text-gray-400">
                                {edu.period}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
