import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ bookInfo, updateShelf }) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'http://bit.ly/2BFHV2l'})`,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={bookInfo.shelf} 
                        onChange={(e) => updateShelf(bookInfo, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookInfo.title}</div>
                {bookInfo.authors ? bookInfo.authors.map(author => (
                    <div className="book-authors" key={author}>{author}</div>
                )) : ''}
            </div>
        </li>
    )
}

Book.prototype = {
    bookInfo: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default Book