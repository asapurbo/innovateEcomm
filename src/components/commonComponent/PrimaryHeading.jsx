const PrimaryHeading = ({className,text}) => {
  return (
    <h1 className={`text-primaryColor font-pop text-text-64 font-bold leading-83 capitalize ${className}`}>{text}</h1>
  )
}

export default PrimaryHeading