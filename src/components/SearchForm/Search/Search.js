import React, { useState, useEffect } from 'react';

export default function Search(props) {
  const [value, setValue] = useState('');
  useEffect(() => {
    props.search(value);
  }, [value]);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitted();
    setValue('');
  };
  return (
    <>
      <label htmlFor='search'>Search: </label>
      <input
        type='text'
        id='search'
        name='search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <input type='submit' value='Search' onClick={(e) => handleSubmit(e)} />
    </>
  );
}
