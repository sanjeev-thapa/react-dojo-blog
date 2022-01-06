import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>The Page you are looking for could not be found.</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFound;