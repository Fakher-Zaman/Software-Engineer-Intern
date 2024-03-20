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
        icon: <MdOutlineSpaceDashboard />,
    },
    {
        title: 'Contents',
        path: '/contents',
        icon: <MdOutlineDashboardCustomize />,
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
        icon: <TbBrowser />,
    },
    {
        title: 'Top Voices',
        path: '/top-voices',
        icon: <MdOutlineVolumeUp />,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <FiUser />,
    },
    {
        title: 'Stats',
        path: '/stats',
        icon: <LuBarChart />,
    },
    {
        title: 'Inbox',
        path: '/inbox',
        icon: <LuBox />,
    },
    {
        title: 'Join',
        path: '/join',
        icon: <LuPlusSquare />,
    },
    {
        title: 'Views',
        path: '/views',
        icon: <BiShow />,
    },
    {
        title: 'Certificates',
        path: '/certificates',
        icon: <PiGraduationCapBold />,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <TbSettings />,
    },
]