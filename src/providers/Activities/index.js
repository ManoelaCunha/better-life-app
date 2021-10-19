import { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../services/api';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {

    const [activities, setActivities] = useState([]);

    const getActivities = (group) => {
        api.get(`/activities/?group=${group}`).then((resp) => {
            setActivities(resp.data.results);
        })
            .catch((err) => console.log(err));
    };

    const removeActivity = (id) => {
        const token = localStorage.getItem("@BetterLife:token") || "";
        api.delete(`/activities/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => toast.success('Atividade deletada com sucesso.')
        ).catch((err) => console.log(err));
        const newActivities = activities.filter((goal) => goal.id !== id);
        setActivities(newActivities);
    };


    return (
        <ActivitiesContext.Provider value={{ activities, getActivities, removeActivity }}>
            {children}
        </ActivitiesContext.Provider>
    );

};