import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './PopularPlants.css';

import { useEffect, useState } from 'react';

export default function ServicesSection() {

    const [plants, setPlants] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3030/jsonstore/plants')
            .then(response => response.json())
            .then(data => {
                const plants = Object.values(data);
                setPlants([plants[0], plants[1], plants[2], plants[3], plants[4]])
            });
    }, []);

    console.log(plants);

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

                            {plants.map(plant => (
                                <SwiperSlide key={plant._id}>
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
                            ))}


                        </Swiper>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
