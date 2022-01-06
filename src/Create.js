import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('John Doe');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
        .then((response) => {
            setIsPending(false);
            if(!response.ok){
                throw Error('An Error Occurred');
            }
            history.push('/');
        })
        .catch((error) => {
            setIsPending(false);
            alert(error);
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <label>Blog Body</label>
                <textarea 
                    rows="5"
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                >
                </textarea>

                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                >
                    <option>John Doe</option>
                    <option>Jane Smith</option>
                </select>

                { !isPending && <button>Create Blog</button> }
                { isPending && <button className="disabled" disabled>Creating Blog...</button> }
            </form>
        </div>
    );
}

export default Create;