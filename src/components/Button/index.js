import { ButtonContainer } from "./style"

const Button = ({ text, smaller, ...attrs }) => {
  return (
    <ButtonContainer smaller={smaller}>
      <button {...attrs}>{text}</button>
    </ButtonContainer>
  )
}
export default Button
