import SecondaryBanner from "../banner/SecondaryBanner";
import Flex from "../commonComponent/Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const PortfolioMainBanner = () => {
  let bread = window.location.pathname.replace("/", "");
  return (
    <SecondaryBanner
      paraTxt="A quick view of industry specific problems solved with design by the awesome team at Abstrak."
      headTxt="Have a look on Our projects"
    >
      <Flex className="text-primaryColor font-nun text-2xl font-normal items-center justify-center">
        <Link to="/">Home</Link>
        <MdKeyboardArrowRight />
        <Link className="capitalize">{bread}</Link>
      </Flex>
    </SecondaryBanner>
  );
};

export default PortfolioMainBanner;
