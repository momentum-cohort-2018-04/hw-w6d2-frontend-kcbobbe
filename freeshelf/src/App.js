import React, { Component } from 'react';
import './App.css';
import books from './books.json'

class App extends Component {

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

class Book extends Component {
  constructor () {
    super()
    this.state = {
      readMore: false
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
      <div class = 'book-description'>
        <div class="titleAuthorDesc">
          <h1>{this.props.bookData.title}</h1>
          <p><strong>{this.props.bookData.author}</strong></p>
          <p>{this.props.bookData.shortDescription}</p>
        </div>
       <img src = {this.props.bookData.coverImageUrl} alt = ''/>
       {/* <button onClick={this.booksOnPage.bind(this)}>Click me</button> */}
       <br/>
       <button onClick={this.clickForMore.bind(this)}>Read More!</button>
       <CreateBook more = {this.state.readMore} bookData = {this.props.bookData} />
       
      </div>
    );
  }
}

class CreateBook extends Component {
  
  render() {
    const moreContent = this.props.more
  return (
    <div>
      {moreContent ?(
        <div>
          <p>{this.props.bookData.detailedDescription}</p>
          <p>{this.props.bookData.publicationDate}</p>
          <p>{this.props.bookData.publisher}</p>
          <p>{this.props.bookData.url}</p>

        </div>
      ) : (
        ''
      )}
    </div>
    
)
  }
}
console.log(books[0])
export default App;

