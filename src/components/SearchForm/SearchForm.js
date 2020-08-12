import React from 'react';
import Search from './Search/Search';
import Filters from './Filters/Filters';

export default function SearchForm(props) {
  return (
    <form>
      <Search search={props.search} submitted={props.submitted} />
      <br></br>
      <Filters print={props.print} book={props.book} />
    </form>
  );
}
