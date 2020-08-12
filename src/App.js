import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Results from './components/Results/Results';

function App() {
  const [printType, setPrintType] = useState('');
  const [bookType, setBookType] = useState('');
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState('');
  const hitSubmit = () => {
    setIsSearching(true);
  };
  const searching = (e) => {
    setSearch(e);
  };
  const print = (e) => {
    setPrintType(e);
  };
  const book = (e) => {
    setBookType(e);
  };
  const url = 'https://www.googleapis.com/books/v1/volumes?q=';
  if (isSearching === true) {
    setIsSearching(false);
    fetch(
      url +
        search +
        printType +
        bookType +
        '&key=AIzaSyDyff2stmMRj1wFeHNv-4NQRp2mzlwJ3Yk'
    )
      .then((response) => response.json())
      .then((responseJSON) => setResults(responseJSON));
  }
  console.log('rendered');
  return (
    <div className='App'>
      <Header />
      <SearchForm
        search={searching}
        print={print}
        book={book}
        submitted={hitSubmit}
      />
      <Results items={results.items} />
    </div>
  );
}

export default App;
