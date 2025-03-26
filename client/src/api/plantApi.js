import { useEffect, useState } from "react";
import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/plants';

export function usePlants(filter = {}) {

    const [plants, setPlants] = useState([]);
    const [pages, setPages] = useState(1);
    const [pending, setPending] = useState(false);

    let query = new URLSearchParams();
    let pageSize;

    if (filter.where) { query.append('where', `${filter.where}`) }
    if (filter.pageSize) {
        pageSize = filter.pageSize;
        query.append('pageSize', filter.pageSize)
    }
    if (filter.page) { query.append('offset', filter.pageSize * (filter.page - 1)); }
    if (filter.sortBy) { query.append('sortBy', `${filter.sortBy}`) }
    if (filter.search) { query.append('where', `common_name Like "${filter.search}"`); }

    const url = `${baseUrl}?${query.toString()}`;

    useEffect(() => {

        setPending(true);

        if (filter.page) {
            requester.get(baseUrl)
                .then(data => {
                    setPages(Math.ceil(data.length / pageSize) || 1)
                })
        }

        requester.get(url)
            .then(data => {

                setPending(false);
                setPlants(data)
            });

    }, [url, pageSize, filter.page])

    return [
        plants,
        pending,
        pages,
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

export function useDeletePlant() {

    const { request } = useAuth();

    const deletePlant = async (plantId) => {

        const result = await request.delete(`${baseUrl}/${plantId}`);
        //TODO: validate
        console.log(result);
        return result;
    }

    return {
        deletePlant
    }
}

//* query for popular plants
// query = new URLSearchParams({
//     pageSize: filter.pageSize,
//     where: 'status="well-known"'
// })