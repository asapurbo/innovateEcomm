import agen from "../../assets/agen.png";
import Container from '../commonComponent/Container'
import Flex from '../commonComponent/Flex'
import ServicesAgencyCard from '../commonComponent/ServicesAgencyCard'

const PortfolioContent = () => {

  const agencyList = [
    {src: agen, pettyTxt: 'Business Planning', largeTxt: 'Business Growth',  alt: 'image'},
    {src: agen, pettyTxt: 'Market Research', largeTxt: 'Business Growth',  alt: 'image'},
    {src: agen, pettyTxt: 'Marketing Strategy', largeTxt: 'Leadership',  alt: 'image'},
    {src: agen, pettyTxt: 'SEO Optimizations', largeTxt: 'Human Resources',  alt: 'image'},
    {src: agen, pettyTxt: 'Marketing Strategy', largeTxt: 'Digitalisation & IT',  alt: 'image'},
    {src: agen, pettyTxt: 'Market Research', largeTxt: 'Data Analytics',  alt: 'image'},
    {src: agen, pettyTxt: 'Market Research', largeTxt: 'Leadership',  alt: 'image'},
    {src: agen, pettyTxt: 'Market Research', largeTxt: 'Virtual Facilitation',  alt: 'image'},
  ]

  return (
    <section className='pb-s120'>
       <Container>
         <Flex className='flex-wrap gap-7 mt-16'>
           {
              agencyList.map((item,index) => (
                 <ServicesAgencyCard key={index} largeTxt={item.largeTxt} pettyTxt={item.pettyTxt} src={item.src} alt={item.alt}/>
              ))
           }
         </Flex>
       </Container>
    </section>
  )
}

export default PortfolioContent