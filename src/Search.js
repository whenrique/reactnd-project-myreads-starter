import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

import Book from './Book'

class Search extends Component {
    static propTypes = {
        updateShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        books: []
    }

    searchBooks = (query) => {
        this.setState({ query: query.trim() })
        BooksAPI.search(query).then(books => {
            if(books.error) {
                books = []
            }
            books.map(_ => _.shelf = 'none')
            this.setState({ books })
        })
    }

    render() {
        const { updateShelf } = this.props
        const books = this.state.books

        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            onChange={(e) => this.searchBooks(e.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.sort(sortBy('title'))
                        .map(_ => (
                            <Book
                                key={_.id}
                                bookInfo={_}
                                updateShelf={updateShelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search