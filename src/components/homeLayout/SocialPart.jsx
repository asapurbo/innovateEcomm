import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import HomeSocialCard from "../homeComponents/HomeSocialCard";
import business from "../../assets/business.png";
import digital from "../../assets/digital.png";
import seo from "../../assets/seo.png";

const SocialPart = () => {
  return (
    <section>
      <Container className="relative">
        <div className="absolute -top-52">
          <Flex className='gap-x-8'>
            <HomeSocialCard
              src={business}
              alt="logo"
              headTxt="Digital marketing"
              paraTxt="Nam libero tempore, cum soluta nobis est eligendi optio cumque "
            />
            <HomeSocialCard
              src={digital}
              alt="logo"
              headTxt="Grow your business"
              paraTxt="Nam libero tempore, cum soluta nobis est eligendi optio cumque "
            />
            <HomeSocialCard
              src={seo}
              alt="logo"
              headTxt="Search engine optimization"
              paraTxt="Nam libero tempore, cum soluta nobis est eligendi optio cumque "
            />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default SocialPart;
