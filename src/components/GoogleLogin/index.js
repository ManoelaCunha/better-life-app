import { GoogleLogin } from "react-google-login";
import { GoogleHelper } from "./helpers";

const LoginGoogle = () => {
  const handleLogin = () => {};

  const { client_id } = GoogleHelper.web;

  return (
    <GoogleLogin
      clientId={client_id}
      buttonText='Login with Google'
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;
