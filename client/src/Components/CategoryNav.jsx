import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CategoryNav = () => {
    const [active, setActive] = useState('pain')
    const handleClick = (e) => {
        setActive(e.target.id)
        e.target.classList.add('bg-red-100')
    }
  return (
    <div className='bg-white rounded-3xl p-4 shadow-lg flex items-center justify-center mt-5'>
        <div className='flex justify-around flex-1'>
            <Link to='/pain' className={`hover:bg-red-100 rounded-full px-4 py-2 ${active === 'pain' ? 'bg-red-100' : ''}`} id='pain' onClick={handleClick}>Pain</Link>
            <Link to='/viennoiseries' className={`hover:bg-red-100 rounded-full px-4 py-2 ${active === 'viennoiserie' ? 'bg-red-100' : ''}`} id='viennoiserie' onClick={handleClick}>Viennoiseries</Link>
            <Link to='/patisseries' className={`hover:bg-red-100 rounded-full px-4 py-2 ${active === 'patisserie' ? 'bg-red-100' : ''}`} id='patisserie' onClick={handleClick}>Pâtisseries</Link>
            <Link to='/traiteur' className={`hover:bg-red-100 rounded-full px-4 py-2 ${active === 'traiteur' ? 'bg-red-100' : ''}`} id='traiteur' onClick={handleClick}>Traiteur</Link>
        </div>
    </div>
  )
}

export default CategoryNav