import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "1",
        comment: "리액트1",
    },
    {
        name: "2",
        comment: "리액터",
    },
    {
        name: "3",
        comment: "배고파",
    },
    {
        name: "4",
        comment: "배불러",
    },
];



function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name ={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;