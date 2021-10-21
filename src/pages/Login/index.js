import Login from "../../components/SignIn";

const LoginPage = ({ authenticated, setAuthenticated }) => {
  return (
    <div>
      <Login
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
    </div>
  );
};

export default LoginPage;
