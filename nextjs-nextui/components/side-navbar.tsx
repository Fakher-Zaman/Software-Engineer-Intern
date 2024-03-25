"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDENAV_ITEMS } from '@/config/constants';
import { SideNavItem } from '@/types/sidenav';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { GoDotFill } from "react-icons/go";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

export const SideNavbar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section className={`sidenav sticky border-r-1 hidden md:flex ${isCollapsed ? 'w-20 transition-width duration-300' : 'md:w-64 transition-width duration-300'}`}>
            <button
                className='absolute top-8 right-0 w-6 h-6 bg-white border text-black rounded-full cursor-pointer translate-x-1/2 text-xl'
                onClick={toggleCollapse}
            >
                {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="nav-scroller max-h-screen overflow-y-auto overflow-x-hidden flex flex-col space-y-6">
                <div className="flex flex-col md:w-64">
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
    const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div>
            {item.submenu ? (
                <>
                    {!isCollapsed ? (
                        <button
                            onClick={toggleSubMenu}
                            className={`h-11 flex flex-row justify-between items-center md:px-6 md:py-1.5 w-full ${pathname.includes(item.path) ? 'border-l-4 border-blue-500' : 'hover:text-blue-500'}`}
                        >
                            <div className="flex flex-row space-x-4 items-center">
                                {item.icon}
                                {!isCollapsed && <span className="text-lg  flex">{item.title}</span>}
                            </div>
                            <div className={`flex transform transition-transform duration-300 ${subMenuOpen ? '' : 'rotate-90'}`} style={{ transformOrigin: 'center' }}>
                                <RiArrowDropDownLine style={{ fontSize: '1.7rem' }} />
                            </div>
                        </button>
                    ) : (
                        <Popover placement="bottom">
                            <PopoverTrigger>
                                <button
                                    className={`h-11 flex flex-row items-center md:px-6 md:py-1.5 w-full ${pathname.includes(item.path) ? 'border-l-4 border-blue-500' : ' hover:text-blue-500'}`}
                                >
                                    <div className="flex flex-row space-x-4 items-center">
                                        {item.icon}
                                        {!isCollapsed && <span className="text-lg  flex">{item.title}</span>}
                                    </div>
                                    <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                                        <GoDotFill style={{ fontSize: '0.8rem', marginLeft: '10px' }} />
                                    </div>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="px-1 py-2">
                                    {item.subMenuItems?.map((subItem, idx) => (
                                        <Link
                                            key={idx}
                                            href={subItem.path}
                                            className={`flex flex-col py-1 text-[1rem] ${subItem.path === pathname ? 'font-bold' : 'hover:text-blue-500 '}`}
                                        >
                                            <span>{subItem.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}

                    {subMenuOpen && !isCollapsed && (
                        <div className="my-2 ml-16 flex flex-col space-y-4">
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={subItem.path}
                                        className={`${subItem.path === pathname ? 'font-bold' : 'hover:text-blue-500 '}`}
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
                    className={`h-11 flex flex-row space-x-4 items-center md:py-2 md:px-6 ${item.path === pathname ? 'border-l-4 border-blue-500' : 'hover:text-blue-500'}`}
                >
                    {item.icon}
                    {!isCollapsed && <span className="text-lg flex">{item.title}</span>}
                </Link>
            )}
        </div>
    );
};