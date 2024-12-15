import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-gray-100 rounded-full p-2 flex items-center mt-1 shadow-md'>
         <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="20"
        fill="none"
        stroke="black"
        className='pl-2'
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
    <input type="text" placeholder='Rechercher un produit' className='ml-2 focus:outline-none' />
    </div>
  )
}

export default SearchBar