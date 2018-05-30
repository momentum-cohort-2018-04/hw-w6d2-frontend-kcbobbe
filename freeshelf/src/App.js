import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import books from './books.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      booki : 0,
      more: false
    }
  }

  booksOnPage() {
    if (this.state.booki < books.length - 1){
      this.setState(prevState => ({
        booki : prevState.booki + 1
    }))}
    console.log(this.state.booki)
  }

  clickForMore() {
    if (this.state.more == false){
      console.log('false!')
      return (
        <div className="more">
        <p>MORE</p>
        </div>
    )
  }
    console.log('more')
  }
  
  render() {
    return (
      <div className="App">
       <h1>{books[this.state.booki].title}</h1>
       <p>{books[this.state.booki].author}</p>
       <p>{books[this.state.booki].shortDescription}</p>
       <img src = {books[this.state.booki].coverImageUrl}/>
       {/* <button onClick={this.booksOnPage.bind(this)}>Click me</button> */}
       <button onClick={this.clickForMore.bind(this)}>click for more</button>
      </div>
    );
  }
}

// class Books extends Component{
//   bookList = books
// }

// console.log(books[0])
console.log(books)
export default App;
