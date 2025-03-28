import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useMessageContext } from "../../contexts/MessageContext";
import { useEffect } from "react";

const guestRoutes = ["/login", "/register"];

export default function GuestGuard() {

    const { isAuthenticated } = useAuth();
    const { showMessage } = useMessageContext();

    const location = useLocation(); 

    useEffect(() => {
        console.log(location.pathname)
        if (isAuthenticated && !guestRoutes.includes(location.pathname)) {
            showMessage("🔒 You need to be logged out to view this page.");
        }
    }, [isAuthenticated, showMessage, location.pathname]);

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return <Outlet />
}