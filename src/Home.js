import useFetch from './useFetch';
import BlogList from './BlogList';

const Home = () => {
    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { blogs && <BlogList title="All Blogs" blogs={blogs} /> }
            { error }
            { isPending && <div>Loading...</div> }
        </div>
    );
}

export default Home;