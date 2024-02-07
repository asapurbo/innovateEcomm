import digital from "../../assets/digital.png";
import website from "../../assets/website.png";
import software from "../../assets/software.png";
import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import PrimaryHeading from "../commonComponent/PrimaryHeading";
import TypeOfWorkCard from "../aboutComponents/TypeOfWorkCard";

const TypeOfWorkPart = () => {

  const workItem = [
    {
      src: digital,
      alt: "image",
      headTxt: "Digital products",
      paraTxt:
        "By applying behavioral science to customer experience, we design engaging digital products used by millions of people.",
    },
    {
      src: website,
      alt: "image",
      headTxt: "Websites  Design",
      paraTxt:
        "From Slack to Facebook, we team up with marketing departments of large companies and startups to deliver award‑winning websites.",
    },
    {
      src: software,
      alt: "image",
      headTxt: "Enterprise software",
      paraTxt:
        "We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.",
    },
  ];

  return (
    <section className="py-s120">
      <Container>
        <div className="text-center">
          <PrimaryHeading text="What We Do?" className="text-5xl" />
        </div>
        <Flex className="justify-between mt-24">
          {
            workItem.map((item,index) => (
              <TypeOfWorkCard key={index} src={item.src} headTxt={item.headTxt} paraTxt={item.paraTxt}/>
            ))
          }
        </Flex>
      </Container>
    </section>
  );
};

export default TypeOfWorkPart;
