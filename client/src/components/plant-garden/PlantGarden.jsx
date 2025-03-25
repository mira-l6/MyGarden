    import { useNavigate } from "react-router";
import { usePlants } from "../../api/plantApi";
    import useAuth from "../../hooks/useAuth";
    import SubHeader from "../subheader/SubHeader";

    export default function PlantGarden() {

        const {_id} = useAuth();

        const [plants] = usePlants({
            sortBy: 'status asc',
            where: `_ownerId="${_id}"`
        });

        const navigate = useNavigate();

        return (
            <>
                <SubHeader subtitle="Home" title="Personal Garden" />
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Some of your recent plants 🌿</h2>
                    <hr />

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                        {plants.length > 0
                            ? plants.map(plant => <div key={plant._id} className="group relative">
                                <img src={plant.image_url} />
                                <div className="mt-4 flex justify-between" onClick={() => navigate(`/plants/details/${plant._id}`)} >
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                {plant.common_name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{plant.family_common_name}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{plant.rank}</p>
                                </div>
                            </div>)
                            : <h3>No plants found</h3>
                        }

                    </div>
                </div>
            </>
        );
    }