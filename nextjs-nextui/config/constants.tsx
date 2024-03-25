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
            { title: 'Question', path: '/contents/question-management' },
            { title: 'Exams', path: '/contents/exams' },
            { title: 'Categories', path: '/contents/categories-management' },
            { title: 'Topics', path: '/contents/topics-management' },
            { title: 'Support', path: '/contents/support' },
            { title: 'Test', path: '/contents/test' },
        ],
    },
    {
        title: 'Users',
        path: '/users',
        icon: <FiUser style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <BiShow style={{ fontSize: '1.5rem' }} />,
    },
    {
        title: 'Settings',
        path: '/account/settings',
        icon: <TbSettings style={{ fontSize: '1.5rem' }} />,
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
            { title: 'Voice One', path: '/top-voices/voice-1' },
            { title: 'Voice Two', path: '/top-voices/voice-2' },
            { title: 'Voice Three', path: '/top-voices/voice-3' },
            { title: 'Voice Four', path: '/top-voices/voice-4' },
            { title: 'Voice Five', path: '/top-voices/voice-5' },
        ],
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <LuBarChart style={{ fontSize: '1.5rem' }} />,
        submenu: true,
        subMenuItems: [
            { title: 'Annual Stats', path: '/statistics/annual-stats' },
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
        title: 'Certificates',
        path: '/certificates',
        icon: <PiGraduationCapBold style={{ fontSize: '1.5rem' }} />,
        submenu: true,
        subMenuItems: [
            { title: 'Mathematics', path: '/certificates/math' },
            { title: 'Computer Science', path: '/certificates/comp-science' },
            { title: 'Physics', path: '/certificates/physics' },
        ],
    },
];