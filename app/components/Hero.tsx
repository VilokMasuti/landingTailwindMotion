import Container from "./Continer";
import SubHeading from "./Headings/SubHeading";
import TitleHeading from "./Headings/TitleHeading";

import { Button } from "./ui/button";

const Hero = () => {
  return (
    <Container className=" my-20  ">
      <TitleHeading as="h1">
        Agents that do the <br /> Approvals that keep you safe.
      </TitleHeading>
      <SubHeading as="p" className="py-8">
        Deploy AI agents that plan tasks, work with your tools, and report
        <br />
        outcomes - without changing how your teams work.
      </SubHeading>
      <article className="  flex flex-wrap gap-5 font-inter">
        <Button className="shadow-brand px-5">Start your free trial</Button>
        <Button className="font-inter" variant="outline">
          View role based demos
        </Button>
      </article>
    </Container>
  );
};

export default Hero;
