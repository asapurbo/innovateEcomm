import PrimaryBanner from "../banner/PrimaryBanner";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Flex from "../commonComponent/Flex";

const ContactMainBanner = () => {
  let bread = window.location.pathname.replace("/", "");
  return (
    <>
      <PrimaryBanner
        headTxt="Get in touch"
        paraTxt="Contact us for a quote, help to join the team"
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

export default ContactMainBanner;
