import Container from "../commonComponent/Container";
import SecondrayHeading from "../commonComponent/SecondaryHeading";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import Image from "../commonComponent/Image";
import design from '../../assets/design.png'
const SecondaryBanner = ({ children, headTxt, paraTxt }) => {
  return (
    <section className="bg-secondaryBg py-s120 pb-s120 relative">
      <Container>
        <div className="w-s709 mx-auto">
          <div>{children}</div>
          <div className="text-center">
            <SecondrayHeading text={headTxt} className="text-text-64 px-10" />

            <PrimaryParagraph text={paraTxt} className="pt-3" />
          </div>
        </div>
      </Container>
      {/* Design Start */}
       <div className="absolute -bottom-20">
          <Image src={design}/>
       </div>
      {/* Design End */}
    </section>
  );
};

export default SecondaryBanner;
