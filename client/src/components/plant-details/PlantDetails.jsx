import { Link, useNavigate, useParams } from "react-router";
import "./PlantDetails.css";
import SubHeader from "../subheader/SubHeader";
import { useDeletePlant, usePlant } from "../../api/plantApi";
import { useState } from "react";

export default function PlantDetails() {

    const navigate = useNavigate();

    const { plantId } = useParams();
    const [plant, pending] = usePlant(plantId);

    const { deletePlant } = useDeletePlant();
    const [showDelete, setShowDelete] = useState(false);

    const revealDelete = () => setShowDelete(true);
    const hideDelete = () => setShowDelete(false);

    const deleteHandler = async () => {

        try {
            await deletePlant(plantId);
        }
        catch (err) {
            console.log(err.message);
        }

        navigate('/plants');
    }

    return (
        <>
            <SubHeader subtitle="Catalog" title={plant.common_name} />

            <section id="about" className="about section">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="image-container col-lg-6 mb-4 mb-lg-0 flex justify-center">
                                {pending ? (
                                    <div className="spinner-container">
                                        <div className="spinner"></div>
                                    </div>
                                ) : (
                                    <img
                                        src={plant.image_url}
                                        alt="Plant Image"
                                        className="w-100 h-100 object-cover shadow-lg"
                                        data-aos="zoom-out"
                                    />
                                )}
                            </div>
                            <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="content-subtitle text-white opacity-50 mt-5">Details</h3>
                                <h2 className="content-title mb-4">
                                    <strong>{plant.common_name}</strong>
                                </h2>
                                <p className="plant-description opacity-50">{plant.description}</p>

                                <div className="grid grid-cols-1 gap-4 my-5 text-white">
                                    <div className="flex items-start">
                                        <i className="bi bi-cloud-rain me-4 text-2xl"></i>
                                        <div>
                                            <h4 className="m-0 h5">Care Tips</h4>
                                            <p className="opacity-80">{plant.care_tips}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="bi bi-heart me-4 text-2xl"></i>
                                        <div>
                                            <h4 className="m-0 h5">Family Name</h4>
                                            <p className="opacity-80">{plant.family_common_name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="bi bi-text-left me-4 text-2xl"></i>
                                        <div>
                                            <h4 className="m-0 h5">Rank</h4>
                                            <p className="opacity-80">{plant.rank}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="bi bi-star me-4 text-2xl"></i>
                                        <div>
                                            <h4 className="m-0 h5">Status</h4>
                                            <p className="opacity-80 capitalize">{plant.status}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="buttons flex gap-4 mt-6">
                                    <button className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition">
                                        <Link to={`/plants/edit/${plantId}`} className="text-black no-underline">Edit</Link>
                                    </button>
                                    <button className="px-4 py-2 bg-red-600 text-dark rounded-lg shadow-md hover:bg-red-700 transition" onClick={revealDelete}>Delete</button>
                                </div>

                                {showDelete && (
                                    <div className="delete-popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                            <h2 className="text-lg text-dark font-bold mb-4 text-gray-800">Confirm Deletion</h2>
                                            <p className="mb-4 text-dark">Are you sure you want to delete {`"${plant.common_name}"`}?</p>
                                            <div className="flex justify-end gap-4">
                                                <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition" onClick={hideDelete}>Cancel</button>
                                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition" onClick={deleteHandler}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
