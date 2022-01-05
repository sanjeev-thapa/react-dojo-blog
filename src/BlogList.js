const BlogList = ({title}) => {
    return (
        <div className="blog-list">
            { title && <h2>{ title }</h2> }
            <div className="blog">
                <h2>Blog Title</h2>
                <p>Written By: author</p>
            </div>
        </div>
    );
}

export default BlogList;

