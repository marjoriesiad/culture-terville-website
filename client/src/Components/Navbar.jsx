// Affiche un logo

// Si connecté -> bouton déconnexion, panier, modifier profil
// Si non connecté -> bouton connexion, inscription, panier

import React from 'react'
import { Link } from 'react-router-dom'
import CartSvg from '../assets/CartSvg'

const Navbar = () => {
  return (
    <div className="bg-yellow-300 flex justify-between items-center text-md">
        <div className='text-2xl'>
            <Link to="/">Culture <span className='text-main-red'>Terville</span></Link>
        </div>
        <div className='flex gap-4'>
            <Link to="/login">Connexion</Link> {/* Changer par déconnexion si connecté */}
            <Link to="/register">Inscription</Link> {/* Ne pas affiché si connecté */}
            <Link to="/cart"><CartSvg /></Link>
            
            {/* Si connecté:  <Link to="/profile">Modifier profil</Link> */}
        </div>
    </div>
  )
}

export default Navbar