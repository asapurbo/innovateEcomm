import { useState } from "react";
import Flex from "./Flex";
import PrimaryParagraph from "./PrimaryParagraph";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterCard = ({ paraText,start,end,sign }) => {
  const [view, setView] = useState(false);
  function handelView() {
    setView(function () {
      return true;
    });
  }

  return (
    <ScrollTrigger onEnter={handelView}>
      <Flex className="w-s260 h-s230 bg-white justify-center hover:shadow-md duration-300 items-center">
        <div className="text-center">
          {view && (
            <h1 className="text-primaryColor text-text-40 font-pop font-semibold capitalize">
              <CountUp start={start} end={end} />{sign}
            </h1>
          )}
          <PrimaryParagraph text={paraText} />
        </div>
      </Flex>
    </ScrollTrigger>
  );
};

export default CounterCard;
