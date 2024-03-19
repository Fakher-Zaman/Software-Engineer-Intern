'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className={`sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`}>
            <div className="flex h-[47px] items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <Link
                        href="/"
                        className=""
                    >
                        {/* <span className="h-7 w-7 bg-zinc-300 rounded-lg" /> */}
                        <span className="font-bold text-xl flex ">Logo</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
