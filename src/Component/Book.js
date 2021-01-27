import React from 'react';

const Book = props => {
    return (
        <div>
            <h3 onClick={props.change}>Book: {props.bookName}</h3>
            <h4>Writer Name: {props.writer}</h4>
            <input type="text" onChange={props.inputName} name="" value={props.bookName} />
        </div>
    );
};

export default Book;