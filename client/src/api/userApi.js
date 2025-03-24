import requester from "../utils/requester";

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