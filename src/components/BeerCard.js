
const BeerCard = (props) => {

    return (
        <div>
            <img src={props.img} alt={props.name} />
            <div>
                <p>{props.name}</p>
                <p>{props.tagline}</p>
            </div>
        </div>
    )
}

export default BeerCard;