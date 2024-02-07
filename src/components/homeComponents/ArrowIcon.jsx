import Flex from "../commonComponent/Flex";

const ArrowIcon = ({ children, className }) => {
  return (
    <Flex
      className={`w-16 h-16 text-3xl duration-300 hover:text-white cursor-pointer bg-arrowBg rounded-br10 hover:bg-secondaryColor justify-center items-center ${className}`}
    >
      {children}
    </Flex>
  );
};

export default ArrowIcon;
