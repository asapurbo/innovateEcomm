import Image from "../commonComponent/Image";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import CommonHeading from "../commonComponent/CommonHeading";

const WorkingProcessCard = ({src,number,txt}) => {
  return (
      <div className="w-96 h-s298 bg-SWPBgColor shadow-md relative pt-10 z-0 px-16">
        <div className="w-s99 h-s99 flex items-center justify-center bg-SWPColor rounded-full absolute -left-12 -top-12 z-10">
           <CommonHeading text={number} className='font-pop text-4xl font-normal text-white' as='h3'/>
        </div>
        <div className="w-s74 h-s74 mx-auto">
          <Image src={src} className="inline-block"/>
        </div>
        <div className="text-center mt-6">
          <SecondaryHeading text={txt} className="text-4xl leading-57" />
        </div>
      </div>
  );
};

export default WorkingProcessCard;
