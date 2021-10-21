import Menu from "../../components/Menu";
import GroupDetailCard from "../../components/GroupDetailCard";

import { UserContext } from "../../providers/User";

import { useContext } from "react";
import { useParams, Redirect } from "react-router";

import { Box, Container, Text } from "./style";

const GroupDetails = ({ authenticated }) => {
  const { userName } = useContext(UserContext);

  const parameters = useParams();
  const groupId = parameters.idGroup;

  if (!authenticated) {
    return <Redirect to="/" />;
  }

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
        <GroupDetailCard groupId={groupId} authenticated={authenticated} />
      </Container>
    </>
  );
};

export default GroupDetails;
