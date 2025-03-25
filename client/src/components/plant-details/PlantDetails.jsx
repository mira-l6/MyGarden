import { Link, useParams } from "react-router";

import './PlantDetails.css';

import SubHeader from "../subheader/SubHeader";
import { usePlant } from "../../api/plantApi";

export default function PlantDetails() {

    const { plantId } = useParams();
    const [plant, pending] = usePlant(plantId);

    return (
        <>
            <SubHeader subtitle="Catalog" title={plant.common_name} />

            <section id="about" className="about section">

                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                {pending
                                    ? <div className="spinner-container">
                                        <div className="spinner"></div>
                                    </div>
                                    : <img src={plant.image_url} alt="Image " className="img-fluid img-overlap" data-aos="zoom-out" />
                                }
                            </div>
                            <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="content-subtitle text-white opacity-50">Details</h3>
                                <h2 className="content-title mb-4">
                                    <strong>{plant.common_name}</strong>
                                </h2>
                                <p className="plant-description opacity-50">
                                    {plant.description}
                                </p>

                                <div className="row my-5">
                                    <div className="col-lg-12 d-flex align-items-start mb-4">
                                        <i className="bi bi-cloud-rain me-4 display-6"></i>
                                        <div>
                                            <h4 className="m-0 h5 text-white">Care tips</h4>
                                            <p className="text-white opacity-80">{plant.care_tips}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-start mb-4">
                                        <i className="bi bi-heart me-4 display-6"></i>
                                        <div>
                                            <h4 className="m-0 h5 text-white">Familly name</h4>
                                            <p className="text-white opacity-80">{plant.family_common_name}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-start">
                                        <i className="bi bi-text-left me-4 display-6"></i>
                                        <div>
                                            <h4 className="m-0 h5 text-white">Rank</h4>
                                            <p className="text-white opacity-80">{plant.rank}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="buttons flex gap-4 mt-6">
                                    <button className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-white-300 transition">
                                        <Link to={`/plants/edit/${plantId}`} className="text-black no-underline" >Edit</Link></button>
                                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}