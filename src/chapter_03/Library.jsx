import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 구연준" numOfPage={300} />
            <Book name="처음 만난 남시헌" numOfPage={300} />
            <Book name="처음 만난 안효섭" numOfPage={400} />
        </div>
    )
}

export default Library;