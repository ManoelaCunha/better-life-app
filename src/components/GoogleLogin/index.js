import { GoogleLogin } from "react-google-login";
import { GoogleHelper } from "./helpers";
import { useLocation } from "react-router";

const LoginGoogle = ({ handleGoogle }) => {
  const location = useLocation();

  const handleLogin = (response) => {
    const cadastro = {
      username: response.profileObj.givenName,
      email: response.profileObj.email,
      password: response.profileObj.googleId,
    };
    const login = {
      username: response.profileObj.givenName,
      password: response.profileObj.googleId,
    };

    if (location === "/signup") {
      handleGoogle(cadastro);
    } else {
      handleGoogle(login);
    }
  };

  const { client_id } = GoogleHelper.web;

  return (
    <GoogleLogin
      clientId={client_id}
      buttonText='Continuar com Google'
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;
