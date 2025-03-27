import { useContext } from "react";
import { createContext } from "react";

export const MessageContext = createContext({
    message: '',
    showMessage: () => {}
});

export function useMessageContext(){
    const result = useContext(MessageContext);
    return result;
}