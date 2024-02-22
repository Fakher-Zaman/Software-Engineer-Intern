import Navbar from '@/components/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='h-96 text-center mt-9'>
                {children}
            </div>
        </div>
    )
}

export default Layout;