import React from 'react'
import {DebounceInput} from 'react-debounce-input';

const SearchField = ({fetchMovies}) => {
  return (
    <div>
        <DebounceInput
          placeholder='Search movies by title'
          debounceTimeout={750}
          onChange={e => fetchMovies({'title': e.target.value})} />
      </div>
  )
}

export default SearchField
