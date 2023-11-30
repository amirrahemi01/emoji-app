import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header-container'>
      <div className='header-content'>
        <Link to="/">
          <h2 className='title gradient-text'>Emoji finder</h2>
        </Link>
      </div>
    </header>
  )
}
