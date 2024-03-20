import { MdOutlineDashboardCustomize, MdOutlineSpaceDashboard, MdOutlineVolumeUp } from "react-icons/md";
import { LuBarChart, LuPlusSquare, LuBox } from "react-icons/lu";
import { TbBrowser, TbSettings } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { BiShow } from "react-icons/bi";
import { PiGraduationCapBold } from "react-icons/pi";

import { SideNavItem } from "@/types/sidenav";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdOutlineSpaceDashboard style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Contents',
        path: '/contents',
        icon: <MdOutlineDashboardCustomize style={{ fontSize: '1.5rem' }} />,
        submenu: true,
        subMenuItems: [
            { title: 'Courses', path: '/contents' },
            { title: 'Live Classes', path: '/contents/web-design' },
            { title: 'Mock Test', path: '/contents/graphic-design' },
            { title: 'Test Series', path: '/contents/graphic-design' },
            { title: 'Bundles', path: '/contents/graphic-design' },
            { title: 'Legacy Question Pool', path: '/contents/graphic-design' },
            { title: 'Question Pool', path: '/contents/graphic-design' },
            { title: 'Subscriptions', path: '/contents/graphic-design' },
            { title: 'Newsfeed', path: '/contents/graphic-design' },
            { title: 'Communities', path: '/contents/graphic-design' },
            { title: 'Categories', path: '/contents/graphic-design' },
        ],
    },
    {
        title: 'Overview',
        path: '/overview',
        icon: <TbBrowser style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Top Voices',
        path: '/top-voices',
        icon: <MdOutlineVolumeUp style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <FiUser style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <LuBarChart style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Inbox Me',
        path: '/inbox-me',
        icon: <LuBox style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Join Now',
        path: '/join-now',
        icon: <LuPlusSquare style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Viewers',
        path: '/viewers',
        icon: <BiShow style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Certificates',
        path: '/certificates',
        icon: <PiGraduationCapBold style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <TbSettings style={{ fontSize: '1.5rem' }} />,
    },
]