import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './PopularPlants.css';

import { usePlants } from '../../api/plantApi';

export default function ServicesSection() {

    const [popularPlants] = usePlants({ pageSize: 5 });

    return (
        <section id="services-2" className="services-2 section dark-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>Most popular plants</h2>
                <p>Preview</p>
            </div>

            <div className="services-carousel-wrap">
                <div className="container">
                    <div className="swiper init-swiper">
                        {/* Swiper Configuration */}
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            loop={true}
                            speed={600}
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
                            <button className="navigation-prev js-custom-prev carousel-button">
                                <i className="bi bi-arrow-left-short"></i>
                            </button>
                            <button className="navigation-next js-custom-next carousel-button">
                                <i className="bi bi-arrow-right-short"></i>
                            </button>

                            {
                                popularPlants.map((plant, index) => (
                                    <SwiperSlide key={plant._id || index}>
                                        <div className="service-item plant-item">
                                            <div className="service-item-contents">
                                                <a href="#indexAbout">
                                                    <span className="service-item-category">Plant</span>
                                                    <h2 className="service-item-title">{plant.common_name}</h2>
                                                </a>
                                            </div>
                                            <img src={plant.image_url} alt={plant.common_name} className="img-fluid plantImage" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }


                        </Swiper>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
