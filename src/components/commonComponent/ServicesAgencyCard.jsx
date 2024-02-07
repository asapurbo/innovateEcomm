import Image from "./Image";
import CommonHeading from "./CommonHeading";
import SecondaryHeading from "./SecondaryHeading";
const ServicesAgencyCard = ({ src, alt, pettyTxt, largeTxt }) => {
  return (
    <div className="w-s450 bg-white shadow-sm">
      <div className="h-s342">
        <Image src={src} alt={alt} />
      </div>
      <div className="p-6">
        <CommonHeading
          text={pettyTxt}
          as="h3"
          className="font-pop tex-sm font-medium text-primaryColor"
        />
        <SecondaryHeading text={largeTxt} className="text-text-28 pt-3" />
      </div>
    </div>
  );
};

export default ServicesAgencyCard;
