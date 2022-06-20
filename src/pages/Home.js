
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to={'/selection'}>
                <h3>Our Selection...</h3>
            </Link>
            <p>
                of our finest beers for you to discover.
            </p>
        </div>
    );
};
export default Home;