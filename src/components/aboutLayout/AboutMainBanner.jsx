import PrimaryBanner from "../banner/PrimaryBanner";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Flex from "../commonComponent/Flex";

const AboutMainBanner = () => {
  let bread = window.location.pathname.replace("/", "");
  return (
    <>
      <PrimaryBanner
        headTxt="Know more about innovate"
        paraTxt="With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market."
      >
        <Flex className="text-primaryColor font-nun text-2xl font-normal items-center">
          <Link to="/">Home</Link>
          <MdKeyboardArrowRight />
          <Link className="capitalize">{bread}</Link>
        </Flex>
      </PrimaryBanner>
    </>
  );
};

export default AboutMainBanner;
