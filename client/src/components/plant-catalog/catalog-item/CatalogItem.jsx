import { Link } from 'react-router';

export default function CatalogItem({
    plant
}) {

    return (
        <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="200">

                <div className="post-img position-relative overflow-hidden">
                    <img src={plant.image_url} className="img-fluid plant-image" alt="" />
                    {/* <span className="post-date">July 17</span> */}
                </div>

                <div className="post-content d-flex flex-column">

                    <h3 className="post-title">{plant.common_name}</h3>

                    <div className="meta d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-tree"></i> <span className="ps-2">{plant.family_common_name}</span>
                        </div>
                        <span className="px-3 text-black-50">/</span>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-text-left"></i> <span className="ps-2">{plant.rank}</span>
                        </div>
                    </div>

                    <hr />

                    <Link to={`/catalog/details/${plant.id}`} className="readmore stretched-link"><span>Details</span><i className="bi bi-arrow-right"></i></Link>
                </div>

            </div>
        </div>
    );
}