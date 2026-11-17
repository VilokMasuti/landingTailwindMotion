import { PlusIcon } from "lucide-react";
import Card, { CardContiner, CardSkeleton, CardTitle } from "./Card";
import Container from "./Continer";
import SubHeading from "./Headings/SubHeading";
import TitleHeading from "./Headings/TitleHeading";
import Skeleton2 from "./Sekeliton/Skeleton2";
import { Skelition3 } from "./Sekeliton/Skelition3";
import Skeliton1 from "./Sekeliton/Skeliton1";

const Features = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32 ">
      <article className=" mt-30 ">
        <div
          className="flex lg:flex-row
      lg:justify-between flex-col gap-10 items-center lg:items-baseline-last"
        >
          <TitleHeading className="  lg:text-left text-center   font-semibold lg:max-w-xl  ">
            Built for Fast Moving Teams That Need Control.
          </TitleHeading>

          <SubHeading className="   text-center pt-5 lg:pt-10">
            Agents work inside your existing tools, with built-in approvals,
            brand and policy guardrails, and full traceability. Every action is
            auditable, every outcome accountable.
          </SubHeading>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 md:my-20">
          <Card className="rounded-tl-3xl rounded-br-3xl ">
            <CardSkeleton>
              <Skeliton1 />
            </CardSkeleton>
            <CardContiner className=" flex gap-10 ">
              <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
              <button className=" cursor-pointer size-5  text-center md:size-10  ">
                <PlusIcon />
              </button>
            </CardContiner>
          </Card>

          <Card>
            <CardSkeleton>
              <Skelition3 />
            </CardSkeleton>
            <CardContiner className=" flex gap-10 ">
              <CardTitle>Automate Handoffs, Reduce Ops Frictions</CardTitle>
              <button className=" size-5 md:size-10 ">
                <PlusIcon />
              </button>
            </CardContiner>
          </Card>

          <Card className="rounded-tr-3xl rounded-bl-3xl ">
            <CardSkeleton>
              {" "}
              <Skeleton2 />
            </CardSkeleton>
            <CardContiner className=" flex gap-10 ">
              <CardTitle>
                Approvals, Guardrails, and Full Auditability
              </CardTitle>
              <button className=" size-5 md:size-10  ">
                <PlusIcon />
              </button>
            </CardContiner>
          </Card>
        </div>
      </article>
    </Container>
  );
};

export default Features;
