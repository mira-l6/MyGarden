import './Catalog.css';

import SubHeader from "../subheader/SubHeader.jsx";
import CatalogItem from "./catalog-item/CatalogItem.jsx";

import ReactPaginate from "react-paginate";

import { usePlants } from '../../api/plantApi.js';
import { useState } from 'react';

export default function Catalog() {

    const [filter, setFilter] = useState({
        page: 1,
        pageSize: 6
    });

    const [plants, pending, totalPages] = usePlants(filter);

    const pageClickHandler = ({ selected }) => {

        setFilter(state => {
            return {
                ...state,
                page: selected + 1
            }
        })
    }

    return (
        <>
            <SubHeader subtitle="Home" title="Plant Catalog" />

            <section id="recent-posts" className="recent-posts section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Check out our plant catalog</h2>
                    <p>Enjoy selecting your favourite home plants</p>
                </div>
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