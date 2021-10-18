import { MenuContainer, LogoutContainer, IconsContainer } from "./style"
import { MdGroups } from "react-icons/md"
import { BiLogOutCircle } from "react-icons/bi"
import { FaHeartbeat } from "react-icons/fa"
import Button from "../Button"
import Logo from "../../assets/img/logo.png"

const Menu = ({ handleHabits, handleGroups, handleAdd, handleLogout }) => {
  return (
    <MenuContainer>
      <img alt='logo' src={Logo} />

      <IconsContainer>
        <span>
          <FaHeartbeat onClick={handleHabits} />
          <p>Hábitos</p>
        </span>

        <span>
          <MdGroups onClick={handleGroups} />
          <p>Grupos</p>
        </span>
      </IconsContainer>

      <Button text='+' smaller onClick={handleAdd} />

      <LogoutContainer>
        <span>
          <BiLogOutCircle onClick={handleLogout} />
          <p>Sair</p>
        </span>
      </LogoutContainer>
    </MenuContainer>
  )
}

export default Menu
