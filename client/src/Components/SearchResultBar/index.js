import React, { useState, useEffect } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import { toastr } from "react-redux-toastr";
const socket = socketIOClient(
  `https://project-chat-application.herokuapp.com/`
);

const SearchResultBar = ({ book: { volumeInfo }, keyUni }) => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    authors: "",
  });

  useEffect(() => {
    const title =
      volumeInfo.hasOwnProperty("title") && volumeInfo.title
        ? volumeInfo.title
        : "No Title Provided";
    const authors =
      volumeInfo.hasOwnProperty("authors") && volumeInfo.authors
        ? volumeInfo.authors
        : "No Author Provided";
    const image =
      volumeInfo.hasOwnProperty("imageLinks") && volumeInfo.imageLinks.thumbnail
        ? volumeInfo.imageLinks.thumbnail
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png";
    const description = volumeInfo.description
      ? volumeInfo.description
      : "No Description Provided";
    const link = volumeInfo.infoLink;
    setBookInfo({ ...bookInfo, title, authors, image, description, link });
    // sendSocket();
  }, [volumeInfo]);

  const handleClickSave = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/books", bookInfo);

    e.target.style.display = "none";
    if (res) {
      // console.log(store)
      socket.on("bookSaved", (data) => {
        toastr.success("Book Saved", `${data} has been added to the Database`);
      });
    }
  };

  // console.log(bookInfo)
  return (
    <>
      <div className="search-result-bar" key={keyUni}>
        <span className="search-title">{bookInfo.title}</span>
        <br />
        <span className="search-author">
          {bookInfo.authors instanceof Array
            ? "Written By " + bookInfo.authors.join(", ")
            : "Written By " + bookInfo.authors}
        </span>
        <img className="search-img" src={bookInfo.image} alt={bookInfo.title} />
        <span className="search-desc">{bookInfo.description}</span>
        <div className="search-buttons">
          <a href={bookInfo.link} target="_blank" rel="noreferrer">
            View
          </a>
          <a href="!#" onClick={handleClickSave}>
            Save
          </a>
        </div>
      </div>
    </>
  );
};

export default SearchResultBar;
