import Hero from "@/components/Hero";
import About from "@/components/About";
import VibeCodingShowcase from "@/components/VibeCodingShowcase";
import ExploreGrid from "@/components/ExploreGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VibeCodingShowcase />
      <ExploreGrid />
      <Contact />
    </main>
  );
}
