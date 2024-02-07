import SecondaryHeading from "../commonComponent/SecondaryHeading";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import WorkingProcessCard from "../serviceComponents/WorkingProcessCard";
import working from "../../assets/working.png";
import Flex from "../commonComponent/Flex";

const ServiceWorkingProcess = () => {
  const processList = [
    { txt: "Welcome To Innovate", src: working, number: 1 },
    { txt: "Choose Your Services", src: working, number: 2 },
    { txt: "Get Final Results", src: working, number: 3 },
  ];

  return (
    <section className="py-s120">
      <div className="max-w-primaryContainer mx-auto">
        <div className="text-center mb-24">
          <SecondaryHeading text="Working Process" className="text-5xl pb-3" />
          <PrimaryParagraph text="Best Creative digital Agency" />
        </div>

        <Flex className='justify-between'>
          {processList.map((item,index) => (
            <WorkingProcessCard
              key={index}
              txt={item.txt}
              src={item.src}
              number={item.number}
            />
          ))}
        </Flex>
      </div>
    </section>
  );
};

export default ServiceWorkingProcess;
