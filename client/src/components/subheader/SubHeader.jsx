import backgroundImage from '../../assets/img/page-title-bg.webp';

export default function SubHeader({
    title,
    subtitle
}) {
    return (
        <div 
            className="page-title dark-background" 
            data-aos="fade" 
            style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container position-relative">
                <h1>{title}</h1>
                <nav className="breadcrumbs">
                    <ol>
                        <li><a>{subtitle}</a></li>
                        <li className="current">{title}</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}