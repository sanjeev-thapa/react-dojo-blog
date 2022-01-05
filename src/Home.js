import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((response) => {
                if(!response.ok){
                    throw Error('An Error Occurred');
                }
                return response.json();
            })
            .then((data) => {
                setBlogs(data);
                setError(null);
            })
            .catch((error) => {
                setBlogs(null);
                setError(error.message);
            });
        setIsPending(false);
    }, []);

    return (
        <div className="home">
            { blogs && <BlogList title="All Blogs" blogs={blogs} /> }
            { error }
            { isPending && <div>Loading...</div> }
        </div>
    );
}

export default Home;