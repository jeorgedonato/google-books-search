import React from 'react'
import './style.css';
import SearchResultBar from '../SearchResultBar';

const SearchResults = props => {
  return (
    <>
      <div className="search-results">
        <h5>Results</h5>
          {props.books.length > 0 ? props.books.map(b => <SearchResultBar book={b} />) : <div className="no-result"></div>}
      </div>
    </>
  );
};

export default SearchResults;