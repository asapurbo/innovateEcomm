import { Link } from "react-router-dom";
import Image from "../commonComponent/Image";
import SecondaryHeading from "../commonComponent/SecondaryHeading";

const LargeProjectCard = ({
  largeSrc,
  largeAlt,
  srcClass,
  largeHead,
  largeTo,
  largeLinkTxt,
}) => {
  return (
    <div className="w-s810 bg-white shadow-sm duration-300 hover:shadow-lg">
      <div>
        <Image src={largeSrc} alt={largeAlt} className={`w-full ${srcClass}`} />
      </div>

      <div className="p-8">
        <SecondaryHeading text={largeHead} className="text-text-28 pb-s10" />
        <Link
          to={largeTo}
          className="text-secondaryColor font-nun text-lg font-medium capitalize"
        >
          {largeLinkTxt}
        </Link>
      </div>
    </div>
  );
};

export default LargeProjectCard;
