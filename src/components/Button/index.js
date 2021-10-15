const Button = ({ text, handleClick }) => {
  return (
    <Button>
      <button onClick={handleClick}>{text}</button>
    </Button>
  )
}

export default Button
