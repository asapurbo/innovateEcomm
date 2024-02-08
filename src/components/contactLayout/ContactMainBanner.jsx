import PrimaryBanner from "../banner/PrimaryBanner";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Flex from "../commonComponent/Flex";
import { useSelector } from "react-redux";
import NavData from '../data/NavData';

const ContactMainBanner = () => {
  const data = useSelector((state) => {
    return state.bread.currentData;
  })
  const {handleDispatch: handleClick} = NavData();
  let link = data.toLowerCase()
  if(link === 'contact us') {
    link = link.replace('contact us', 'contact');
  } else if (link === 'home') {
    link = link.replace('home', '')
  }
  let bread = window.location.pathname.replace("/", "");
  return (
    <>
      <PrimaryBanner
        headTxt="Get in touch"
        paraTxt="Contact us for a quote, help to join the team"
      >
        <Flex className="text-primaryColor font-nun text-2xl font-normal items-center">
          <Link onClick={() => {
            handleClick(data)
          }} to={`/${link}`}>{data}</Link>
          <MdKeyboardArrowRight />
          <Link className="capitalize">{bread}</Link>
        </Flex>
      </PrimaryBanner>
    </>
  );
};

export default ContactMainBanner;
