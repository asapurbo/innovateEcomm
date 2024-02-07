import Container from "../commonComponent/Container";
import CounterCard from "../commonComponent/CounterCard";
import Flex from "../commonComponent/Flex";
import PrimaryButton from "../commonComponent/PrimaryButton";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import SecondaryHeading from "../commonComponent/SecondaryHeading";




const CounterPart = () => {

  return (
    <section className="py-s120 bg-hAboutBg bg-counterBg bg-center bg-cover bg-no-repeat">
      <Container>
        <Flex className="gap-x-24">
          <div className="w-s550">
            <Flex className="flex-wrap justify-between gap-7">
              <CounterCard start='0' sign='+' end='19' paraText='Total top service'/>
              <CounterCard start='0' sign='+' end='27' paraText='Total top service'/>
              <CounterCard start='0' sign='%' end='98' paraText='Total top service'/>
              <CounterCard start='0' sign='' end='1458' paraText='Total top service'/>
            </Flex>
          </div>
          <div className="w-s570">
            <SecondaryHeading
              text="The hundred of completed works still counting"
              className="text-5xl leading-67"
            />

            <PrimaryParagraph
              className="pr-7 pt-5 pb-10"
              text="Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels."
            />

            <PrimaryButton text="More about us" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CounterPart;
