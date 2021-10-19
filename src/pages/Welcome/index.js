import { Container, Content, ImageHome } from "./style";
import Logo from "../../assets/img/logo.png";
import { UserContext } from "../../providers/User";
import ImgHome from "../../assets/img/Vector.png";
import Button from "../../components/Button";
import { Redirect, useHistory } from "react-router";

// A prop authenticated será usada para autenticar para qe o ussuário não vá direto pra o core da aplicação
const Welcome = ({ authenticated }) => {
  const history = useHistory();
  const handleNavigation = (path) => {
    history.push(path);
  };
  if (authenticated) {
    return <Redirect to="dashboard" />;
  }
  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt="Logo Better Life" />
          <h2>Boas vindas, Fulano</h2>
          <span>Esta tudo pronto para você começar a sua nova vida saudável.</span>
              <ImageHome src={ImgHome} alt="Imagem tela inicial" />
          <div>
            <Button
              onClick={() => handleNavigation("/dashboard")}
              text="Vá para o Dashboard"
            ></Button>
          </div>
        </Content>

      </Container>
    </>
  );
};

export default Welcome;
