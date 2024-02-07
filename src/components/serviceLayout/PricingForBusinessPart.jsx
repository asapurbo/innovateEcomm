import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import PricingForBusinessCard from "../serviceComponents/PricingForBusinessCard";
import Heading from "../homeComponents/Heading";
import SecondaryHeading from "../commonComponent/SecondaryHeading";

const PricingForBusinessPart = () => {
  const businessItemList = [
    {
      headTxt: "Basic Plan",
      paraTxt:
        "Amet consectetu adipiscing elit sedie eiusmod tempor incidie labore",
      priceTxt: "$29.57",
      planHeadTxt: [
        "Create Unique Websites",
        "Automate Your Busy Work",
        "Optimize All Your Efforts",
      ],
    },

    {
      headTxt: "Standard Plan",
      paraTxt:
        "Amet consectetu adipiscing elit sedie eiusmod tempor incidie labore",
      priceTxt: "$49.86",
      planHeadTxt: [
        "Create Unique Websites",
        "Automate Your Busy Work",
        "Optimize All Your Efforts",
        "Centralized Teams",
        "Shareable Team Libraries",
      ],
    },

    {
      headTxt: "Premium Plan",
      paraTxt:
        "Amet consectetu adipiscing elit sedie eiusmod tempor incidie labore",
      priceTxt: "$87.34",
      planHeadTxt: [
        "Create Unique Websites",
        "Automate Your Busy Work",
        "Optimize All Your Efforts",
        "Centralized Teams",
        "Shareable Team Libraries",
      ],
    },
  ];
  return (
    <section className="pb-80 pt-20 bg-[#EDF3F7] relative mb-[500px]">
      <Container>
        <div className="text-center">
          <Heading text="Best SEO Optimization Agency" />
          <SecondaryHeading
            text="Best Pricing For Business"
            className="text-5xl pt-4"
          />
        </div>
        {/* ---------------------- */}
        <div className="absolute -bottom-96">
          <Flex className="justify-between gap-8">
            {businessItemList.map((item, index) => (
              <PricingForBusinessCard
                key={index}
                headTxt={item.headTxt}
                paraTxt={item.paraTxt}
                priceTxt={item.priceTxt}
                planHeadTxt={item.planHeadTxt}
              />
            ))}
          </Flex>
        </div>
        {/* ----------------------- */}
      </Container>
    </section>
  );
};

export default PricingForBusinessPart;
