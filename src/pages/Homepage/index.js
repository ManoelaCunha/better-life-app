
import { Container, Content, ImageHome } from "./style";
import Logo from "../../assets/img/logo.png";
import ImgHome from "../../assets/img/yoga.gif";
import Button from "../../components/Button";
import { Redirect, useHistory } from "react-router";
import Members from "../../components/Members";

const Homepage = ({ authenticated }) => {
  const history = useHistory();
  const handleNavigation = (path) => {
    history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/welcome" />;
  }

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}

export default Homepage
