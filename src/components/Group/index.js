import { ButtonContainer } from "../Button/style";

const Group = ({ group }) => {
  const { name, category, description } = group;

  return (
    <div>
      <h2>{name}</h2>
      <p>Categoria - {category}</p>
      <ButtonContainer>
        <button>Ver mais</button>
        <button>Participar</button>
      </ButtonContainer>
    </div>
  );
};

export default Group;
