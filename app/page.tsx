import Container from "./components/Continer";
import Features from "./components/Features";
import Hero from "./components/Hero";
import LandingImges from "./components/LandingImges";
import LogoClude from "./components/LogoClude";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Container className="">
        <Hero />
        <LandingImges />

        <LogoClude />
        <Features />
      </Container>
    </main>
  );
}
