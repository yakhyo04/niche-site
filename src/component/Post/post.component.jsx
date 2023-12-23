
const Post = () => {
    return(
        <form action="post" className="post auth__wrapper">
            <h3>Send the Website link</h3>
            <input className="post__input" type="text" placeholder="Enter the link" />
            <input className="post__input" type="text" placeholder="Enter the description about that Website" />
            <button className="post__button btn btn-primary" type="submit">Send</button>
        </form>
    )
}

export default Post;