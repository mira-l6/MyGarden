import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useMessageContext } from "../../contexts/MessageContext";
import { useEffect } from "react";

export default function AuthGuard() {

    const { isAuthenticated } = useAuth();
    const { showMessage } = useMessageContext();

    useEffect(() => {

        if(!isAuthenticated){
            showMessage('🔒 You are not authenticated')
        }
    }, [isAuthenticated, showMessage]);

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />;

}