import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineDatabase, AiOutlineCodepen } from "react-icons/ai";
import HorizontalSeparator from "components/HorizontalSeparator";
import { GoogleLogin } from "@react-oauth/google";
import FormLogin from "./form";
import "./login.styles.css";

export default function Login() {
  let isAuthenticated: boolean = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (): void => {
    dispatch(setLogin());
  };

  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = (error: string) => {
    console.log(error);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="login-page-container">
      <div className="login-box-container">
        <div className="login-box-icon">
          {/* <AiOutlineDatabase /> */}
          <AiOutlineCodepen />
        </div>
        <div className="login-box-desc">
          <div className="login-box-welcome-heading">Sign In!</div>
          <div className="login-box-welcome-content">
            Sign in to your account to continue
          </div>
        </div>
        <FormLogin handleLogin={handleLogin}/>
        <HorizontalSeparator label={"OR"} />
        <GoogleLogin onSuccess={responseMessage} />
      </div>
    </div>
  );
}
