
import { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';

const BeerSelection = () => {

    const [selection, setSelection] = useState([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => setSelection(json))
    }, [selection]);

    // console.log(selection);

    return <section>
        {selection.map(elt =>
            <BeerCard
                name={elt.name}
                tagline={elt.tagline}
                img={elt.image_url}
            />
        )}
    </section>;
}

export default BeerSelection;