import { useEffect, useState } from "react";
import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/plants';

export function usePlants(filter = {}) {

    const [plants, setPlants] = useState([]);
    const [pending, setPending] = useState(false);

    let query;

    if (filter.pageSize) {

        query = new URLSearchParams({
            pageSize: filter.pageSize,
            where: 'status="well-known"'
        })
    }
    const url = filter.pageSize ? `${baseUrl}?${query}` : baseUrl;

    useEffect(() => {

        setPending(true);

        requester.get(url)
            .then(data => {

                console.log(url);
                setPending(false);
                setPlants(data)
            });

    }, [url])

    return [
        plants,
        pending
    ]
}

export function usePlant(plantId) {

    const [plant, setPlant] = useState({});
    const [pending, setPending] = useState(false);

    useEffect(() => {

        setPending(true);

        requester.get(`${baseUrl}/${plantId}`)
            .then(data => {

                setPending(false);
                setPlant(data);
            })
            .finally(setPending(false))

    }, [plantId])

    return [
        plant, pending
    ]
}

export function useCreatePlant() {

    const { request } = useAuth();

    const create = async (data) => {

        const result = await request.post(baseUrl, data);
        return result;
    }

    return {
        create,
    }
}

export function useEditPlant() {

    const { request } = useAuth();

    const edit = async (plantId, data) => {

        const result = await request.put(`${baseUrl}/${plantId}`, data);
        return result;
    }

    return {
        edit
    }
}