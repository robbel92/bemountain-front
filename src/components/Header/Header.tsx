import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      <img
        src="/media/bemount-logo.svg"
        alt="bemount web logo"
        width={280}
        height={80}
        className="logo__bemount"
      />
      {pathname !== "/user/login" && <Navigation />}
    </HeaderStyled>
  );
};

export default Header;
