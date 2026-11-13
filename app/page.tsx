import FeatuersSecond from "./components/FeatuersSecond";
import Features from "./components/Features";
import Hero from "./components/Hero";
import LandingImges from "./components/LandingImges";
import LogoClude from "./components/LogoClude";
import Speed from "./components/Speed";

export default function Home() {
  return (
    <main className="min-h-screen w-full ">
      <Hero />
      <LandingImges />
      <LogoClude />
      <Features />
      <Speed />

      <FeatuersSecond />
    </main>
  );
}
