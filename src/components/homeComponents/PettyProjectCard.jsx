import { Link } from "react-router-dom";
import Image from "../commonComponent/Image";
import SecondaryHeading from "../commonComponent/SecondaryHeading";

const PettyProjectCard = ({
  pettySrc,
  pettyAlt,
  srcClass,
  pettyHead,
  pettyTo,
  pettyLinkTxt,
}) => {
  return (
    <div className="w-s570 bg-white shadow-sm duration-300 hover:shadow-lg">
      <div>
        <Image src={pettySrc} alt={pettyAlt} className={`w-full ${srcClass}`} />
      </div>

      <div className="p-8">
        <SecondaryHeading text={pettyHead} className="text-text-28 pb-s10" />
        <Link
          to={pettyTo}
          className="text-secondaryColor font-nun text-lg font-medium capitalize"
        >
          {pettyLinkTxt}
        </Link>
      </div>
    </div>
  );
};

export default PettyProjectCard;
