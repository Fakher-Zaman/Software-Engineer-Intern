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

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { SIDENAV_ITEMS } from '@/config/constants';
import NextLink from "next/link";
import clsx from "clsx";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { ThemeSwitch } from "@/components/theme-switch";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
	const pathname = usePathname();
	const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

	const handleAccordionToggle = (index) => {
		setActiveAccordionIndex(index === activeAccordionIndex ? -1 : index);
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
					{SIDENAV_ITEMS.map((item, index) => (
						<div key={`${item}-${index}`}>
							{item.submenu ? (
								<Accordion
									className="p-0"
									onChange={() => handleAccordionToggle(index)}
								>
									<AccordionItem key={index} aria-label={item.title} title={item.title}>
										<div>
											{item.subMenuItems.map((subItem, subIndex) => (
												<Link
													key={`${subItem}-${subIndex}`}
													color={
														pathname.includes(subItem.path)
															? "primary"
															: "foreground"
													}
													href={subItem.path}
													size="lg"
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
											pathname.includes(item.path)
												? "primary"
												: "foreground"
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
