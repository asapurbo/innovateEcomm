import Flex from "../commonComponent/Flex";
import Image from "../commonComponent/Image";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import blank from '../../assets/blankimage.png'

const MainAboutPart = () => {
  return (
    <section>
      <div className="bg-hAboutBg">
        <Flex className="justify-between bg-48 bg-right">
          <div className="w-6/12">
            <Image src={blank} alt="image" className="w-full h-full" />
          </div>
          <div className="w-5/12 py-12 ">
            <div className="w-s570">
              <SecondaryHeading
                text="We conceive and translate our clients dreams into reality."
                className="leading-50 text-4xl"
              />
              <PrimaryParagraph
                text="Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels."
                className="pr-32 pt-5 pb-12"
              />
              
            </div>
          </div>
        </Flex>
        <Flex className="justify-between flex-row-reverse bg-48 bg-right">
          <div className="w-6/12">
            <Image src={blank} alt="image" className="w-full h-full" />
          </div>
          <div className="w-5/12 py-12 ">
            <div className="w-s570 float-right">
              <SecondaryHeading
                text="A single-minded focus on getting results."
                className="leading-50 text-4xl"
              />
              <PrimaryParagraph
                text="Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels."
                className="pr-32 pt-5 pb-12"
              />
              
            </div>
          </div>
        </Flex>
      </div>
    </section>
  );
};

export default MainAboutPart;
