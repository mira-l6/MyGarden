import usePersistedState from "../hooks/usePersistedState";
import { UserContext } from "../contexts/UserContext.jsx";

export default function UserProvider({
    children
}) {

    const [auth, setAuth] = usePersistedState('auth', {});

    const loginHandler = (data) => {
        setAuth(data);
    }

    const logoutHandler = () => {
        setAuth({});
    }

    return (
        <UserContext.Provider value={{ ...auth, loginHandler, logoutHandler }}>
            {children}
        </UserContext.Provider>
    );
}