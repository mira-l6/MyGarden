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

export function useUser() {

    const { request } = useAuth();

    const getUser = async (userId) => {

        console.log(`${baseUrl}/${userId}`)
        const result = await request.get(`http://localhost:3030/users/me`);
        console.log(result)
        //TODO: validate
        return result;
    }

    return { getUser }
}