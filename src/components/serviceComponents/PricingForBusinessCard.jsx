import PrimaryButton from "../commonComponent/PrimaryButton";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import BusineessPlanList from "./BusineessPlanList";

const PricingForBusinessCard = ({
  headTxt,
  paraTxt,
  priceTxt,
  planHeadTxt,
}) => {
  const planList = [...planHeadTxt];

  return (
    <div className="w-s450 p-7 bg-white shadow-lg">
      <div>
        <SecondaryHeading text={headTxt} className="text-4xl leading-50 pb-5" />
        <PrimaryParagraph text={paraTxt} />
        <SecondaryHeading text={priceTxt} className="text-5xl py-10" />
      </div>

      <div>
        <PrimaryButton to='/pricing' text="Purchase now" />
      </div>

      <div className="mt-10">
        {planList.map((item, index) => (
          <BusineessPlanList key={index} planHeadTxt={item} />
        ))}
      </div>
    </div>
  );
};

export default PricingForBusinessCard;
