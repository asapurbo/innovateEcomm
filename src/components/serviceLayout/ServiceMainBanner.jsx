import { useSelector } from "react-redux";
import SecondaryBanner from "../banner/SecondaryBanner";
import Flex from "../commonComponent/Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import NavData from '../data/NavData'

const ServiceMainBanner = () => {
  let bread = window.location.pathname.replace("/", "");
  const data = useSelector((state) => {
    return state.bread.currentData;
  });

  let link = data.toLowerCase();
  if (link === "contact us") {
    link = link.replace("contact us", "contact");
  } else if (link === "home") {
    link = link.replace("home", "");
  }

  const {handleDispatch: handleClick} = NavData()
  return (
    <SecondaryBanner
      paraTxt="With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market."
      headTxt="What service we provide"
    >
      <Flex className="text-primaryColor font-nun text-2xl font-normal items-center justify-center">
        <Link onClick={function(){
          return handleClick(data)
        }} to={`/${link}`}>{data}</Link>
        <MdKeyboardArrowRight />
        <Link className="capitalize">{bread}</Link>
      </Flex>
    </SecondaryBanner>
  );
};

export default ServiceMainBanner;
