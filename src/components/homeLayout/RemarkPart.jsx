import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import Image from "../commonComponent/Image";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import imageOne from "../../assets/cimage.png";
import imageTwo from "../../assets/cimagetwo.png";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import CommonHeading from "../commonComponent/CommonHeading";
import ArrowIcon from "../homeComponents/ArrowIcon";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const RemarkPart = () => {
  return (
    <section className="py-s120 bg-CpCBg">
      <Container>
        <Flex className='gap-x-s150'>
          <div className="w-s693">
            <div>
              <SecondaryHeading
                text="Our customer say"
                className="text-5xl leading-67"
              />
            </div>

            <Flex className="gap-x-7 my-s60">
              <Image src={imageOne} alt="image" />
              <Image src={imageOne} alt="image" />
              <Image src={imageOne} alt="image" />
              <Image src={imageOne} alt="image" />
            </Flex>

            <div>
              <PrimaryParagraph text="As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with." />
            </div>

            <Flex className="gap-x-10 mt-s60">
              <div>
                <CommonHeading
                  text="Jonathon"
                  className="text-primaryColor font-os text-4xl font-semibold leading-64 capitalize"
                  as="h3"
                />
              </div>
              <Flex className="gap-x-6">
                <ArrowIcon>
                  <RiArrowLeftSLine />
                </ArrowIcon>
                <ArrowIcon>
                  <RiArrowRightSLine />
                </ArrowIcon>
              </Flex>
            </Flex>
          </div>

          <div>
            <Image src={imageTwo} alt='image'/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default RemarkPart;
