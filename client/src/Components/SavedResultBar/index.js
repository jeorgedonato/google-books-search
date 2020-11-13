import React from 'react';
import axios from 'axios';

const SavedResultBar = ({book,keyUni}) => {
  // console.log(book)
  const handleDelete = async e => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const res = await axios.delete(`/api/books/${id}`);
    console.log(res)
  };

  return (
    <>
    <div className="search-result-bar" key={keyUni}>
        <span className="search-title">{book.title}</span><br />
        <span className="search-author">{book.authors instanceof Array ? "Written By " + book.authors.join(", ") : "Written By " + book.authors}</span>
        <img
          className="search-img"
          src={book.image}
          alt={book.title}
        />
        <span className="search-desc">
          {book.description}
        </span>
        <div className="search-buttons">
          <a href={book.link} target="_blank" rel="noreferrer">View</a>
          <a href='!#' onClick={handleDelete} data-id={book._id} >Delete</a>
        </div>
      </div>
    </>
  )
};

export default SavedResultBar;