import React from 'react'
import './style.css';
import SearchResultBar from '../SearchResultBar';

const SearchResults = props => {
  return (
    <>
      <div className="search-results">
        <h5>Results</h5>
          {props.books.length > 0 ? props.books.map((b,i) => <SearchResultBar key={i} keyUni={i}  book={b} />) : <div className="no-result">No Results Found!</div>}
      </div>
    </>
  );
};

export default SearchResults;