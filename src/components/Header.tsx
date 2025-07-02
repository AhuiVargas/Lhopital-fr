"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";

function NavLink({
	href,
	children,
	onClick,
	className = "",
}: {
	href: string;
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}) {
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

function MobileContactBar({ onClick }: { onClick: () => void }) {
	return (
		<div className="md:hidden fixed top-0 left-0 w-full h-[40.5px] bg-[#272828] z-40 shadow-lg flex items-center justify-center">
			<button
				onClick={onClick}
				className="bg-gradient-to-r from-[#5C76B5] via-50% to-[#D1686F] text-transparent bg-clip-text min-h-full font-thin text-xl"
			>
				CONTÁCTANOS
			</button>
		</div>
	);
}

function HeaderContent({
  isOpen,
  setIsOpen,
  onClick,
  scrolled,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onClick: () => void;
  scrolled: boolean;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
		<div className="flex text-xl items-center justify-between w-full">
			{/* Logo */}
			<Link href="/" scroll>
				<Image
					src="/LP-escudos/escudo_bw.png"
					alt="Logo"
					width={70}
					height={70}
				/>
			</Link>

			{/* Desktop Nav */}
			<div className="hidden md:flex items-center justify-center flex-1 text-xl">
				<nav className="flex items-center space-x-10 text-white relative mx-auto">
					<NavLink href="/nosotros" className="hover:underline">
						Nosotros
					</NavLink>

					{/* Soluciones dropdown */}
					<div
						onMouseEnter={() => setDropdownOpen(true)}
						onMouseLeave={() => setDropdownOpen(false)}
					>
						<button className="hover:underline">Soluciones</button>

						{dropdownOpen && (
							<div
								className={`absolute top-full left-0 w-72 text-white text-center py-4 px-6 space-y-2 z-50
                                ${scrolled ? "bg-black" : "bg-transparent"}`}
							>
								<NavLink
									href="/proteccion-personal"
									className="block hover:underline"
								>
									Equipo de Protección Personal
								</NavLink>
								<NavLink
									href="/rescate"
									className="block hover:underline"
								>
									Equipo de Rescate
								</NavLink>
								<NavLink href="/hazmat" className="block hover:underline">
									Equipo Hazmat
								</NavLink>
							</div>
						)}
					</div>

					<NavLink href="#contact" className="hover:underline">
						Contacto
					</NavLink>
				</nav>
			</div>

			{/* Contact button */}
			<div className="hidden md:flex">
                <CTAButton onClick={onClick} hovered={false} >CONTÁCTANOS</CTAButton>
			</div>

			{/* Mobile Hamburger */}
			<div className="md:hidden flex items-center gap-2 p-2 rounded">
				<Hamburger
					toggled={isOpen}
					onToggle={setIsOpen}
					color="#FFFFFF"
					size={28}
					direction="right"
					duration={0.4}
					rounded
					label="Show menu"
				/>
			</div>
		</div>
	);
}

function MobileMenu({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}) {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.25 }}
					className="fixed top-28 left-0 w-full bg-black py-6 z-30 flex flex-col items-center space-y-4 text-white text-xl"
				>
					<NavLink
						href="/nosotros"
						onClick={() => setIsOpen(false)}
						className="hover:underline"
					>
						Nosotros
					</NavLink>
					<NavLink
						href="/proteccion-personal"
						onClick={() => setIsOpen(false)}
						className="hover:underline"
					>
						Equipo de Protección Personal
					</NavLink>
					<NavLink
						href="/rescate"
						onClick={() => setIsOpen(false)}
						className="hover:underline"
					>
						Equipo de Rescate
					</NavLink>
					<NavLink
						href="/hazmat"
						onClick={() => setIsOpen(false)}
						className="hover:underline"
					>
						Equipo Hazmat
					</NavLink>
					<NavLink
						href="#contact"
						onClick={() => setIsOpen(false)}
						className="hover:underline"
					>
						Contacto
					</NavLink>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const handleClick = () => {
		window.location.href = "mailto:contacto@lhopital-fr.mx";
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<MobileContactBar onClick={handleClick} />

			<header
				className={`
                    fixed left-0 w-full z-40 transition-all duration-300 ease-in-out flex items-center justify-between px-6 md:px-20
                        ${
						scrolled || isOpen
							? "bg-black md:bg-black md:h-20 md:shadow-lg"
							: "bg-transparent md:bg-transparent md:h-24"
						}
                    h-20 md:top-0 top-10
                `}
			>
				<HeaderContent
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					onClick={handleClick}
                    scrolled={scrolled}
				/>
			</header>

			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}
