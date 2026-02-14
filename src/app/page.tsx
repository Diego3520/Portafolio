'use client';

import { useState, useEffect } from 'react';
import {ThemeProvider, useTheme} from 'next-themes';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ThemeProvider attribute="class">
            <div className="min-h-screen transition-colors duration-300 relative">
                <AnimatedBackground/>

                <main className="relative z-10 container mx-auto px-4 py-8">
                    <Hero/>
                    <About/>
                    <Education/>
                    <Skills/>
                    <Projects/>
                </main>

                <ThemeToggle/>
            </div>
        </ThemeProvider>
    );
}

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <motion.button
            className="fixed top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </motion.button>
    );
};
