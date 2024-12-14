import React from 'react'
import { Link } from 'react-router-dom'

const CategoryNav = () => {
  return (
    <div className='bg-white rounded-3xl p-4 shadow-lg flex items-center justify-center mt-5'>
        <div className='flex justify-around flex-1'>
            <Link to='/pain' className='bg-red-100 rounded-full px-4 py-2'>Pain</Link>
            <Link to='/viennoiseries' className='hover:bg-red-100 rounded-full px-4 py-2'>Viennoiseries</Link>
            <Link to='/patisseries' className='hover:bg-red-100 rounded-full px-4 py-2'>Pâtisseries</Link>
            <Link to='/traiteur' className='hover:bg-red-100 rounded-full px-4 py-2'>Traiteur</Link>
        </div>
    </div>
  )
}

export default CategoryNav