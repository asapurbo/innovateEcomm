import IntermediateBanner from "../banner/IntermediateBanner"
import Flex from "../commonComponent/Flex";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import NavData from '../data/NavData';

const PricingMainBanner = () => {
    let bread = window.location.pathname.replace("/", "");
    const data = useSelector((state) => {
      return state.bread.currentData;
    })
    const {handleDispatch: handleClick} = NavData()
    let link = data.toLowerCase();
    if(link === 'contact us') {
      link = link.replace('contact us', 'contact')
    } else if(link === 'home') {
      link = link.replace('home', '')
    }
  return (
    <div>
      <IntermediateBanner headTxt='Pricing'>
      <Flex className="text-primaryColor font-nun text-2xl font-normal items-center justify-center">
        <Link onClick={function() {
          return handleClick(data)
        }} to={`/${link}`}>{data}</Link>
        <MdKeyboardArrowRight />
        <Link className="capitalize">{bread}</Link>
      </Flex>
      </IntermediateBanner>
    </div>
  )
}

export default PricingMainBanner