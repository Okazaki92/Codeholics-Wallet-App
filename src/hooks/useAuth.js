import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectToken,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    user,
    token,
  };
};
