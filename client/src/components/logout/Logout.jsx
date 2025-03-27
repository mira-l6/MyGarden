import { Navigate } from "react-router";
import { useLogout } from "../../api/userApi";
import { useMessageContext } from "../../contexts/MessageContext";
import { useEffect } from "react";

export default function Logout() {

    const { isLoggedOut } = useLogout();
    const { showMessage } = useMessageContext();

    useEffect(() => {
        if (isLoggedOut) {
            showMessage("✅ You have logged out successfully.");
        } else{
            showMessage("❌ Logout failed. Please try again.")
        }
    }, [isLoggedOut, showMessage]);  

    return isLoggedOut ? <Navigate to="/" replace /> : null;
}