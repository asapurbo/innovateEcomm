import Logo from "../Logo/Logo";
import Container from "../commonComponent/Container";
import Flex from "../commonComponent/Flex";
import LinkList from "../commonComponent/LinkList";
import PrimaryButton from "../commonComponent/PrimaryButton";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import useNavClick from "../hook/useNavClick";
import NavData from "../data/NavData";

const Nav = () => {
  const { upHandelClick, downHandelClick, navRef, downRef, upRef } =
    useNavClick();
  const { navLink: navLink, handleDispatch:handleClick } = NavData();

  return (
    <nav
      ref={navRef}
      className="bg-navBgColor duration-300 w-full z-[99999] py-10"
      id="apu"
    >
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-2/12">
            <Logo />
          </div>
          <div className="w-8/12">
            <ul className="flex items-center justify-center gap-x-8">
              {navLink.map((item, index) => (
                <LinkList
                  key={index}
                  text={item.text}
                  to={item.to}
                  handleClick={item.handleClick}
                />
              ))}
            </ul>
          </div>
          <div className="w-2/12">
            <PrimaryButton to="/contact" text="Contact Us" handleClick={function() {
              handleClick("Contact Us")
            }} />
          </div>
        </Flex>
      </Container>
      {/* Down Arrow Start */}

      <div
        onClick={() => {
          downHandelClick();
        }}
        ref={downRef}
        className="fixed bottom-7 rounded-full duration-300 shadow-inner right-5"
      >
        <div className="w-16 h-16 z-[999999999] relative bg-pdBg duration-300 hover:bg-secondaryColor text-3xl flex justify-center items-center text-white rounded-full shadow-2xl  cursor-pointer">
          <FaArrowDown />
        </div>
      </div>

      <div
        ref={upRef}
        onClick={() => {
          upHandelClick();
        }}
        className="hidden fixed shadow-inner duration-300 rounded-full bottom-28 right-5"
      >
        <div className="w-16 h-16 z-[999999999999] relative hover:bg-secondaryColor bg-[#f9b8a0] duration-300 cursor-pointer text-3xl flex justify-center items-center text-white rounded-full shadow-2xlcursor-pointer">
          <FaArrowUp />
        </div>
      </div>
      {/* Down Arrow End */}
    </nav>
  );
};

export default Nav;
