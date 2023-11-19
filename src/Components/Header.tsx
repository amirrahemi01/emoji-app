import React from 'react'
import { Link } from 'react-router-dom';
import Starter from '../Page/Starter';

export default function Header() {
  return (
    <header className='header-container'>
      <div className='header-content'>

        <Link to="/">
          <h2 className='title gradient-text'>Emoji finder</h2>
        </Link>
        {/* <p className='paragraph'>Find emoji by keywords</p> */}
      </div>
    </header>
  )
}
