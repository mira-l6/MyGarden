import SubHeader from "../subheader/SubHeader";

export default function About() {
    return (
        <div className="bg-green-50 min-h-screen">
            {/* SubHeader Component */}
            <SubHeader subtitle="Home" title="About" />

            {/* About Section */}
            <section className="py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-green-700 mb-6">
                        Welcome to Your Virtual Garden
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Our virtual garden allows you to create, manage, and organize your plants in a digital space.
                        Whether you’re a seasoned gardener or just starting out, this platform is designed to help you cultivate your garden virtually, while gaining knowledge and inspiration to expand your plant collection.
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
                        You can easily add new plants, track their growth, and keep a record of care tips and routines.
                        The virtual garden also provides tools to manage your existing plants, helping you to stay organized with reminders and tips.
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
                        Our goal is to make gardening easier, more fun, and more accessible for everyone, no matter where you are on your gardening journey.
                    </p>
                    <h3 className="text-2xl font-semibold text-green-600 mt-5">
                        Join us today and start cultivating your dream garden!
                    </h3>
                    <hr />
                </div>
            </section>

            <section className="bg-white pt-0">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-green-700 mb-6">Features of Our Virtual Garden</h3>
                    <section id="blog-posts-2" className="blog-posts-2 section">

                        <div className="container">
                            <div className="row gy-4">

                                <div className="col-lg-4">
                                    <article className="position-relative h-100">

                                        <div className="post-img position-relative overflow-hidden">
                                            <img src="https://m.media-amazon.com/images/I/81U8LouiSEL._AC_UF894,1000_QL80_.jpg" className="img-fluid" alt="" />

                                        </div>

                                        <div className="meta d-flex align-items-end">
                                            <span className="post-date"><span>🌱</span>Create</span>
                                        </div>

                                        <div className="post-content d-flex flex-column">
                                            <h3 className="post-title">Create your own unique or favourite plants</h3>
                                        </div>

                                    </article>
                                </div>

                                <div className="col-lg-4">
                                    <article className="position-relative h-100">

                                        <div className="post-img position-relative overflow-hidden">
                                            <img src="https://i.pinimg.com/736x/73/aa/32/73aa329dd21fb3adb64c08f5d85cf384.jpg" className="img-fluid" alt="" />

                                        </div>

                                        <div className="meta d-flex align-items-end">
                                            <span className="post-date"><span>🌿</span>Explore</span>
                                        </div>

                                        <div className="post-content d-flex flex-column">
                                            <h3 className="post-title">Explore our catalog and discover new plants</h3>
                                        </div>

                                    </article>
                                </div>

                                <div className="col-lg-4">
                                    <article className="position-relative h-100">

                                        <div className="post-img position-relative overflow-hidden">
                                            <img src="https://img.kwcdn.com/product/fancy/d5626880-24ac-46cd-b113-4c8bc4ab3078.jpg?imageView2/2/w/500/q/60/format/webp" className="img-fluid" alt="" />
                                        </div>
                                        <div className="meta d-flex align-items-end">
                                            <span className="post-date"><span>🌵</span>Comment</span>
                                        </div>

                                        <div className="post-content d-flex flex-column">
                                            <h3 className="post-title">Leave your feedback on every post and express your opinion</h3>
                                        </div>

                                    </article>
                                </div>

                            </div>
                        </div>

                    </section>
                </div>
            </section>
        </div>
    );
}
