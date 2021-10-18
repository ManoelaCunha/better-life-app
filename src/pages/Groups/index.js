import { ButtonContainer } from "../../components/Button/style";
import GroupList from "../../components/GroupsList";
import Menu from "../../components/Menu";

import { Box, Container, Text } from "./style";

const Groups = () => {
  return (
    <>
      <Menu />
      <Container>
        <Text>
          Bem vinda(o) de volta, <strong>Stefani Wong</strong>
        </Text>
        <Box>
          <h1>GRUPOS</h1>
          <ButtonContainer style={{ margin: "0px 5px" }}>
            <button
              style={{
                width: "150px",
                background: "transparent",
                color: "#000000",
                boxShadow: "none",
                fontSize: "20px",
                fontFamily: "Montserrat",
                textAlign: "right",
              }}
            >
              + Novo Grupo
            </button>
          </ButtonContainer>
        </Box>
        <GroupList />
      </Container>
    </>
  );
};

export default Groups;
