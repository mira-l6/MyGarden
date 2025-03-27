import { useNavigate, useParams } from 'react-router';

import SubHeader from "../subheader/SubHeader";

import '../plant-create/Create.css';
import { useEditPlant, usePlant } from '../../api/plantApi';
import { useMessageContext } from '../../contexts/MessageContext';
import { useEffect } from 'react';
import requester from '../../utils/requester';
import useAuth from '../../hooks/useAuth';

export default function PlantEdit() {

    const navigate = useNavigate();
    const { showMessage } = useMessageContext();

    const { _id } = useAuth();

    const { plantId } = useParams();
    const [plant] = usePlant(plantId);

    const { edit } = useEditPlant();

    const editAction = async (formData) => {

        const plantData = Object.fromEntries(formData);

        const result = await edit(plantId, plantData);
        if (!result.common_name) {

            showMessage('❌ ' + result.message);
            return;
        }
        navigate(`/plants/details/${plantId}`);
    }

    useEffect(() => {

        requester.get(`http://localhost:3030/data/plants/${plantId}`)
            .then(data => {
                if (data._ownerId != _id) {
                    showMessage('❌ You are not the owner of this plant.');
                    navigate(`/plants/details/${plantId}`)
                }
            })
    }, [plantId, showMessage, navigate, _id])

    return (
        <div className="create-container">
            <SubHeader title='Edit a plant' subtitle="Home" />
            <div className="flex justify-center items-center py-8 px-4 bg-gray-50 min-h-[80vh]">
                <div className="form-container w-full max-w-4xl bg-white shadow-md rounded-xl p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800">
                        Edit an Existing Plant 🌿
                    </h2>
                    <form action={editAction} className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label className="block mb-1 text-gray-700 text-sm font-medium">Common Name</label>
                                <input
                                    type="text"
                                    name="common_name"
                                    placeholder="Spider plant"
                                    defaultValue={plant.common_name}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1 text-gray-700 text-sm font-medium">Family Common Name</label>
                                <input
                                    type="text"
                                    name="family_common_name"
                                    defaultValue={plant.family_common_name}
                                    placeholder="Cress family"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                                />
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label className="block mb-1 text-gray-700 text-sm font-medium">Status</label>
                                <input
                                    type="text"
                                    name="status"
                                    placeholder="unknown"
                                    defaultValue={plant.status}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1 text-gray-700 text-sm font-medium">Rank</label>
                                <input
                                    type="text"
                                    name="rank"
                                    placeholder="species"
                                    defaultValue={plant.rank}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                                />
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm font-medium">Image URL</label>
                            <input
                                type="url"
                                name="image_url"
                                placeholder="http://..."
                                defaultValue={plant.image_url}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm font-medium">Description</label>
                            <textarea
                                name="description"
                                rows="2"
                                placeholder="This plant is a resilient and easy-to-grow vine plant, which..."
                                defaultValue={plant.description}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                            />
                        </div>

                        {/* Care Tips */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm font-medium">Care Tips</label>
                            <textarea
                                name="care_tips"
                                rows="2"
                                placeholder="Water when the soil is dry and place in bright, indirect sunlight..."
                                defaultValue={plant.care_tips}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 text-white text-sm font-medium rounded-md bg-green-900 hover:bg-green-800"
                        >
                            Edit Plant
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
