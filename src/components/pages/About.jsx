import TypeOfWorkPart from "../aboutLayout/TypeOfWorkPart";
import AboutMainBanner from "../aboutLayout/AboutMainBanner";
import MainAboutPart from "../aboutLayout/MainAboutPart";
import GlobalCompanies from "../commonLayout/GlobalCompanies";
import CounterPart from "../commonLayout/CounterPart";
import ExpertDetailsPart from "../commonLayout/ExpertDetailsPart";

const About = () => {
  return (
    <>
      <AboutMainBanner />
      <GlobalCompanies />
      <MainAboutPart />
      <TypeOfWorkPart />
      <CounterPart />
      <ExpertDetailsPart/>
    </>
  );
};

export default About;
