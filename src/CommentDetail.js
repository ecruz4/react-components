import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }} className="commment">
        <a href="/" className="avatar">
            <img style={{ maxWidth: "100px", padding: "10px" }} alt="avatar" src={faker.image.animals()} />
        </a>
        <div className="content">
            <a href="/" className="author">
                Sam
            </a>
            <div className="metadata">
                <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog post!</div>
        </div>
    </div>
    );
}; 

export default CommentDetail;