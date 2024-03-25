"use client";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { SIDENAV_ITEMS } from '@/config/constants';
import NextLink from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
	const pathname = usePathname();
	const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

	const handleSubItemClick = (path: string, index: number) => {
		// If the path of the clicked item is already active, toggle the accordion
		if (pathname === path) {
			setActiveAccordionIndex(activeAccordionIndex === -1 ? index : -1);
		}
	};

	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="border-b-1">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-semibold text-inherit text-lg">MedPro</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{SIDENAV_ITEMS.map((item, index: number) => (
						<div key={`${item}-${index}`}>
							{item.subMenuItems && item.subMenuItems.length > 0 ? (
								<Accordion className="p-0">
									<AccordionItem key={index} aria-label={item.title} title={item.title} className={`${pathname.includes(item.path) ? 'border-l-4 border-blue-500 pl-2' : ''}`}>
										<div className="flex flex-col">
											{item.subMenuItems.map((subItem, subIndex) => (
												<Link
													key={`${subItem}-${subIndex}`}
													color={
														pathname === subItem.path
															? "primary"
															: "foreground"
													}
													href={subItem.path}
													size="lg"
													onClick={() => handleSubItemClick(subItem.path, index)}
												>
													{subItem.title}
												</Link>
											))}
										</div>
									</AccordionItem>
								</Accordion>
							) : (
								<NavbarMenuItem>
									<Link
										color={
											pathname === item.path
												? "primary"
												: "foreground"
										}
										className={
											pathname === item.path
												? "border-l-4 border-blue-500 pl-2"
												: ""
										}
										href={item.path}
										size="lg"
									>
										{item.title}
									</Link>
								</NavbarMenuItem>
							)}
						</div>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
