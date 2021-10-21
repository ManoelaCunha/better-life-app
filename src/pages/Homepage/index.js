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
    return <Redirect to='/welcome' />;
  }

  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt='Logo Better Life' />
          <span>Melhore sua vida com hábitos saudáveis</span>
          <div>
            <Button onClick={() => handleNavigation("/signup")} text='Cadastre-se'></Button>
            <Button onClick={() => handleNavigation("/login")} text='Login'>
              Login
            </Button>
          </div>
        </Content>

        <ImageHome src={ImgHome} alt='Imagem tela inicial' />
      </Container>
      <Members></Members>
    </>
  );
};

export default Homepage;
