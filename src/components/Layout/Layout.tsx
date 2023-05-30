import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
