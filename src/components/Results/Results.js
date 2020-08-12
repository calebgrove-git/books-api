import React from 'react';
import ResultItem from './ResultItem';
Results.defaultProps = { items: [] };
export default function Results(props) {
  const allResults = props.items.map((item, i) => {
    return (
      <>
        <ResultItem item={item} />
        <hr></hr>
      </>
    );
  });
  return <div>{allResults}</div>;
}
