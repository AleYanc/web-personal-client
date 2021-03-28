import React, {useState, useEffect, createContext} from 'react';
import {getAccessTokenApi, getRefreshTokenApi, refreshAccessToken, logOut} from '../api/auth';
import jwtdecode from 'jwt-decode';

export const AuthContext = createContext();

export default function AuthProvider(props) {
    const {children} = props;
    const [user, setUser] = useState({
        user: null,
        isLoading: true
    });

    useEffect(() => {
        checkUserLogin(setUser);
    }, [])

    return <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
}

function checkUserLogin(setUser) {
    const accessToken = getAccessTokenApi();
    if(!accessToken) {
        const refreshToken = getRefreshTokenApi();
        if(!refreshToken) {
            logOut();
            setUser({
                user: null,
                isLoading: false
            });
        } else {
            refreshAccessToken(refreshToken);
        }
    } else {
        setUser({
            isLoading: false,
            user: jwtdecode(accessToken)
        })
    }
}

