import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import ExperiencePartCard from "../serviceComponents/ExperiencePartCard";
import exp from "../../assets/exp.png";
import sol from "../../assets/sol.png";
import prov from "../../assets/prov.png";
import PrimaryButton from "../commonComponent/PrimaryButton";
import Image from "../commonComponent/Image";

const ExperiencePart = () => {
  return (
    <section className="py-s120 bg-ExperienceBgColor">
      <Container>
        <Flex className='items-center justify-between'>
          <div className="w-s632">
            <SecondaryHeading
              text="25 Years Of Experience We Provide Solutions"
              className="text-4xl leading-50"
            />
            <div className="mt-9">
              <ExperiencePartCard
                headTxt="Professional Agency"
                paraTxt="If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services."
                src={exp}
                className='mb-7'
              />

              <ExperiencePartCard
                headTxt="Best Solutions Provider"
                paraTxt="We know more about digital direct response than virtually any digital marketing agency in the industry."
                src={sol}
              />
            </div>

            <div className="mt-12">
                <PrimaryButton text='More about us'/>
            </div>
          </div>
          <div className="w-s632">
            <Image src={prov}/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ExperiencePart;
