import { MenuContainer } from "./style"
import { MdGroups } from "react-icons/md"
import { BiLogOutCircle } from "react-icons/bi"
import { FaHeartbeat } from "react-icons/fa"
import Button from "../Button"

const Menu = () => {
  const handleTeste = () => {
    alert("teste")
  }
  return (
    <MenuContainer>
      <FaHeartbeat onClick={handleTeste} />
      <MdGroups onClick={handleTeste} />
      <Button text='+' smaller />
      <BiLogOutCircle onClick={handleTeste} />
    </MenuContainer>
  )
}

export default Menu
