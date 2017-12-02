import React from 'react'

const Bookshelf = ({ title, books = [], addBook,  updateBook, shelf }) => {
    const book = books.filter(_ => _.shelf === shelf)
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {book.map(_ => (
                        <li key={_.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${_.imageLinks.thumbnail})`
                                        }}
                                    ></div>
                                    <div className="book-shelf-changer">
                                        <select defaultValue={_.shelf}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{_.title}</div>
                                {_.authors.map(author => (
                                    <div className="book-authors" key={author}>{author}</div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf