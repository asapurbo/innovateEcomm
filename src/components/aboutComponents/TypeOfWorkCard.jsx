import Image from "../commonComponent/Image";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";

const TypeOfWorkCard = ({ src, alt, headTxt, paraTxt }) => {
  return (
    <div className="w-s335">
      <div className="text-center">
        <Image src={src} className="inline-block" alt={alt}/>
      </div>
      <div className="text-center">
        <SecondaryHeading text={headTxt} className="text-text-28 pt-10 pb-4" />
        <PrimaryParagraph text={paraTxt} />
      </div>
    </div>
  );
};

export default TypeOfWorkCard;
