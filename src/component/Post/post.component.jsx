import { useState } from "react";

const Post = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch('https://niche-site-backend.onrender.com/post', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if(!response.ok){
                throw new Error('Failed to post data');
            }
            alert('Data posted successfully!');
            setFormData({ title: '', description: '' });
        }catch(error){
            console.error('Error posting data: ', error);
        }
    }
    return(
        <form onSubmit={handleSubmit} className="post auth__wrapper">
            <h3>Send the Website link</h3>
            <input className="post__input" name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Enter the link" />
            <input className="post__input" name="description" value={formData.description} onChange={handleChange} type="text" placeholder="Enter the description about that Website" />
            <button className="post__button btn btn-primary" type="submit">Send</button>
        </form>
    )
}

export default Post;