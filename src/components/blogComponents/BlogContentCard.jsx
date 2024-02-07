import Image from '../commonComponent/Image';
import SecondaryHeading from '../commonComponent/SecondaryHeading';
import PrimaryParagraph from '../commonComponent/PrimaryParagraph';
import Flex from '../commonComponent/Flex';
import { FaRegCalendarCheck } from "react-icons/fa6";

const BlogContentCard = ({contentSrc, alt, headTxt, paraTxt, userSrc, userTxt, date}) => {
  return (
    <div className="w-s717 mb-24">
       <div>
         <Image src={contentSrc} alt={alt}/>
       </div>
       <div>
        <SecondaryHeading text={headTxt} className='text-5xl leading-67 py-6'/>

        <PrimaryParagraph text={paraTxt} className='pb-8 pr-28'/>
       </div>
       <Flex className='gap-x-40'>
          <Flex className='gap-5 items-center'>
            <div>
                <Image src={userSrc}/>
            </div>
            <div>
                <PrimaryParagraph text={userTxt}/>
            </div>
          </Flex>

          <Flex className='gap-x-5 items-center'>
            <div>
                <FaRegCalendarCheck className='text-[#9C9BA9] text-xl'/>
            </div>
            <div>
                <PrimaryParagraph text={date}/> 
            </div>
          </Flex>
       </Flex>
    </div>
  )
}

export default BlogContentCard