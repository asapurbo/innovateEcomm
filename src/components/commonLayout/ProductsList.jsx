import FunctionalityList from "../commonComponent/FunctionalityList";

const ProductsList = () => {
  let list = [
    { id: 1, href: "/", linkTxt: "Task Management" },
    { id: 2, href: "/Company", linkTxt: "Company growth" },
    { id: 3, href: "/tracking", linkTxt: "Time tracking" },
  ];
  return (
    <div>
      <FunctionalityList
        {...{ list }}
        parentsClass="flex flex-col gap-y-8"
        headText="Products"
      />
    </div>
  );
};

export default ProductsList;
