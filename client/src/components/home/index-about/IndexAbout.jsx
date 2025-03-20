import { Link } from 'react-router';
import image from '../../../assets/img/img_sq_8.jpg';

import './IndexAbout.css';

export default function IndexAbout() {
    return (
        <section id="about-3" className="about-3 section">

            <div id='indexAbout' className="container">
                <div className="row gy-4 justify-content-between align-items-center">
                    <div className="col-lg-6 order-lg-2 position-relative plan-item" data-aos="zoom-out">
                        <img src={image} alt="Plant image" className="img-fluid plant-image" />
                    </div>
                    <div className="col-lg-5 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="content-title mb-4">Plants Make Life Better</h2>
                        <p className="mb-5">
                            Explore, Learn, and Grow
                            <hr />
                            Take a stroll through the garden to discover different plant varieties, learn about their benefits, and gain tips on how to care for them. Whether you are a seasoned gardener or just starting out, there’s always something new to discover in the world of plants.

                            <hr />
                            A Breath of Fresh Air
                            <hr />
                            Plants not only brighten up any space but also bring a sense of tranquility and connection to nature. In our virtual garden, you can relax, breathe deeply, and let nature’s beauty take center stage.
                        </p>

                        <p><Link to="/login" className="btn-cta">Create your Garden</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}