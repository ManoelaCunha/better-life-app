import { CardContainer, TextContainer, IconButtonContainer, ButtonContainer, ChartContainer } from "./style";
import Button from '../Button'
import { IoIosCloseCircle } from 'react-icons/io';
import { useContext, useEffect, useState } from "react";
import { GoalsContext } from "../../providers/Goals";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CircularProgressBar from "../ProgressBar";

const GoalCard = ({ goal, isSubscribed = false }) => {
    let { id, title, difficulty, how_much_achieved } = goal;
    const { removeGoal, updateGoalProgress } = useContext(GoalsContext);
    const matches = useMediaQuery('(min-width:768px)');
    const [achieved, setAchieved] = useState(how_much_achieved);
    const [progressBarSize, setProgressBarSize] = useState(75);

    useEffect(() => { matches ? setProgressBarSize(100) : setProgressBarSize(75); }, [matches])

    const handleClickAddAchieved = () => {
        updateGoalProgress(id, achieved + 10);
        setAchieved(achieved + 10)
    }
    const handleClickDeleteHabit = () => {
        removeGoal(id);
    };

    return (
        <CardContainer>
            <TextContainer>
                <h4>{title}</h4>
                <p>Dificuldade - {difficulty}</p>
                {achieved < 100 && <ButtonContainer>
                    {isSubscribed && <Button text={'Feito!'} onClick={handleClickAddAchieved} />}
                </ButtonContainer>}
            </TextContainer>
            <ChartContainer >
                <CircularProgressBar percentage={achieved} size={progressBarSize} strokeWidth={10} />
            </ChartContainer>
            <IconButtonContainer onClick={handleClickDeleteHabit} id={'closeIcon'}>
                {isSubscribed && <IoIosCloseCircle />}
            </IconButtonContainer>
        </CardContainer>
    );
};

export default GoalCard;