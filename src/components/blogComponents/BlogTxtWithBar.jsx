import SecondaryHeading from "../commonComponent/SecondaryHeading"

const BlogTxtWithBar = ({text,className}) => {
  return (
    <div className={`w-s570 ${className}`}>
      <div>
        <SecondaryHeading text={text} className="text-5xl pb-10"/>
      </div>
      <div className="relative  w-full h-[6px] rounded-full after:rounded-full bg-[#0f0f0f1a] after:absolute after:bg-secondaryColor after:left-0 after:bottom-0 after:content-[''] after:w-[45%] after:h-full">

      </div>
    </div>
  )
}

export default BlogTxtWithBar