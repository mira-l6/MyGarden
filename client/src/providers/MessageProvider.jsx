import { useState } from "react";
import { MessageContext } from "../contexts/MessageContext";

export default function MessageProvider({
    children
}) {

    const [message, setMessage] = useState('');

    const showMessage = (msg) => {

        setMessage(msg);
        setTimeout(() => setMessage(""), 6000);
    };

    return (
        <MessageContext.Provider value={{message, showMessage}}>
            {children}
        </MessageContext.Provider>
    );
}