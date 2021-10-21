import Menu from "../../components/Menu";
import GroupDetailCard from "../../components/GroupDetailCard";

import { UserContext } from "../../providers/User";

import { useContext } from "react";
import { useParams } from "react-router";

import { Box, Container, Text } from "./style";

const GroupDetails = () => {
  const { userName } = useContext(UserContext);

  const parameters = useParams();
  const groupId = parameters.idGroup;

  return (
    <>
      <Menu />
      <Container>
        <Text>
          Bem vinda(o) de volta, <strong>{userName}</strong>
        </Text>
        <Box>
          <h1>Detalhes do Grupo</h1>
        </Box>
        <GroupDetailCard groupId={groupId} />
      </Container>
    </>
  );
};

export default GroupDetails;