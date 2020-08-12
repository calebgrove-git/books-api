import React from 'react';

export default function ResultItem(props) {
  const author = () => {
    if (props.item.volumeInfo.authors) {
      return 'Author: ' + props.item.volumeInfo.authors;
    }
  };

  return (
    <div>
      <img src={props.item.volumeInfo.imageLinks.thumbnail} alt='book-cover' />
      <h2>{props.item.volumeInfo.title}</h2>
      <p>{author()}</p>
      <p>{props.item.volumeInfo.description}</p>
    </div>
  );
}
