import './watch.scss'
import { ArrowBackOutlined } from '@mui/icons-material'
import { useLocation, Link } from 'react-router-dom'

const Watch = () => {
    const location = useLocation();
    const movie = location.state.movie;
    console.log(movie);
    return (
        <div className='watch'>
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video className='video' autoPlay progress controls src={movie.video} />
        </div>
    )
}

export default Watch