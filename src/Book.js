import React from 'react'

const Book = ({ id, thumb, shelf, title, authors = [] }) => {
    return (
        <li key={id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${thumb})`
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                {authors.map(author => (
                    <div className="book-authors" key={author}>{author}</div>
                ))}
            </div>
        </li>
    )
}

export default Book