
import { useEffect, useState } from "react";

export default function useFetch(url, defaultState = []) {

    const [state, setState] = useState(defaultState);
    const [pending, setPending] = useState(true);

    useEffect(() => {

        const abortController = new AbortController();
        setPending(true);

        fetch(url, { signal: abortController.signal })
            .then(response => response.json())
            .then(data => {
                setState(data);
                setPending(false);
            })
            .finally(() => setPending(false));

        return () => {
            abortController.abort();
        }


    }, [url])

    return [pending, state]
}