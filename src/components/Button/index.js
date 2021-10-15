import { ButtonContainer } from "./style"

const Button = ({ text }) => {
  return (
    <ButtonContainer>
      <button>{text}</button>
    </ButtonContainer>
  )
}

export default Button
