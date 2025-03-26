import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import '../plant-swiper/SwiperPlants.css';
import CommentItem from './comment-item/CommentItem';

export default function CommentsSwiper({
    comments
}) {

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
                                    <CommentItem comment={comment} />
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