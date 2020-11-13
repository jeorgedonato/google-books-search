import React from 'react'
import './style.css';
import SavedResultBar from '../SavedResultBar';

const SavedResults = props => {
  // console.log(props)
  return (
    <>
      <div className="saved-results">
        <h5>Books Saved</h5>
          {props.books.length > 0 ? props.books.map((b,i) => <SavedResultBar key={i} keyUni={i}  book={b} />) : <div className="no-result">No Results Found!</div>}
      </div>
    </>
  );
};

export default SavedResults;