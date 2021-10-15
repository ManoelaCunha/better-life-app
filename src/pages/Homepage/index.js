import { Container, Content, ImageHome } from "./style";
import Logo from "../../assets/img/logo.png";
import ImgHome from "../../assets/img/Vector.png";
// A prop authenticated será usada para autenticar para qe o ussuário não vá direto pra o core da aplicação
const Homepage = ({ authenticated }) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo Better Life" />
        <span>Melhore sua vida com hábitos saudáveis</span>
        <div>
          <button>Cadastre-se</button>
          <button>Login</button>
        </div>
      </Content>

      <ImageHome src = {ImgHome} alt = "Imagem tela inicial"/>
    </Container>
  );
};

export default Homepage;
