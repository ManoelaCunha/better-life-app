import HabitCard from "../../components/HabitCard";
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import Menu from "../../components/Menu";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/Habits";
import { GroupsContext } from "../../providers/Groups";
import { Box, Container, Text, ButtonContainerDashboard } from "./style";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import AsideRight from "../../components/AsideRight";
import { Filter, MenuItemCustom, FormControlCustom } from "../../styles/styleMaterial";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const { getUser, userName, getUserName, user } = useContext(UserContext);
  const { getHabits, habits, addNewHabit } = useContext(HabitsContext);
  const { getSubscribedGroups } = useContext(GroupsContext);
  const [filterValue, setFilterValue] = useState("open");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filteredHabits, setFilteredHabits] = useState([]);

  useEffect(() => {
    if (authenticated) {
      getUser();
      getHabits();
      getSubscribedGroups();
      getUserName();
    }
  }, [user]);

  useEffect(() => {
    let newHabits = habits;
    if (filterValue === "finished") {
      newHabits = habits.filter((habit) => habit.achieved);
    }
    if (filterValue === "open") {
      newHabits = habits.filter((habit) => !habit.achieved);
    }
    setFilteredHabits(newHabits);
  }, [habits, filterValue]);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().oneOf(["Fácil", "Intermediário", "Difícil", "Muito difícil"]).required("Campo obrigatório"),
    frequency: yup.string().oneOf(["Diário", "Semanal", "Quinzenal", "Mensal"]).required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNewHabit = ({ title, category, difficulty, frequency }) => {
    const userId = localStorage.getItem("@BetterLife:user");

    const newHabit = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      achieved: false,
      how_much_achieved: 0,
      user: userId,
    };
    addNewHabit(newHabit);
    setIsOpen(false);
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
  if (!authenticated) {
    return <Redirect to='/' />;
  }

  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <>
      <Menu setAuthenticated={setAuthenticated} handleAdd={openModal} />
      <Container>
        <Text>
          Bem vinda(o) de volta, <strong>{userName}</strong>
        </Text>
        <Box>
          <h1>Hábitos</h1>
          <ButtonContainerDashboard style={{ margin: "0px 5px" }}>
            <button
              style={{
                width: "150px",
                background: "transparent",
                color: "#00000",
                fontWeight: "500",
                boxShadow: "none",
                fontSize: "20px",
                fontFamily: "Montserrat",
                textAlign: "right",
              }}
              onClick={openModal}
            >
              + Novo Habito
            </button>
          </ButtonContainerDashboard>
        </Box>
        <FormControlCustom variant='outlined'>
          <Filter labelId='demo-simple-select-label' id='demo-simple-select' value={filterValue} label='Filtro' onChange={handleChange}>
            <MenuItemCustom value={"open"}>Abertos</MenuItemCustom>
            <MenuItemCustom value={"finished"}>Concluidos</MenuItemCustom>
            <MenuItemCustom value={"all"}>Todos</MenuItemCustom>
          </Filter>
        </FormControlCustom>
        {filteredHabits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </Container>
      <AsideRight />

      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        title='Cadastrar novo hábito'
        content={
          <form style={formStyle} onSubmit={handleSubmit(handleNewHabit)}>
            <TextField label='Título' variant='filled' style={inputStyle} {...register("title")} helperText={errors.title?.message} />

            <TextField label='Categoria' variant='filled' style={inputStyle} {...register("category")} helperText={errors.category?.message} />

            <FormControl variant='filled' style={inputStyle}>
              <InputLabel id='select-difficulty'>Dificuldade</InputLabel>
              <Select labelId='select-difficulty' {...register("difficulty")} helperText={errors.difficulty?.message}>
                <MenuItem value=''></MenuItem>
                <MenuItem value='Fácil'>Fácil</MenuItem>
                <MenuItem value='Intermediário'>Intermediário</MenuItem>
                <MenuItem value='Difícil'>Difícil</MenuItem>
                <MenuItem value='Muito difícil'>Muito Difícil</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant='filled' style={inputStyle}>
              <InputLabel id='select-frequency'>Frequência</InputLabel>
              <Select labelId='select-frequency' {...register("frequency")} helperText={errors.frequency?.message}>
                <MenuItem value=''></MenuItem>
                <MenuItem value='Diário'>Diário</MenuItem>
                <MenuItem value='Semanal'>Semanal</MenuItem>
                <MenuItem value='Quinzenal'>Quinzenal</MenuItem>
                <MenuItem value='Mensal'>Mensal</MenuItem>
              </Select>
            </FormControl>

            <Button text='Criar hábito' style={{ width: "150px", fontSize: "16px" }} type='submit' />
          </form>
        }
      />
    </>
  );
};

export default Dashboard;
