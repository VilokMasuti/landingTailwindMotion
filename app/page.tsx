import FeatuersSecond from "./components/FeatuersSecond";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Governed from "./components/Governed";
import Hero from "./components/Hero";
import LandingImges from "./components/LandingImges";
import LogoClude from "./components/LogoClude";
import Speed from "./components/Speed";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <LandingImges />
        <LogoClude />
        <Features />
        <Speed />

        <FeatuersSecond />
        <Governed />
      </main>
      <Footer />
    </>
  );
}
