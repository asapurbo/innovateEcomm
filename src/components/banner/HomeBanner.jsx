import Container from "../commonComponent/Container";

const HomeBanner = ({className,children}) => {
  return (
    <section className={`pt-s199 pb-s296 bg-homeBanner bg-center bg-cover ${className}`}>
       <Container>
          {children}
       </Container>
    </section>
  )
}

export default HomeBanner