import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { paths } from "../../routers/paths/paths";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
} from "../../store/ui/uiSlice";

export const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const dispatch = useAppDispatch();
  const getUserToken = async (userCredentials: UserCredentials) => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}${paths.user}${paths.login}`,
        userCredentials
      );

      return token;
    } catch (error) {
      (error as Error).message = "Wrong Credentials";
      dispatch(
        showFeedbackActionCreator({
          message: (error as Error).message,
          isError: true,
        })
      );
      dispatch(hideLoadingActionCreator());

      throw error;
    }
  };

  return { getUserToken };
};

export default useUser;
