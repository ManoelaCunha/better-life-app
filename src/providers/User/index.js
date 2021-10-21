import { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import api from '../../services/api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('@BetterLife:user') || '');
    const [userName, setUserName] = useState('');

    const getUserName = () => {
        api.get(`/users/${user}/`).then((resp) => {
            setUserName(resp.data.username);
        })
            .catch((err) => console.log(err));
    };

    const getUser = (token) => {
        const user2 = jwt_decode(token).user_id
        setUser(jwt_decode(token).user_id);
        localStorage.setItem('@BetterLife:user', user2);
        getUserName();

    };

    return (
        <UserContext.Provider value={{ user, getUser, getUserName, userName }}>
            {children}
        </UserContext.Provider>
    );

};
