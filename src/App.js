import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Bookshelf from './Bookshelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(_ => _.id !== book.id).concat([ book ])
      }))
    })
  }

  render() {
    const { books } = this.state
    const bookshelf = [
      { title: "Currently Reads", shelf: 'currentlyReading', books },
      { title: "Want to read", shelf: 'wantToRead', books },
      { title: "Read", shelf: 'read', books }
    ]

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {bookshelf.map(_ => (
                  <Bookshelf
                    key={_.shelf}
                    title={_.title}
                    books={_.books}
                    shelf={_.shelf}
                    updateShelf={this.updateShelf}
                  />
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <Search
            updateShelf={this.updateShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
