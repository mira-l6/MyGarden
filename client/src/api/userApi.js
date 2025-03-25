import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";

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

    const { accessToken, request } = useAuth();

    const logout = () => {
        
        const result = request.post(`${baseUrl}/logout`);
        //TODO: validate
        return result
    }

    return {
        logout,
        isLoggedOut: !!accessToken
    }
}