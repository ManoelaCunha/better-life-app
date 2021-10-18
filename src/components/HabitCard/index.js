import { CardContainer, TextContainer, IconButtonContainer, ButtonContainer, ChartContainer } from "./style";
import Button from '../Button'
import { IoIosCloseCircle } from 'react-icons/io';
import { useContext, useEffect, useState } from "react";
import { HabitsContext } from "../../providers/Habits";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CircularProgressBar from "../ProgressBar";

const HabitCard = ({ habit }) => {
    let { id, title, category, difficulty, how_much_achieved } = habit;
    const { removeHabits, updateHabitProgress } = useContext(HabitsContext);
    const matches = useMediaQuery('(min-width:768px)');
    const [achieved, setAchieved] = useState(how_much_achieved);

    const handleClickAddAchieved = () => {
        updateHabitProgress(id, achieved + 10);
        setAchieved(achieved + 10)
    }
    const handleClickDeleteHabit = () => {
        removeHabits(id);
    };

    return (
        <CardContainer>
            <TextContainer>
                <h3>{title}</h3>
                <p> {category}</p>
                <p> {difficulty}</p>
                {achieved < 100 && <ButtonContainer>
                    <Button smaller text={'Feito!'} onClick={handleClickAddAchieved} />
                </ButtonContainer>}
            </TextContainer>
            <ChartContainer >
                <CircularProgressBar percentage={achieved} size={100} strokeWidth={10} />
            </ChartContainer>
            <IconButtonContainer onClick={handleClickDeleteHabit}>
                <IoIosCloseCircle />
            </IconButtonContainer>
        </CardContainer>
    );
};

export default HabitCard;
