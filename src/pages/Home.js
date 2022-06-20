
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className='home'>
            <div className='home__container'>
                <Link to={'/beers'}>
                    <div className='home__container__flex'>
                        <h3>Our Selection...</h3>
                    </div>
                </Link>
                <p>
                    of our finest beers for you to discover.
                </p>
            </div>
        </header>
    );
};
export default Home;