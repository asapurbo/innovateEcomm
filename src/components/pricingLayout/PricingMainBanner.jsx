import IntermediateBanner from "../banner/IntermediateBanner"
import Flex from "../commonComponent/Flex";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const PricingMainBanner = () => {
    let bread = window.location.pathname.replace("/", "");
  return (
    <div>
      <IntermediateBanner headTxt='Pricing'>
      <Flex className="text-primaryColor font-nun text-2xl font-normal items-center justify-center">
        <Link to="/">Home</Link>
        <MdKeyboardArrowRight />
        <Link className="capitalize">{bread}</Link>
      </Flex>
      </IntermediateBanner>
    </div>
  )
}

export default PricingMainBanner