import { CardGroupDetailBody } from './style';
import Button from '../Button';
import { useContext, useEffect } from 'react';
import { GoalsContext } from '../../providers/Goals';
import GoalCard from '../GoalCard';
import { ButtonContainer } from '../HabitCard/style';

const GroupDetailCard = ({ groupId = 16 }) => {
    const { goals, getGoals } = useContext(GoalsContext);

    useEffect(() => {
        getGoals(groupId);
    }, [])

    return (
        <CardGroupDetailBody>
            <h2>Nome do Grupo</h2>
            <p>Categoria do Grupo</p>
            <ButtonContainer>
                <Button text={'Inscreva-se'}>Inscreva-se</Button>
            </ButtonContainer>
            <p>Descrição do Grupo</p>
            <div>
                <h3>Metas</h3>
                {goals.map((goal) => <GoalCard goal={goal} key={goal.id} />)}
            </div>
            <div>
                <h3>Atividades</h3>
                <ul>
                    <li>Atividade 1</li>
                    <li>Atividade 2</li>
                </ul>
            </div>
        </CardGroupDetailBody>
    );
};

export default GroupDetailCard;