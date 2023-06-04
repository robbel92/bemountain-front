import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store";
import Feedback from "../Feedback/Feedback";

const Layout = (): React.ReactElement => {
  const { message } = useAppSelector((state) => state.uiStore);
  return (
    <>
      {message && <Feedback />}
      <Outlet />;
    </>
  );
};

export default Layout;
