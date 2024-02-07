import Flex from "../commonComponent/Flex";
import CommonHeading from "../commonComponent/CommonHeading";

const WaysOfCommunication = ({ children, txt }) => {
  return (
    <Flex className="items-center gap-x-5 mt-7">
      <div className="text-text-40 text-secondaryColor">
        {children}
      </div>
      <CommonHeading
        text={txt}
        as="h3"
        className="font-pop font-medium text-2xl text-primaryColor"
      />
    </Flex>
  );
};

export default WaysOfCommunication;
