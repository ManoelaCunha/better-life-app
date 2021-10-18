import { ButtonContainer } from "../Button/style";
import { Box, Card } from "./style";

import img from "../../assets/img/star.gif";

const Group = ({ group }) => {
  const { name, category, description } = group;

  return (
    <Card>
      <div>
        <h2>{name}</h2>
        <p>
          <strong>Categoria</strong> - {category}
        </p>

        <p>
          <strong>Descrição</strong> - {description}
        </p>

        <ButtonContainer style={{ margin: "15px" }}>
          <button
            style={{
              width: "130px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "5px",
            }}
          >
            Ver mais
          </button>

          <button
            style={{
              width: "130px",
              height: "30px",
            }}
          >
            Inscreva-se
          </button>
        </ButtonContainer>
      </div>
      <Box>
        <img src={img} alt="Animated icons by Lordicon.com" />
      </Box>
    </Card>
  );
};

export default Group;
