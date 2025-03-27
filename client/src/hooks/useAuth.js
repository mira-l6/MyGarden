import { useUserContext } from "../contexts/UserContext";
import requester from "../utils/requester";

export default function useAuth() {

    const authData = useUserContext();

    const authRequest = (method, url, data, options) => {

        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options?.headers
            }
        }

        return requester.baseRequest(method, url, data, authData?.accessToken ? authOptions : options )
    }

    return {
        ...authData,
        isAuthenticated: !!authData.accessToken,
        request: {
            get: authRequest.bind(null, 'get'),
            post: authRequest.bind(null, 'post'),
            put: authRequest.bind(null, 'put'),
            delete: authRequest.bind(null, 'delete')
        },
    }
}