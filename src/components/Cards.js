import React, { useState } from "react";

function Cards({ name, specialty, greased, weight, highest, image }) {
    const [showDetails, setShowDetails] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [likes, setLikes] = useState(0);
    const [hidden, setHidden] = useState(false); // State to manage hiding the card

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    const handleDeleteComment = (index) => {
        setComments(comments.filter((_, i) => i !== index));
    };

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    const handleHideCards = () => {
        setHidden(true); // Hide the card
    };

    if (hidden) return null; // Return null to hide the card

    return (
        <div className="ui card" onClick={handleToggleDetails}>
            <div className="content">
                <div className="right floated meta">14h</div>
                <img className="ui avatar image" src={image} alt={name} />
                {name}
            </div>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="content">
                <span className="right floated">
                    <i className="heart outline like icon" onClick={handleLikeClick}></i>
                    {likes} likes
                </span>
                <i className="comment icon"></i>
                {comments.length} comments
            </div>
            <div className="extra content">
                <form onSubmit={handleAddComment}>
                    <div className="ui large transparent left icon input">
                        <i className="heart outline icon"></i>
                        <input
                            type="text"
                            placeholder="Add Comment..."
                            value={newComment}
                            onChange={handleCommentChange}
                        />
                    </div>
                    <button type="submit" className="ui button">Submit</button>
                </form>
            </div>
            {showDetails && (
                <div className="details">
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    <p>Highest Medal Achieved: {highest}</p>
                    <p>Greased: {greased ? "Yes" : "No"}</p>
                </div>
            )}
            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        {comment}
                        <button onClick={() => handleDeleteComment(index)} className="ui red button">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={handleHideCards} style={buttonStyles}>
                Hide Cards
            </button>
        </div>
    );
}

const buttonStyles = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'pink',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default Cards;
