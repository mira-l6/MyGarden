import { Link, useNavigate, useParams } from "react-router";
import "./PlantDetails.css";
import SubHeader from "../subheader/SubHeader";
import { useDeletePlant, usePlant } from "../../api/plantApi";
import { useState } from "react";
import CommentsSwiper from "../comments-swiper/CommentsSwiper";
import CommentsCreate from "../comments-create/CommentsCreate";
import PlantDeletePopup from "./plant-delete-popup/PlantDeletePopup";
import { useComments } from "../../api/commentApi";

export default function PlantDetails() {

    const navigate = useNavigate();

    const { plantId } = useParams();
    const [plant, pending] = usePlant(plantId);

    const [comments, setComments] = useComments(plantId);

    const { deletePlant } = useDeletePlant();
    const [showDelete, setShowDelete] = useState(false);

    const revealDelete = () => setShowDelete(true);
    const hideDelete = () => setShowDelete(false);

    const plantDeleteHandler = async () => {

        try {
            await deletePlant(plantId);
        }
        catch (err) {
            console.log(err.message);
        }

        navigate('/plants');
    }

    const commentCreateHandler = (value) => {
        setComments(state => [
            ...state,
            value
        ])
    }

    const commentDeleteHandler = (value) => {

        setComments(state => {
            return state.filter(s => s._id!== value);
        })
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
                                <h2 className="content-title mb-4 text-dark">
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
                                    <button className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-md hover:bg-gray-300 transition">
                                        <Link to={`/plants/edit/${plantId}`} className="edit-button text-white no-underline">Edit</Link>
                                    </button>
                                    <button className="delete-button text-white px-4 py-2 bg-red-500 rounded-lg shadow-md hover:bg-red-700 transition" onClick={revealDelete}>Delete</button>
                                </div>

                                {showDelete && <PlantDeletePopup
                                    plant={plant}
                                    hideDelete={hideDelete}
                                    deleteHandler={plantDeleteHandler} />}
                            </div>
                        </div>

                    </div>

                </div>
                <div className="mt-10 p-6 shadow-md grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-4 ps-5 text-dark">Comments</h3>
                        {comments.length > 0
                            ? <CommentsSwiper 
                                comments={comments} 
                                isUserImage={true}
                                onDelete={commentDeleteHandler} />
                            : <h5 className="ps-5">No comments yet</h5>}
                    </div>
                    <div className="p-4 shadow-md">
                        <CommentsCreate plantId={plantId} onCreate={commentCreateHandler} />
                    </div>
                </div>
            </section>
        </>
    );
}
