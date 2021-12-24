import './SearchBar.css'
import { React, useState } from 'react'

const SearchBar = (props) => {
  const [location, setLocation] = useState(props.location)

  const handleClick = (event) => {
    event.preventDefault()
    if (location && location.length) {
      props.onHandle(location)
    }
    setLocation('')
  }

  return (
    <>
      <form className="form-input">
        <input
          type="text"
          className="input-text"
          placeholder="Search for location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          type="submit"
          className="search-btn"
          onClick={(event) => {
            handleClick(event)
          }}
        >
          Search
        </button>
      </form>
    </>
  )
}

export default SearchBar