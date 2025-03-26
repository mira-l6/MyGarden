import { useEffect, useState } from "react";

import useAuth from "../hooks/useAuth"
import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/comments';

export function useComments(plantId, ownerId) {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        const query = new URLSearchParams();

        if(plantId){
            query.append('where', `plantId="${plantId}"`)
        }

        if(ownerId){
            query.append('where', `_ownerId="${ownerId}"`)
        }

        requester.get(`${baseUrl}?${query}`)
            .then(setComments);
    }, [plantId, ownerId]);

    return [comments, setComments]
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

export function useDeleteComment() {

    const { request } = useAuth();

    const remove = async (commentId) => {

        const result = await request.delete(`${baseUrl}/${commentId}`);
        //TODO: validate
        return result
    }

    return {
        remove
    }
}