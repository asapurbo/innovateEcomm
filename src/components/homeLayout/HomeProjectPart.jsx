import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import Heading from "../homeComponents/Heading";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import PrimaryButton from "../commonComponent/PrimaryButton";
import PettyProjectCard from "../homeComponents/PettyProjectCard";
import LargeProjectCard from "../homeComponents/LargeProjectCard";
import mobile from "../../assets/mobile.png";
import ecomm from "../../assets/ecomm.png";
import design from "../../assets/designtwo.png";
import Image from "../commonComponent/Image";

const HomeProjectPart = () => {
  return (
    <section className="py-s120 relative ">
      {/* Design Part Start */}
      <div className="absolute z-0 -top-72">
         <Image src={design} alt='disign'/>
      </div>
      {/* Design Part End */}
      <Container>
        <Flex className="justify-between items-center mb-s60 relative z-10">
          <div className="w-s693">
            <Heading text="digital experience" />
            <SecondaryHeading
              text="The hundred of completed works still counting"
              className="text-5xl leading-67"
            />
          </div>
          <div>
            <PrimaryButton text="View all" />
          </div>
        </Flex>
        <Flex className="justify-between items-center relative z-20">
          <PettyProjectCard
            pettySrc={mobile}
            pettyHead="Mobile App"
            pettyLinkTxt="Read more"
            pettyTo="/"
          />
          <LargeProjectCard
            largeSrc={ecomm}
            largeHead="Mobile App"
            largeLinkTxt="Read more"
            largeTo="/"
          />
        </Flex>

        <Flex className="justify-between items-center mt-8">
          <LargeProjectCard
            largeSrc={ecomm}
            largeHead="Mobile App"
            largeLinkTxt="Read more"
            largeTo="/"
          />
          <PettyProjectCard
            pettySrc={mobile}
            pettyHead="Mobile App"
            pettyLinkTxt="Read more"
            pettyTo="/"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default HomeProjectPart;
