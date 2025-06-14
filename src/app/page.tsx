import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Reveal><Content /></Reveal>
      <Reveal><Contact /></Reveal>
    </div>
  );
}