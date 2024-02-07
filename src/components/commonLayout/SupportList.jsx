import FunctionalityList from "../commonComponent/FunctionalityList";

const SupportList = () => {
  let list = [
    { id: 1, href: "/", linkTxt: "Customer service" },
    { id: 2, href: "/Accessibility", linkTxt: "Accessibility" },
    { id: 3, href: "/Contact", linkTxt: "Contact us" },
  ];
  return (
    <div>
      <div>
        <FunctionalityList
          {...{ list }}
          parentsClass="flex flex-col gap-y-8"
          headText="Features"
        />
      </div>
    </div>
  );
};

export default SupportList;
