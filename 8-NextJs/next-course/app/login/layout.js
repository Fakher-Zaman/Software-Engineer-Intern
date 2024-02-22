'use client'

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import React from 'react';

const Layout = ({ children }) => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <Navbar />
            <div className='h-96 text-center mt-9'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;