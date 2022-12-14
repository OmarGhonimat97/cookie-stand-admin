import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';

// const tokenUrl = process.env.NEXT_PUBLIC_API_URL + '/api/token/';
const tokenUrl = 'https://cookie-stand-app.herokuapp.com' + '/api/token/';

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error('You forgot AuthProvider!');
    }
    return auth;
}

export function AuthProvider(props) {

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });

    async function login(username, password) {
        const response = await axios.post(tokenUrl, { username, password });
        console.log(1111111111, response)
        const decodedAccess = jwt.decode(response.data.access);
        const newState = {
            tokens: response.data,
            user: {
                username: decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            },
        };
        setState(prevState => ({ ...prevState, ...newState }));
    }

    function logout() {
        const newState = {
            tokens: null,
            user: null,
        };
        setState(prevState => ({ ...prevState, ...newState }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}