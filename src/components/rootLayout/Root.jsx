import { Outlet } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer'
import Project from "./Project";

const Root = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Project/>
    <Footer/>
    </>
  )
}

export default Root