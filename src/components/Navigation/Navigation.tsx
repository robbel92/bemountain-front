import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink
        to={"/"}
        aria-label="link create para crear una nueva ruta"
        className={"logo__create"}
      >
        <img
          src="/media/crear.svg"
          alt="icono de un signo de suma que indica crear o añadir"
          width={48}
          height={48}
        />
      </NavLink>
      <NavLink
        to={"/"}
        aria-label="link home para ir a la home page"
        className={"logo__home"}
      >
        <img
          src="/media/logo-home.svg"
          alt="imagen de un logo home"
          width={100}
          height={40}
        />
      </NavLink>
      <NavLink
        to={"/"}
        aria-label="link logout para salir de la sesion de tu cuenta"
        className={"logo__logout"}
      >
        <img
          src="/media/logout.svg"
          alt="icono de una puerta que indica log out"
          width={48}
          height={48}
        />
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
