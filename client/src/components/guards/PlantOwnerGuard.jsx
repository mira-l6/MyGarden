import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useMessageContext } from "../../contexts/MessageContext";
import useAuth from "../../hooks/useAuth";

export default function PlantOwnerGuard({ plantId, plant, children }) {

    const navigate = useNavigate();
    
    const { showMessage } = useMessageContext();
    const { _id } = useAuth();  

    useEffect(() => {
        if (plant._ownerId !== _id) {
            showMessage("🌿 You are not the creator of this plant");
            navigate(`/plants/details/${plantId}`);  
        }
    }, [plant, _id, plantId, navigate, showMessage]);

    return <>{children}</>;
}
