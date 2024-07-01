import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let isAuthenticated: boolean = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (): void => {
    dispatch(setLogin());
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
