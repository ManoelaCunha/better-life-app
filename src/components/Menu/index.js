import { MenuContainer, LogoutContainer, IconsContainer, ImageContainer } from "./style";
import { MdGroups } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../Button";
import Logo from "../../assets/img/logo.png";

const Menu = ({ handleHabits, handleGroups, handleAdd, handleLogout }) => {
  return (
    <>
      <ImageContainer>
        <img alt='logo' src={Logo} />
      </ImageContainer>

      <MenuContainer>
        <IconsContainer>
          <span onClick={handleHabits}>
            <FaHeartbeat />
            <p>Hábitos</p>
          </span>

          <span onClick={handleGroups}>
            <MdGroups />
            <p>Grupos</p>
          </span>
        </IconsContainer>

        <Button text='+' smaller onClick={handleAdd} />

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
