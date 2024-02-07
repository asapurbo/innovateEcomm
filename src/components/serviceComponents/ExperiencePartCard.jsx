import Flex from "../commonComponent/Flex";
import Image from "../commonComponent/Image";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import SecondaryHeading from "../commonComponent/SecondaryHeading";

const ExperiencePartCard = ({src, headTxt, paraTxt, alt, className}) => {
  return (
    <div className={`p-7 bg-white ${className}`}>
      <Flex className='gap-x-6'>
        <div>
          <Image src={src} alt={alt}/>
        </div>
        <div>
          <SecondaryHeading text={headTxt} className="text-2xl pb-3" />
          <PrimaryParagraph text={paraTxt} />
        </div>
      </Flex>
    </div>
  );
};

export default ExperiencePartCard;
