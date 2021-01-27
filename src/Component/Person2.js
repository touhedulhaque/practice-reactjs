import React, { Component } from 'react';

class Person2 extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        // let obj = new Component();
        // console.log(obj)
        // console.log(this.props)
        return (
            <div>
                <h1>I am class component</h1>
                <h2>{this.props.name}</h2>
                <h3>{this.props.age}</h3>
            </div>
        );
    }
}

export default Person2;