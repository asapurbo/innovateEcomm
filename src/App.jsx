import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/rootLayout/Root';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from "./components/pages/Service";
import Portfolio from "./components/pages/Portfolio";
import Error from "./components/pages/Error";
import Pricing from "./components/pages/Pricing";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/price",
          element: <Pricing />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
