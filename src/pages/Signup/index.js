import SignUp from "../../components/SignUp";

const Signup = ({ authenticated }) => {
  return (
    <div>
      <SignUp authenticated={authenticated} />
    </div>
  );
};

export default Signup;
