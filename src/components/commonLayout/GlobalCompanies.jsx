import CompanieLogo from '../commonComponent/CompanieLogo';
import Container from '../commonComponent/Container';
import SecondaryHeading from '../commonComponent/SecondaryHeading';
import wa from '../../assets/wa.png'
import cr from '../../assets/cr.png'
import ri from '../../assets/ri.png'
import ui from '../../assets/ui.png'
import sp from '../../assets/sp.png'
import wi from '../../assets/wi.png'
import Flex from '../commonComponent/Flex';

const GlobalCompanies = () => {
  return (
    <section className="py-s120">
       <Container>
           <div className='w-s849 mx-auto'>
              <SecondaryHeading text='Trusted by top global companies And orginizations' className='text-5xl leading-67'/>
           </div>
           <Flex className='flex-wrap justify-between mt-s60'>
             <CompanieLogo src={wa}/>
             <CompanieLogo src={cr}/>
             <CompanieLogo src={ri}/>
             <CompanieLogo src={ui}/>
             <CompanieLogo src={sp}/>
             <CompanieLogo src={wi}/>
           </Flex>
       </Container>
    </section>
  )
}

export default GlobalCompanies