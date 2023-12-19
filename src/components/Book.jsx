import React from "react";

function Book({ title, authors, thumbnail, info }) {
  return (
    <div className="book">
      <img src={thumbnail} alt={title} />
      <a href={info} target="_blank" rel="noopener noreferrer">
        Details
      </a>
      <p className="title">{title}</p>
      <p className="authors">{authors.join(", ")}</p>
    </div>
  );
}

export default Book;
