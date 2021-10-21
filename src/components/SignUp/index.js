import api from "../../services/api";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { Container, Image, AnimationContainer, SubContainer } from "./style";
import logoImage from "../../assets/img/logo.png";
import LoginGoogle from "../GoogleLogin";

const SignUp = ({ authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório*"),
    email: yup.string().email("Email inválido").required("Campo obrigatório*"),
    password: yup.string().min(6, "Mínimo 6 dígitos").required("Campo obrigatório*"),
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

  const handleForm = ({ username, email, password }) => {
    const user = { username, email, password };
    api
      .post("users/", user)
      .then((response) => {
        toast.success("Sucesso ao criar a conta!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta, confira os campos!"));
  };

  if (authenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Container>
      <SubContainer>
        <AnimationContainer>
        <Link to='/'><img className="logoImage" src={logoImage} alt="logo" /></Link>
          <form onSubmit={handleSubmit(handleForm)}>
            <div className='signUpTitle'>
              <h2>
                Olá,
                <br />
                <span>crie uma conta</span>
              </h2>
            </div>
            <div>
              <TextField
                label='Nome de Usuário'
                margin='normal'
                variant='standard'
                size='small'
                color='primary'
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>
            <div>
              <TextField
                label='Email'
                margin='normal'
                variant='standard'
                size='small'
                color='primary'
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <TextField
                label='Senha'
                margin='normal'
                type='password'
                variant='standard'
                size='small'
                color='primary'
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <div>
              <TextField
                label='Confirme Senha'
                margin='normal'
                variant='standard'
                type='password'
                size='small'
                color='primary'
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            </div>
            <div className='buttonContainer'>
              <Button text='Cadastre-se' type='submit' />
            </div>
            {/* <p className='orStyle'>Ou</p>
            <div className='googleSignUp'>
              <LoginGoogle handleGoogle={handleForm} />
            </div> */}
            <p className='mobileFooter'>
              Já tem uma conta? <Link to='/login'>Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </SubContainer>
      <Image></Image>
    </Container>
  );
};

export default SignUp;
