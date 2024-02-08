import { Link } from "react-router-dom"
import { MdKeyboardArrowDown } from "react-icons/md";


const LinkList = ({className,to,text,handleClick}) => {
  return (
    <li onClick={function() {
      return handleClick()
    }} className={`inline-block text-primaryColor font-os text-lg font-semibold capitalize ${className}`}><Link className="flex items-center" to={to}>{text}
      <MdKeyboardArrowDown/>
    </Link></li>
  )
}

export default LinkList