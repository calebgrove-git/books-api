import React from 'react';

export default function Filters(props) {
  return (
    <>
      <label htmlFor='print-type'>Print Type:</label>
      <select
        id='print-type'
        name='print-type'
        onChange={(selected) => props.print(selected.target.value)}
      >
        <option value=''>All</option>
        <option value='&printType=books'>Books</option>
        <option value='&printType=magazines'>Magazines</option>
      </select>
      <label htmlFor='&printType=book-type'>Book Type:</label>
      <select
        id='book-type'
        name='book-type'
        onChange={(selected) => props.book(selected.target.value)}
      >
        <option value=''>No Filter</option>
        <option value='&filter=full'>Full Books</option>
        <option value='&filter=partial'>Partial Books</option>
        <option value='&filter=ebooks'>All eBooks</option>
        <option value='&filter=free-ebooks'>Free eBooks</option>
        <option value='&filter=paid-ebooks'>Paid eBooks</option>
      </select>
    </>
  );
}
