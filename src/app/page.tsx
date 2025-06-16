import Reveal from "@/components/Reveal";
import Hero from "@/components/hero";
import Content from "@/components/Content";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Reveal><Content /></Reveal>
      <Reveal><Partners /></Reveal>
      <Reveal><Contact /></Reveal>
    </div>
  );
}