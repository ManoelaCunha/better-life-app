import { Container, Background, Content, AnimationContainer } from "./style";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import api from "../../services/api";
import { TextField } from "@material-ui/core";
import Logo from "../../assets/img/logo.png";
import toast from "react-hot-toast";
const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres.")
      .required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    // Lógica para fazer as requisições / errors
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@BetterLife:token", JSON.stringify(access));
        console.log(access)
        setAuthenticated(true);
        return history.push("/welcome");
      })

      .catch((_) => {
        toast.error("Usuário ou senha incorreto");
      });
  };

  if (authenticated) {
    return <Redirect to="welcome" />;
  }
  
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
      <img src={Logo} alt="Logo Better Life" />
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>
              Olá,
              <br />
              <span>Bem vindo(a)!</span>
            </h2>
            <div>
              <TextField
                label="Usuário"
                margin="normal"
                variant="standard"
                size="small"
                color="primary"
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>
            <div>
              <TextField
                label="Senha"
                margin="normal"
                variant="standard"
                size="small"
                type="password"
                color="primary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <Button type="submit" text="Login">
              {" "}
              Login{" "}
            </Button>
            {/* ESPAÇO PARA A FUNCIONALIDADE DE LOGIN COM O GOOGLE */}
            <p>
              Não possui uma conta ainda? <Link to="/signup">Registre-se</Link>{" "}
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
