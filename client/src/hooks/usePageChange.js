import { useState } from "react";

export function usePageChange(initialFilter) {

    const [filter, setFilter] = useState(initialFilter);

    const pageClickHandler = ({ selected }) => {

        setFilter(state => {
            return {
                ...state,
                page: selected + 1
            }
        })
    }

    return { filter, setFilter, pageClickHandler }
}