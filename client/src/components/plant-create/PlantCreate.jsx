import { useCreatePlant } from "../../api/plantApi";
import { useNavigate } from 'react-router';

import SubHeader from "../subheader/SubHeader";

import './Create.css';

export default function PlantCreate() {

    const { create } = useCreatePlant();
    const navigate = useNavigate();

    const createAction = (formData) => {

        const plantData = Object.fromEntries(formData);
        create(plantData);

        navigate('/plants');
    }

    return (
        <div className="create-container">
            <SubHeader title='Create a plant' subtitle="Home" />
            <div className="flex justify-center items-center py-8 px-4 bg-gray-50 min-h-[80vh]">
                <div className="form-container w-full max-w-4xl bg-white shadow-md rounded-xl p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800">
                        Create a New Plant 🌿
                    </h2>
                    <form action={createAction} className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label className="block mb-1 text-gray-700 text-sm font-medium">Common Name</label>
                                <input
                                    type="text"
                                    name="common_name"
                                    placeholder="Spider plant"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1 text-gray-700 text-sm font-medium">Family Common Name</label>
                                <input
                                    type="text"
                                    name="family_common_name"
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
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 text-white text-sm font-medium rounded-md bg-green-900 hover:bg-green-800"
                        >
                            Create Plant
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
