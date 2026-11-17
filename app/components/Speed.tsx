import Container from "./Continer";
import SubHeading from "./Headings/SubHeading";
import TitleHeading from "./Headings/TitleHeading";
import LandingImges from "./LandingImges";

const Speed = () => {
  return (
    <Container
      className="py-10 md:py-20 lg:py-32 overflow-y-clip mask-b-from-90%
    "
    >
      <article className="flex flex-col gap-5">
        <TitleHeading className=" font-semibold">
          Built for Speed
          <br /> Designed for Scale
        </TitleHeading>
        <SubHeading className="  text-base   max-w-lg font-inter">
          Deploy AI agents that plan, act through your tools, and report
          outcomes without changing how your teams work.
        </SubHeading>
      </article>

      <LandingImges
        animation={{
          initial: { opacity: 0, y: -40 },
          whileInView: { opacity: 1, y: 40 },
          transition: { duration: 0.7, ease: "easeOut" },
        }}
        className="scale-[0.82] md:scale-[0.9] lg:scale-[1] xl:scale-[1] mt-20"
      />
    </Container>
  );
};

export default Speed;
