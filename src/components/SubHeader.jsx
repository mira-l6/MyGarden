import backgroundImage from '../assets/img/page-title-bg.webp';

export default function SubHeader() {
    return (
        <div 
            className="page-title dark-background" 
            data-aos="fade" 
            style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container position-relative">
                <h1>About</h1>
                <nav className="breadcrumbs">
                    <ol>
                        <li><a>Home</a></li>
                        <li className="current">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}