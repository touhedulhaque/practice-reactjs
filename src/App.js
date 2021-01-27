import React, { Component } from 'react';
import './App.css';
import Book from './Component/Book';
import Person from './Component/Person';
import Person2 from './Component/Person2';

//functional component
// function App() {
//   return (
//     <div className="App">
//       <h1>Book List</h1>
//       <Person name="RAZ" age="30" >I am from Bangladesh</Person>

//       <Person2 name="Rifat" age="28" />
//       <Book bookName="1984" writer="Jeorge"></Book>
//       <Book bookName="Romeo and Juliet" writer="Shakespear"></Book>
//       <Book bookName="World war ii" writer="paulo"></Book>
//     </div>
//   );
// }

//class component
//statuses//16.8 after no need to use constructor

class App extends Component {
  state = {
    books: [
      { bookName: "1984-2000", writer: "Jeorge" },
      { bookName: "Romeo and Juliet", writer: "Shakespear" },
      { bookName: "World war ii", writer: "paulo" }
    ],
    other: "i am others"
  };

  changeBookState = (newBookName) => {
    // console.log("gutai")
    // normally this.state.books[0].bookName="1974"
    this.setState({
      books: [
        { bookName: newBookName, writer: "Jeorge" },
        { bookName: "love and romance", writer: "Shakespear" },
        { bookName: "World war Z", writer: "paulo" }
      ]
    });
  }

  changeWithInputState = (e) => {
    this.setState({
      books: [
        { bookName: e.target.value, writer: "Jeorge" },
        { bookName: "love and romance", writer: "Shakespear" },
        { bookName: "World war Z", writer: "paulo" }
      ]
    });
  }
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Book List</h1>
        <br></br>
        <button onClick={() => this.changeBookState("Nineteen eighty four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState}></input>

        <Person name="RAZ" age="30" >I am from Bangladesh</Person>
        <Person2 name="Rifat" age="28" />
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState} ></Book>
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} ></Book>
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Nineteen eighty four 1984-2000")} ></Book>

      </div>
    )
  }
}

export default App;
