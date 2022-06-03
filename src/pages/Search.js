import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import {searchAlbumsAPI} from '../services/fetchAPI';

import {Container} from '../styles/Search'

function Search() {
  const [search, setSearch] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [collection, setCollection] = useState([]);
  const MIN_LENGTH = 2;

  useEffect(() => {
    const isDisabled = search.length >= MIN_LENGTH
    setDisabled(!isDisabled);
  }, [search])

  const handleSubmit = async(event) => {
    event.preventDefault();
    const album = await searchAlbumsAPI(search)
    setCollection(album);
    setSearch('');
  }

  return (
    <Container>
      <Header />
      <div>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      <AlbumCard collection={collection} />
    </Container>
  )
}

export default Search;
