import { Link } from "react-router-dom";

const ContactIcon = ({ children, to }) => {
  return (
    <Link to={to} target="_blank">
      <div className="w-s68 flex justify-center text-2xl hover:text-white hover:bg-secondaryColor items-center rounded-full h-s68 bg-pdBg duration-300 text-primaryColor">
        {children}
      </div>
    </Link>
  );
};

export default ContactIcon;
