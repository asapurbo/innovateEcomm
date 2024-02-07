import Image from "./Image";
import Flex from "./Flex";
import { FaPlus } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
import useClick from "../hook/useClick";

const ExpertCard = ({ twitterTo, pinterestTo, linkedinTo, headTxt, paraTxt, src,alt }) => {

  const {
    plusRef,
    txtDivRef,
    headTxtRef,
    paraTxtRef,
    spanRef,
    pinterestRef,
    linkedinRef,
    twitterRef,
  } = useClick();
  

  return (
    <div className="w-s330 h-s374 relative">
      <div>
        <Image src={src} alt={alt} />
      </div>
      <Flex className="absolute bottom-0 items-center gap-7">
        <div
          ref={txtDivRef}
          className="py-6 pl-16 pr-12 duration-300 bg-white rounded-tr-xl"
        >
          <span
            ref={spanRef}
            className='text-lg inline-block relative after:absolute after:content-[""] after:bg-afterBg after:h-[2px] after:duration-300 after:w-8 after:top-1/2 after:-translate-y-1/2 after:-left-12'
          >
            <h3
              ref={headTxtRef}
              className="text-primaryColor font-pop duration-300 font-semibold capitalize text-lg"
            >
             {headTxt}
            </h3>
          </span>
          <p
            ref={paraTxtRef}
            className="text-iconColor font-int text-sm font-normal pt-1 duration-300"
          >
            {paraTxt}
          </p>
        </div>

        <div className="relative">
          <div
            ref={plusRef}
            className="bg-white w-11 h-11 flex relative hover:bg-[#efefef] items-center z-10 duration-300 justify-center rounded-full cursor-pointer text-iconColor"
          >
            <FaPlus />
          </div>
          {/* ---------------- */}
          <Link to={pinterestTo}>
            <div
              ref={pinterestRef}
              className="bg-white w-11 h-11 flex items-center hover:bg-[#E60023] hover:text-notWhite z-0 absolute bottom-0 right-0 duration-300 justify-center rounded-full cursor-pointer text-iconColor"
            >
              <FaPinterestP />
            </div>
          </Link>

          <Link to={linkedinTo}>
            <div
              ref={linkedinRef}
              className="bg-white w-11 h-11 flex items-center z-0 absolute hover:text-notWhite hover:bg-[#0077b5] bottom-0 right-0 duration-300 justify-center rounded-full cursor-pointer text-iconColor"
            >
              <FaLinkedinIn />
            </div>
          </Link>

          <Link to={twitterTo}>
            <div
              ref={twitterRef}
              className="bg-white w-11 h-11 flex items-center hover:bg-[#1DA1F2] hover:text-notWhite z-0 absolute bottom-0 right-0 duration-300 justify-center rounded-full cursor-pointer text-iconColor"
            >
              <FaTwitter />
            </div>
          </Link>
          {/* ----------------- */}
        </div>
      </Flex>
    </div>
  );
};

export default ExpertCard;
