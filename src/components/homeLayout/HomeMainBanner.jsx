import HomeBanner from "../banner/HomeBanner";
import PrimaryHeading from "../commonComponent/PrimaryHeading";
import PrimaryParagraph from "../commonComponent/PrimaryParagraph";
import PrimaryButton from "../commonComponent/PrimaryButton";



const HomeMainBanner = () => {
  return (
    <HomeBanner>
      <div className="w-s771 mx-auto shadow-social">
        <PrimaryHeading text="We are a full range design agency" className='text-center' />
      </div>
      <div className="w-s547 mx-auto text-center mt-6 mb-11">
        <PrimaryParagraph
          text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime."
          className="text-lg"
        />
      </div>
      <div className="flex justify-center items-center gap-x-6">
        <PrimaryButton text='Contact us'/>
        <PrimaryButton text='showcase'/>
      </div>
    </HomeBanner>
  );
};

export default HomeMainBanner;
