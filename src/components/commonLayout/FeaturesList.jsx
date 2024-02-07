import FunctionalityList from "../commonComponent/FunctionalityList";

const FeaturesList = () => {
  let list = [
    { id: 1, href: "/", linkTxt: "Home" },
    { id: 2, href: "/about", linkTxt: "About" },
    { id: 3, href: "/benifit", linkTxt: "Benifit" },
    { id: 4, href: "/pricing", linkTxt: "Pricing" },
    { id: 5, href: "/blog", linkTxt: "Blog" },
  ];
  return (
    <div>
      <FunctionalityList
        {...{ list }}
        parentsClass="flex flex-col gap-y-8"
        headText="Features"
      />
    </div>
  );
};

export default FeaturesList;
