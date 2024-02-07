

const Heading = ({className,text}) => {
  return (
   <h3 className={`text-secondaryColor font-pop text-xl font-medium leading-7 capitalize ${className}`}>{text}</h3>
  )
}

export default Heading