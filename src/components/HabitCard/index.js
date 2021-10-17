import { CardContainer, TextContainer, IconButtonContainer, ButtonContainer, ChartContainer } from "./style";
import Button from '../Button'
import Chart from "react-google-charts";
import { IoIosCloseCircle } from 'react-icons/io';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/Habits";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const HabitCard = ({ habit }) => {
    let { id, title, category, difficulty, how_much_achieved } = habit;
    const { removeHabits, updateHabitProgress } = useContext(HabitsContext);
    const matches = useMediaQuery('(min-width:768px)');
    const [graphDimension, setGraphDimension] = useState('')

    useEffect(() => {
        matches ? setGraphDimension('150px') : setGraphDimension('120px');
    }, [matches])

    const options = {
        pieHole: 0.7,
        legend: 'none',
        pieSliceText: 'none',
        backgroundColor: 'none',
        width: '100%',
        colors: ['rgb(73, 92, 137)', '#fff'],
        pieSliceBorderColor: 'none',
        chartArea: { width: '70%', height: '70%' }
    };
    const data = [
        ['Tarefa', 'Porcentagem Concluidp'],
        ['Concluido', how_much_achieved],
        ['Faltante', (100 - how_much_achieved)],
    ];

    const handleClickAddAchieved = () => {
        updateHabitProgress(how_much_achieved + 10);
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
                <ButtonContainer>
                    <Button smaller text={'Feito!'} onClick={handleClickAddAchieved} />
                </ButtonContainer>
            </TextContainer>
            <ChartContainer >
                <Chart
                    key={graphDimension}
                    width={graphDimension}
                    height={graphDimension}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={options}
                />
                <span>{`${how_much_achieved}%`}</span>
            </ChartContainer>
            <IconButtonContainer onClick={handleClickDeleteHabit}>
                <IoIosCloseCircle />
            </IconButtonContainer>
        </CardContainer>
    );
};

export default HabitCard;
