import SwiperPlants from "../plant-swiper/SwiperPlants";
import IndexAbout from "./index-about/IndexAbout";
import IndexFunctionalities from "./index-functionalities/IndexFunctionalities";
import IndexHero from "./index-hero/IndexHero";

import { usePlants } from '../../api/plantApi';

export default function Home() {

    const [popularPlants] = usePlants({ pageSize: 5 });
    
    return (
        <>
            <IndexHero /> 
            <IndexFunctionalities />
            <SwiperPlants 
                plants={popularPlants}
                title="Most popular plants"
                subtitle="Preview" />
            <IndexAbout />
        </>
    );
}