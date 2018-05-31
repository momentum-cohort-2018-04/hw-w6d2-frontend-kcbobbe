import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import books from './books.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      booki : 0,
      readMore: true
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
    this.setState({
      readMore : !this.state.readMore
    })
      console.log(this.state.readMore)
     

    // console.log('more')
  }
  
  render() {
    return (
      <div className="App">
       <h1>{books[this.state.booki].title}</h1>
       <p>{books[this.state.booki].author}</p>
       <p>{books[this.state.booki].shortDescription}</p>
       <img src = {books[this.state.booki].coverImageUrl}/>
       {/* <button onClick={this.booksOnPage.bind(this)}>Click me</button> */}
       <button onClick={this.clickForMore.bind(this)}>CLICK</button>
       <CreateBook more = {this.state.readMore} />
       
      </div>
    );
  }
}

// class Books extends Component{
//   bookList = books
// }

// console.log(books[0])

// class CreateBook extends Component {
//   render() {
//     if (this.props.more == true){
//       return (
//         <div>
//           <p>hi there</p>
//         </div>
//       )

//   } else{
//     return (null)
//   }
// }
// }



class Book extends Component {
  constructor () {
    super()
    this.state = {
      booki : 0,
      readMore: true
    }
  }

  
  render() {
    return (
      <div>
       <h1>{books[this.state.booki].title}</h1>
       <p>{books[this.state.booki].author}</p>
       <p>{books[this.state.booki].shortDescription}</p>
       <img src = {books[this.state.booki].coverImageUrl}/>
       {/* <button onClick={this.booksOnPage.bind(this)}>Click me</button> */}
       <button onClick={this.clickForMore.bind(this)}>CLICK</button>
       <CreateBook more = {this.state.readMore} />
       
      </div>
    );
  }
}

class CreateBook extends Component {
  
  render() {
    const moreContent = this.props.more
    console.log(moreContent + 'here')
  return (
    <div>
      {moreContent ?(
        <div>
          <p>{books[0].detailedDescription}</p>
          <p>{books[0].author}</p>
        </div>
      ) : (
        <h1>bye</h1>
      )}
    </div>
    
)
  }
}
console.log(books)
export default App;

