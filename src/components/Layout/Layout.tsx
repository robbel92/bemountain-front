import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import { paths } from "../../routers/paths/paths";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === paths.login || pathname === "/loader" ? (
        <Outlet />
      ) : (
        <ContainerStyled>
          <Header />
          <Outlet />
        </ContainerStyled>
      )}
    </>
  );
};

export default Layout;
