import { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../services/api';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {

    const [activities, setActivities] = useState([]);

    const [token] = useState(
        JSON.parse(window.localStorage.getItem("@BetterLife:token")) || ""
    );

    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const getActivities = (group) => {
        api.get(`/activities/?group=${group}`).then((resp) => {
            setActivities(resp.data.results);
        })
            .catch((err) => console.log(err));
    };

    const removeActivity = (id) => {
        api.delete(`/activities/${id}/`, header).then(() => toast.success('Atividade deletada com sucesso.')
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