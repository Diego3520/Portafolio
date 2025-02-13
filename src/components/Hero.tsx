import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center max-w-3xl"
            >
                <div className="mb-6 flex justify-center">
                    <Image
                        src="/perfil.png"
                        alt="Diego Espinoza"
                        width={150}
                        height={150}
                        className="rounded-full shadow-lg"
                    />
                </div>

                <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
                    Diego Espinoza
                </h1>
                <h2 className="text-2xl mb-6 text-blue-600 dark:text-blue-400">
                    Full Stack Developer & Software Engineer
                </h2>
                <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                    Passionate about creating innovative solutions with modern technologies.
                    Specialized in web development, scalable applications and performance optimization.
                </p>

                <motion.a
                    href="https://www.linkedin.com/in/diego-espinoza-lucero-779231346/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 transition"
                >
                    Get in touch
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
