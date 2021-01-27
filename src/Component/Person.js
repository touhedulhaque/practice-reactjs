import React from 'react';

const Person = (props) => {

    return (
        <div>
            <h1>Random Number: {Math.random()}</h1>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h4>{props.children}</h4>
        </div>
    );
};

export default Person;