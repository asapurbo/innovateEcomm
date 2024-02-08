import { Link } from "react-router-dom"

const PrimaryButton = ({text,className,to, handleClick}) => {
  return (
    <Link onClick={()=> {
      return handleClick()
    }} to={to} className={`hover:text-notWhite hover:bg-secondaryColor duration-300 border border-solid border-secondaryColor rounded-18 text-secondaryColor font-nun text-lg font-semibold leading-9 capitalize py-s14 px-7 ${className}`}>{text}</Link>
  )
}

export default PrimaryButton