import './styles.css'
import React from 'react'


 function SearchBar({ searchValue, handleChange }) {
  return (
    <div className='input-container'>

    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder='Pesquisar Repositório'
      />
      </div>
  )
}
export default SearchBar;