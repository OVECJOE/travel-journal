export default function TravelCard(props) {
    return (
        <div className="App-travel_card">
            <div className="location-photo">
                <img src={props.imageUrl}
                    alt={`${props.title} in ${props.location}`} />
            </div>
            <div className="travel-info">
                <div className="location">
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{props.location}</p>
                    </div>
                    <a href={props.locationUrl}>View on Google Maps</a>
                </div>
                <div className="travel-content">
                    <h2>{props.title}</h2>
                    <p className="travel-duration">
                        {props.startDate} &mdash; {props.endDate}
                    </p>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}