import { Link } from "react-router-dom";
import CommonHeading from "./CommonHeading";

const FunctionalityList = ({ list, parentsClass, headText, headClass, listClass }) => {
  return (
    <div>
      <CommonHeading
        text={headText}
        as="h3"
        className={`text-primaryColor font-os text-2xl font-semibold capitalize pb-12 ${headClass}`}
      />
      <ul className={`${parentsClass}`}>
        {list.map((item) => (
          <li
            key={item.id}
            className={`text-primaryColor font-nun text-xl font-semibold capitalize ${listClass}`}
          >
            <Link to={item.href}>{item.linkTxt}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionalityList;
