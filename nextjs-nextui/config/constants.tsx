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
            { title: 'Live Classes', path: '/contents/live-classes' },
            { title: 'Mock Test', path: '/contents/mock-test' },
            { title: 'Test Series', path: '/contents/test-series' },
            { title: 'Bundles', path: '/contents/bundles' },
            { title: 'Legacy Question Pool', path: '/contents/legacy-questions' },
            { title: 'Question Pool', path: '/contents/questions' },
            { title: 'Subscriptions', path: '/contents/subscriptions' },
            { title: 'News Feed', path: '/contents/news-feed' },
            { title: 'Communities', path: '/contents/communities' },
            { title: 'Categories', path: '/contents/categories' },
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
        submenu: true,
        subMenuItems: [
            { title: 'Voice One', path: '/top-voices' },
            { title: 'Voice Two', path: '/top-voices/voice-2' },
            { title: 'Voice Three', path: '/top-voices/voice-3' },
            { title: 'Voice Four', path: '/top-voices/voice-4' },
            { title: 'Voice Five', path: '/top-voices/voice-5' },
        ],
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
        submenu: true,
        subMenuItems: [
            { title: 'Annual Stats', path: '/statistics' },
            { title: 'Monthly Stats', path: '/statistics/monthly-stats' },
            { title: 'Weekly Stats', path: '/statistics/weekly-stats' },
        ],
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
        title: 'View Reports',
        path: '/viewers',
        icon: <BiShow style={{ fontSize: '1.5rem' }} />,
        submenu: true,
        subMenuItems: [
            { title: 'Monthly Reports', path: '/viewers' },
            { title: 'Weekly Reports', path: '/viewers/weekly-report' },
        ],
    },
    {
        title: 'Certificates',
        path: '/certificates',
        icon: <PiGraduationCapBold style={{ fontSize: '1.5rem' }} />,
        submenu: true,
        subMenuItems: [
            { title: 'Mathematics', path: '/certificates' },
            { title: 'Computer Science', path: '/certificates/comp-science' },
            { title: 'Physics', path: '/certificates/physics' },
        ],
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <TbSettings style={{ fontSize: '1.5rem' }} />,
    },
]