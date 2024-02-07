import { Link } from "react-router-dom";
import SecondaryHeading from "../commonComponent/SecondaryHeading";

const BlogSequence = ({to,text}) => {
  return (
    <Link to={to}>
      <SecondaryHeading className="w-14 h-14 border-[#B7B3BD] hover:bg-secondaryColor duration-300 hover:border-none hover:text-white font-nun text-2xl font-normal border-2 rounded-full flex justify-center items-center border-solid" text={text}/>
    </Link>
  );
};

export default BlogSequence;
