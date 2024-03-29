import Container from '../commonComponent/Container';
import SecondrayHeading from "../commonComponent/SecondaryHeading";

const IntermediateBanner = ({children ,headTxt}) => {
  return (
    <section className='pt-s199 pb-s296 bg-intbg bg-center bg-cover h-screen'>
        <Container>
        <div className="w-s709 mx-auto">
          <div>{children}</div>
          <div className="text-center">
            <SecondrayHeading text={headTxt} className="text-text-64 px-10" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default IntermediateBanner