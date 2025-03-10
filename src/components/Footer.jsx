export default function Footer() {
    return (
        <footer id="footer" class="footer dark-background">

            <div class="footer-top">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" class="logo d-flex align-items-center">
                                <span class="sitename">Virtual Garden</span>
                            </a>
                        </div>

                        <div class="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Catalog</a></li>
                                <li><a href="#">About us</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-2 col-md-3 footer-links">
                            <h4>Our resources</h4>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Product Management</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copyright text-center">
                <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                    <div class="d-flex flex-column align-items-center align-items-lg-start">
                        <div>
                            © Copyright <strong><span>MyWebsite</span></strong>. All Rights Reserved
                        </div>
                        <div class="credits">
                            {/* <!-- All the links in the footer should remain intact. --> */}
                            {/* <!-- You can delete the links only if you purchased the pro version. --> */}
                            {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
                            {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ --> */}
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                        </div>
                    </div>

                    <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>

                </div>
            </div>

        </footer>
    );
}