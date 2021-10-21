import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GoalsContext } from "../../providers/Goals";
import { Title } from "@material-ui/icons";

const CreateGroupGoalModal = ({
  modalGoalIsOpen,
  setModalGoalIsOpen,
  groupId,
}) => {
  const { createGoals } = useContext(GoalsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup
      .string()
      .oneOf(["Fácil", "Intermediário", "Difícil", "Muito difícil"])
      .required("Campo obrigatório"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateGoals = ({ title, difficulty }) => {
    const newGroupGoal = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: 0,
      group: groupId,
    };
    createGoals(newGroupGoal);
    setModalGoalIsOpen(false);
    reset(createGoals);
  };

  const inputStyle = {
    margin: "10px auto",
    width: "100%",
    maxWidth: "350px",
  };

  const formStyle = {
    width: "100%",
  };

  const iconStyle = {
    fontSize: "20px",
    color: "gray",
  };

  return (
    <div>
      <Modal
        modalIsOpen={modalGoalIsOpen}
        setIsOpen={setModalGoalIsOpen}
        title="Cadastrar nova meta"
        content={
          <form style={formStyle} onSubmit={handleSubmit(handleCreateGoals)}>
            <TextField
              label="Título"
              variant="filled"
              style={inputStyle}
              {...register("title")}
              helperText={errors.title?.message}
              InputProps={{
                endAdornment: <Title style={iconStyle} />,
              }}
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
              text="Criar meta"
              style={{ width: "150px", fontSize: "16px" }}
              type="submit"
            />
          </form>
        }
      />
    </div>
  );
};

export default CreateGroupGoalModal;
