import Container from "../commonComponent/Container";
import FLex from "../commonComponent/Flex";
import Input from "../commonComponent/Input";
import SecondaryHeading from "../commonComponent/SecondaryHeading";
import Label from "../commonComponent/Label";
import Image from "../commonComponent/Image";
import service from "../../assets/service.png";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import WaysOfCommunication from "../contactComponents/WaysOfCommunication";
import { FaFacebookF } from "react-icons/fa6";
import Flex from "../commonComponent/Flex";
import ContactIcon from "../contactComponents/ContactIcon";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const ContactContentPart = () => {
  return (
    <section className="py-s120">
      <Container>
        <FLex className="justify-between">
          <div className="w-s693">
            <form action="">
              <div>
                <SecondaryHeading
                  text="Contact form"
                  className="text-4xl pb-8"
                />
              </div>
              <div>
                <Input
                  type="text"
                  labelTxt="Your name"
                  className="px-10 text-xl font-bold font-pop"
                />
              </div>
              <div className="mt-12">
                <Input
                  type="email"
                  labelTxt="Your Mail"
                  className="px-10 text-xl font-bold font-pop"
                />
              </div>
              <div className="mt-12">
                <Label text="Message" />
                <textarea
                  className={`w-full mt-6 p-10 text-xl font-bold font-pop bg-navBgColor h-s330 focus:outline-transparent rounded-xl`}
                ></textarea>
              </div>
              <button
                className={`hover:text-notWhite hover:bg-secondaryColor duration-300 border border-solid border-secondaryColor rounded-18 text-secondaryColor font-nun text-lg font-semibold leading-9 capitalize py-s14 px-7 mt-16`}
              >
                Send
              </button>
            </form>
          </div>
          <div className="w-s560">
            <div>
              <Image src={service} />
            </div>
            <div className="mt-20">

             <WaysOfCommunication txt='102 street 2714 don'>
               <FaLocationDot/>
             </WaysOfCommunication>

             <WaysOfCommunication txt='+021234567'>
               <FaPhone/>
             </WaysOfCommunication>

             <WaysOfCommunication txt='hello@innovative.com'>
               <MdEmail/>
             </WaysOfCommunication>

            </div>
            <div className="mt-20">
              <Flex className='gap-x-10'>
                <ContactIcon to='https://web.facebook.com/'>
                   <FaFacebookF/>
                </ContactIcon>

                <ContactIcon to='https://www.instagram.com/'>
                   <FaInstagram/>
                </ContactIcon>

                <ContactIcon to='https://www.youtube.com/'>
                   <FaYoutube/>
                </ContactIcon>
              </Flex>
            </div>
          </div>
        </FLex>
      </Container>
    </section>
  );
};

export default ContactContentPart;
