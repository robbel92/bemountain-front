import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="./media/bemount-logo.svg"
        alt="logo de la web bemount"
        width={280}
        height={80}
      />
    </HeaderStyled>
  );
};

export default Header;
