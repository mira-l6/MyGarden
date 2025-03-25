import usePersistedState from "../hooks/usePersistedState";
import { UserContext } from "../contexts/UserContext.jsx";

export default function UserProvider({
    children
}) {

    const [auth, setAuth] = usePersistedState('auth', {});

    const userLoginHandler = (data) => {
        setAuth(data);
    }

    const userLogoutHandler = () => {
        setAuth({});
    }

    return (
        <UserContext.Provider value={{ ...auth, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
    );
}