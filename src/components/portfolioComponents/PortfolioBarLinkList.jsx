import { Link } from "react-router-dom";

const PortfolioBarLinkList = ({ className, to, txt }) => {
  return (
    <li
      className={`text-xl inline-block relative z-10 py-5 px-10 text-primaryColor font-semibold font-pop ${className}`}
    >
      <Link to={to}>{txt}</Link>
    </li>
  );
};

export default PortfolioBarLinkList;
