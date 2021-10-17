import { createContext, useState } from 'react';
import api from '../../services/api';

export const HabitsContext = createContext();

export const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState([]);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0OTIxNDMwLCJqdGkiOiI2NWVkY2I5ZDA5MDI0NzdkOGRkNjg4YWFkYjQxN2YwZCIsInVzZXJfaWQiOjE1M30.f5mSz1IpeRJKWtI9xdWObepZrJsG9b1qFTmCnxw6bt4';
    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const getHabits = () => {
        api.get('/habits/personal/', header).then((resp) => {
            setHabits(resp.data);
        });
    };

    const removeHabits = (id) => {

        api.delete(`/habits/${id}`, header);
        const newHabits = habits.filter((habit) => habit.id !== id);
        setHabits(newHabits);
    };

    const updateHabitProgress = (id, newProgress) => {
        const isAchieved = newProgress => 100 ? true : false;

        const updatedHabit = {
            "how_much_achieved": newProgress,
            "achieved": isAchieved
        }
        api.patch(`/habits/${id}`, updatedHabit, header);
    };

    return (
        <HabitsContext.Provider value={{ habits, getHabits, updateHabitProgress, removeHabits }}>
            {children}
        </HabitsContext.Provider>
    );

};