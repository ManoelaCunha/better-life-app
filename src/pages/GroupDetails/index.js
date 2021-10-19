import HabitCard from "../../components/HabitCard";
import Menu from "../../components/Menu";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/Habits";
import { GroupsContext } from "../../providers/Groups";
import { Box, Container, Text, ButtonContainerDashboard } from "./style";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import GroupDetailCard from "../../components/GroupDetailCard";
import { useParams } from "react-router";

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
