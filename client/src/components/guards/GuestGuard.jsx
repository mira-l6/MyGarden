import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useMessageContext } from "../../contexts/MessageContext";
import { useEffect } from "react";

const guestRoutes = ["/login", "/register"];

export default function GuestGuard() {

    const { isAuthenticated } = useAuth();
    const { showMessage } = useMessageContext();


    useEffect(() => {
        if (isAuthenticated && guestRoutes.includes(location.pathname)) {
            showMessage("🔒 You need to be logged out to view this page.");
        }
    }, [isAuthenticated, showMessage]);

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return <Outlet />
}