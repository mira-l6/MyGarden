import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import '../plant-swiper/SwiperPlants.css';
import { useDeleteComment } from '../../api/commentApi';
import { useMessageContext } from '../../contexts/MessageContext';
import useAuth from '../../hooks/useAuth';

export default function CommentsSwiper({
    comments,
    onDelete
}) {

    const { remove } = useDeleteComment();
    const { showMessage } = useMessageContext();

    const { _id } = useAuth();

    const deleteHandler = async (commentId) => {

        const result = await remove(commentId);
        if (result.message) {

            showMessage('❌ ' + result.message);
            return;
        }

        onDelete(commentId);
    }

    return (
        <div className="services-carousel-wrap">
            <div className="container">
                <div className="swiper init-swiper">
                    {/* Swiper Configuration */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView="auto"
                        pagination={{
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.js-custom-next',
                            prevEl: '.js-custom-prev',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >

                        {/* these buttons dont work */}
                        <button className="navigation-prev js-custom-prev carousel-button">
                        </button>
                        <button className="navigation-next js-custom-next carousel-button">
                        </button>

                        {
                            comments.map((comment, index) => (
                                <SwiperSlide key={comment._id || index} className="p-4">
                                    <div className="bg-white rounded-lg shadow-md p-4 flex items-start gap-4 sm:flex-row flex-col sm:items-center max-w-full">
                                        {/* <img
                                            className="user-image w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                            src={isUserImage
                                                ? "https://img.freepik.com/premium-vector/person-with-green-blue-logo-that-says-name_1076610-66914.jpg"
                                                : comment.plantImage
                                            }
                                            alt="User Avatar"
                                        /> */}
                                        <div className="w-full overflow-hidden">
                                            <h4 className="comment-user text-sm font-semibold text-gray-800 break-words">{comment.email}</h4>
                                            <p className="comment-text text-dark text-sm break-words overflow-hidden">{comment.comment}</p>
                                        </div>

                                        {/* TODO: only for creators */}
                                        {comment._ownerId == _id &&
                                            <button className="absolute top-10 right-10 text-lg" onClick={() => deleteHandler(comment._id)}>❌</button>}
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
}