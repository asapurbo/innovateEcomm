import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import PrimaryButton from "../commonComponent/PrimaryButton";
const Project = () => {
  return (
    <section className="py-s100 bg-pdBg bg-projectBg bg-center bg-cover">
      <Container className="border-b border-solid border-borderColor pb-12">
        <Flex className="justify-between items-center">
          <div>
            <PrimaryParagraph text="Lets talk" />
            <SecondaryHeading text="Got a project?" className="text-5xl pt-2" />
          </div>
          <div>
            <PrimaryButton text="Contact us" />
          </div>
        </Flex>
      </Container>
      <Container>
        <PrimaryParagraph className='w-s1283 pt-6' text='As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.'/>
      </Container>
    </section>
  );
};

export default Project;
