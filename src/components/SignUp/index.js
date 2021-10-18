import api from "../../services/api";
import { TextField, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { Container } from "./style";
import { Logo } from "./style";
import { Image } from "./style";
import { BigContainer } from "./style";
import { SubContainer } from "./style";
import google from '../../assets/img/google.jpeg';
import logoImage from '../../assets/img/logo.png';
import signupImage from '../../assets/img/signup.png';

const SignUp = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório*"),
    email: yup.string().email("Email inválido").required("Campo obrigatório*"),
    password: yup
      .string()
      .matches(
        "Senha deve conter ao menos uma letra maiúscula, minúscula, número e caracter especial!"
      )
      .min(6, "Mínimo 6 dígitos")
      .required("Campo obrigatório*"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes*")
      .required("Confirmação de senha obrigatória*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post(user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta!");
        return history.push("/");
      })
      .catch((err) => toast.error("Erro ao criar a conta, confira os campos!"));
  };

  return (
    <BigContainer>
      <Container>
    <SubContainer>
    <Paper elevation={0}>
      <div className='signUpTitle'>
      <p>Olá,</p>
      <h3>Crie uma conta</h3>
      </div>
      <form onSubmit={handleSubmit(handleForm)} >
        <div>
          <TextField
            label="Nome de Usuário"
            margin="normal"
            variant="filled"
            size="small"
            color="primary" 
          />
        </div>
        <div>
          <TextField
            label="Email"
            margin="normal"
            variant="filled"
            size="small"
            color="primary"
          />
        </div>
        <div>
          <TextField
            label="Senha"
            margin="normal"
            type="password"
            variant="filled"
            size="small"
            color="primary"
          />
        </div>
        <div>
          <TextField
            label="Confirme Senha"
            margin="normal"
            variant="filled"
            type="password"
            size="small"
            color="primary"
          />
        </div>
        <div className='buttonContainer'>
          <Button text='Cadastre-se' type="submit"/>
        </div>
      </form>
      <p className='ou'>Ou</p>
      <img className='google' alt='google'src={google}/>
      <p>
        Já tem uma conta? <Link to="/login">Login</Link>
      </p>
    </Paper>
  </SubContainer>
   <Logo>
     <img className='logoImage' src={logoImage} alt='logo'/>
   </Logo>
   </Container>
   <Image>
   <img className='signupImage' src={signupImage} alt='signup'/>
   </Image>
   </BigContainer>
  );
};

export default SignUp;
