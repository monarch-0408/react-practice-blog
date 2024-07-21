import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('p1');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title,body, author }

        setIsPending(true)
    
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added")
            setIsPending(false)
            navigate('/')
        })
    }

    return(
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type = "text"
                    value = {title}
                    required
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog input</label>
                <textarea
                    type = "text"
                    value = {body}
                    required
                    onChange = {(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author</label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value = "p1">p1</option>
                    <option value = "p2">p2</option>
                </select>
                { !isPending &&  <button>Submit Blog</button> }
                { isPending &&  <button disabled>Adding...</button> }

            </form>
        </div>
    )
}

export default Create;