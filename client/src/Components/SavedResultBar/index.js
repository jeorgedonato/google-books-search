import React, { useState, useContext } from 'react';
import axios from 'axios';
import SavedContext from '../SavedContext';

const SavedResultBar = ({ book, keyUni }) => {
  const handler = useContext(SavedContext);

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
          <button onClick={() => { handler.deleteBtn(book._id) }} data-id={book._id} >Delete</button>
        </div>
      </div>
    </>
  )
};

export default SavedResultBar;