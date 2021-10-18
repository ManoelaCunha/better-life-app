import { CardGroupDetailBody } from './style';
import Button from '../Button';
import { useContext, useEffect, useState } from 'react';
import { GoalsContext } from '../../providers/Goals';
import GoalCard from '../GoalCard';
import { ButtonContainer } from '../HabitCard/style';
import { ActivitiesContext } from '../../providers/Activities';
import { GroupsContext } from '../../providers/Groups';

const GroupDetailCard = ({ groupId = 16 }) => {
    const { goals, getGoals } = useContext(GoalsContext);
    const { activities, getActivities } = useContext(ActivitiesContext);
    const { subscribedGroups, subscribeGroup, unsubscribeGroup } = useContext(GroupsContext);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        getGoals(groupId);
        getActivities(groupId);
        subscribedGroups.includes(groupId) ? setIsSubscribed(true) : setIsSubscribed(false);
    }, [])

    useEffect(() => {
        subscribedGroups.includes(groupId) ? setIsSubscribed(true) : setIsSubscribed(false);
    }, [subscribedGroups])

    return (
        <CardGroupDetailBody>
            <h2>Nome do Grupo</h2>
            <p>Categoria do Grupo</p>
            <ButtonContainer>
                {!isSubscribed && <Button text={'Inscreva-se'} onClick={() => subscribeGroup(groupId)}>Inscreva-se</Button>}
                {isSubscribed && <Button text={'Sair do grupo'} onClick={() => unsubscribeGroup(groupId)} />}
            </ButtonContainer>
            <p>Descrição do Grupo</p>
            <div>
                <h3>Metas</h3>
                {goals.map((goal) => <GoalCard goal={goal} key={goal.id} isSubscribed={isSubscribed} />)}
            </div>
            <div>
                <h3>Atividades</h3>
                <ul>
                    {activities.map((activity) => <li key={activity.id}>{activity.title}</li>)}
                </ul>
            </div>
        </CardGroupDetailBody>
    );
};

export default GroupDetailCard;