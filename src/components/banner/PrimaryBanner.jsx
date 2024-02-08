import Flex from "../commonComponent/Flex";
import Container from "../commonComponent/Container";
import PrimaryHeading from "../commonComponent/PrimaryHeading";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";

const PrimaryBanner = ({ className, headTxt, paraTxt, children }) => {


  return (
    <section
      className={`bg-primaryBg bg-center bg-cover py-40 ${className} h-screen`}
    >
      <Container>
        <div>{children}</div>
        <Flex className="gap-x-9 items-center mt-5 ">
          <div className="w-s600 relative after:absolute after:content-[''] after:w-[2px] after:h-32 after:bg-primaryColor after:-right-3 after:top-1/2 after:-translate-y-1/2">
            <PrimaryHeading text={headTxt} className="text-left" />
          </div>
          <div className="w-s547">
            <PrimaryParagraph text={paraTxt} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default PrimaryBanner;
