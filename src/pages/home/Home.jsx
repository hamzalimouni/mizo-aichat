import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <img src="/orbital.png" alt="" className='orbital' />
            <div className="left">
                <h1>MIZO AI</h1>
                <h2>Supercharge tour creativity and productivity</h2>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis corrupti quam impedit qui, laudantium laboriosam.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Home