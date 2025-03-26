import { usePlants } from "../../api/plantApi";
import useAuth from "../../hooks/useAuth";

import SubHeader from "../subheader/SubHeader";
import SwiperPlants from "../plant-swiper/SwiperPlants";
import '../plant-swiper/SwiperPlants.css'
import CommentsSwiper from "../comments-swiper/CommentsSwiper";
import { useComments } from "../../api/commentApi";

export default function PlantGarden() {

    const { _id } = useAuth();

    const [plants] = usePlants({
        sortBy: 'status asc',
        where: `_ownerId="${_id}"`,
    });

    const [comments] = useComments('', _id);
    console.log(comments)

    return (
        <>
            <SubHeader subtitle="Home" title="Personal Garden" />
            <SwiperPlants
                plants={plants}
                title="Your own home plants "
                subtitle="Catalog 🌿" />

            <div className="mb-5 d-flex justify-content-center flex-column">
                <h3 className="ps-5 text-center">Some of your comments</h3>
                <hr />
                <CommentsSwiper 
                    comments={comments}
                    isUserImage={false} />
            </div>
        </>
    );
}