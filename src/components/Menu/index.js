import {
  MenuContainer,
  LogoutContainer,
  IconsContainer,
  ImageContainer,
} from "./style";
import { MdGroups } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../Button";
import Logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";

const Menu = ({ handleAdd, setAuthenticated }) => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/");
    setAuthenticated(false);
    localStorage.clear();
  };

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <ImageContainer>
        <img alt="logo" src={Logo} />
      </ImageContainer>

      <MenuContainer>
        <IconsContainer>
          <span onClick={() => sendTo("/dashboard")}>
            <FaHeartbeat />
            <p>Hábitos</p>
          </span>

          <span onClick={() => sendTo("/groups")}>
            <MdGroups />
            <p>Grupos</p>
          </span>
        </IconsContainer>

        <Button text="+" smaller onClick={handleAdd} />

        <LogoutContainer>
          <span onClick={handleLogout}>
            <BiLogOutCircle />
            <p>Sair</p>
          </span>
        </LogoutContainer>
      </MenuContainer>
    </>
  );
};

export default Menu;
