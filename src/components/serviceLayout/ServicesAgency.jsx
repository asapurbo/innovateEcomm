import agen from "../../assets/agen.png";
import Container from '../commonComponent/Container'
import Flex from '../commonComponent/Flex'
import PrimaryParagraph from '../commonComponent/PrimaryParagraph'
import SecondaryHeading from '../commonComponent/SecondaryHeading'
import ServicesAgencyCard from '../commonComponent/ServicesAgencyCard'

const ServicesAgency = () => {

  const agencyList = [
    {src: agen, pettyTxt: 'Business Planning', largeTxt: 'Email Marketing',  alt: 'image'},
    {src: agen, pettyTxt: 'Market Research', largeTxt: 'Data Analysis',  alt: 'image'},
    {src: agen, pettyTxt: 'Marketing Strategy', largeTxt: 'Optimization',  alt: 'image'},
    {src: agen, pettyTxt: 'SEO Optimizations', largeTxt: 'Pay-par Click',  alt: 'image'},
    {src: agen, pettyTxt: 'Marketing Strategy', largeTxt: 'Content Writting',  alt: 'image'},
    {src: agen, pettyTxt: 'Market Research', largeTxt: 'Marketing',  alt: 'image'},
  ]

  return (
    <section className='py-s120 bg-ServicesAgencyBgColor'>
       <Container>
         <div className='text-center'>
            <SecondaryHeading text='Services We Offer For Agency' className='text-5xl leading-67'/>
            <PrimaryParagraph text='Best Creative digital Agency'/>
         </div>
         <Flex className='flex-wrap justify-between gap-y-7 mt-16'>
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

export default ServicesAgency