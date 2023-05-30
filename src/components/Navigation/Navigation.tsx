import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink to={"/"} aria-label="to create page" className="logo__create">
        <img
          src="/media/crear.svg"
          alt="icon of a plus sign indicating create or add"
          width={48}
          height={48}
        />
      </NavLink>
      <NavLink to="/" aria-label="to home page" className="logo__home">
        <img
          src="/media/logo-home.svg"
          alt="a logo with the text home"
          width={100}
          height={40}
        />
      </NavLink>
      <button aria-label="to logout" className="logo__logout">
        <img
          src="/media/logout.svg"
          alt="icon of a door indicating log out"
          width={48}
          height={48}
        />
      </button>
    </NavigationStyled>
  );
};

export default Navigation;
