import { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import api from '../../services/api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('@BetterLife:user') || '');
    const [userName, setUserName] = useState('');

    const getUser = () => {
        const token = JSON.parse(localStorage.getItem("@BetterLife:token")) || "";
        setUser(jwt_decode(token).user_id);
        localStorage.setItem('@BetterLife:user', user);
    };

    const getUserName = () => {
        api.get(`/users/${user}/`).then((resp) => {
            setUserName(resp.data.username);
        })
            .catch((err) => console.log(err));

    };

    return (
        <UserContext.Provider value={{ user, getUser, getUserName, userName }}>
            {children}
        </UserContext.Provider>
    );

};
