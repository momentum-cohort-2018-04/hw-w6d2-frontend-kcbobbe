import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import books from './books.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      booki : 0,
    }
  }

  booksOnPage() {
    if (this.state.booki < books.length - 1){
      this.setState(prevState => ({
        booki : prevState.booki + 1
    }))}
    console.log(this.state.booki)
  }

 
  
  render() {
    return (
      <div className="App">
      {books.map(function(book){
       return <Book bookData={book} />
      })}
      
       
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
      readMore: true
    }

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
      <div>
       <h1>{this.props.bookData.title}</h1>
       <p>{this.props.bookData.author}</p>
       <p>{this.props.bookData.shortDescription}</p>
       <img src = {this.props.bookData.coverImageUrl}/>
       {/* <button onClick={this.booksOnPage.bind(this)}>Click me</button> */}
       <br/>
       <button onClick={this.clickForMore.bind(this)}>CLICK</button>
       <CreateBook more = {this.state.readMore} />
       
      </div>
    );
  }
}

class CreateBook extends Component {
  
  render() {
    const moreContent = this.props.more
    console.log(moreContent)
  return (
    <div>
      {moreContent ?(
        <div>
          <p>{books[0].detailedDescription}</p>
          <p>{books[0].author}</p>
        </div>
      ) : (
        ''
      )}
    </div>
    
)
  }
}
console.log(books)
export default App;

