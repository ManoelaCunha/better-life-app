import { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const getUser = () => {
        // const token = localStorage.getItem('@Betterlife:token')
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0OTIxNDMwLCJqdGkiOiI2NWVkY2I5ZDA5MDI0NzdkOGRkNjg4YWFkYjQxN2YwZCIsInVzZXJfaWQiOjE1M30.f5mSz1IpeRJKWtI9xdWObepZrJsG9b1qFTmCnxw6bt4';
        setUser(jwt_decode(token).user_id);
    };

    return (
        <UserContext.Provider value={{ user, getUser }}>
            {children}
        </UserContext.Provider>
    );

};
