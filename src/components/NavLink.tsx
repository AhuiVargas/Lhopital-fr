"use client";

import { useRouter } from "next/navigation";
import React from "react";

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
};

export default function NavLink({
	href,
	children,
	onClick,
	className = "",
}: NavLinkProps) {
	const router = useRouter();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			router.push(`/${href}`);
		}

		if (onClick) onClick();
	};

	return (
		<a href={href} onClick={handleClick} className={className}>
			{children}
		</a>
	);
}
