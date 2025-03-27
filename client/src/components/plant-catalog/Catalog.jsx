import './Catalog.css';

import SubHeader from "../subheader/SubHeader.jsx";
import CatalogItem from "./catalog-item/CatalogItem.jsx";

import ReactPaginate from "react-paginate";

import { usePlants } from '../../api/plantApi.js';
import { usePageChange } from '../../hooks/usePageChange.js';
import { useState } from 'react';

export default function Catalog() {

    const [search, setSearch] = useState('');

    const { filter, setFilter, pageClickHandler } = usePageChange({
        page: 1,
        pageSize: 6,
        search
    })

    const [plants, pending, totalPages] = usePlants(filter);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setFilter((state) => ({ ...state, search }));
    };

    return (
        <>
            <SubHeader subtitle="Home" title="Plant Catalog" />

            <section id="recent-posts" className="recent-posts section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Check out our plant catalog</h2>
                    <p>Enjoy selecting your favourite home plants</p>
                </div>

                <form onSubmit={handleSearchSubmit} className="search-input mb-4">

                    <button
                        type="button"
                        onClick={() => {
                            setSearch('');
                            setFilter((state) => ({ ...state, search: '' }));
                        }}
                        className="px-4 py-2 bg-white text-black text-decoration-underline rounded-lg hover:bg-gray-400"
                    >
                        Home
                    </button>
                    <div className="search-container relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            name='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <button type="submit" className="absolute inset-y-0 right-3 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-500 hover:text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m0 0a8 8 0 111.35-1.35M15.5 10a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </form>

                <div className="container">

                    <div className="row gy-5">
                        {
                            pending ?
                                <div className="spinner-container">
                                    <div className="spinner"></div>
                                </div>
                                : plants.length > 0 ?
                                    plants.map(plant => <CatalogItem key={plant._id} plant={plant} />)
                                    : <>
                                        <hr />
                                        <h1>There are no posts</h1>
                                    </>

                        }

                    </div>

                    {totalPages > 1 && (
                        <div className="pagination-container mt-5">
                            <ReactPaginate
                                previousLabel="<"
                                nextLabel=">"
                                breakLabel="..."
                                pageCount={totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={pageClickHandler}
                                containerClassName="pagination flex justify-center gap-2"
                                pageClassName="px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-200"
                                activeClassName="bg-green-500 text-white"
                                previousClassName="px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-200"
                                nextClassName="px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-200"
                            />
                        </div>
                    )}
                </div>

            </section>
        </>
    );
}