import React from 'react';

const Book = props => {

    return (
        <div style={{
            border: "1px solid orchid",
            margin: "20px",
            padding: "20px",
            background: "azure"
        }}>
            <button onClick={props.delete} type="" style={{ color: "red" }}>Delete</button>
            <h3>Book: {props.bookName}</h3>
            <h4>Writer Name: {props.writer}</h4>
            <input type="text" onChange={props.inputName} name="" value={props.bookName} />
            <br />
            <br />


        </div>
    );
};

export default Book;