import { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../services/api';

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
    const [goals, setGoals] = useState([]);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0OTIxNDMwLCJqdGkiOiI2NWVkY2I5ZDA5MDI0NzdkOGRkNjg4YWFkYjQxN2YwZCIsInVzZXJfaWQiOjE1M30.f5mSz1IpeRJKWtI9xdWObepZrJsG9b1qFTmCnxw6bt4';
    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const getGoals = (group) => {
        api.get(`/goals/?group=${group}`).then((resp) => {
            setGoals(resp.data.results);
        })
            .catch((err) => console.log(err));
    };

    const removeGoal = (id) => {
        api.delete(`/goals/${id}/`, header).then(() => toast.success('Meta deletada com sucesso.')
        ).catch((err) => console.log(err));
        const newGoals = goals.filter((goal) => goal.id !== id);
        setGoals(newGoals);
    };

    const updateGoalProgress = (id, newProgress) => {
        let isAchieved = false;
        if (newProgress >= 100) {
            isAchieved = true;
            newProgress = 100;
            toast('Meta concluída!', {
                icon: '👏',
            });
        }

        const updatedGoal = {
            "how_much_achieved": newProgress,
            "achieved": isAchieved
        }
        api.patch(`/goals/${id}/`, updatedGoal, header).then(() => toast.success('Progresso da meta incrementada.')).catch((err) => console.log(err));
    };

    return (
        <GoalsContext.Provider value={{ goals, getGoals, updateGoalProgress, removeGoal }}>
            {children}
        </GoalsContext.Provider>
    );

};