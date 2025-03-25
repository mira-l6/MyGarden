import './Catalog.css';

import SubHeader from "../subheader/SubHeader.jsx";
import CatalogItem from "./catalog-item/CatalogItem.jsx";
import { usePlants } from '../../api/plantApi.js';

export default function Catalog() {

    const [plants, pending] = usePlants();

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

                </div>

            </section>
        </>
    );
}