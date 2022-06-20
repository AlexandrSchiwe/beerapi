

const BeerCard = (props) => {

    return (
        <div className="beer-item">
            <img src={props.img} alt={props.name} />
            <div>
                <p>{props.name}</p>
                <p>{props.tagline}</p>
            </div>
        </div>
    )
}

export default BeerCard;