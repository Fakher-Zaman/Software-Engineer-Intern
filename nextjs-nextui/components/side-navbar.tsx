'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/config/constants';
import { SideNavItem } from '@/types/sidenav';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { GoDotFill } from "react-icons/go";

export const SideNavbar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section className={`h-screen sticky border-r-1 border-zinc-200 hidden md:flex ${isCollapsed ? 'w-20' : 'md:w-80'}`}>
            <button
                className='absolute top-8 right-0 w-6 h-6 bg-white border text-black rounded-full cursor-pointer translate-x-1/2 text-xl'
                onClick={toggleCollapse}
            >
                {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="max-h-screen overflow-auto flex flex-col space-y-6 w-full">
                <div className="flex flex-col">
                    {SIDENAV_ITEMS.map((item, idx) => {
                        return <MenuItem key={idx} item={item} isCollapsed={isCollapsed} />;
                    })}
                </div>
            </aside>
        </section>
    );
};

const MenuItem = ({ item, isCollapsed }: { item: SideNavItem; isCollapsed: boolean }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div>
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={`flex flex-row items-center md:px-6 md:py-2 rounded-sm hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${pathname.includes(item.path) ? 'bg-zinc-100' : ''
                            }`}
                    >
                        <div className="flex flex-row space-x-4 items-center">
                            {item.icon}
                            {!isCollapsed && <span className="text-lg  flex">{item.title}</span>}
                        </div>

                        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                            {isCollapsed ? <GoDotFill style={{ fontSize: '0.8rem', marginLeft: '10px' }} /> : <RiArrowDropDownLine style={{ fontSize: '1.7rem' }} />}
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-4">
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={subItem.path}
                                        className={`${subItem.path === pathname ? 'font-bold' : ''
                                            }`}
                                    >
                                        <span>{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`flex flex-row space-x-4 items-center md:py-2 md:px-6 rounded-sm hover:bg-zinc-100 ${item.path === pathname ? 'bg-zinc-100' : ''
                        }`}
                >
                    {item.icon}
                    {!isCollapsed && <span className="text-lg flex">{item.title}</span>}
                </Link>
            )}
        </div>
    );
};
