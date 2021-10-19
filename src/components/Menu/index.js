
import { MenuContainer, LogoutContainer, IconsContainer, ImageContainer } from "./style"
import { MdGroups } from "react-icons/md"
import { BiLogOutCircle } from "react-icons/bi"
import { FaHeartbeat } from "react-icons/fa"
import Button from "../Button"
import Logo from "../../assets/img/logo.png"
import { useHistory } from "react-router-dom"

const Menu = ({ handleAdd }) => {

  const history = useHistory()
  const handleLogout = () => {
    history.push('/');
    localStorage.clear();
  }

  return (
    <>
      <ImageContainer>
        <img alt='logo' src={Logo} />
      </ImageContainer>

      <MenuContainer>
        <IconsContainer>
          <span>
            <FaHeartbeat onClick={() => history.push('/dashboard')} />
            <p>Hábitos</p>
          </span>

          <span>
            <MdGroups onClick={() => history.push('/groups')} />

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
