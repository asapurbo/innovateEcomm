import CounterPart from "../commonLayout/CounterPart";
import GlobalCompanies from "../commonLayout/GlobalCompanies";
import HomeAboutPart from "../homeLayout/HomeAboutPart";
import HomeMainBanner from "../homeLayout/HomeMainBanner";
import HomeProjectPart from "../homeLayout/HomeProjectPart";
import RemarkPart from "../homeLayout/RemarkPart";
import SocialPart from "../homeLayout/SocialPart";

const Home = () => {
  return (
    <>
      <HomeMainBanner />
      <SocialPart />
      <HomeAboutPart />
      <HomeProjectPart />
      <CounterPart />
      <GlobalCompanies />
      <RemarkPart />
    </>
  );
};

export default Home;
