import HabitCard from "../../components/HabitCard";
import Menu from "../../components/Menu";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/Habits";
import { GroupsContext } from "../../providers/Groups";
import { ActivitiesContext } from "../../providers/Activities";
import { Box, Container, Text, ButtonContainerDashboard } from "./style";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import GroupDetailCard from "../../components/GroupDetailCard";
import { useParams } from "react-router";
import { GoalsContext } from "../../providers/Goals";

const GroupDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { userName } = useContext(UserContext);
  const { createActivities } = useContext(ActivitiesContext);
  const { createGoals } = useContext(GoalsContext);

  const parameters = useParams();
  const groupId = parameters.idGroup;

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
    difficulty: yup
    .string()
    .oneOf(["Fácil", "Intermediário", "Difícil", "Muito difícil"])
    .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateActivities = (data) => {
    data["group"] = groupId;
    createActivities(data);
  };


  const handleCreateGoals = ({title, difficulty, how_much_achieved, group}) => {
    const newGroupGoal = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: 0,
      group: groupId,
    };
    createGoals(newGroupGoal)
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const openModalGoals = () => {
    setIsOpen(true)
  }

  const inputStyle = {
    margin: "10px auto",
    width: "100%",
    maxWidth: "350px",
  };

  const formStyle = {
    width: "100%",
  };

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
        <GroupDetailCard openModalGoals={openModalGoals} groupId={groupId} openModal={openModal} />
      </Container>

      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        title="Cadastrar Nova Meta"
        content={
          <form style={formStyle} onSubmit={handleSubmit(handleCreateGoals)}>
            <TextField
              label="Título"
              variant="filled"
              style={inputStyle}
              {...register("title")}
              helperText={errors.title?.message}
            />

            <FormControl variant="filled" style={inputStyle}>
              <InputLabel id="select-difficulty">Dificuldade</InputLabel>
              <Select
                labelId="select-difficulty"
                {...register("difficulty")}
                helperText={errors.difficulty?.message}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Fácil">Fácil</MenuItem>
                <MenuItem value="Intermediário">Intermediário</MenuItem>
                <MenuItem value="Difícil">Difícil</MenuItem>
                <MenuItem value="Muito difícil">Muito Difícil</MenuItem>
              </Select>
            </FormControl>

            <Button
              text="Criar Meta"
              style={{ width: "150px", fontSize: "16px" }}
              type="submit"
            />
          </form>
        }
      />
      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        title="Cadastrar Nova Atividade"
        content={
          <form
            style={formStyle}
            onSubmit={handleSubmit(handleCreateActivities)}
          >
            <TextField
              label="Título"
              variant="filled"
              style={inputStyle}
              {...register("title")}
              helperText={errors.title?.message}
            />

            <TextField
              type="datetime-local"
              variant="filled"
              style={inputStyle}
              {...register("realization_time")}
              helperText={errors.realization_time?.message}
            />
            <Button
              text="Criar Atividade"
              style={{ width: "150px", fontSize: "16px" }}
              type="submit"
            />
          </form>
        }
      />
    </>
  );
};

export default GroupDetails;