import image from '../../../assets/img/img_sq_8.jpg';
import './IndexAbout.css';

export default function IndexAbout() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    {/* Image Column - appears second on desktop, first on mobile */}
                    <div className="about-image" data-aos="zoom-out">
                        <img 
                            src={image} 
                            alt="Healthy indoor plant in pot" 
                            className="plant-image" 
                        />
                    </div>

                    {/* Text Content Column - appears first on desktop, second on mobile */}
                    <div className="about-text" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="about-title">Plants Make Life Better</h2>
                        <div className="about-description">
                            <p>
                                Explore, Learn, and Grow with our virtual garden. Take a stroll through our 
                                collection to discover different plant varieties, learn about their benefits, 
                                and gain expert tips on plant care.
                            </p>
                            <p>
                                Whether you are a seasoned gardener or just starting your green journey, 
                                there is always something new to discover in the wonderful world of plants.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}