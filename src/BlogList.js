const BlogList = ({title, blogs}) => {
    return (
        <div className="blog-list">
            { title && <h2>{ title }</h2> }
            { blogs.map((blog) => (
                <div className="blog" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;

