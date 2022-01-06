import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const [isDeletePending, setIsDeletePending] = useState(false);
    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete?')){
            setIsDeletePending(true);
            fetch(`http://localhost:8000/blogs/${blog.id}`, {
                method: 'DELETE'
            })
            .then((response) => {
                if(!response.ok){
                    throw Error('An Error Occurred');
                }
                history.push('/');
                setIsDeletePending(false);
            })
            .catch((error) => {
                alert('An Error Occurred');
                setIsDeletePending(false);
            });
        }
    }

    return ( 
        <div className="blog-details">
            { error && <div> { error } </div> }
            { blog && (
                <div>
                    <h2> { blog.title } </h2>
                    <p>Written By: { blog.author }</p>
                    <div>{ blog.body }</div>
                    { !isDeletePending && <button onClick={ handleDelete }>Delete</button> }
                    { isDeletePending && <button className="disabled" disabled>Deleting...</button> }
                </div>
            )}
            { isPending && <div> loading... </div> }
        </div>
    );
}
 
export default BlogDetails;