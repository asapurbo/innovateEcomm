import Container from "../commonComponent/Container"
import Image from "../commonComponent/Image"
import error from '../../assets/error.png'
import PrimaryButton from "../commonComponent/PrimaryButton"
const Error = () => {
  return (
    <section className="pb-s120">
      <Container>
         <div className="text-center">
            <Image src={error} className='inline-block'/>
         </div>
         <div className="text-center">
            <PrimaryButton to='/' text='Back To Home'/>
         </div>
      </Container>
    </section>
  )
}

export default Error