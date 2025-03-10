import hero1 from '../assets/img/hero_1.jpg'
import hero2 from '../assets/img/hero_2.jpg'
import hero3 from '../assets/img/hero_3.jpg'

export default function IndexHero() {
    return (
        <section id="hero" className="hero section dark-background">

            <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                <div className="carousel-item active">
                    <img src={hero1} alt="" />
                        <div className="carousel-container">
                            <h2>Create and manage your own virtual garden</h2>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                        </div>
                </div>

                <div className="carousel-item">
                    <img src={hero2} alt="" />
                        <div className="carousel-container">
                            <h2>Organic vegetables is good for health</h2>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                        </div>
                </div>

                <div className="carousel-item">
                    <img src={hero3} alt="" />
                        <div className="carousel-container">
                            <h2>Providing Fresh Produce Every Single Day</h2>
                            <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        </div>
                </div>

                <div className="carousel-item">
                    <img src="assets/img/hero_4.jpg" alt="" />
                        <div className="carousel-container">
                            <h2>Farming as a Passione</h2>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.</p>
                        </div>
                </div>

                <div className="carousel-item">
                    <img src="assets/img/hero_5.jpg" alt="" />
                        <div className="carousel-container">
                            <h2>Good Food For All</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>

                <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>

                <ol className="carousel-indicators"></ol>

            </div>

        </section>
    );
}