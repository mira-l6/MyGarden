import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users';

export function useLogin() {

    const login = async (email, password) => {

        const result = await requester.post(`${baseUrl}/login`, { email, password });
        return result;
    }

    return {
        login,
    }
}

export function useRegister() {

    const register = async (email, password) => {

        const result = await requester.post(`${baseUrl}/register`, { email, password });
        return result;
    }

    return {
        register,
    }
}

export function useLogout() {

    const { accessToken, userLogoutHandler } = useUserContext();
    const { request } = useAuth();

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        try {

            request.post(`${baseUrl}/logout`)
                .then(() => {
                    userLogoutHandler();
                });
        } catch (err) {

            console.log(err.message);
        }


    }, [accessToken, userLogoutHandler, request]);

    const isLoggedOut = !!accessToken;

    return {
        isLoggedOut,
    };
}

export function useUser() {

    const { request } = useAuth();

    const getUser = async (userId) => {

        console.log(`${baseUrl}/${userId}`)
        const result = await request.get(`http://localhost:3030/users/me`);
        //TODO: validate
        return result;
    }

    return { getUser }
}