import React, { Component } from 'react'
import Book from './Book'

const Bookshelf = ({ title, books = [], addBook,  updateBook, shelf }) => {
    const book = books.filter(_ => _.shelf === shelf)
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {book.map(_ => (
                        <Book
                          key={_.id}
                          id={_.id}
                          thumb={ _.imageLinks.thumbnail}
                          shelf={_.shelf}
                          title={_.title}
                          authors={_.author} />
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf