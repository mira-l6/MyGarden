import { usePlants } from "../../api/plantApi";
import useAuth from "../../hooks/useAuth";

import SubHeader from "../subheader/SubHeader";
import SwiperPlants from "../plant-swiper/SwiperPlants";
import '../plant-swiper/SwiperPlants.css'
import CommentsSwiper from "../comments-swiper/CommentsSwiper";
import { useComments } from "../../api/commentApi";

export default function PlantGarden() {

    const { _id, email } = useAuth();

    const [plants] = usePlants({
        sortBy: 'status asc',
        where: `_ownerId="${_id}"`,
    });

    const [comments, setComments] = useComments('', _id);

    const commentDeleteHandler = (value) => {

        setComments(state => {
            return state.filter(s => s._id!== value);
        })
    }

    return (
        <>
            <SubHeader subtitle="Home" title="Personal Garden" />
            
            <SwiperPlants
                plants={plants}
                title={`${email} - home plants`} 
                subtitle="Catalog 🌿" />

            <div className="mb-5 d-flex justify-content-center flex-column">
                <h3 className="ps-5 text-center">Some of your comments</h3>
                <hr />

                {comments.length > 0 
                    ?<CommentsSwiper 
                    comments={comments}
                    isUserImage={false}
                    onDelete={commentDeleteHandler} />
                    : <h5 className="text-center">You have not made any comments</h5>}
                
            </div>
        </>
    );
}