import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import Image from "../commonComponent/Image";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import Heading from "../homeComponents/Heading";
import Blank from "../../assets/blankimage.png";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import PrimaryButton from "../commonComponent/PrimaryButton";

const HomeAboutPart = () => {
  return (
    <section className="pb-s120 pt-72 relative z-40">
      <Container>
        <div className="w-s450">
          <Heading text="digital experience" />
          <SecondaryHeading
            text="Connect people in digital life"
            className="leading-67 text-5xl pt-s10 pb-s60"
          />
        </div>
      </Container>
      <div className="bg-hAboutBg">
        <Flex className='justify-between bg-homeAbout bg-no-repeat bg-48 bg-right'>
        <div className="w-6/12">
            <Image src={Blank} alt='image' className='w-full h-full'/>
        </div>
        <div className="w-5/12 py-12 ">
            <div className="w-s570">
                <SecondaryHeading text='More than just an ad agency, we harness the tools of traditional and digital.' className='leading-50 text-4xl'/>
                <PrimaryParagraph text='With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.' className='pr-32 pt-5 pb-12'/>
                <PrimaryButton text='More about us'/>
            </div>
        </div>
        </Flex>
      </div>
    </section>
  );
};

export default HomeAboutPart;
