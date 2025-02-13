import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-800 dark:text-white text-center"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600 dark:text-gray-300 mt-6 leading-relaxed text-justify"
                >
                    Hi! I'm <span className="text-blue-600 dark:text-blue-400 font-semibold">Diego Espinoza</span>, a passionate **Junior Full Stack Developer** with a strong enthusiasm for building web applications.
                    I have been working independently on **small-scale projects**, focusing on clean and efficient code while constantly improving my skills.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed text-justify"
                >
                    My main tech stack includes **JavaScript, TypeScript, React, and Next.js**, and I'm eager to collaborate on exciting projects where I can **learn and grow as a developer**.
                    Whether it's frontend or backend, I enjoy tackling new challenges and refining my problem-solving skills.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
