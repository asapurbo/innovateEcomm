import Image from "../commonComponent/Image";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import SecondaryHeading from "../commonComponent/SecondaryHeading";


const HomeSocialCard = ({ src, alt, headTxt, paraTxt }) => {
  return (
    <div className="w-s450 pt-10 relative z-50 pl-8 pr-11 pb-10 bg-white shadow-sm hover:shadow-lg duration-300">
      <div>
        <Image src={src} alt={alt} />
      </div>
      <div>
        <SecondaryHeading text={headTxt} className='pt-9 pb-4 text-text-28'/>
      </div>
      <div>
        <PrimaryParagraph text={paraTxt} className='text-lg' />
      </div>
    </div>
  );
};

export default HomeSocialCard;
