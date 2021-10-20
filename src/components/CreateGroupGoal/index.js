import { TextField, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import ModalComponent from "../../components/Modal";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { GoalsContext } from "../../providers/Goals";

const CreateGroupGoalModal = ({ setIsOpen, groupId, inputStyle, formStyle, modalIsOpen }) => {

  const { createGoals, goals, setGoals } = useContext(GoalsContext);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
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

      const handleCreateGoals = ({title, difficulty, how_much_achieved, group}) => {
        const newGroupGoal = {
          title: title,
          difficulty: difficulty,
          how_much_achieved: 0,
          group: groupId,
        };
        console.log(newGroupGoal)
        createGoals(newGroupGoal)
        setIsOpen(false)
      };

      // const openModal = () => {
      //   setModalIsOpen(true);
      // };
    
    return(
        <div>
        <ModalComponent
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

      </div>
    )
}

export default CreateGroupGoalModal