import usePersistedState from "../hooks/usePersistedState";
import { UserContext } from "../contexts/UserContext.jsx";
import { useMessageContext } from "../contexts/MessageContext.jsx";

export default function UserProvider({
    children
}) {

    const [auth, setAuth] = usePersistedState('auth', {});
    const { showMessage } = useMessageContext();

    const userLoginHandler = (data) => {

        showMessage('✅ You have successfully signed up')
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