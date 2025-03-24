import { useState } from "react";

export default function usePersistedState(stateKey, initialState) {

    const [state, setState] = useState(() => {

        const persistedData = localStorage.getItem(stateKey);

        if (!persistedData) {
            return initialState;
        }

        const data = JSON.parse(persistedData);
        if (data == null) return initialState;

        return data;
    })

    const setPersistedState = (value) => {

        const persistedData = typeof value == "function" ? value() : value;

        if(persistedData == null) return;

        localStorage.setItem(stateKey, JSON.stringify(persistedData));

        setState(value);
    }

    return [
        state,
        setPersistedState
    ]

}