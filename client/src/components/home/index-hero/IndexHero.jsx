import hero1 from '../../../assets/img/hero_1.jpg'
import hero2 from '../../../assets/img/hero_2.jpg'
import hero3 from '../../../assets/img/hero_3.jpg'

export default function IndexHero() {
    return (
        <section id="hero" className="hero section dark-background">

            <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                <div className="carousel-item active">
                    <img src={hero1} alt="" />
                    <div className="carousel-container">
                        <h2>Create and manage your virtual garden</h2>
                        <p>Easily design and build your own virtual garden from scratch, where you can add plants, track their growth, and monitor their care needs.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={hero2} alt="" />
                    <div className="carousel-container">
                        <h2>Organise your own existing garden</h2>
                        <p>Transform your real-life garden into a digital representation by cataloging your plants in our easy-to-use garden management tool.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={hero3} alt="" />
                    <div className="carousel-container">
                        <h2>Gather new information about variations of unique plants</h2>
                        <p>Discover and learn about a vast array of plant species, including rare and unique variations, with detailed information and growth guidelines at your fingertips. </p>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>

                <ol className="carousel-indicators">
                    <li data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#hero-carousel" data-bs-slide-to="2"></li>
                </ol>


            </div>

        </section>
    );
}