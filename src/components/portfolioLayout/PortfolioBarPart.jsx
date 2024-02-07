import Container from "../commonComponent/Container";
import PortfolioBarLinkList from "../portfolioComponents/PortfolioBarLinkList";
import Class from '../css/Portfolio.module.css'

const PortfolioBarPart = () => {
  const list = [
    { to: "/", txt: "Email Marketing" },
    { to: "/", txt: "Data Analysis" },
    { to: "/", txt: "Optimization" },
    { to: "/", txt: "Pay-par Click" },
    { to: "/", txt: "Content Writting" },
    { to: "/", txt: "Marketing" },
  ];
  return (
    <section className="py-s120">
      <Container>
        <div className="w-full bg-navBgColor drop-shadow-md">
          <ul className={`relative flex justify-between ${Class.portfolioWrap}`}>
            {list.map((item, index) => (
              <PortfolioBarLinkList key={index} to={item.to} txt={item.txt} />
            ))}
            <div className={`drop-shadow-md ${Class.animation}`}></div>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioBarPart;
