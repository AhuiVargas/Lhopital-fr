import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Reveal><Content /></Reveal>
      <Reveal><Contact /></Reveal>
    </Layout>
  );
}