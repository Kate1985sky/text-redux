import logout from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export const Logout = () => {
  const dispatch = useDispatch();
  return (dispatch(logout()));
};

