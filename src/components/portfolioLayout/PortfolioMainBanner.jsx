import SecondaryBanner from "../banner/SecondaryBanner";
import Flex from "../commonComponent/Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import NavData from "../data/NavData";
import { useSelector } from "react-redux";

const PortfolioMainBanner = () => {
  let bread = window.location.pathname.replace("/", "");
  const data = useSelector((state) => {
    return state.bread.currentData;
  });
  const { handleDispatch: handleClick } = NavData();
  let link = data.toLowerCase();
  if (link === "contact us") {
    link = link.replace("contact us", "contact");
  } else if (link === "home") {
    link = link.replace("home", "");
  }
  return (
    <SecondaryBanner
      paraTxt="A quick view of industry specific problems solved with design by the awesome team at Abstrak."
      headTxt="Have a look on Our projects"
    >
      <Flex className="text-primaryColor font-nun text-2xl font-normal items-center justify-center">
        <Link onClick={function() {
          return handleClick(data);
        }} to={`/${link}`}>{data}</Link>
        <MdKeyboardArrowRight />
        <Link className="capitalize">{bread}</Link>
      </Flex>
    </SecondaryBanner>
  );
};

export default PortfolioMainBanner;
