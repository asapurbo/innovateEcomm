import expert from "../../assets/expert.png";
import Container from "../commonComponent/Container";
import ExpertCard from "../commonComponent/ExpertCard";
import Flex from "../commonComponent/Flex";
import Heading from "../homeComponents/Heading";
import SecondaryHeading from "../commonComponent/SecondaryHeading";

const ExpertDetailsPart = () => {
  const expertDetails = [
    {
      twitter: "https://twitter.com/home",
      pinterest: "https://www.pinterest.com/",
      linkedin: "https://www.linkedin.com/feed/",
      headTxt: "Eleanor Pena",
      paraTxt: "Senior Engineer",
      src: expert,
      alt: "image",
    },
    {
      twitter: "https://twitter.com/home",
      pinterest: "https://www.pinterest.com/",
      linkedin: "https://www.linkedin.com/feed/",
      headTxt: "Jenny Wilson",
      paraTxt: "Project Manager",
      src: expert,
      alt: "image",
    },
    {
      twitter: "https://twitter.com/home",
      pinterest: "https://www.pinterest.com/",
      linkedin: "https://www.linkedin.com/feed/",
      headTxt: "Jerome Bell",
      paraTxt: "Senior Engineer",
      src: expert,
      alt: "image",
    },
    {
      twitter: "https://twitter.com/home",
      pinterest: "https://www.pinterest.com/",
      linkedin: "https://www.linkedin.com/feed/",
      headTxt: "Robert Fox",
      paraTxt: "Marketing Expert",
      src: expert,
      alt: "image",
    },
  ];
  return (
    <section className="pb-56 pt-20 bg-[#EDF3F7] relative mb-[343px]">
      <Container>
        <div className="text-center">
          <Heading text="our team" />
          <SecondaryHeading text="Meet with Expert" className="text-5xl pt-2" />
        </div>
        <div className="absolute -bottom-56">
          <Flex className="justify-between gap-x-8">
            {expertDetails.map((item, index) => (
              <ExpertCard
                key={index}
                twitterTo={item.twitter}
                pinterestTo={item.pinterest}
                linkedinTo={item.linkedin}
                headTxt={item.headTxt}
                paraTxt={item.paraTxt}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default ExpertDetailsPart;
