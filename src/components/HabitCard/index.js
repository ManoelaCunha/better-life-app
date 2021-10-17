import { CardContainer, TextContainer, IconButtonContainer, ButtonContainer } from "./style";
import Button from '../Button'
import Chart from "react-google-charts";
import { IoIosCloseCircle } from 'react-icons/io';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";


const HabitCard = ({ habit }) => {
    let { id, title, category, difficulty, how_much_achieved } = habit;

    const [achieved, setAchieved] = useState(how_much_achieved);

    const options = {
        pieHole: 0.7,
        legend: 'none',
        pieSliceText: 'none',
        backgroundColor: 'none',
        width: '100%',
    };
    const data = [
        ['Tarefa', 'Porcentagem Concluidp'],
        ['Concluido', achieved],
        ['Faltante', (100 - achieved)],
    ];
    const handleClickAddAchieved = () => {
        setAchieved(achieved + 10);
    }


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
            <Chart
                width={'100px'}
                height={'100px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={options}
            />
            <IconButtonContainer>
                <IoIosCloseCircle />
            </IconButtonContainer>
        </CardContainer>
    );
};

export default HabitCard;
