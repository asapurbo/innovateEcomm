import PrimaryBanner from "../banner/PrimaryBanner";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Flex from "../commonComponent/Flex";
import { useSelector } from "react-redux";
import NavData from '../data/NavData';

const AboutMainBanner = () => {
  const data = useSelector((state) => {
    return state.bread.currentData;
  });
  let bread = window.location.pathname.replace("/", "");

  // -------------
  let link = data.toLowerCase();
  if (link === "contact us") {
    link = link.replace("contact us", "contact");
  } else if (link === "home") {
    link = link.replace('home', '')
  }

  const {handleDispatch: handleClick} = NavData()
  // -------------
  return (
    <>
      <PrimaryBanner
        headTxt="Know more about innovate"
        paraTxt="With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market."
      >
        <Flex className="text-primaryColor font-nun text-2xl font-normal items-center">
          <Link onClick={() => {
            return handleClick(data)
          }}  to={`/${link}`}>{data}</Link>
          <MdKeyboardArrowRight />
          <Link className="capitalize">{bread}</Link>
        </Flex>
      </PrimaryBanner>
    </>
  );
};

export default AboutMainBanner;
