import { NavLink, useNavigate } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

const Navigation = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeLocalStorageKey } = useLocalStorage();
  const navigate = useNavigate();
  const logoutOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeLocalStorageKey("token");
    navigate("/home");
  };

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
      <button
        aria-label="to logout"
        className="logo__logout"
        onClick={logoutOnClick}
      >
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
