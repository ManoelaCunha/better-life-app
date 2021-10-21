import {
  CardContainer,
  TextContainer,
  IconButtonContainer,
  ButtonContainer,
  ChartContainer,
} from "./style";
import Button from "../Button";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { HabitsContext } from "../../providers/Habits";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CircularProgressBar from "../ProgressBar";
import ModalAlert from "../Modal";

const HabitCard = ({ habit }) => {
  let { id, title, category, difficulty, how_much_achieved } = habit;
  const { removeHabits, updateHabitProgress } = useContext(HabitsContext);
  const matches = useMediaQuery("(min-width:768px)");
  const [achieved, setAchieved] = useState(how_much_achieved);
  const [progressBarSize, setProgressBarSize] = useState(75);
  const [modalAlert, setModalAlert] = useState(false);

  useEffect(() => {
    matches ? setProgressBarSize(100) : setProgressBarSize(75);
  }, [matches]);

  const handleClickAddAchieved = () => {
    updateHabitProgress(id, achieved + 10);
    setAchieved(achieved + 10);
  };

  const openModalAlert = () => {
    setModalAlert(true);
  };

  return (
    <CardContainer>
      <TextContainer>
        <h3>{title}</h3>
        <p>Categoria - {category}</p>
        <p>Dificuldade - {difficulty}</p>
        {achieved < 100 && (
          <ButtonContainer>
            <Button text={"Feito!"} onClick={handleClickAddAchieved} />
          </ButtonContainer>
        )}
      </TextContainer>
      <ChartContainer>
        <CircularProgressBar
          percentage={achieved}
          size={progressBarSize}
          strokeWidth={10}
        />
      </ChartContainer>
      <IconButtonContainer onClick={openModalAlert}>
        <IoIosCloseCircle />
      </IconButtonContainer>

      <ModalAlert
        modalIsOpen={modalAlert}
        setIsOpen={setModalAlert}
        content={
          <div>
            <h3>Você quer excluir este Hábito?</h3>
            <Button
              text="Excluir"
              style={{ width: "150px", fontSize: "16px", marginTop: "25px" }}
              onClick={() => {
                removeHabits(id);
              }}
            />
          </div>
        }
      />
    </CardContainer>
  );
};

export default HabitCard;
