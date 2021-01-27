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
      { id: 1, bookName: "1984-2000", writer: "Jeorge" },
      { id: 2, bookName: "Romeo and Juliet", writer: "Shakespear" },
      { id: 3, bookName: "World war ii", writer: "paulo" }
    ],
    showBooks: true
  };
  changeWithInputState = (e, index) => {
    const book = {
      ...this.state.books[index]

    }
    book.bookName = e.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({
      books: books
    });
  }

  deleteBookState = (index) => {
    //const books = this.state.books.slice();
    // const books = this.state.books.map(item => item)
    const books = [...this.state.books]
    books.splice(index, 1)
    this.setState({
      books: books
    })
  };

  toggleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks })
  }
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {


    const booksState = this.state.books;

    let books = null;
    if (this.state.showBooks) {
      books = booksState.map((book, index) => {
        return (
          <Book
            bookName={book.bookName}
            writer={book.writer}
            delete={() => this.deleteBookState(index)}
            key={book.id}
            inputName={(e) => this.changeWithInputState(e, index)}
          ></Book>
        )
      })
    }


    // console.log(booksState)
    console.log(books)
    return (
      <div className="App">
        <h1>Book List</h1>
        <br></br>
        <button onClick={this.toggleBooks} style={{ background: "yellow" }} type="">Toogle Books</button>
        {/* <button onClick={() => this.changeBookState("Nineteen eighty four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState}></input> */}

        {/* 
        <Person name="RAZ" age="30" >I am from Bangladesh</Person>
        <Person2 name="Rifat" age="28" /> */}
        {/* <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState} ></Book>
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} ></Book>
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Nineteen eighty four 1984-2000")} ></Book> */}
        { books}

      </div>
    )
  }
}

export default App;
