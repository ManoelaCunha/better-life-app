import { CardGroupDetailBody, ActivityContainer } from "./style";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { GoalsContext } from "../../providers/Goals";
import GoalCard from "../GoalCard";
//import { ButtonContainer } from "../HabitCard/style";
import { ButtonContainer } from "../Button/style";
import { ActivitiesContext } from "../../providers/Activities";
import { GroupsContext } from "../../providers/Groups";
import { FormControlUnstyledContext } from "@material-ui/unstyled";
import { TiDelete } from "react-icons/ti";
import ModalComponent from "../../components/Modal";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const GroupDetailCard = ({ groupId }) => {
  const { goals, getGoals } = useContext(GoalsContext);
  const { activities, getActivities } = useContext(ActivitiesContext);
  const {
    subscribedGroups,
    subscribeGroup,
    unsubscribeGroup,
    getSubscribedGroups,
  } = useContext(GroupsContext);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const activityList = activities.map((activity) => {
    const date = new Date(activity.realization_time);
    const newDate = [date.getDate(), date.getMonth(), date.getFullYear()].join(
      "/"
    );
    return (
      <li key={activity.id}>
        <h4>{activity.title}</h4>
        <p>Data Limite: {newDate}</p>
        <hr style={{ opacity: 0.2, margin: "5px" }} />
      </li>
    );
  });

  useEffect(() => {
    getGoals(groupId);
    getActivities(groupId);
    getSubscribedGroups();
    subscribedGroups.includes(Number(groupId))
      ? setIsSubscribed(true)
      : setIsSubscribed(false);
  }, []);

  useEffect(() => {
    subscribedGroups.includes(Number(groupId))
      ? setIsSubscribed(true)
      : setIsSubscribed(false);
    console.log(subscribedGroups, groupId);
    console.log(subscribedGroups.includes(Number(groupId)));
  }, [subscribedGroups]);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup
      .string()
      .oneOf(["Fácil", "Intermediário", "Difícil", "Muito difícil"])
      .required("Campo obrigatório"),
    how_much_achieved: yup.string().required("Campo obrigatório"),
    group: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNewGroupGoal = ({
    title,
    difficulty,
    how_much_achieved,
    group,
  }) => {
    const userId = localStorage.getItem("@BetterLife:user");

    const newGroupGoal = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: 0,
      group: groupId,
    };
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const inputStyle = {
    margin: "10px auto",
    width: "100%",
    maxWidth: "350px",
  };

  const formStyle = {
    width: "100%",
  };

  return (
    <CardGroupDetailBody>
      <h2>Nome do Grupo</h2>
      <p>Categoria do Grupo</p>
      <ButtonContainer style={{ margin: "0px" }}>
        {!isSubscribed && (
          <Button text={"Inscreva-se"} onClick={() => subscribeGroup(groupId)}>
            Inscreva-se
          </Button>
        )}
        {isSubscribed && <Button text={"Sair do grupo"} onClick={() => unsubscribeGroup(groupId)} />}
      </ButtonContainer>
      <p>Descrição do Grupo</p>
      <div>
        <h3>Metas</h3>
        {goals.map((goal) => (
          <GoalCard goal={goal} key={goal.id} isSubscribed={isSubscribed} />
        ))}
      </div>
      <ModalComponent
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        title="Cadastrar nova meta"
        content={
          <form style={formStyle} onSubmit={handleSubmit(handleNewGroupGoal)}>
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

            <FormControl variant="filled" style={inputStyle}>
              <InputLabel id="how_much_achieved">Conquistado</InputLabel>
              <Select
                labelId="how_much_achieved"
                {...register("how_much_achieved")}
                helperText={errors.how_much_achieved?.message}
              >
                <MenuItem value=""></MenuItem>
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
     
      <div>
        <h3>Atividades</h3>
        <ButtonContainer style={{ margin: "0px" }}>
          <button onClick={openModal}>Criar Atividade</button>
        </ButtonContainer>
        <ActivityContainer>
          <ul>
            {activities.map((activity) => {
              const date = new Date(activity.realization_time);
              const newDate = [date.getDate(), date.getMonth(), date.getFullYear()].join("/");
              return (
                <li key={activity.id}>
                  <h4>{activity.title}</h4>
                  <p>Data Limite: {newDate}</p>
                  <TiDelete onClick={() => removeActivity(activity.id)} />
                  <hr style={{ opacity: 0.2, margin: "5px" }} />
                </li>
              );
            })}
          </ul>
        </ActivityContainer>
      </div>
    </CardGroupDetailBody>
  );
};

export default GroupDetailCard;
