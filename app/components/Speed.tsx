import Container from "./Continer";
import SubHeading from "./Headings/SubHeading";
import TitleHeading from "./Headings/TitleHeading";
import LandingImges from "./LandingImges";

const Speed = () => {
  return (
    <Container className="pt-10 md:pt-20 lg:pt-32 ">
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

      <LandingImges />
    </Container>
  );
};

export default Speed;
