import SecondaryBanner from "../banner/SecondaryBanner";
import Flex from "../commonComponent/Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceMainBanner = () => {
  let bread = window.location.pathname.replace("/", "");
  return (
    <SecondaryBanner
      paraTxt="With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market."
      headTxt="What service we provide"
    >
      <Flex className="text-primaryColor font-nun text-2xl font-normal items-center justify-center">
        <Link to="/">Home</Link>
        <MdKeyboardArrowRight />
        <Link className="capitalize">{bread}</Link>
      </Flex>
    </SecondaryBanner>
  );
};

export default ServiceMainBanner;
