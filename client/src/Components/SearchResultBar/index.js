import React from 'react'

const SearchResultBar = ({book : {volumeInfo}}) => {
  return (
    <>
      <div className="search-result-bar">
            <span className="search-title">{volumeInfo.title}</span><br/>
            <span className="search-author">Written By {volumeInfo.authors instanceof Array ? volumeInfo.authors.join(", ") : volumeInfo.authors}</span>
            <img 
              className="search-img"
              src={volumeInfo.imageLinks.hasOwnProperty("thumbnail") ? volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"} 
              alt={volumeInfo.title}
            />
            <span className="search-desc">
              {volumeInfo.description ? volumeInfo.description : "No Description Provided"}
            </span>
            <div className="search-buttons">
              <a href={volumeInfo.infoLink} target="_blank" rel="noreferrer">View</a>
              <a href='http://books.google.com/books?id=_zSzAwAAQBAJ&dq=the+hunger+games&hl=&source=gbs_api"'>Save</a>
            </div>
          </div>
    </>
  );
};

export default SearchResultBar;