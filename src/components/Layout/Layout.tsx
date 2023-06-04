import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store";
import Feedback from "../Feedback/Feedback";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const { message } = useAppSelector((state) => state.uiStore);
  const { isLoading } = useAppSelector((state) => state.uiStore);

  return (
    <>
      {message && <Feedback />}
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};

export default Layout;
