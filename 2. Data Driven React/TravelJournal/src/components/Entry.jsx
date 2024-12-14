import "../stylesheets/Entry.css"
import marker from "../assets/marker.svg"

export default function MainContent(prop) {
    console.log(prop)
    return (
        <>
            <article>
                <img src={prop.imgUrl} alt={prop.imgAlt} className="article-img"/>
                <div className="article-content">
                    <div className="article-header">
                        <img src={marker} alt="marker" className="marker"/>
                        <span className="article-country">{prop.location}</span>
                        <span className="maps-link">View on Google Maps</span>
                    </div>
                    <div className="article-info">
                        <h2 className="info-location">{prop.place}</h2>
                        <span className="date">{prop.date}</span>
                    </div>
                    <p className="article-desc">{prop.desc}</p>
                </div>
            </article>
        </>
    )
}