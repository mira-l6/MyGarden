import { usePlants } from "../../api/plantApi";
import useAuth from "../../hooks/useAuth";

import SubHeader from "../subheader/SubHeader";
import SwiperPlants from "../plant-swiper/SwiperPlants";
import '../plant-swiper/SwiperPlants.css'

export default function PlantGarden() {

    const { _id } = useAuth();

    const [plants] = usePlants({
        sortBy: 'status asc',
        where: `_ownerId="${_id}"`,
    });

    return (
        <>
            <SubHeader subtitle="Home" title="Personal Garden" />
            <SwiperPlants 
                plants={plants}
                title="Your own home plants "
                subtitle="Catalog 🌿" />
        </>
    );
}