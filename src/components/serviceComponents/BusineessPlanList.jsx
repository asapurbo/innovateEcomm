import { TbSquareRoundedCheck } from "react-icons/tb";
import CommonHeading from "../commonComponent/CommonHeading";
import Flex from "../commonComponent/Flex";

const BusineessPlanList = ({planHeadTxt}) => {
  return (

       <Flex className="items-center gap-x-3 mb-3">
          <TbSquareRoundedCheck className="text-[#130F26] text-2xl" />
          <CommonHeading
            text={planHeadTxt}
            as="h3"
            className="text-xl font-nun text-primaryColor font-normal"
          />
        </Flex>
 
  )
}

export default BusineessPlanList