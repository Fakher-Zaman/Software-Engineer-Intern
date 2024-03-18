"use client";

import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // console.log("useEffect called in useMemo.")

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const activeSection = useMemo(() => {
        const sections = ['home', 'services', 'testimonials', 'contactus'];
        let currentSection = null;

        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section && scrollPosition >= section.offsetTop) {
                currentSection = index;
            }
        });

        // console.log("useMemo called in useMemo.");

        return currentSection;
    }, [scrollPosition]);

    return (
        <main className=''>
            <header className='p-2 bg-sky-100 fixed top-0 right-0 left-0 z-50'>
                <nav>
                    <ul className='flex flex-row justify-center items-center'>
                        <li className='px-4 py-1'>
                            <Link
                                href="#home"
                                className={`text-base px-4 py-2 ${activeSection === 0 ? 'bg-cyan-400 text-white' : 'text-gray-500'}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='px-4 py-1'>
                            <Link
                                href="#services"
                                className={`text-base px-4 py-2 ${activeSection === 1 ? 'bg-red-400 text-white' : 'text-gray-500'}`}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='px-4 py-1'>
                            <Link
                                href="#testimonials"
                                className={`text-base px-4 py-2 ${activeSection === 2 ? 'bg-blue-400 text-white' : 'text-gray-500'}`}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li className='px-4 py-1'>
                            <Link
                                href="#contactus"
                                className={`text-base px-4 py-2 ${activeSection === 3 ? 'bg-green-400 text-white' : 'text-gray-500'}`}
                            >
                                Contactus
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section>
                <div id='home' className='bg-cyan-300 h-screen flex items-center justify-center text-xl'>Home Section</div>
                <div id='services' className='bg-red-300 h-screen flex items-center justify-center text-xl'>Services Section</div>
                <div id='testimonials' className='bg-blue-300 h-screen flex items-center justify-center text-xl'>Testimonials Section</div>
                <div id='contactus' className='bg-green-300 h-screen flex items-center justify-center text-xl'>Contactus Section</div>
            </section>
            <footer className='p-3 text-center bg-sky-100 text-gray-500'>
                <p>&copy; 2024 useMemo. All Rights Reserved.</p>
            </footer>
        </main>
    );
}

export default App;