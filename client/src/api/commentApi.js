import { useEffect, useState } from "react";

import useAuth from "../hooks/useAuth"
import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/comments';

export function useComments(plantId) {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        const query = new URLSearchParams({
            where: `plantId="${plantId}"`
        })

        requester.get(`${baseUrl}?${query}`)
            .then(setComments);
    }, [plantId]);

    return [ comments, setComments ]
}

export function useCreateComment() {

    const { request } = useAuth();

    const create = (data) => {

        const result = request.post(baseUrl, data);
        //TODO: validate
        return result;
    }

    return {
        create,
    }
}