import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        updateShelf: PropTypes.func.isRequired
    }
    render() {
        const {title, books, shelf, updateShelf} = this.props
        const book = books.filter(_ => _.shelf === shelf)

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {book.map(b => (
                            <Book
                                key={b.id}
                                bookInfo={b}
                                updateShelf={updateShelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf