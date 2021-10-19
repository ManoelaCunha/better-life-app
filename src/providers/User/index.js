import { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const getUser = () => {
        const token = localStorage.getItem("@BetterLife:token") || "";
        setUser(jwt_decode(token).user_id);
        localStorage.setItem('@BetterLife:user', user);
    };

    return (
        <UserContext.Provider value={{ user, getUser }}>
            {children}
        </UserContext.Provider>
    );

};
