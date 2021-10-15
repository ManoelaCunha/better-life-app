import { Container, Content, ImageHome } from "./style";
import Logo from "../../assets/img/logo.png";
import ImgHome from "../../assets/img/Vector.png";
import Button from "../../components/Button";
import { useHistory } from "react-router";
// A prop authenticated será usada para autenticar para qe o ussuário não vá direto pra o core da aplicação
const Homepage = ({ authenticated }) => {
  const history = useHistory();
  const handleNavigation = (path) => {
    // navegação
  }
  if (authenticated) {
    // Lógica para autenticar
  }
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo Better Life" />
        <span>Melhore sua vida com hábitos saudáveis</span>
        <div>
          <Button text="Cadastre"></Button>
          <Button text="Login">Login</Button>
        </div>
      </Content>

      <ImageHome src={ImgHome} alt="Imagem tela inicial" />
    </Container>
  );
};

export default Homepage;
