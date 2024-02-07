import Flex from '../commonComponent/Flex';
import Image from '../commonComponent/Image';

const CompanieLogo = ({src,className}) => {
  return (
    <Flex className="w-s210 h-s130 bg-CpCBg justify-center items-center">
        <Image src={src} className={`${className}`}/>
    </Flex>
  )
}

export default CompanieLogo