import { useDispatch } from "react-redux";
import { breadCrumb } from "../../features/breadcrumbs/breadcrumbSlice";

const NavData = () => {
  const dispatch = useDispatch();

  function handleDispatch(breadNeme) {
    dispatch(breadCrumb(breadNeme));
  }

  //  Nav Link Start
  const navLink = [
    {
      text: "Home",
      to: "/",
      handleClick: function () {
        return handleDispatch("Home");
      },
    },
    {
      text: "About",
      to: "/about",
      handleClick: function () {
       return handleDispatch("About");
      },
    },
    {
      text: "Service",
      to: "/service",
      handleClick: function () {
       return handleDispatch("Service");
      },
    },
    {
      text: "Portfolio",
      to: "/portfolio",
      handleClick: function () {
       return handleDispatch("Portfolio");
      },
    },
    {
      text: "Price",
      to: "/price",
      handleClick: function () {
       return handleDispatch("Price");
      },
    },
    {
      text: "Blog",
      to: "/blog",
      handleClick: function () {
       return handleDispatch("Blog");
      },
    },
  ];
  return {
    handleDispatch,
    navLink
  }
}

export default NavData
