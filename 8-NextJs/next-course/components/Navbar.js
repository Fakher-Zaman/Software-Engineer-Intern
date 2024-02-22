'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();
    return (
        <div>
            {pathName === '/login/loginadmin' ? (
                <ul className='login-menu border bg-green-200 py-2'>
                    <li>
                        <Link href="/login/loginadmin">Login Admin</Link>
                    </li>
                </ul>
            ) : (
                <ul className='login-menu border bg-green-200 py-2'>
                    <li>
                        <Link href="/login/loginuser">Login User</Link>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Navbar