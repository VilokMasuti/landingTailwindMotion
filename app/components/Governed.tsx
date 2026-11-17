import Container from "./Continer";
import SubHeading from "./Headings/SubHeading";
import TitleHeading from "./Headings/TitleHeading";
import LandingImges from "./LandingImges";

const Governed = () => {
  return (
    <Container
      className="py-10 md:py-20 lg:py-32 overflow-y-clip mask-b-from-90%
    "
    >
      <article className="flex flex-col gap-5">
        <TitleHeading as="h1" className=" font-semibold">
          Governed AI,
          <br /> Trusted Outcomes
        </TitleHeading>
        <SubHeading as="p" className="  text-base   max-w-lg font-inter">
          Deploy AI agents with built-in approvals, brand guardrails, and audit
          trails. Every step is visible, reviewable, and compliant.
        </SubHeading>
      </article>

      <LandingImges
        animation={{
          initial: { opacity: 0, y: -40 },
          whileInView: { opacity: 1, y: 40 },
          transition: { duration: 0.7, ease: "easeOut" },
        }}
        className="aspect-[2/1] scale-[0.85] md:scale-[0.9] lg:scale-[0.95] mt-20 "
        images={[
          { src: "/img1.jpg", alt: "img1" },
          { src: "/img2.jpg", alt: "img2" },
        ]}
      />
    </Container>
  );
};

export default Governed;
