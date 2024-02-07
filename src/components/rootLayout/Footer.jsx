import Container from "../commonComponent/Container";
import FeaturesList from "../commonLayout/FeaturesList";
import Flex from "../commonComponent/Flex";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import ProductsList from "../commonLayout/ProductsList";
import SupportList from "../commonLayout/SupportList";
import Logo from "../Logo/Logo";
import FunctionalityList from "../commonComponent/FunctionalityList";

const Footer = () => {
  const list = [
    { id: 1, href: "/Privacy", linkTxt: "Privacy policy" },
    { id: 2, href: "/condition", linkTxt: "Terms & condition" },
  ];

  return (
    <footer className="pt-s140 pb-14">
      <Container>
        <Flex className="justify-between">
          <div className="w-s450">
            <Logo />
            <PrimaryParagraph
              className="pt-11"
              text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."
            />
          </div>

          <FeaturesList />

          <ProductsList />

          <SupportList />
        </Flex>
      </Container>

      {/* Footer List Part  */}
      <Container className="pt-20">
        <Flex className="items-center justify-between">
          <PrimaryParagraph text="@2024 Innovate.All rights reserved." />

          <FunctionalityList
            {...{ list }}
            parentsClass="flex gap-x-16"
            headClass="pb-0 items-center"
            listClass="text-lg"
          />
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
