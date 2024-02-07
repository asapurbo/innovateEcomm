const CommonHeading = (props) => {
  return (
    <props.as className={`${props.className}`}>{props.text}</props.as>
  )
}

export default CommonHeading