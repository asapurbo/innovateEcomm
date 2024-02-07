
const PrimaryParagraph = ({className, text}) => {
  return (
    <p className={`text-primaryColor font-nun font-normal leading-9 capitalize ${className}`}>{text}</p>
  )
}

export default PrimaryParagraph