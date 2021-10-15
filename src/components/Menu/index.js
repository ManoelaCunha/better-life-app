import { MenuContainer } from "./style"
import { MdGroups } from "react-icons/md"
import { BiLogOutCircle } from "react-icons/bi"
import { FaHeartbeat } from "react-icons/fa"
import Button from "../Button"

const Menu = () => {
  return (
    <MenuContainer>
      <button>
        <FaHeartbeat />
      </button>
      <button>
        <MdGroups />
      </button>
      <Button text='+' size='small' />
      <button>
        <BiLogOutCircle />
      </button>
    </MenuContainer>
  )
}

export default Menu
