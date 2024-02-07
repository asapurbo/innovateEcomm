import Image from "../commonComponent/Image";
import Flex from "../commonComponent/Flex";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import { FaRegCalendarCheck } from "react-icons/fa6";

const BlogNewsCard = ({src, alt, headTxt, paraTxt, newsUserSrc, newsUserTxt, newsDate}) => {
  return (
    <div className="w-s628 mt-10">
      <Flex className="justify-between">
        <div>
          <Image src={src} alt={alt} />
        </div>
        {/* ---------------- */}
        <div className="w-s366">
          <SecondaryHeading
            text={headTxt}
            className="text-2xl "
          />

          <PrimaryParagraph
            text={paraTxt}
            className="py-3"
          />
          {/* --------------------- */}
          <Flex className="justify-between">
            <Flex className="gap-5 items-center">
              <div>
                <Image src={newsUserSrc} />
              </div>
              <div>
                <PrimaryParagraph text={newsUserTxt} />
              </div>
            </Flex>

            <Flex className="gap-x-5 items-center">
              <div>
                <FaRegCalendarCheck className="text-[#9C9BA9] text-xl" />
              </div>
              <div>
                <PrimaryParagraph text={newsDate} />
              </div>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default BlogNewsCard;
