import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";
import { paths } from "../../routers/paths/paths";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      <img
        src="/media/bemount-logo.svg"
        alt="bemount web logo"
        width={200}
        height={80}
        className="logo__bemount"
      />
      {pathname !== paths.login && <Navigation />}
    </HeaderStyled>
  );
};

export default Header;
