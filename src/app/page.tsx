import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
// import Content from "@/components/Content";
// import Contact from "@/components/Contact";
import Partners from "@/components/Partners";
import EquipmentShowcase from "@/components/EquipmentShowcase";

export default function Home() {
	return (
		<div className="">
			<Hero />
			{/* <Reveal>
				<Content />
			</Reveal> */}
            <Reveal>
                <EquipmentShowcase />
            </Reveal>
			<Reveal>
				<Partners />
			</Reveal>
			{/* <Reveal>
				<Contact />
			</Reveal> */}
		</div>
	);
}
